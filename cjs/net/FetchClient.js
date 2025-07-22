"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchHttpClientResponse = exports.FetchHttpClient = void 0;
const ClientInterface_js_1 = require("./ClientInterface.js");
class FetchHttpClient extends ClientInterface_js_1.HttpClient {
    async makeApiRequest(props) {
        const headers = this._createHeaders(props.headers);
        let url = `${props.protocol}://${props.host}:${props.port}${props.path}`;
        let fetchOptions = {
            method: props.method,
            headers: headers,
            body: props.data ? props.data : undefined,
        };
        try {
            const response = globalThis.AbortController
                ? await this.fetchWithAbortTimeout(url, fetchOptions, props.timeout)
                : await this.fetchWithTimeout(url, fetchOptions, props.timeout);
            return new FetchHttpClientResponse(response);
        }
        catch (err) {
            return Promise.reject(err);
        }
    }
    _createHeaders(httpHeaders) {
        const headers = new Headers();
        Object.entries(httpHeaders).forEach(([key, value]) => {
            headers.append(key, String(value));
        });
        return headers;
    }
    async fetchWithTimeout(url, fetchOptions, timeout) {
        let pendingTimeoutId;
        const timeoutPromise = new Promise((_, reject) => {
            pendingTimeoutId = setTimeout(() => {
                pendingTimeoutId = null;
                reject(ClientInterface_js_1.HttpClient.timeOutError());
            }, timeout);
        });
        const fetchPromise = fetch(url, fetchOptions);
        return Promise.race([fetchPromise, timeoutPromise]).finally(() => {
            if (pendingTimeoutId) {
                clearTimeout(pendingTimeoutId);
            }
        });
    }
    async fetchWithAbortTimeout(url, fetchOptions, timeout) {
        const abort = new AbortController();
        let timeoutId = setTimeout(() => {
            timeoutId = null;
            abort.abort(ClientInterface_js_1.HttpClient.timeOutError());
        }, timeout);
        try {
            return await fetch(url, Object.assign(Object.assign({}, fetchOptions), { signal: abort.signal }));
        }
        catch (err) {
            if (err.name === 'AbortError') {
                return Promise.reject(ClientInterface_js_1.HttpClient.timeOutError());
            }
            else {
                return Promise.reject(err);
            }
        }
        finally {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        }
    }
}
exports.FetchHttpClient = FetchHttpClient;
class FetchHttpClientResponse extends ClientInterface_js_1.HttpClientResponse {
    constructor(response) {
        super(response.status, FetchHttpClientResponse._transformHeadersToObject(response.headers));
        this._res = response;
    }
    getRawResponse() {
        return this._res;
    }
    toJson() {
        return this._res.json();
    }
    static _transformHeadersToObject(headers) {
        const headersObj = {};
        for (const entry of headers) {
            if (!Array.isArray(entry) || entry.length != 2) {
                throw new Error('Headers should be an iterable object.');
            }
            headersObj[entry[0]] = entry[1];
        }
        return headersObj;
    }
}
exports.FetchHttpClientResponse = FetchHttpClientResponse;
