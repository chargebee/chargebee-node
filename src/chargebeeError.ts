import { ResponseHeaders } from './types.js';

export class ChargebeeError extends Error {
  message: string;
  type: string;
  api_error_code: string;
  http_status_code: Number;
  http_code: Number;
  error_code: string;
  detail: string;
  headers: ResponseHeaders | null;
  constructor(rawError: any, headers: ResponseHeaders | null) {
    super(rawError.message);
    this.message = rawError.message;
    this.type = rawError.type;
    this.api_error_code = rawError.api_error_code;
    this.http_status_code = rawError.http_status_code;
    this.http_code = rawError.http_code;
    this.error_code = rawError.error_code;
    this.detail = rawError?.detail;
    this.headers = headers;
  }
}
