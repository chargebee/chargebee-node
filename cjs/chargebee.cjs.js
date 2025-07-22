"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createChargebee_js_1 = require("./createChargebee.js");
const NodeClient_js_1 = require("./net/NodeClient.js");
const FetchClient_js_1 = require("./net/FetchClient.js");
//@ts-ignore
const httpClient = !globalThis.fetch
    ? new NodeClient_js_1.NodeHttpClient()
    : new FetchClient_js_1.FetchHttpClient();
const Chargebee = (0, createChargebee_js_1.CreateChargebee)(httpClient);
module.exports = Chargebee;
module.exports.Chargebee = Chargebee;
module.exports.default = Chargebee;
