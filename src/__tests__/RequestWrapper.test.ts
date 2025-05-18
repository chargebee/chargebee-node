import { RequestWrapper } from '../RequestWrapper';
import { handleResponse } from '../coreCommon';
import { EnvType, ResourceType, RequestHeaders, JSONValue } from '../types';
import {
  extend,
  callbackifyPromise,
  getApiURL,
  getHost,
  serialize,
  encodeListParams,
  encodeParams,
} from '../util';

// Mock dependencies with strict types
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
}));

jest.mock('../coreCommon', () => ({
  handleResponse: jest.fn((callback: (err: unknown, response: any) => void, response: any): void =>
    callback(null, response)
  ),
}));

// Mock Buffer
jest.mock('node:buffer', () => ({
  Buffer: {
    from: jest.fn((data: string) => ({
      toString: jest.fn(() => btoa(data)),
    })),
  },
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
      max_retries: 3,
      initial_delay_ms: 200,
      max_delay_ms: 5000,
      retry_on: [500, 502, 503, 504, 429],
    },
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

  // Helper to create IArguments
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
    Object.defineProperty(process, 'version', { value: 'v20.18.0', writable: true });
  });

  describe('constructor', () => {
    test('initializes with correct arguments', () => {
      const args = createArgs();
      const wrapper = new RequestWrapper(args, defaultApiCall, defaultEnv);

      expect(wrapper).toHaveProperty('args', args);
      expect(wrapper).toHaveProperty('apiCall', defaultApiCall);
      expect(wrapper).toHaveProperty('envArg', defaultEnv);
      expect(wrapper).toHaveProperty('httpHeaders', {});
    });

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
      expect(mockMakeApiRequest).toHaveBeenCalledWith({
        host: 'api.test.example.com',
        port: defaultEnv.port,
        path: '/v2/customers',
        method: 'POST',
        protocol: 'https',
        headers: expect.objectContaining({
          'Custom-Header': 'test',
          'Content-Type': 'application/json;charset=UTF-8',
          'Content-Length': JSON.stringify({ name: 'John' }).length,
          Authorization: 'Basic dGVzdF9rZXk6',
          Accept: 'application/json',
          'User-Agent': 'Chargebee-NodeJs-Client 1.0',
          'Lang-Version': 'v20.18.0',
        }),
        data: JSON.stringify({ name: 'John' }),
        timeout: defaultEnv.timeout,
      });
      expect(extend).toHaveBeenCalledTimes(3);
      expect(callbackifyPromise).toHaveBeenCalledTimes(1);
    });

    test('should handle GET request with query params', async () => {
      const apiCallGet: ResourceType = {
        ...defaultApiCall,
        httpMethod: 'GET',
        isJsonRequest: false,
        isListReq: true,
      };
      const args = createArgs({ limit: 10 }, { 'Custom-Header': 'test' });
      const wrapper = new RequestWrapper(args, apiCallGet, defaultEnv);
      const mockResponse = {
        toJson: async () => ({ customers: [] }),
        getStatusCode: () => 200,
        getHeaders: () => ({}),
      };

      mockMakeApiRequest.mockResolvedValue(mockResponse);
      (handleResponse as jest.Mock).mockImplementation(async (cb: Function, resp: any) =>
        cb(null, await resp.toJson())
      );

      const result = await wrapper.getRequest();

      expect(result).toEqual({ customers: [] });
      expect(mockMakeApiRequest).toHaveBeenCalledWith({
        host: 'api.test.example.com',
        port: defaultEnv.port,
        path: '/v2/customers?list={"limit":10}',
        method: 'GET',
        protocol: 'https',
        headers: {
          'Custom-Header': 'test',
          'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
          Accept: 'application/json',
          Authorization: 'Basic dGVzdF9rZXk6',
          'Content-Length': 8,
          'Lang-Version': 'v20.18.0',
          'User-Agent': 'Chargebee-NodeJs-Client 1.0',
        },
        data: 'param={}',
        timeout: defaultEnv.timeout,
      });
      expect(encodeListParams).toHaveBeenCalledWith({ limit: 10 });
    });

    test('should handle request with id in URL', async () => {
      const apiCallWithId: ResourceType = { ...defaultApiCall, hasIdInUrl: true };
      const args = createArgs({ name: 'John' }, { 'Custom-Header': 'test' }, 'cust_123');
      const wrapper = new RequestWrapper(args, apiCallWithId, defaultEnv);
      const mockResponse = {
        toJson: async () => ({ id: 'cust_123' }),
        getStatusCode: () => 200,
        getHeaders: () => ({}),
      };

      (getApiURL as jest.Mock).mockReturnValue('/v2/cust_123/customers');
      mockMakeApiRequest.mockResolvedValue(mockResponse);
      (handleResponse as jest.Mock).mockImplementation(async (cb: Function, resp: any) =>
        cb(null, await resp.toJson())
      );

      const result = await wrapper.getRequest();

      expect(result).toEqual({ id: 'cust_123' });
      expect(mockMakeApiRequest).toHaveBeenCalledWith({
        host: 'api.test.example.com',
        port: defaultEnv.port,
        path: '/v2/cust_123/customers',
        method: 'POST',
        protocol: 'https',
        headers: expect.objectContaining({
          'Custom-Header': 'test',
          'Content-Type': 'application/json;charset=UTF-8',
          Accept: 'application/json',
          Authorization: 'Basic dGVzdF9rZXk6',
          'User-Agent': 'Chargebee-NodeJs-Client 1.0',
          'Lang-Version': 'v20.18.0',
        }),
        data: JSON.stringify({ name: 'John' }),
        timeout: defaultEnv.timeout,
      });
    });

    test('should handle request error', async () => {
      const args = createArgs();
      const wrapper = new RequestWrapper(args, defaultApiCall, defaultEnv);
      const error = new Error('Network error');

      mockMakeApiRequest.mockRejectedValue(error);
      (handleResponse as jest.Mock).mockImplementation((cb: Function) => cb(error, null));

      await expect(wrapper.getRequest()).rejects.toThrow('Network error');
      expect(mockMakeApiRequest).toHaveBeenCalledTimes(1);
    });

    test('should retry on retryable status code (503) with X-CB-Retry-Attempt header', async () => {
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
        .mockRejectedValueOnce(errorResponse)
        .mockResolvedValue(mockResponse);
      (handleResponse as jest.Mock).mockImplementation(async (cb: Function, resp: any) =>
        resp.getStatusCode() === 200 ? cb(null, await resp.toJson()) : cb(errorResponse, null)
      );

      const result = await wrapper.getRequest();

      expect(result).toEqual({ success: true });
      expect(mockMakeApiRequest).toHaveBeenCalledTimes(3);
      expect(mockMakeApiRequest).toHaveBeenNthCalledWith(1, expect.objectContaining({
        headers: expect.not.objectContaining({ 'X-CB-Retry-Attempt': expect.any(String) }),
      }));
      expect(mockMakeApiRequest).toHaveBeenNthCalledWith(2, expect.objectContaining({
        headers: expect.objectContaining({ 'X-CB-Retry-Attempt': '1' }),
      }));
      expect(mockMakeApiRequest).toHaveBeenNthCalledWith(3, expect.objectContaining({
        headers: expect.objectContaining({ 'X-CB-Retry-Attempt': '2' }),
      }));
    });

    test('should not retry on non-retryable status code (400)', async () => {
      const args = createArgs();
      const wrapper = new RequestWrapper(args, defaultApiCall, defaultEnv);
      const errorResponse = {
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

    test('should respect max_retries limit', async () => {
      const envWithLimitedRetries: EnvType = {
        ...defaultEnv,
        retryConfig: {
          ...defaultEnv.retryConfig!,
          max_retries: 1,
        },
      };
      const args = createArgs();
      const wrapper = new RequestWrapper(args, defaultApiCall, envWithLimitedRetries);
      const errorResponse = {
        statusCode: 503,
        response: { statusCode: 503 },
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
      expect(mockMakeApiRequest).toHaveBeenNthCalledWith(1, expect.objectContaining({
        headers: expect.not.objectContaining({ 'X-CB-Retry-Attempt': expect.any(String) }),
      }));
      expect(mockMakeApiRequest).toHaveBeenNthCalledWith(2, expect.objectContaining({
        headers: expect.objectContaining({ 'X-CB-Retry-Attempt': '1' }),
      }));
    });

    test('should apply exponential backoff with jitter', async () => {
      jest.useFakeTimers();
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

      const originalRandom = Math.random;
      Math.random = jest.fn().mockReturnValue(0.5);

      const promise = wrapper.getRequest();

      jest.advanceTimersByTime(100);
      await jest.runAllTimersAsync();

      expect(mockMakeApiRequest).toHaveBeenCalledTimes(2);
      expect(mockMakeApiRequest).toHaveBeenNthCalledWith(2, expect.objectContaining({
        headers: expect.objectContaining({ 'X-CB-Retry-Attempt': '1' }),
      }));
      expect(await promise).toEqual({ success: true });

      Math.random = originalRandom;
      jest.useRealTimers();
    });

    test('should disable retries if retry_config.enabled is false', async () => {
      const envWithoutRetries: EnvType = {
        ...defaultEnv,
        retryConfig: {
          ...defaultEnv.retryConfig!,
          enabled: false,
        },
      };
      const args = createArgs();
      const wrapper = new RequestWrapper(args, defaultApiCall, envWithoutRetries);
      const errorResponse = {
        statusCode: 503,
        response: { statusCode: 503 },
        getStatusCode: () => 503,
        getHeaders: () => ({}),
        toJson: async () => ({}),
      };

      mockMakeApiRequest.mockRejectedValue(errorResponse);
      (handleResponse as jest.Mock).mockImplementation((cb: Function, resp: any) =>
        cb(errorResponse, null)
      );

      await expect(wrapper.getRequest()).rejects.toMatchObject({ statusCode: 503 });
      expect(mockMakeApiRequest).toHaveBeenCalledTimes(1);
    });

    test('should respect max_delay_ms for retry delays', async () => {
      jest.useFakeTimers();
      const envWithLowMaxDelay: EnvType = {
        ...defaultEnv,
        retryConfig: {
          ...defaultEnv.retryConfig!,
          max_retries: 3,
          initial_delay_ms: 1000, // Large initial delay to trigger max_delay_ms cap
          max_delay_ms: 500, // Low cap to test
        },
      };
      const args = createArgs();
      const wrapper = new RequestWrapper(args, defaultApiCall, envWithLowMaxDelay);
      const errorResponse = {
        statusCode: 503,
        response: { statusCode: 503 },
        getStatusCode: () => 503,
        getHeaders: () => ({}),
        toJson: async () => ({}),
      };
      const mockResponse = {
        toJson: async () => ({ success: true }),
        getStatusCode: () => 200,
        getHeaders: () => ({}),
      };
    
      // Mock Math.random to maximize jitter (worst-case delay)
      const originalRandom = Math.random;
      Math.random = jest.fn().mockReturnValue(0.999);
    
      // Spy on setTimeout to capture delay values
      const setTimeoutSpy = jest.spyOn(global, 'setTimeout');
    
      mockMakeApiRequest
        .mockRejectedValueOnce(errorResponse) // Attempt 0
        .mockRejectedValueOnce(errorResponse) // Attempt 1
        .mockRejectedValueOnce(errorResponse) // Attempt 2
        .mockResolvedValue(mockResponse); // Attempt 3
    
      (handleResponse as jest.Mock).mockImplementation(async (cb: Function, resp: any) =>
        resp.getStatusCode() === 200 ? cb(null, await resp.toJson()) : cb(errorResponse, null)
      );
    
      const promise = wrapper.getRequest();
    
      // Advance timers for each retry
      await jest.advanceTimersByTimeAsync(1000);
      await jest.advanceTimersByTimeAsync(1000);
      await jest.advanceTimersByTimeAsync(1000);
      await jest.runAllTimersAsync();
    
      const result = await promise;
      expect(result).toEqual({ success: true });
      expect(mockMakeApiRequest).toHaveBeenCalledTimes(4); // Initial + 3 retries
    
      // Verify delays: baseDelay = initial_delay_ms * 2^attempt, capped by max_delay_ms
      const capturedDelays = setTimeoutSpy.mock.calls.map(call => call[1]);
      expect(capturedDelays.length).toBe(3); // 3 retries
      capturedDelays.forEach(delay => {
        expect(delay).toBeLessThanOrEqual(500); // max_delay_ms cap
      });
    
      // Expected delays:
      // Attempt 0: baseDelay = 1000 * 2^0 = 1000, max = min(1000*2, 500) = 500, delay ≈ 500 * 0.999 = 499
      // Attempt 1: baseDelay = 1000 * 2^1 = 2000, max = min(2000*2, 500) = 500, delay ≈ 499
      // Attempt 2: baseDelay = 1000 * 2^2 = 4000, max = min(4000*2, 500) = 500, delay ≈ 499
      expect(capturedDelays).toEqual([499, 499, 499]);
    
      Math.random = originalRandom;
      setTimeoutSpy.mockRestore();
      jest.useRealTimers();
    });
  });
});