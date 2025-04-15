# Chargebee Node.js / TypeScript Client Library

This is the official [Node.js](http://nodejs.org/) library for integrating with Chargebee.

- 📘 For a complete reference of available APIs, check out our [API Documentation](https://apidocs.chargebee.com/docs/api/?lang=node).  
- 🧪 To explore and test API capabilities interactively, head over to our [API Explorer](https://api-explorer.chargebee.com).

If you're upgrading from an older version of [`chargebee-typescript`](https://www.npmjs.com/package/chargebee-typescript) or [`chargebee`](https://www.npmjs.com/package/chargebee/v/2.40.0), please refer to the [Migration Guide](https://github.com/chargebee/chargebee-node/wiki/Migration-guide-for-v3).

## Requirements

Node.js 18 or higher.

## Installation

Install the library with npm:

```sh
npm install chargebee
```
With pnpm:
```sh
pnpm add chargebee
```

With yarn:
```sh
yarn add chargebee
```

## Usage

The package needs to be configured with your site's API key, which is available under Configure Chargebee Section. Refer [here](https://www.chargebee.com/docs/2.0/api_keys.html) for more details.

If you're using ESM / TypeScript:

```typescript
import Chargebee from 'chargebee';

const chargebee = new Chargebee({
  site: "{{site}}",
  apiKey: "{{api-key}}",
});
```

Or using Common JS module system:

```javascript
const Chargebee = require('chargebee');

const chargebee = new Chargebee({
  site: "{{site}}",
  apiKey: "{{api-key}}",
});
```

### Using Async / Await

```typescript
try {
  const { customer } = await chargebee.customer.create({
    email: "john@test.com"
    // other params
  });
} catch (err) {
  // handle error
}
```

### Using filters in the List API

For pagination, `offset` is the parameter that is being used. The value used for this parameter must be the value returned for `next_offset` parameter in the previous API call.

```typescript
async function getAllCustomers() {
  const allCustomers: Customer[] = [];
  let offset: string | undefined = undefined;

  do {
    const listCustomersReponse = await chargebee.customer.list({
      limit: 2,
      offset,
      first_name: {
        is: "John"
      }
    });

    const customers = listCustomersReponse.list.map(
      (object) => object.customer
    );
    
    allCustomers.push(...customers);
    offset = listCustomersReponse.next_offset;
  } while (offset);

  console.log(allCustomers);
}
```

### Using custom headers and custom fields

```typescript
const { customer } = await chargebee.customer.create(
  {
    email: "john@test.com",
    cf_host_url: "http://xyz.com" // `cf_host_url` is a custom field in Customer object
  },
  {
    "chargebee-event-email": "all-disabled" // To disable webhooks
  }
);
```

### Creating an idempotent request

[Idempotency keys](https://apidocs.chargebee.com/docs/api/idempotency?prod_cat_ver=2) are passed along with request headers to allow a safe retry of POST requests.

```typescript
const { customer, isIdempotencyReplayed } = await chargebee.customer.create(
  { email: "john@test.com" },
  {
    "chargebee-idempotency-key": "eBs7iOFQuR7asUKHfddyxDDerOuF1JtFrLmDI" // Add idempotency key
  }
);
console.log("isIdempotencyReplayed: ", isIdempotencyReplayed);
```

### Creating multiple instances of Chargebee for different sites

```typescript
const chargebeeSiteUS = new Chargebee({
  apiKey: "{api-key}",
  site: "my-site-us"
});

const chargebeeSiteEU = new Chargebee({
  apiKey: "{api-key}",
  site: "my-site-eu"
});
```

### Processing Webhooks - API Version Check

An attribute `api_version` is added to the [Event](https://apidocs.chargebee.com/docs/api/events) resource, which indicates the API version based on which the event content is structured. In your webhook servers, ensure this `api_version` is the same as the [API version](https://apidocs.chargebee.com/docs/api#versions) used by your webhook server's client library.

## Feedback

If you find any bugs or have any questions / feedback, open an issue in this repository or reach out to us on dx@chargebee.com


## v2

Chargebee Node SDK v2 is deprecated. If you using v2, follow [this guide](https://github.com/chargebee/chargebee-node/wiki/Migration-guide-for-v3) to migrate to v3.
