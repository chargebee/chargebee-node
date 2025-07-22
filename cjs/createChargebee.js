"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateChargebee = void 0;
const RequestWrapper_js_1 = require("./RequestWrapper.js");
const environment_js_1 = require("./environment.js");
const api_endpoints_js_1 = require("./resources/api_endpoints.js");
const util_js_1 = require("./util.js");
const asyncApiSupport_js_1 = require("./asyncApiSupport.js");
const CreateChargebee = (httpClient) => {
    const Chargebee = function (conf) {
        this._env = Object.assign({}, environment_js_1.Environment);
        (0, util_js_1.extend)(true, this._env, conf);
        // @ts-ignore
        this._env.httpClient = httpClient;
        this._buildResources();
        this._endpoints = api_endpoints_js_1.Endpoints;
    };
    Chargebee.prototype = {
        _createApiFunc(apiCall, env) {
            return async function () {
                const rw = new RequestWrapper_js_1.RequestWrapper(arguments, apiCall, env);
                return rw.getRequest();
            };
        },
        _waitForExport(exportId) {
            let count = 0;
            const retrieve = async () => {
                while (count++ < 30) {
                    const result = await this.export.retrieve(exportId).request();
                    const exportObj = result.export;
                    if (exportObj.status === 'completed') {
                        return result;
                    }
                    else if (exportObj.status === 'in_process') {
                        await (0, util_js_1.sleep)(this._env.exportWaitInMillis);
                        continue;
                    }
                    else {
                        return result;
                    }
                }
                throw new Error('Export is taking too long');
            };
            return (0, asyncApiSupport_js_1.waitForProcessToComplete)(retrieve);
        },
        _timeMachineWait() {
            let count = 0;
            const retrieve = async () => {
                while (count++ < 30) {
                    const result = await this.time_machine.retrieve('delorean').request();
                    const time_machine = result.time_machine;
                    if (time_machine.time_travel_status === 'succeeded') {
                        return result;
                    }
                    else if (time_machine.time_travel_status === 'in_progress') {
                        await (0, util_js_1.sleep)(this._env.timemachineWaitInMillis);
                        continue;
                    }
                    else {
                        return result;
                    }
                }
                throw new Error('The time travel is taking too much time');
            };
            return (0, asyncApiSupport_js_1.waitForProcessToComplete)(retrieve);
        },
        _buildResources() {
            for (const res in api_endpoints_js_1.Endpoints) {
                this[res] = {};
                // @ts-ignore
                const apiCalls = api_endpoints_js_1.Endpoints[res];
                for (let apiIdx = 0; apiIdx < apiCalls.length; apiIdx++) {
                    const metaArr = apiCalls[apiIdx];
                    const apiCall = {
                        methodName: metaArr[0],
                        httpMethod: metaArr[1],
                        urlPrefix: metaArr[2],
                        urlSuffix: metaArr[3],
                        hasIdInUrl: metaArr[4],
                        isListReq: metaArr[0] === 'list',
                        subDomain: metaArr[5],
                        isJsonRequest: metaArr[6],
                        jsonKeys: metaArr[7],
                        options: metaArr[8],
                    };
                    this[res][apiCall.methodName] = this._createApiFunc(apiCall, this._env);
                }
            }
            this.export.wait_for_export_completion = this._waitForExport.bind(this);
            this.timeMachine.wait_for_time_travel_completion =
                this._timeMachineWait.bind(this);
        },
    };
    return Chargebee;
};
exports.CreateChargebee = CreateChargebee;
