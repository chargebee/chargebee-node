import { ChargebeeError } from '../chargebeeError.js';
export class HttpClient {
    async makeApiRequest(props) {
        throw new Error('makeApiRequest is not implemented');
    }
    static timeOutError() {
        const error = new ChargebeeError({
            message: 'io_error',
            type: 'timeout',
            api_error_code: 'request aborted due to timeout.',
            http_status_code: 504,
            http_code: 504,
            error_code: 'request aborted due to timeout.',
        }, null);
        return error;
    }
}
export class HttpClientResponse {
    constructor(statusCode, headers) {
        this._statusCode = statusCode;
        this._headers = headers;
    }
    getStatusCode() {
        return this._statusCode;
    }
    getHeaders() {
        return this._headers;
    }
    getRawResponse() {
        throw new Error('getRawResponse not implemented.');
    }
    toJson() {
        throw new Error('toJSON not implemented.');
    }
}
