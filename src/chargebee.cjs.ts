import { CreateChargebee } from './createChargebee.js';
import { NodeHttpClient } from './net/NodeClient.js';
import { FetchHttpClient } from './net/FetchClient.js';

//@ts-ignore
const httpClient = !globalThis.fetch
  ? new NodeHttpClient()
  : new FetchHttpClient();
const Chargebee = CreateChargebee(httpClient);
module.exports = Chargebee;
module.exports.Chargebee = Chargebee;
module.exports.default = Chargebee;
