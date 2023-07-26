# Chargebee Node.js Client Library

[![npm](https://img.shields.io/npm/v/chargebee.svg?maxAge=3)](https://www.npmjs.com/package/chargebee)
[![npm](https://img.shields.io/npm/dt/chargebee.svg?maxAge=3)](https://www.npmjs.com/package/chargebee)

This is the [node.js](http://nodejs.org/) library for integrating with Chargebee. Sign up for a Chargebee account [here](https://www.chargebee.com).

> **Note**
> If you’re using [API V1](https://apidocs.chargebee.com/docs/api/v1), head to [chargebee-v1 branch](https://github.com/chargebee/chargebee-node/tree/chargebee-v1).

## Requirements

Node 0.6 or higher.

## Installation

Install the latest version of the library with:

```sh
npm install chargebee
# or
yarn add chargebee
# or
pnpm install chargebee
```

## Usage

The package needs to be configured with your site's API key, which is available under Configure Chargebee Section. Refer [here](https://www.chargebee.com/docs/2.0/api_keys.html) for more details. 

The full documentation can be found on the Chargebee API Docs: [https://apidocs.chargebee.com/docs/api?lang=node](https://apidocs.chargebee.com/docs/api?lang=node)


```js
const chargebee = require('chargebee');

chargebee.configure({
  site: '<YOUR_SITE_NAME>',
  api_key: '<YOUR_API_KEY>',
});
```

Or using ES modules,

```js
import chargebee from 'chargebee';

chargebee.configure({
  site: '<YOUR_SITE_NAME>',
  api_key: '<YOUR_API_KEY>',
});

```

### Using Async / Await

```js
try {
  const result = await chargebee.customer
    .create({
      email: 'john@test.com',
      // other params
    })
    .request();
    // access customer as result.customer;
} catch (err) {
  // handle error
}
```

### Using Promises

```js
chargebee.customer
  .create({
    email: 'john@test.com',
    // other params
  })
  .request()
  .then((result) => {
    // handle result
    // access customer as result.customer;
  })
  .catch((err) => {
    // handle error
  });
```

### Using callbacks

```js
chargebee.customer
  .create({
    email: 'john@test.com',
    // other params
  })
  .request(function (error, result) {
    if (error) {
      // handle error
    } else {
      // handle result
     // access customer as result.customer;
    }
  });
```

### Usage with TypeScript

You can import the types as shown below.

```ts
import chargebee, { Customer } from 'chargebee';

chargebee.configure({
  site: '<YOUR_SITE_NAME>',
  api_key: '<YOUR_API_KEY>',
});

const createCustomer = async () => {
  const inputParams: Customer.CreateInputParam = {
    email: 'john@test.com',
    first_name: 'John',
    last_name: 'Doe',
  };

  const { customer } = await chargebee.customer.create(inputParams).request();
  console.log(customer);
};

createCustomer();
```

### Using filters in the List API

For pagination: `offset` is the parameter that is being used. The value used for this parameter must be the value returned for `next_offset` parameter in the previous API call.

```js
const fetchCustomers = async (offset) => {
    const result = await chargebee.customer.list({
      limit: 2,
      offset: offset,
      first_name: { is: 'John' },
    }).request();

    return {
      customers: result.list.map((obj) => obj.customer),
      next_offset: result.next_offset,
    };
  };

  const getCustomers = async () => {
    const { customers, next_offset } = await fetchCustomers();
    console.log('Offset:', next_offset); // Print the offset value

    // Fetching next set of customers
    await fetchCustomers(next_offset);
  };

  getCustomers().catch((err) => {
    console.log(err);
  });
```

### Using custom headers and custom fields:

```js
const result = await chargebee.customer
.create({ email: 'john@test.com', cf_host_url: 'http://xyz.com' }) //Add custom field in payload
.headers({
  'chargebee-event-email': 'all-disabled', // To disable webhooks
  'chargebee-request-origin-ip': '192.168.1.2',
})
.setIdempotencyKey("safeKey")
.request();

const customer = result.customer;
console.log(customer.cf_host_url);
```

### Creating an idempotent request

[Idempotency keys](https://apidocs.chargebee.com/docs/api/idempotency?prod_cat_ver=2) are passed along with request headers to allow a safe retry of POST requests.

```js
const result = await chargebee.customer
    .create({ email: 'john@test.com' })
    .setIdempotencyKey("safeKey")
    .request();
const customer = result.customer;
const headers = result.headers;
const isIdempotencyReplayed = result.isIdempotencyReplayed;
```

OR

```js
chargebee.customer.create({ email: 'john@test.com', cf_host_url: 'http://xyz.com' })
.setIdempotencyKey("safeKey")
.request(function(error,result) {
  if(error){
    //handle error
  }else{
    const customer = result.customer;
    const headers = result.headers;
    const isIdempotencyReplayed = result.isIdempotencyReplayed;
  }
});
```

### Passing API Keys at request level

```js
const newCust = await chargebee.customer.create({
  email: 'john@test.com',
  first_name: 'John',
  last_name: 'Doe'
}).request({
  site: '<YOUR_SITE_NAME>',
  api_key: '<YOUR_API_KEY>',
});
```

### Processing Webhooks - API Version Check

An attribute, <b>api_version</b>, is added to the [Event](https://apidocs.chargebee.com/docs/api/events) resource, which indicates the API version based on which the event content is structured. In your webhook servers, ensure this \_api_version* is the same as the [API version](https://apidocs.chargebee.com/docs/api#versions) used by your webhook server's client library.

## License

See the [LICENSE](./LICENSE) file.
