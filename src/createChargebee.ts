import { RequestWrapper } from './RequestWrapper.js';
import { Environment } from './environment.js';
import { Endpoints } from './resources/api_endpoints.js';
import { extend, sleep } from './util.js';
import { waitForProcessToComplete } from './asyncApiSupport.js';
import {
  ResourceType,
  EnvType,
  ChargebeeType,
  Config,
  EndpointTuple,
} from './types.js';
import { NodeHttpClient } from './net/NodeClient.js';
import { FetchHttpClient } from './net/FetchClient.js';

export const CreateChargebee = () => {
  const Chargebee = function (this: ChargebeeType, conf: Config) {
    this._env = { ...Environment };
    extend(true, this._env, conf);
    // @ts-ignore
    this._env.httpClient = globalThis.fetch
      ? new FetchHttpClient()
      : new NodeHttpClient();
    this._buildResources();
    this._endpoints = Endpoints;
  } as any as { new (): ChargebeeType };
  Chargebee.prototype = {
    _createApiFunc(apiCall: ResourceType, env: EnvType) {
      return function () {
        return new RequestWrapper(arguments, apiCall, env);
      };
    },
    _waitForExport(exportId: string) {
      let count = 0;
      const retrieve = async () => {
        while (count++ < 30) {
          const result = await this.export.retrieve(exportId).request();
          const exportObj = result.export;
          if (exportObj.status === 'completed') {
            return result;
          } else if (exportObj.status === 'in_process') {
            await sleep(this._env.exportWaitInMillis);
            continue;
          } else {
            return result;
          }
        }
        throw new Error('Export is taking too long');
      };
      return waitForProcessToComplete(retrieve);
    },
    _timeMachineWait() {
      let count = 0;
      const retrieve = async () => {
        while (count++ < 30) {
          const result = await this.time_machine.retrieve('delorean').request();
          const time_machine = result.time_machine;
          if (time_machine.time_travel_status === 'succeeded') {
            return result;
          } else if (time_machine.time_travel_status === 'in_progress') {
            await sleep(this._env.timemachineWaitInMillis);
            continue;
          } else {
            return result;
          }
        }
        throw new Error('The time travel is taking too much time');
      };
      return waitForProcessToComplete(retrieve);
    },
    _buildResources() {
      for (const res in Endpoints) {
        this[res] = {};
        // @ts-ignore
        const apiCalls = Endpoints[res];
        for (let apiIdx = 0; apiIdx < apiCalls.length; apiIdx++) {
          const metaArr: EndpointTuple = apiCalls[apiIdx];
          const apiCall: ResourceType = {
            methodName: metaArr[0],
            httpMethod: metaArr[1],
            urlPrefix: metaArr[2],
            urlSuffix: metaArr[3],
            hasIdInUrl: metaArr[4],
            isListReq: metaArr[0] === 'list',
          };
          this[res][apiCall.methodName] = this._createApiFunc(
            apiCall,
            this._env,
          );
        }
      }
      this.export.wait_for_export_completion = this._waitForExport.bind(this);
      this.timeMachine.wait_for_time_travel_completion =
        this._timeMachineWait.bind(this);
    },
  };
  return Chargebee;
};
