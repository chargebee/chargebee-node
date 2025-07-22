import { isFunction, extend, callbackifyPromise } from './util.js';
export const waitForProcessToComplete = (retrieveHandling, env) => {
    if (typeof retrieveHandling == 'undefined' || !isFunction(retrieveHandling)) {
        throw new Error('The handling parameter should be a method.');
    }
    const DummyRequestWrapper = function () {
        this.request = _request;
    };
    const _request = function (callBack, envOptions) {
        const jsonConstructor = {}.constructor;
        if (typeof envOptions !== 'undefined') {
            extend(true, env, envOptions);
        }
        else if (typeof callBack !== 'undefined' &&
            callBack.constructor === jsonConstructor &&
            !isFunction(callBack)) {
            extend(true, env, callBack);
            callBack = undefined;
        }
        if (typeof callBack !== 'undefined' && !isFunction(callBack)) {
            throw new Error('The callback parameter passed is incorrect.');
        }
        const promise = new Promise((resolve, reject) => {
            try {
                const result = retrieveHandling();
                resolve(result);
            }
            catch (err) {
                reject(err);
            }
        });
        return callbackifyPromise(promise, callBack);
    };
    return new DummyRequestWrapper();
};
