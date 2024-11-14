var ChargeBee = {};

var Q = require("q");
var os = require("os");
var Buffer = require("safer-buffer").Buffer;
const IDEMPOTENCY_HEADER = "chargebee-idempotency-key";
const IDEMPOTENCY_REPLAYED_HEADER = 'chargebee-idempotency-replayed';

ChargeBee._env = {
    protocol: 'https',
    hostSuffix: '.chargebee.com',
    apiPath: '/api/v2',
    timeout: 80000,
    clientVersion: 'v2.44.0',
    port: 443,
    timemachineWaitInMillis: 3000,
    exportWaitInMillis: 3000
};

ChargeBee.configure = function(conf) {
    ChargeBee._util.extend(true, ChargeBee._env, conf);
};

ChargeBee.updateRequestTimeoutInMillis = function(timeout) {
    ChargeBee._env.timeout = timeout;
};

ChargeBee._endpoints = require('./resources/api_endpoints.js');

RequestWrapper.prototype.setIdempotencyKey = function(idempotencyKey) {
    this.headers({[IDEMPOTENCY_HEADER]: idempotencyKey});
    return this;
};



ChargeBee._waitToProcessComplete = function(retrieveHandling){
    if(typeof retrieveHandling == 'undefined' || !ChargeBee._util.isFunction(retrieveHandling)){
        throw new Error('The handling parameter should be a method.');
    }
    function DummyRequestWrapper() {
        this.env = {};
        ChargeBee._util.extend(true, this.env, ChargeBee._env);
    }
    DummyRequestWrapper.prototype.request = function(callBack, envOptions) {
        var jsonConstructor = {}.constructor;
        if (typeof envOptions !== 'undefined') {
            ChargeBee._util.extend(true, this.env, envOptions);
        } else if (typeof callBack !== 'undefined' && callBack.constructor === jsonConstructor && !ChargeBee._util.isFunction(callBack)) {
            ChargeBee._util.extend(true, this.env, callBack);
            callBack = undefined;
        }
        if (typeof callBack !== 'undefined' && !ChargeBee._util.isFunction(callBack)) {
            throw new Error('The callback parameter passed is incorrect.');
        }
        var deferred = ChargeBee._util.createDeferred(callBack);
        var _self = this;
        function retrieve() {
            retrieveHandling(deferred, _self);
        };
        retrieve();
        return deferred.promise;
    };
    return new DummyRequestWrapper();
}


ChargeBee._timeMachineWait = function() {
    var count = 0;
    var retrieve = function (deferred, _self) {
        module.exports.time_machine.retrieve("delorean").request(
            function(error, result) {
                if (error) {
                    deferred.reject(error);
                } else {
                    var time_machine = result.time_machine;
                    if (time_machine.time_travel_status === 'succeeded') {
                        deferred.resolve(result);
                    } else if (time_machine.time_travel_status === 'in_progress') {
                        if (count++ > 30) {
                            throw new Error("The time travel is taking too much time");
                        }
                        setTimeout(function(){
                            retrieve(deferred, _self);
                        }, _self.env.timemachineWaitInMillis);
                    } else {
                        deferred.reject(result);
                    }
                }
            });
    };
    return ChargeBee._waitToProcessComplete(retrieve);
};

ChargeBee._waitForExport = function(exportId){
    var count = 0;
    var retrieve = function(deferred, _self) {
        module.exports.export.retrieve(exportId).request(
            function(error, result) {
                if (error) {
                    deferred.reject(error);
                } else {
                    var exportObj = result.export;
                    if (exportObj.status === 'completed') {
                        deferred.resolve(result);
                    } else if (exportObj.status === 'in_process') {
                        if (count++ > 30) {
                            throw new Error("Export is taking too long");
                        }
                        setTimeout(function(){
                            retrieve(deferred, _self);
                        }, _self.env.exportWaitInMillis);
                    } else {
                        deferred.reject(result);
                    }
                }
            });
    };
    return ChargeBee._waitToProcessComplete(retrieve);
}


function createApiFunc(apiCall) {
    return function() {
        return new RequestWrapper(arguments, apiCall);
    };
}

function RequestWrapper(args, apiCall) {
    this.args = args;
    this.httpHeaders = {};
    this.apiCall = apiCall;
    if (this.apiCall.hasIdInUrl) {
        validateIdParam(this.args[0]);
    }
}

RequestWrapper.prototype.headers = function(headers) {
    Object.assign(this.httpHeaders,headers);
    return this;
};


RequestWrapper.prototype.request = function(callBack, envOptions) {
    var env = {};
    var jsonConstructor =  {}.constructor;
    ChargeBee._util.extend(true, env, ChargeBee._env);
    if (typeof envOptions !== 'undefined') {
        ChargeBee._util.extend(true, env, envOptions);
    } else if(typeof callBack !== 'undefined' && callBack.constructor === jsonConstructor && !ChargeBee._util.isFunction(callBack)){
        ChargeBee._util.extend(true, env, callBack);
        callBack = undefined;
    }
    var deferred = ChargeBee._util.createDeferred(callBack);
    var urlIdParam = this.apiCall.hasIdInUrl ? this.args[0] : null;
    var params = this.apiCall.hasIdInUrl ? this.args[1] : this.args[0];
    if (typeof callBack !== 'undefined' && !ChargeBee._util.isFunction(callBack)) {
        throw new Error('The callback parameter passed is incorrect.');
    }
    function callBackWrapper(err, response) {
        if (err) {
            deferred.reject(err);
        } else {
            deferred.resolve(response);
        }
    };
    ChargeBee._core.makeApiRequest(env, callBackWrapper, this.apiCall.httpMethod, this.apiCall.urlPrefix, this.apiCall.urlSuffix, urlIdParam, params, this.httpHeaders, this.apiCall.isListReq);
    return deferred.promise;
};

function validateIdParam(idParam) {
    if (typeof idParam === 'undefined' || typeof idParam !== 'string' || idParam.trim().length < 1) {
        throw new Error('the required id parameter missing or wrong');
    }
    return idParam;
}


ChargeBee._core = (function() {
    var coreRef = {};
    var http = require('http');
    var https = require('https');

    coreRef.timeoutHandler = function(req, callBack) {
        return function() {
            req._isAborted = true;
            req.abort();
            throwError(callBack,'io_error', 504, 'timeout', 'request aborted due to timeout.');
        };

    };

    coreRef.responseHandler = function(req, callBack) {
        return function(res) {
            var response = '';
            res.setEncoding('utf8');
            res.on('data', function(chunk) {
                response += chunk;
            });
            res.on('end', function() {
                try {
                    response = JSON.parse(response);
                } catch (e) {
                    if (response.includes('503')) { 
                        return throwError(
                            callBack,
                            'internal_temporary_error', 
                            503, 
                            'internal_temporary_error', 
                            'Sorry, the server is currently unable to handle the request due to a temporary overload or scheduled maintenance. Please retry after sometime.',
                            e 
                          );
                      }
                      else if(response.includes('504')) {
                        return throwError(
                            callBack,
                            'gateway_timeout', 
                             504, 
                            'gateway_timeout', 
                            'The server did not receive a timely response from an upstream server, request aborted. If this problem persists, contact us at support@chargebee.com.',
                            e 
                          );
                      }
                      else {
                        return throwError(
                            callBack,
                            'internal_error', 
                            500, 
                            'internal_error', 
                            'Sorry, something went wrong when trying to process the request. If this problem persists, contact us at support@chargebee.com.',
                            e 
                          );
                      }                
                }
                if (res.statusCode < 200 || res.statusCode > 299) {
                    response.http_status_code = res.statusCode;
                    callBack(response, null);
                } else {
                    response.isIdempotencyReplayed = false;
                    if (ChargeBee._util.isNotUndefinedNEmpty(res.headers[IDEMPOTENCY_REPLAYED_HEADER])) {
                        response.isIdempotencyReplayed = res.headers[IDEMPOTENCY_REPLAYED_HEADER];
                    }
                    response.headers = res.headers;
                    
                    callBack(null, response);
                }
            });
        };
    };

    coreRef.errorHandler = function(req, callBack) {
        return function(error) {
            if (req._isAborted)
                return;
            throwError(callBack,'io_error', 503, 'connection_error', 'connection error while making request.', error);
        };
    };

    coreRef.makeApiRequest = function(env, callBack, httpMethod, urlPrefix, urlSuffix, urlIdParam, params, headers, isListReq) {
        var path = getApiURL(env, urlPrefix, urlSuffix, urlIdParam);
        if (typeof params === 'undefined' || params === null) {
            params = {};
        }
        if (httpMethod === 'GET') {
            var queryParam = isListReq ? encodeListParams(params) : encodeParams(params);
            path += "?" + queryParam;
            params = {};
        }
        var data = encodeParams(params);
        var protocol = (env.protocol === 'http' ? http : https);

        ChargeBee._util.extend(true, headers, {
            'Authorization': 'Basic ' + Buffer.from(env.api_key+':').toString('base64'),
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
            "Content-Length": data.length,
            'User-Agent': "Chargebee-NodeJs-Client " + env.clientVersion,
            'Lang-Version': process.version,
            'OS-Version': os.platform() + " " + os.arch() + " " + os.release()
        });

        var req = protocol.request({
            "hostname": getHost(env),
            "path": path,
            "method": httpMethod,
            "port": env.port,
            "headers": headers
        });
        req.setTimeout(env.timeout, coreRef.timeoutHandler(req, callBack));
        req.on('response', coreRef.responseHandler(req, callBack));
        req.on('error', coreRef.errorHandler(req, callBack));
        req.write(data);
        req.end();
    };



    function getApiURL(env, urlPrefix, urlSuffix, urlIdParam) {
        if (typeof env.api_key === 'undefined' || typeof env.site === 'undefined') {
            throw new Error('Your site or api key is not configured.');
        }
        return   env.apiPath + urlPrefix + (urlIdParam !== null ? //
            '/' + encodeURIComponent(urlIdParam).replace(/%2F/g,'/') : '') + (urlSuffix !== null ? urlSuffix : '');
    }

    function getHost(env) {
        return env.site + env.hostSuffix;
    }

    var encodeListParams = function(paramObj) {
        var key, value;
        for (key in paramObj) {
            value = paramObj[key];
            if(typeof value !== 'undefined' && value !== null && ChargeBee._util.isArray(value)){
                paramObj[key] = JSON.stringify(value);
            }else{
                paramObj[key] = value;
            }
        }
        return encodeParams(paramObj);
    }

    var encodeParams = function(paramObj, serialized, scope, index) {
        var key, value;
        if (typeof serialized === 'undefined' || serialized === null) {
            serialized = [];
        }
        for (key in paramObj) {
            value = paramObj[key];
            if (scope) {
                key = "" + scope + "[" + key + "]";
            }
            if (typeof index !== 'undefined' && index !== null) {
                key = key + "[" + index + "]";
            }

            if (ChargeBee._util.isArray(value)) {
                for (var arrIdx = 0; arrIdx < value.length; arrIdx++) {
                    if (typeof value[arrIdx] === 'object' || ChargeBee._util.isArray(value[arrIdx])) {
                        encodeParams(value[arrIdx], serialized, key, arrIdx);
                    } else {
                        if (typeof value[arrIdx] !== 'undefined') {
                            serialized.push(encodeURIComponent(key + "[" + arrIdx + "]") + "=" + encodeURIComponent(ChargeBee._util.trim(value[arrIdx]) !== '' ? value[arrIdx] : ''));
                        }
                    }
                }
            } else if(["meta_data", "metadata"].indexOf(key) !== -1) {
                var attrVal="";
                if(value !== null) {
                    attrVal = encodeURIComponent(Object.prototype.toString.call(value) === "[object String]" ? ChargeBee._util.trim(value) : JSON.stringify(value));
                }
                serialized.push(encodeURIComponent(key) + "=" + attrVal);    
            } else if (typeof value === 'object' && !ChargeBee._util.isArray(value)) {
                encodeParams(value, serialized, key);
            } else {
                if (typeof value !== 'undefined') {
                    serialized.push(encodeURIComponent(key) + "=" + encodeURIComponent(ChargeBee._util.trim(value) !== '' ? value : ''));
                }
            }
        }

        return serialized.join('&').replace(/%20/g, '+');
    };
    var throwError = function(callBack,type,httpStatusCode, errorCode, message, detail) {
        var error = {
            'message': message,
            'type':type,
            'api_error_code':errorCode,
            'http_status_code':httpStatusCode,

            'http_code': httpStatusCode,
            'error_code': errorCode,
        };
        if (typeof detail !== "undefined") {
            error['detail'] = detail;
        }
        return callBack(error, null);
    };

    return coreRef;
}).call(this);

ChargeBee._util = (function() {
    var util = {};

    util.extend = function(deep, target, copy) {
        util.extendsFn.call(this, deep, target, copy);
    };

    util.extendsFn = function() {
        var options, name, src, copy, copyIsArray, clone,
            target = arguments[0] || {},
            i = 1,
            length = arguments.length,
            deep = false;
        if (typeof target === "boolean") {
            deep = target;
            target = arguments[1] || {};
            i = 2;
        }
        if (typeof target !== "object" && typeof target !== "function") {
            target = {};
        }
        if (length === i) {
            target = this;
            --i;
        }
        for (; i < length; i++) {
            if ((options = arguments[ i ]) !== null) {
                for (name in options) {
                    src = target[ name ];
                    copy = options[ name ];

                    if (target === copy) {
                        continue;
                    }
                    if (deep && copy && (typeof copy === 'object' || (copyIsArray = (util.isArray(copy))))) {
                        if (copyIsArray) {
                            copyIsArray = false;
                            clone = src && util.isArray(src) ? src : [];
                        } else {
                            clone = src && typeof src === 'object' ? src : {};
                        }
                        target[ name ] = util.extend.call(this, deep, clone, copy);
                    } else if (copy !== undefined) {
                        target[ name ] = copy;
                    }
                }
            }
        }
        return target;
    };

    util.indexOf = function(array, item) {
        if (![].indexOf()) {
            for (var i = 0; i < array.length; i++) {
                if (array[i] === item) {
                    return i;
                }
            }
            return -1;
        } else {
            return array.indexOf(item);
        }
    };

    util.trim = function(str) {
        return str !== '' ? str : str.replace(/^\s+|\s+$/g, '');
    };

    util.isEmptyObject = function(obj) {
        var name;
        for (name in obj) {
            return false;
        }
        return true;
    };

    util.isNotUndefinedNEmpty = function(obj) {
        if (typeof obj !== 'undefined' && !util.isEmptyObject(obj)) {
            return true;
        }
        return false;
    };

    util.isArray = Array.isArray || function(obj) {
        return  Object.prototype.toString.call(obj) === '[object Array]';
    };

    util.isFunction = function(obj) {
        return typeof obj === 'function';
    };

    util.createDeferred = function(callback) {
        var deferred = Q.defer();
        if (callback) {
            deferred.promise.then(function(res) {
                setTimeout(function() {
                    callback(null, res);
                }, 0);
            }, function(err) {
                setTimeout(function() {
                    callback(err, null);
                }, 0);
            });
        };
        return deferred;
    };
    return util;

}).call(this);

(function() {
    module.exports.configure = ChargeBee.configure;
    for (var res in ChargeBee._endpoints) {
        module.exports[res] = {};
        var apiCalls = ChargeBee._endpoints[res];
        for (var apiIdx = 0; apiIdx < apiCalls.length; apiIdx++) {
            var metaArr = apiCalls[apiIdx];
            var apiCall = {"methodName": metaArr[0],
                "httpMethod": metaArr[1],
                "urlPrefix": metaArr[2],
                "urlSuffix": metaArr[3],
                "hasIdInUrl": metaArr[4],
                "isListReq": metaArr[0]==="list"};
            module.exports[res][apiCall.methodName] = createApiFunc(apiCall);
        }
    }
    module.exports.time_machine.wait_for_time_travel_completion = ChargeBee._timeMachineWait;
    module.exports.export.wait_for_export_completion = ChargeBee._waitForExport;
    module.exports.updateRequestTimeoutInMillis = ChargeBee.updateRequestTimeoutInMillis;
})();
