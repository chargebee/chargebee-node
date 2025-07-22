import { extend, callbackifyPromise, getApiURL, encodeListParams, encodeParams, serialize, getHost, log, generateUUIDv4 as uuidv4, } from './util.js';
import { handleResponse } from './coreCommon.js';
import { Buffer } from 'node:buffer';
export class RequestWrapper {
    constructor(args, apiCall, envArg) {
        this.getRequest = () => {
            return this.request();
        };
        this.args = args;
        this.apiCall = apiCall;
        this.envArg = envArg;
        this.httpHeaders = {};
        if (this.apiCall.hasIdInUrl) {
            RequestWrapper._validateIdParam(this.args[0]);
        }
    }
    static _validateIdParam(idParam) {
        if (!idParam || typeof idParam !== 'string' || idParam.trim().length < 1) {
            throw new Error('the required id parameter missing or wrong');
        }
        return idParam;
    }
    static parseRetryAfter(retryAfter) {
        if (!retryAfter)
            return null;
        const seconds = parseInt(retryAfter, 10);
        if (!isNaN(seconds)) {
            return seconds * 1000;
        }
        return null;
    }
    async request() {
        let _env = {};
        extend(true, _env, this.envArg);
        const env = _env;
        const retryConfig = Object.assign({ enabled: false, maxRetries: 3, delayMs: 200, retryOn: [500, 502, 503, 504] }, env.retryConfig);
        const urlIdParam = this.apiCall.hasIdInUrl ? this.args[0] : null;
        let params = this.apiCall.hasIdInUrl
            ? this.args[1]
            : this.args[0];
        let headers = this.apiCall.hasIdInUrl ? this.args[2] : this.args[1];
        Object.assign(this.httpHeaders, headers);
        if (this.apiCall.httpMethod === 'POST' &&
            !this.httpHeaders['chargebee-idempotency-key'] &&
            this.apiCall.options &&
            this.apiCall.options.isIdempotent &&
            retryConfig.enabled) {
            this.httpHeaders['chargebee-idempotency-key'] = uuidv4();
        }
        const makeRequest = async (attempt = 0) => {
            let path = getApiURL(env, this.apiCall.urlPrefix, this.apiCall.urlSuffix, urlIdParam);
            if (typeof params === 'undefined' || params === null) {
                params = {};
            }
            if (this.apiCall.httpMethod === 'GET') {
                const queryParam = this.apiCall.isListReq
                    ? encodeListParams(serialize(params))
                    : encodeParams(serialize(params));
                path += '?' + queryParam;
                params = {};
            }
            const jsonKeys = this.apiCall.jsonKeys;
            const data = this.apiCall.isJsonRequest
                ? JSON.stringify(params)
                : encodeParams(params, undefined, undefined, undefined, jsonKeys);
            const requestHeaders = Object.assign({}, this.httpHeaders);
            if (data.length) {
                extend(true, requestHeaders, {
                    'Content-Length': data.length,
                });
            }
            const contentType = this.apiCall.isJsonRequest
                ? 'application/json;charset=UTF-8'
                : 'application/x-www-form-urlencoded; charset=utf-8';
            const userAgent = `Chargebee-NodeJs-Client ${env.clientVersion}${env.userAgentSuffix ? ';' + env.userAgentSuffix : ''}`;
            extend(true, requestHeaders, {
                Authorization: 'Basic ' + Buffer.from(env.apiKey + ':').toString('base64'),
                Accept: 'application/json',
                'Content-Type': contentType,
                'User-Agent': userAgent,
                'Lang-Version': typeof process === 'undefined' ? '' : process.version,
            });
            if (attempt > 0) {
                requestHeaders['X-CB-Retry-Attempt'] = attempt.toString();
            }
            const resp = await this.envArg.httpClient.makeApiRequest({
                host: getHost(env, this.apiCall.subDomain),
                port: env.port,
                path,
                method: this.apiCall.httpMethod,
                protocol: env.protocol,
                headers: requestHeaders,
                data,
                timeout: env.timeout,
            });
            return new Promise((resolve, reject) => {
                handleResponse((err, response) => {
                    if (err)
                        return reject(err);
                    return resolve(response);
                }, resp);
            });
        };
        const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
        const withRetry = async (retryCount, startTime) => {
            var _a, _b, _c, _d, _e, _f;
            try {
                return await makeRequest(retryCount);
            }
            catch (err) {
                const statusCode = (_d = (_c = (_a = err.statusCode) !== null && _a !== void 0 ? _a : (_b = err.response) === null || _b === void 0 ? void 0 : _b.statusCode) !== null && _c !== void 0 ? _c : err.http_code) !== null && _d !== void 0 ? _d : err.http_status_code;
                const isRateLimitError = statusCode === 429 && retryConfig.enabled;
                if (isRateLimitError) {
                    const headers = ((_e = err.response) === null || _e === void 0 ? void 0 : _e.headers) || err.headers || {};
                    const retryAfterHeader = (_f = headers['retry-after']) === null || _f === void 0 ? void 0 : _f.toLowerCase();
                    const parsedDelay = RequestWrapper.parseRetryAfter(retryAfterHeader);
                    if (!parsedDelay) {
                        log(env, {
                            level: 'ERROR',
                            message: `Rate limit error occurred, but no retry-after header found. Retrying in ${retryConfig.delayMs}ms.`,
                        });
                        throw err;
                    }
                    log(env, {
                        level: 'INFO',
                        message: `Rate limit error occurred. Retrying in ${parsedDelay}ms.`,
                    });
                    await delay(parsedDelay);
                }
                else {
                    const canRetry = retryConfig.enabled &&
                        retryConfig.retryOn.includes(statusCode) &&
                        retryCount < retryConfig.maxRetries;
                    if (!canRetry) {
                        log(env, {
                            level: 'ERROR',
                            message: `Request failed after ${retryCount} retries: ${err.message}`,
                        });
                        throw err;
                    }
                    let retryDelayMs = retryConfig.delayMs * Math.pow(2, retryCount) +
                        Math.random() * 100;
                    log(env, {
                        level: 'INFO',
                        message: `Retrying request [${retryCount + 1}/${retryConfig.maxRetries}] in ${retryDelayMs}ms due to status code ${statusCode}.`,
                    });
                    await delay(retryDelayMs);
                }
                return await withRetry(retryCount + 1, startTime);
            }
        };
        const promise = withRetry(0, Date.now());
        return callbackifyPromise(promise);
    }
}
