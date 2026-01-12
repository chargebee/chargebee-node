# Chargebee Node.js / TypeScript Client Library

> [!NOTE]
> [![Join Discord](https://img.shields.io/badge/Discord-Early%20Access-blue?logo=discord&logoColor=white)](https://discord.gg/gpsNqnhDm2)
>
> We are trialing a Discord server for developers building with Chargebee. Limited spots are open on a first-come basis. Join [here](https://discord.gg/S3SXDzXHAg) if interested.


> [!TIP]
> If you are using [Next.js](https://nextjs.org/) or [Express](https://expressjs.com/), check out [chargebee-init](https://www.npmjs.com/package/chargebee-init) to get started quickly with the adapters for these frameworks. Learn more about it in this [tutorial](https://www.chargebee.com/tutorials/chargebee-init-nextjs-integration/).


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

### Retry Handling

Chargebee's SDK includes built-in retry logic to handle temporary network issues and server-side errors. This feature is **disabled by default** but can be **enabled when needed**.

#### Key features include:

- **Automatic retries for specific HTTP status codes**: Retries are automatically triggered for status codes `500`, `502`, `503`, and `504`.
- **Exponential backoff**: Retry delays increase exponentially to prevent overwhelming the server.
- **Rate limit management**: If a `429 Too Many Requests` response is received with a `Retry-After` header, the SDK waits for the specified duration before retrying.  
  > *Note: Exponential backoff and max retries do not apply in this case.*
- **Customizable retry behavior**: Retry logic can be configured using the `retryConfig` parameter in the environment configuration.

#### Example: Customizing Retry Logic

You can enable and configure the retry logic by passing a `retryConfig` object when initializing the Chargebee environment:

```typescript
import Chargebee from 'chargebee';

const chargebee = new Chargebee({
  site: "{{site}}",
  apiKey: "{{api-key}}",
  retryConfig: {
    enabled: true, // Enable retry logic
    maxRetries: 5, // Maximum number of retries
    delayMs: 300, // Initial delay between retries in milliseconds
    retryOn: [500, 502, 503, 504], // HTTP status codes to retry on
  },
});

try {
  const { customer } = await chargebee.customer.create({
    email: "john@test.com",
  });
  console.log("Customer created:", customer);
} catch (err) {
  console.error("Request failed after retries:", err);
}
```

#### Example: Rate Limit retry logic

You can enable and configure the retry logic for rate-limit by passing a `retryConfig` object when initializing the Chargebee environment:

```typescript
import Chargebee from 'chargebee';

const chargebee = new Chargebee({
  site: "{{site}}",
  apiKey: "{{api-key}}",
  retryConfig: {
    enabled: true,
    retryOn: [429], 
  },
});

try {
  const { customer } = await chargebee.customer.create({
    email: "john@test.com",
  });
  console.log("Customer created:", customer);
} catch (err) {
  console.error("Request failed after retries:", err);
}
```

### Webhook Type Mapping
To improve type safety and gain better autocompletion when working with webhooks, you can leverage the `WebhookEvent` resource. This allows you to strongly type the event content for a particular webhook event.

#### Example

```ts
import Chargebee, { WebhookEventType, WebhookEvent } from "chargebee";

const result = await chargebeeInstance.event.retrieve("{event-id}");
const subscriptionActivatedEvent: WebhookEvent<typeof WebhookEventType.SubscriptionActivated> = result.event;
const subscription = subscriptionActivatedEvent.content.subscription;
```

You can also use `WebhookEventType` in switch statements for runtime event handling:

```ts
import { WebhookEventType, WebhookEvent } from "chargebee";

function handleWebhook(event: WebhookEvent) {
  switch (event.event_type) {
    case WebhookEventType.SubscriptionCreated:
      console.log("Subscription created:", event.content.subscription?.id);
      break;
    case WebhookEventType.PaymentSucceeded:
      console.log("Payment succeeded:", event.content.transaction?.id);
      break;
    default:
      console.log("Unhandled event:", event.event_type);
  }
}
```

#### Notes

* `WebhookEvent<T>` provides type hinting for the event payload, making it easier to work with specific event structures.
* Use `WebhookEventType` to specify the exact event type (e.g., `SubscriptionCreated`, `InvoiceGenerated`, etc.).
* `WebhookEventType` is available at runtime, so you can use it in switch statements and comparisons.
* `WebhookContentType` is deprecated but still available for backward compatibility.

### Custom HTTP Client

The SDK supports injecting a **custom HTTP client**, giving you full flexibility to control how API requests are made and handled. This feature is useful if you want to integrate your own networking stack, add custom logging, implement telemetry, or handle retries in a specific way.

With this enhancement, you can replace the default HTTP client with your own implementation by passing a custom client that adheres to the `HttpClientInterface` contract when initializing the Chargebee instance.

```js
const chargebee = new Chargebee({
    site: "{site}",
    apiKey: "{key}",
    httpClient: new CustomHttpClient(),
});
```

#### Notes
* Your custom client must implement the `HttpClientInterface` provided by the SDK.
* This feature is especially useful in environments with strict networking policies or where advanced observability is required.
* Example implementations are available under:

  * [`/examples/customHttpClient/axiosHttpClient.ts`](./examples/customHttpClient/axiosHttpClient.ts)
  * [`/examples/customHttpClient/kyHttpClient.ts`](./examples/customHttpClient/kyHttpClient.ts)
* You may need to implement custom conversion logic when integrating third-party HTTP libraries, as their request and response formats might not directly align with the `HttpClientInterface` expected by the SDK.

These examples demonstrate how to implement and inject custom clients using `axios` and `ky`, respectively.

## Feedback

If you find any bugs or have any questions / feedback, open an issue in this repository or reach out to us on dx@chargebee.com


## v2

Chargebee Node SDK v2 is deprecated. If you using v2, follow [this guide](https://github.com/chargebee/chargebee-node/wiki/Migration-guide-for-v3) to migrate to v3.
