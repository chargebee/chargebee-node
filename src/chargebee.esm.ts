import { CreateChargebee } from './createChargebee.js';
import { NodeHttpClient } from './net/NodeClient.js';
import { FetchHttpClient } from './net/FetchClient.js';

//@ts-ignore
const httpClient = !globalThis.fetch
  ? new NodeHttpClient()
  : new FetchHttpClient();
const Chargebee = CreateChargebee(httpClient);

export default Chargebee;
