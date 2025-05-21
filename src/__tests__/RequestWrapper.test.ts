import { RequestWrapper } from '../RequestWrapper';
import { handleResponse } from '../coreCommon';
import { EnvType, ResourceType, RequestHeaders, JSONValue } from '../types';
import {
  getApiURL,
  getHost,
  serialize,
  encodeListParams,
  encodeParams,
} from '../util';

jest.mock('../util', () => ({
  extend: jest.fn((deep: boolean, target: any, source: any): any => Object.assign(target, source)),
  callbackifyPromise: jest.fn(<T>(promise: Promise<T>): Promise<T> => promise),
  getApiURL: jest.fn((env: EnvType, prefix: string, suffix: string, id: string | null): string =>
    id ? `${prefix}/${id}${suffix}` : `${prefix}${suffix}`
  ),
  getHost: jest.fn((env: EnvType, subDomain: string): string => `api.${subDomain}.example.com`),
  serialize: jest.fn((params: JSONValue): JSONValue => params),
  encodeListParams: jest.fn((params: JSONValue): string => `list=${JSON.stringify(params)}`),
  encodeParams: jest.fn((params: JSONValue): string => `param=${JSON.stringify(params)}`),
  log: jest.fn((env, ...args: any[]): void => {
    console.log(...args);
  })
}));

jest.mock('../coreCommon', () => ({
  handleResponse: jest.fn((callback: (err: unknown, response: any) => void, response: any): void =>
    callback(null, response)
  ),
}));

describe('RequestWrapper', () => {
  const mockMakeApiRequest = jest.fn();
  const mockHttpClient = { makeApiRequest: mockMakeApiRequest };

  const defaultEnv: EnvType = {
    apiKey: 'test_key',
    clientVersion: '1.0',
    protocol: 'https',
    port: 443,
    timeout: 3000,
    httpClient: mockHttpClient,
    hostSuffix: '',
    apiPath: '',
    timemachineWaitInMillis: 0,
    exportWaitInMillis: 0,
    site: '',
    retryConfig: {
      enabled: true,
      retryOnRateLimit: false,
      maxRetries: 3,
      initialDelayMs: 200,
      totalRetryTimeoutMs: 5000,
      retryOn: [500, 502, 503, 504],
    },
    enableDebugLogs: false,
  };

  const defaultApiCall: ResourceType = {
    hasIdInUrl: false,
    urlPrefix: '/v2',
    urlSuffix: '/customers',
    httpMethod: 'POST',
    isJsonRequest: true,
    isListReq: false,
    methodName: '',
    jsonKeys: [],
    subDomain: 'test',
  };

  const createArgs = (
    params: JSONValue = { name: 'John' },
    headers: RequestHeaders = {},
    id?: string
  ): IArguments => {
    const argsArray = id ? [id, params, headers] : [params, headers];
    return argsArray as any;
  };

  beforeEach(() => {
    jest.clearAllMocks();
    mockMakeApiRequest.mockReset();
    (getApiURL as jest.Mock).mockReturnValue('/v2/customers');
    (getHost as jest.Mock).mockReturnValue('api.test.example.com');
    (serialize as jest.Mock).mockImplementation((x: JSONValue) => x);
    (encodeListParams as jest.Mock).mockImplementation((x: JSONValue) => `list=${JSON.stringify(x)}`);
    (encodeParams as jest.Mock).mockImplementation((x: JSONValue) => `param=${JSON.stringify(x)}`);
  });

  describe('constructor', () => {

    test('validates id parameter when hasIdInUrl is true', () => {
      const apiCallWithId: ResourceType = { ...defaultApiCall, hasIdInUrl: true };
      const args = createArgs({ name: 'John' }, {}, 'valid-id');

      const wrapper = new RequestWrapper(args, apiCallWithId, defaultEnv);
      expect(wrapper).toBeInstanceOf(RequestWrapper);
    });

    test('throws error for invalid id parameter', () => {
      const apiCallWithId: ResourceType = { ...defaultApiCall, hasIdInUrl: true };
      const args = createArgs({ name: 'John' }, {}, '');

      expect(() => new RequestWrapper(args, apiCallWithId, defaultEnv)).toThrow(
        'the required id parameter missing or wrong'
      );
    });
  });

  describe('request', () => {
    test('should succeed without retry (POST, JSON)', async () => {
      const args = createArgs({ name: 'John' }, { 'Custom-Header': 'test' });
      const wrapper = new RequestWrapper(args, defaultApiCall, defaultEnv);
      const mockResponse = {
        toJson: async () => ({ success: true }),
        getStatusCode: () => 200,
        getHeaders: () => ({}),
      };

      mockMakeApiRequest.mockResolvedValue(mockResponse);
      (handleResponse as jest.Mock).mockImplementation(async (cb: Function, resp: any) =>
        cb(null, await resp.toJson())
      );

      const result = await wrapper.getRequest();

      expect(result).toEqual({ success: true });
      expect(mockMakeApiRequest).toHaveBeenCalledTimes(1);
    });

    test('should retry on retryable status code (503)', async () => {
      const args = createArgs();
      const wrapper = new RequestWrapper(args, defaultApiCall, defaultEnv);
      const mockResponse = {
        toJson: async () => ({ success: true }),
        getStatusCode: () => 200,
        getHeaders: () => ({}),
      };
      const errorResponse = {
        statusCode: 503,
        response: { statusCode: 503 },
        getStatusCode: () => 503,
        getHeaders: () => ({}),
        toJson: async () => ({}),
      };

      mockMakeApiRequest
        .mockRejectedValueOnce(errorResponse)
        .mockResolvedValue(mockResponse);
      (handleResponse as jest.Mock).mockImplementation(async (cb: Function, resp: any) =>
        resp.getStatusCode() === 200 ? cb(null, await resp.toJson()) : cb(errorResponse, null)
      );

      const result = await wrapper.getRequest();

      expect(result).toEqual({ success: true });
      expect(mockMakeApiRequest).toHaveBeenCalledTimes(2);
    });

    test('should not retry on non-retryable status code (400)', async () => {
      const args = createArgs();
      const wrapper = new RequestWrapper(args, defaultApiCall, defaultEnv);
      const errorResponse = {
        message: "Bad Request",
        statusCode: 400,
        response: { statusCode: 400 },
        getStatusCode: () => 400,
        getHeaders: () => ({}),
        toJson: async () => ({}),
      };

      mockMakeApiRequest.mockRejectedValue(errorResponse);
      (handleResponse as jest.Mock).mockImplementation((cb: Function, resp: any) =>
        cb(errorResponse, null)
      );

      await expect(wrapper.getRequest()).rejects.toMatchObject({ statusCode: 400 });
      expect(mockMakeApiRequest).toHaveBeenCalledTimes(1);
    });

    test('should respect maxRetries limit', async () => {
      const envWithLimitedRetries: EnvType = {
        ...defaultEnv,
        retryConfig: {
          ...defaultEnv.retryConfig!,
          maxRetries: 1,
        },
      };
      const args = createArgs();
      const wrapper = new RequestWrapper(args, defaultApiCall, envWithLimitedRetries);
      const errorResponse = {
        statusCode: 503,
        response: { statusCode: 503},
        getStatusCode: () => 503,
        getHeaders: () => ({}),
        toJson: async () => ({}),
      };

      mockMakeApiRequest.mockRejectedValue(errorResponse);
      (handleResponse as jest.Mock).mockImplementation((cb: Function, resp: any) =>
        cb(errorResponse, null)
      );

      await expect(wrapper.getRequest()).rejects.toMatchObject({ statusCode: 503 });
      expect(mockMakeApiRequest).toHaveBeenCalledTimes(2);
    });
  });

  test('should throw error if 429 status code is received without retry-after header', async () => {

    const args = createArgs();
    const wrapper = new RequestWrapper(args, defaultApiCall, {...defaultEnv,
      retryConfig: {
        ...defaultEnv.retryConfig!,
        retryOnRateLimit: true,
      },
    });
    const errorResponse = {
      statusCode: 429,
      response: {
        statusCode: 429,
        headers: {}, 
      },
      getStatusCode: () => 429,
      getHeaders: () => ({}),
      toJson: async () => ({}),
    };

    mockMakeApiRequest.mockRejectedValue(errorResponse);

    (handleResponse as jest.Mock).mockImplementation((cb: Function, resp: any) =>
      cb(errorResponse, null)
    );

    await expect(wrapper.getRequest()).rejects.toMatchObject({
      statusCode: 429,
    });

    expect(mockMakeApiRequest).toHaveBeenCalledTimes(1); 
  });


  test('should retry on 429 status code with retry-after header', async () => {
    const args = createArgs();
    const wrapper = new RequestWrapper(args, defaultApiCall, {...defaultEnv, 
      retryConfig: {
        ...defaultEnv.retryConfig!,
        retryOnRateLimit: true,
      },
    });

    const mockResponse = {
      toJson: async () => ({ success: true }),
      getStatusCode: () => 200,
      getHeaders: () => ({}),
    };

    const errorResponse = {
      statusCode: 429,
      response: {
        statusCode: 429,
        headers: { 'retry-after': '1' }, 
      },
      getStatusCode: () => 429,
      getHeaders: () => ({ 'retry-after': '1' }),
      toJson: async () => ({}),
    };

    mockMakeApiRequest
      .mockRejectedValueOnce(errorResponse) 
      .mockResolvedValueOnce(mockResponse);

    (handleResponse as jest.Mock).mockImplementation(async (cb: Function, resp: any) =>
      resp.getStatusCode() === 200 ? cb(null, await resp.toJson()) : cb(errorResponse, null)
    );

    const result = await wrapper.getRequest();

    expect(result).toEqual({ success: true });
    expect(mockMakeApiRequest).toHaveBeenCalledTimes(2);
  });

});