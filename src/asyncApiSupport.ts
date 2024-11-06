import { Callback, EnvType } from './types.js';
import { isFunction, extend, callbackifyPromise } from './util.js';
type PromiseCallbackFunction = () => Promise<any>;
type DummyRequestWrapperObject = {
  request: (
    callBack?: (error: unknown, result: any | null) => void,
    envOptions?: EnvType,
  ) => Promise<void | Callback>;
};

export const waitForProcessToComplete = (
  retrieveHandling: PromiseCallbackFunction,
  env?: any,
) => {
  if (typeof retrieveHandling == 'undefined' || !isFunction(retrieveHandling)) {
    throw new Error('The handling parameter should be a method.');
  }
  const DummyRequestWrapper = function (this: DummyRequestWrapperObject) {
    this.request = _request;
  } as any as { new (): DummyRequestWrapperObject };
  const _request = function (
    callBack?: (error: unknown, result: any | null) => void,
    envOptions?: EnvType,
  ) {
    const jsonConstructor = {}.constructor;
    if (typeof envOptions !== 'undefined') {
      extend(true, env, envOptions);
    } else if (
      typeof callBack !== 'undefined' &&
      callBack.constructor === jsonConstructor &&
      !isFunction(callBack)
    ) {
      extend(true, env, callBack);
      callBack = undefined;
    }
    if (typeof callBack !== 'undefined' && !isFunction(callBack)) {
      throw new Error('The callback parameter passed is incorrect.');
    }
    const promise = new Promise<void | PromiseCallbackFunction>(
      (resolve, reject) => {
        try {
          const result = retrieveHandling();
          resolve(result);
        } catch (err) {
          reject(err);
        }
      },
    );
    return callbackifyPromise(promise, callBack);
  };
  return new DummyRequestWrapper();
};
