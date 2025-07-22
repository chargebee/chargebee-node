export class ChargebeeError extends Error {
    constructor(rawError, headers) {
        super(rawError.message);
        this.message = rawError.message;
        this.type = rawError.type;
        this.api_error_code = rawError.api_error_code;
        this.http_status_code = rawError.http_status_code;
        this.http_code = rawError.http_code;
        this.error_code = rawError.error_code;
        this.detail = rawError === null || rawError === void 0 ? void 0 : rawError.detail;
        this.headers = headers;
    }
}
