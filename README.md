# Chargebee Node Client Library - API V2

The [node.js](http://nodejs.org/) library for integrating with Chargebee Recurring Billing and Subscription Management solution.

Chargebee now supports two API versions - [V1](https://apidocs.chargebee.com/docs/api/v1) and [V2](https://apidocs.chargebee.com/docs/api), of which V2 is the latest release and all future developments will happen in V2. 

This library is for our <b>API version V2</b>. The library for V1 can be found in [chargebee-v1 branch](https://github.com/chargebee/chargebee-node/tree/chargebee-v1). 


### Processing Webhooks - API Version Check

An attribute, <b>api_version</b>, is added to the [Event](https://apidocs.chargebee.com/docs/api/events) resource, which indicates the API version based on which the event content is structured. In your webhook servers, ensure this _api_version_ is the same as the [API version](https://apidocs.chargebee.com/docs/api#versions) used by your webhook server's client library.

## Installation

Install the latest version 2.x.x of the library with the following commands:

	$ npm install chargebee@">=2 <3"

Then require the library as:

	var chargebee = require('chargebee');

## Documentation

The full documentation can be found on the chargebee site here:

[https://apidocs.chargebee.com/docs/api?lang=node](https://apidocs.chargebee.com/docs/api?lang=node)


## License

See the LICENSE file.

