# Chargebee Node Client Library - API V2

[![npm](https://img.shields.io/npm/v/chargebee.svg?maxAge=2592000)](https://www.npmjs.com/package/chargebee)
[![npm](https://img.shields.io/npm/dt/chargebee.svg?maxAge=2592000)](https://www.npmjs.com/package/chargebee)

This is the [node.js](http://nodejs.org/) Library for integrating with Chargebee. Sign up for a Chargebee account [here](https://www.chargebee.com).

Chargebee now supports two API versions - [V1](https://apidocs.chargebee.com/docs/api/v1) and [V2](https://apidocs.chargebee.com/docs/api), of which V2 is the latest release and all future developments will happen in V2. This library is for <b>API version V2</b>. If you’re looking for V1, head to [chargebee-v1 branch](https://github.com/chargebee/chargebee-node/tree/chargebee-v1).

### Processing Webhooks - API Version Check

An attribute, <b>api_version</b>, is added to the [Event](https://apidocs.chargebee.com/docs/api/events) resource, which indicates the API version based on which the event content is structured. In your webhook servers, ensure this _api_version_ is the same as the [API version](https://apidocs.chargebee.com/docs/api#versions) used by your webhook server's client library.

## Installation

Install the latest version 2.x.x of the library with the following commands:

	$ npm install chargebee@">=2 <3"

Then require the library as:

	var chargebee = require('chargebee');

## Usage

### Create an idempotent request
[Idempotency keys](https://apidocs.chargebee.com/docs/api) are passed along with request headers to allow a safe retry of POST requests. 

```node
var chargebee = require("chargebee");
chargebee.configure({site : "{site}", api_key : "{site_api_key}"})
chargebee.customer.create({
    first_name : "John",
    last_name : "Doe",
    email : "john@test.com"
   })
    .setIdempotencyKey("<<UUID>>") // Replace <<UUID>> with a unique string
    .request(function(error,result, headers) {
    if(error){
        //handle error
        console.log(error);
    }else{
        console.log(result);
        console.log(headers); // Retrieves response headers
        console.log(isIdempotencyReplayed); // Retrieves idempotency replayed header value 
        var customer = result.customer;
        var card = result.card;
    }
});
```
`isIdempotencyReplayed()` method can be accessed to differentiate between original and replayed requests.

## Documentation

The full documentation can be found on the chargebee site here:

[https://apidocs.chargebee.com/docs/api?lang=node](https://apidocs.chargebee.com/docs/api?lang=node)


## License

See the LICENSE file.

