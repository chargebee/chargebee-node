"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleResponse = void 0;
exports.throwError = throwError;
const chargebeeError_js_1 = require("./chargebeeError.js");
const util_js_1 = require("./util.js");
const IDEMPOTENCY_REPLAYED_HEADER = 'chargebee-idempotency-replayed';
function throwError(callBack, rawError, headers) {
    const error = new chargebeeError_js_1.ChargebeeError({
        message: rawError.message,
        type: rawError.type,
        api_error_code: rawError.errorCode,
        http_status_code: rawError.httpStatusCode,
        http_code: rawError.httpStatusCode,
        error_code: rawError.errorCode,
    }, headers);
    if (rawError['detail'] !== 'undefined') {
        error['detail'] = rawError['detail'];
    }
    return callBack(error, null);
}
const handleResponse = async (callback, response) => {
    try {
        const res = await response.toJson();
        const status = response.getStatusCode();
        const headers = response.getHeaders();
        if (status && (status < 200 || status > 299)) {
            res.http_status_code = status;
            res.headers = headers;
            return callback(res, null);
        }
        else {
            res.isIdempotencyReplayed = false;
            if ((0, util_js_1.isNotUndefinedNEmpty)(headers[IDEMPOTENCY_REPLAYED_HEADER])) {
                res.isIdempotencyReplayed = headers[IDEMPOTENCY_REPLAYED_HEADER];
            }
            res.headers = headers;
            res.httpStatusCode = status;
            return callback(null, res);
        }
    }
    catch (error) {
        const status = response.getStatusCode();
        const headers = response.getHeaders();
        switch (status) {
            case 503:
                return throwError(callback, {
                    type: 'internal_temporary_error',
                    httpStatusCode: 503,
                    errorCode: 'internal_temporary_error',
                    message: 'Sorry, the server is currently unable to handle the request due to a temporary overload or scheduled maintenance. Please retry after sometime.',
                    detail: error,
                }, headers);
            case 504:
                return throwError(callback, {
                    type: 'gateway_timeout',
                    httpStatusCode: 504,
                    errorCode: 'gateway_timeout',
                    message: 'The server did not receive a timely response from an upstream server, request aborted. If this problem persists, contact us at support@chargebee.com.',
                    detail: error,
                }, headers);
            default:
                return throwError(callback, {
                    type: 'internal_error',
                    httpStatusCode: 500,
                    errorCode: 'internal_error',
                    message: 'Sorry, something went wrong when trying to process the request. If this problem persists, contact us at support@chargebee.com.',
                    detail: error,
                }, headers);
        }
    }
};
exports.handleResponse = handleResponse;
