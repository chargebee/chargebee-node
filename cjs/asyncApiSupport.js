"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitForProcessToComplete = void 0;
const util_js_1 = require("./util.js");
const waitForProcessToComplete = (retrieveHandling, env) => {
    if (typeof retrieveHandling == 'undefined' || !(0, util_js_1.isFunction)(retrieveHandling)) {
        throw new Error('The handling parameter should be a method.');
    }
    const DummyRequestWrapper = function () {
        this.request = _request;
    };
    const _request = function (callBack, envOptions) {
        const jsonConstructor = {}.constructor;
        if (typeof envOptions !== 'undefined') {
            (0, util_js_1.extend)(true, env, envOptions);
        }
        else if (typeof callBack !== 'undefined' &&
            callBack.constructor === jsonConstructor &&
            !(0, util_js_1.isFunction)(callBack)) {
            (0, util_js_1.extend)(true, env, callBack);
            callBack = undefined;
        }
        if (typeof callBack !== 'undefined' && !(0, util_js_1.isFunction)(callBack)) {
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
        return (0, util_js_1.callbackifyPromise)(promise, callBack);
    };
    return new DummyRequestWrapper();
};
exports.waitForProcessToComplete = waitForProcessToComplete;
