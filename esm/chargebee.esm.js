import { CreateChargebee } from './createChargebee.js';
import { FetchHttpClient } from './net/FetchClient.js';
//@ts-ignore
const httpClient = new FetchHttpClient();
const Chargebee = CreateChargebee(httpClient);
export default Chargebee;
