# Chargebee Node Client Library - API V1

The [node.js](http://nodejs.org/) library for integrating with Chargebee Recurring Billing and Subscription Management solution.

Chargebee now supports two API versions - [V1](https://apidocs.chargebee.com/docs/api/v1) and [V2](https://apidocs.chargebee.com/docs/api). This library is for our <b>older API version V1</b>. The library for V2 can be found in the [master branch](https://github.com/chargebee/chargebee-node). 

You'd want to upgrade to V2 to benefit from the new functionality. Click here for the [API V2 Upgradation Guide](https://apidocs.chargebee.com/docs/api/v1#api-v2-upgradation-guide).


### Processing Webhooks - API Version Check

An attribute, <b>api_version</b>, is added to the [Event](https://apidocs.chargebee.com/docs/api/v1/events) resource, which indicates the API version based on which the event content is structured. In your webhook servers, ensure this _api_version_ is the same as the [API version](https://apidocs.chargebee.com/docs/api/v1#versions) used by your webhook server's client library.

## Installation

Install the latest version 1.x.x of the library with the following commands:

	$ npm install chargebee@"<2"

Then require the library as:

	var chargebee = require('chargebee');

## Documentation

The full documentation can be found on the chargebee site [here](https://apidocs.chargebee.com/docs/api/v1/?lang=node).


## License

See the LICENSE file.

