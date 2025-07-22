import { HttpClient, HttpClientResponse, } from './ClientInterface.js';
import * as http from 'http';
import * as https from 'https';
export class NodeHttpClient extends HttpClient {
    async makeApiRequest(props) {
        const protocol = props.protocol === 'http' ? http : https;
        const requestPromise = new Promise((resolve, reject) => {
            const req = protocol.request({
                hostname: props.host,
                path: props.path,
                method: props.method,
                port: props.port,
                headers: props.headers,
            });
            req.setTimeout(props.timeout, () => {
                throw HttpClient.timeOutError();
            });
            req.on('response', (res) => {
                resolve(new NodeHttpClientResponse(res));
            });
            req.on('error', (error) => {
                reject(error);
            });
            req.write(props.data);
            req.end();
        });
        return requestPromise;
    }
}
export class NodeHttpClientResponse extends HttpClientResponse {
    constructor(res) {
        //@ts-ignore
        super(res.statusCode, res.headers);
        this._res = res;
    }
    getRawResponse() {
        return this._res;
    }
    toJson() {
        return new Promise((resolve, reject) => {
            let response = '';
            this._res.setEncoding('utf8');
            this._res.on('data', (chunk) => {
                response += chunk;
            });
            this._res.once('end', () => {
                try {
                    resolve(JSON.parse(response));
                }
                catch (e) {
                    reject(e);
                }
            });
        });
    }
}
