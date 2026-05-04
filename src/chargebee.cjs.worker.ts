import { CreateChargebee } from './createChargebee.js';
import { FetchHttpClient } from './net/FetchClient.js';
import { ChargebeeZodValidationError } from './chargebeeZodValidationError.js';

const httpClient = new FetchHttpClient();
const Chargebee = CreateChargebee(httpClient);
module.exports = Chargebee;
module.exports.Chargebee = Chargebee;
module.exports.default = Chargebee;
module.exports.ChargebeeZodValidationError = ChargebeeZodValidationError;
