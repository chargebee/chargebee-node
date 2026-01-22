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

### Handle webhooks

Use the webhook handlers to parse and route webhook payloads from Chargebee with full TypeScript support.

#### Quick Start: Using the default `webhook` instance

The simplest way to handle webhooks is using the pre-configured `webhook` instance:

```typescript
import express from 'express';
import { webhook, type WebhookEvent } from 'chargebee';

const app = express();
app.use(express.json());

webhook.on('subscription_created', async (event: WebhookEvent) => {
  console.log(`Subscription created: ${event.id}`);
  const subscription = event.content.subscription;
  console.log(`Customer: ${subscription.customer_id}`);
});

webhook.on('error', (err: Error) => {
  console.error('Webhook error:', err.message);
});

app.post('/chargebee/webhooks', (req, res) => {
  webhook.handle(req.body, req.headers);
  res.status(200).send('OK');
});

app.listen(8080);
```

**Auto-configured Basic Auth:** The default `webhook` instance automatically configures Basic Auth validation if the following environment variables are set:

- `CHARGEBEE_WEBHOOK_USERNAME` - The expected username
- `CHARGEBEE_WEBHOOK_PASSWORD` - The expected password

When both are present, incoming webhook requests will be validated against these credentials. If not set, no authentication is applied.

#### Creating custom `WebhookHandler` instances

For more control or multiple webhook endpoints, create your own instances:

```typescript
import express from 'express';
import { WebhookHandler, basicAuthValidator } from 'chargebee';

const app = express();
app.use(express.json());

const handler = new WebhookHandler();

// Register event listeners using .on() - events are fully typed
handler.on('subscription_created', async (event) => {
  console.log(`Subscription created: ${event.id}`);
  const subscription = event.content.subscription;
  console.log(`Customer: ${subscription.customer_id}`);
  console.log(`Plan: ${subscription.plan_id}`);
});

handler.on('payment_succeeded', async (event) => {
  console.log(`Payment succeeded: ${event.id}`);
  const transaction = event.content.transaction;
  const customer = event.content.customer;
  console.log(`Amount: ${transaction.amount}, Customer: ${customer.email}`);
});

// Optional: Add request validator (e.g., Basic Auth)
handler.requestValidator = basicAuthValidator((username, password) => {
  return username === 'admin' && password === 'secret';
});

app.post('/chargebee/webhooks', (req, res) => {
  handler.handle(req.body, req.headers);
  res.status(200).send('OK');
});

app.listen(8080);
```

#### Low-level: Parse and handle events manually

For more control, you can parse webhook events manually:

```typescript
import express from 'express';
import Chargebee, { type WebhookEvent } from 'chargebee';

const app = express();
app.use(express.json());

app.post('/chargebee/webhooks', async (req, res) => {
  try {
    const event = req.body as WebhookEvent;
    
    switch (event.event_type) {
      case 'subscription_created':
        // Access event content with proper typing
        const subscription = event.content.subscription;
        console.log('Subscription created:', subscription.id);
        break;
        
      case 'payment_succeeded':
        const transaction = event.content.transaction;
        console.log('Payment succeeded:', transaction.amount);
        break;
        
      default:
        console.log('Unhandled event type:', event.event_type);
    }
    
    res.status(200).send('OK');
  } catch (err) {
    console.error('Error processing webhook:', err);
    res.status(500).send('Error processing webhook');
  }
});

app.listen(8080);
```

#### Handling Unhandled Events

By default, if an incoming webhook event type is not recognized or you haven't registered a corresponding callback handler, the SDK provides flexible options to handle these scenarios:

**Using the `unhandled_event` listener:**

```typescript
import { WebhookHandler } from 'chargebee';

const handler = new WebhookHandler();

handler.on('subscription_created', async (event) => {
  // Handle subscription created
});

// Gracefully handle events without registered listeners
handler.on('unhandled_event', async (event) => {
  console.log(`Received unhandled event: ${event.event_type}`);
  // Log for monitoring or store for later processing
});
```

**Using the `error` listener for error handling:**

If an error occurs during webhook processing (e.g., invalid JSON, validator failure), the SDK will emit an `error` event:

```typescript
const handler = new WebhookHandler();

handler.on('subscription_created', async (event) => {
  // Handle subscription created
});

// Catch any errors during webhook processing
handler.on('error', (err) => {
  console.error('Webhook processing error:', err);
  // Log to monitoring service, alert team, etc.
});
```

**Best Practices:**

- Use `unhandled_event` listener to acknowledge unknown events (return 200 OK) and log them
- Use `error` listener to catch and handle exceptions thrown during event processing
- Both listeners help ensure your webhook endpoint remains stable even when new event types are introduced by Chargebee

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
const subscriptionActivatedEvent: WebhookEvent<WebhookEventType.SubscriptionActivated> = result.event;
const subscription = subscriptionActivatedEvent.content.subscription;
```

#### Notes

* `WebhookEvent<T>` provides type hinting for the event payload, making it easier to work with specific event structures.
* Use the `WebhookEventType` to specify the exact event type (e.g., `SubscriptionCreated`, `InvoiceGenerated`, etc.).
* This approach ensures you get proper IntelliSense and compile-time checks when accessing event fields.

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
