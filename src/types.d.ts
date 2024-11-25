interface HttpClientInterface {
  makeApiRequest: (
    props: RequestInterface,
  ) => Promise<HttpClientResponseInterface>;
}
interface RequestInterface {
  host: string;
  port: number;
  path: string;
  method: string;
  headers: RequestHeaders;
  data: string;
  protocol: string;
  timeout: number;
}
interface HttpClientResponseInterface {
  getStatusCode: () => number;
  getHeaders: () => ResponseHeaders;
  getRawResponse: () => unknown;
  toJson: () => Promise<any>;
}
export type EnvType = {
  protocol: string;
  hostSuffix: string;
  apiPath: string;
  timeout: number;
  clientVersion: string;
  port: number;
  timemachineWaitInMillis: number;
  exportWaitInMillis: number;
  apiKey: string;
  site: string;
  httpClient: HttpClientInterface;
};

export type Config = {
  apiKey: string;
  site: string;
  apiPath?: string;
  timeout?: number;
  clientVersion?: string;
  port?: number;
  timemachineWaitInMillis?: number;
  exportWaitInMillis?: number;
  protocol?: string;
  hostSuffix?: string;
};

export type Callback = (error: unknown, result: any | null) => void;
export type CallbackWrapper = (callback: Callback) => void;
export type CustomParam = {
  [key: string]: number | string | boolean | Array<number> | Array<string>;
};
export type ResponseHeaders = Record<string, string | string[] | number>;
export type RequestHeaders = Record<string, string | number>;
export type ResourceType = {
  methodName: string;
  httpMethod: string;
  urlPrefix: string;
  urlSuffix?: string | null;
  hasIdInUrl: boolean;
  isListReq: boolean;
  subDomain?: string | null;
};
type RequestWrapperType = {
  args: IArguments;
  httpHeaders: RequestHeaders;
  apiCall: ResourceType;
  envArg: EnvType;
  headers: (headers: RequestHeaders) => RequestWrapperType;
  setIdempotencyKey: (idempotencyKey: string) => RequestWrapperType;
  param: (custom_param: CustomParam) => RequestWrapperType;
  request: (
    callBack?: undefined | Callback,
    envOptions?: EnvType,
  ) => Promise<void | Callback>;
};
type CreateApiFuncType = (
  apiCall: ResourceType,
  env: EnvType,
) => (...args: any[]) => RequestWrapperType;
type WaitForExportFunctionType = (exportId: string) => Promise<any>;
type WaitForTimeMachineFunctionType = () => Promise<any>;

export type ChargebeeType = {
  _env: Partial<Config & EnvType>;
  configure: (conf: Config) => void;
  updateRequestTimeoutInMillis: (timeout: number) => void;
  _buildResources: () => void;
  _endpoints: any;
  _createApiFunc: CreateApiFuncType;
  _waitForExport: WaitForExportFunctionType;
  _timeMachineWait: WaitForTimeMachineFunctionType;
  [key: string]: any;
};
export type JSONValue =
  | string
  | number
  | boolean
  | { [x: string]: JSONValue }
  | Array<JSONValue>;

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

export type EndpointTuple = [
  action: string,
  method: Method,
  path: string,
  subpath: string | null,
  requiresCustomer: boolean,
  subDomain: string | null,
];
