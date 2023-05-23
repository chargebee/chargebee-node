# Chargebee Node Client Library - API V2

[![npm](https://img.shields.io/npm/v/chargebee.svg?maxAge=2592000)](https://www.npmjs.com/package/chargebee)
[![npm](https://img.shields.io/npm/dt/chargebee.svg?maxAge=2592000)](https://www.npmjs.com/package/chargebee)

This is the [node.js](http://nodejs.org/) library for integrating with Chargebee. Sign up for a Chargebee account [here](https://www.chargebee.com).

> **Note**
> Chargebee now supports two API versions - [V1](https://apidocs.chargebee.com/docs/api/v1) and [V2](https://apidocs.chargebee.com/docs/api), of which V2 is the latest release and all future developments will happen in V2. This library is for <b>API version V2</b>. If you’re looking for V1, head to [chargebee-v1 branch](https://github.com/chargebee/chargebee-node/tree/chargebee-v1).

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

```js
var chargebee = require('chargebee');

chargebee.configure({
  site: 'YOUR_SITE_NAME',
  api_key: 'YOUR_API_KEY',
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
    // access customer as result.response.customer;
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
    // access customer as result.response.customer;
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

### Accessing the response object

The response object returned by the `request()` method is generic response wrapper. You need to access the resource from it. For example,

- To access customer object.

```js
const result = await chargebee.customer.create({ email: 'john@test.com' }).request();
console.log(result.response.customer);
```

Other resources can be accessed by the same approach. For subscription, it will be `result.subscription`

- To access list response.

```js
const result = await chargebee.subscription
  .list({
    /* params */
  })
  .request();

// A list of Subscription objects
console.log(result.response.list.map((obj) => obj.subscription));
```

**Note**

If you have a `result` (or children further down the line) and are unsure what properties are available, you can use `Object.keys` to get a list of available accessor properties. Using `Object.keys` in the previous example would yield

```js
// ['list', 'next_offset']
console.log(Object.keys(result.response));
// ['1', '2', '3'], e.g. `result.list` is an array with 3 entries
console.log(Object.keys(result.response.list));
// ['activated_at', 'base_currency_code', ...]
// ['activated_at', 'base_currency_code', ...]
// ['activated_at', 'base_currency_code', ...]
// Which means we've reached the bottom and should have all the information available from this request
console.log(result.response.list.map((obj) => obj.subscription));
```

#### Using filters in the List API

For pagination: `offset` is the parameter that is being used. The value used for this parameter must be the value returned for `next_offset` parameter in the previous API call.

```js
const fetchCustomers = async (offset) => {
    const result = await chargebee.customer.list({
      limit: 2,
      offset: offset,
      first_name: { is: 'John' },
    }).request();

    return {
      customers: result.response.list.map((obj) => obj.customer),
      next_offset: result.response.next_offset,
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

#### Using custom headers and custom fields:

```js
const result = await chargebee.customer
.create({ email: 'john@test.com', cf_host_url: 'http://xyz.com' }) //Add custom field in payload
.headers({
  'chargebee-event-email': 'all-disabled', // To disable webhooks
  'chargebee-request-origin-ip': '192.168.1.2',
})
.setIdempotencyKey("safeKey")
.request();

const customer = result.response.customer;
console.log(customer.cf_host_url);
```

### Create an idempotent request

[Idempotency keys](https://apidocs.chargebee.com/docs/api/idempotency?prod_cat_ver=2) are passed along with request headers to allow a safe retry of POST requests.

```js
const result = await chargebee.customer
    .create({ email: 'john@test.com' })
    .setIdempotencyKey("safeKey")
    .request();
const customer = result.response.customer;
console.log(result.headers); // Retrieves response headers
console.log(result.isIdempotencyReplayed); // Retrieves idempotency replayed header
```

`isIdempotencyReplayed()` method can be accessed to differentiate between original and replayed requests.

### Processing Webhooks - API Version Check

An attribute, <b>api_version</b>, is added to the [Event](https://apidocs.chargebee.com/docs/api/events) resource, which indicates the API version based on which the event content is structured. In your webhook servers, ensure this \_api_version* is the same as the [API version](https://apidocs.chargebee.com/docs/api#versions) used by your webhook server's client library.

## Documentation

The full documentation can be found on the Chargebee API Docs:

[https://apidocs.chargebee.com/docs/api?lang=node](https://apidocs.chargebee.com/docs/api?lang=node)

## License

See the [LICENSE](./LICENSE) file.
