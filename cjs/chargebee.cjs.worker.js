"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createChargebee_js_1 = require("./createChargebee.js");
const FetchClient_js_1 = require("./net/FetchClient.js");
const httpClient = new FetchClient_js_1.FetchHttpClient();
const Chargebee = (0, createChargebee_js_1.CreateChargebee)(httpClient);
module.exports = Chargebee;
module.exports.Chargebee = Chargebee;
module.exports.default = Chargebee;
