import { EventEmitter } from 'node:events';
import { WebhookEvent } from './content.js';
import { basicAuthValidator } from './auth.js';
import { WebhookEventType, WebhookContentType } from './eventType.js';

export { WebhookEventType, WebhookContentType };

export type EventType = import('chargebee').EventTypeEnum;

/**
 * Context object passed to webhook event listeners.
 * Wraps the event data with optional framework-specific request/response objects.
 *
 * @typeParam ReqT - Framework-specific request type (e.g., `express.Request`)
 * @typeParam ResT - Framework-specific response type (e.g., `express.Response`)
 *
 * @example
 * ```typescript
 * handler.on('subscription_created', ({ event, request, response }) => {
 *   console.log('Event ID:', event.id);
 *   console.log('Event Type:', event.event_type);
 *   response?.status(200).send('OK');
 * });
 * ```
 */
export interface WebhookContext<ReqT = unknown, ResT = unknown> {
  /** The parsed webhook event from Chargebee */
  event: WebhookEvent;
  /** Framework-specific request object (Express, Fastify, etc.) */
  request?: ReqT;
  /** Framework-specific response object (Express, Fastify, etc.) */
  response?: ResT;
}

/**
 * Event map defining all available webhook events and their payload types.
 *
 * Includes:
 * - All Chargebee event types (e.g., `subscription_created`, `customer_changed`)
 * - `unhandled_event` - Emitted when an event has no registered listener
 * - `error` - Emitted when an error occurs during webhook processing
 *
 * @typeParam ReqT - Framework-specific request type
 * @typeParam ResT - Framework-specific response type
 */
export interface WebhookErrorContext<ReqT = unknown, ResT = unknown> {
  /** Framework-specific request object (Express, Fastify, etc.) */
  request?: ReqT;
  /** Framework-specific response object (Express, Fastify, etc.) */
  response?: ResT;
}

export interface WebhookEventMap<ReqT, ResT>
  extends Record<EventType, [WebhookContext<ReqT, ResT>]> {
  unhandled_event: [WebhookContext<ReqT, ResT>];
  error: [Error, WebhookErrorContext<ReqT, ResT>];
}

/**
 * Type for webhook event listener functions.
 *
 * @typeParam ReqT - Framework-specific request type
 * @typeParam ResT - Framework-specific response type
 * @typeParam K - The specific event type key from WebhookEventMap
 */
export type WebhookEventListener<
  ReqT,
  ResT,
  K extends keyof WebhookEventMap<ReqT, ResT>,
> = (...args: WebhookEventMap<ReqT, ResT>[K]) => Promise<void> | void;

/**
 * Validator function type for authenticating webhook requests.
 *
 * Receives HTTP headers and should throw an error if authentication fails.
 * Can be synchronous or asynchronous (e.g., for database lookups).
 *
 * @param headers - HTTP headers from the incoming request
 * @throws Error if authentication fails
 *
 * @example
 * ```typescript
 * // Custom validator example
 * const customValidator: RequestValidator = async (headers) => {
 *   const apiKey = headers['x-api-key'];
 *   if (apiKey !== process.env.WEBHOOK_API_KEY) {
 *     throw new Error('Invalid API key');
 *   }
 * };
 * ```
 */
export type RequestValidator = (
  headers: Record<string, string | string[] | undefined>,
) => void | Promise<void>;

/**
 * Configuration options for creating a WebhookHandler instance.
 */
export interface WebhookHandlerOptions {
  /**
   * Optional validator function to authenticate incoming webhook requests.
   *
   * Common use cases:
   * - Basic Auth validation using `basicAuthValidator()`
   * - Custom header validation (API keys, signatures)
   * - Async validation against a database
   *
   * If not provided, a warning will be logged on first webhook handling.
   * Chargebee supports no-auth webhooks, so this is optional but recommended.
   *
   * @example
   * ```typescript
   * // Using built-in Basic Auth validator
   * const handler = createHandler({
   *   requestValidator: basicAuthValidator((u, p) => u === 'user' && p === 'pass'),
   * });
   * ```
   */
  requestValidator?: RequestValidator;
}

/**
 * Options for the {@link WebhookHandler.handle} method.
 *
 * @typeParam ReqT - Framework-specific request type (e.g., `express.Request`)
 * @typeParam ResT - Framework-specific response type (e.g., `express.Response`)
 */
export interface HandleOptions<ReqT = unknown, ResT = unknown> {
  /**
   * The raw request body as a string or pre-parsed JSON object.
   * If a string, it will be parsed as JSON.
   */
  body: string | object;
  /**
   * HTTP headers from the incoming request.
   * Required if a `requestValidator` is configured; otherwise authentication is skipped.
   */
  headers?: Record<string, string | string[] | undefined>;
  /**
   * Framework-specific request object passed through to event handlers.
   * Useful for accessing additional request properties in handlers.
   */
  request?: ReqT;
  /**
   * Framework-specific response object passed through to event handlers.
   * Handlers should use this to send HTTP responses back to Chargebee.
   *
   * @remarks
   * **Important:** Always send a response (e.g., `response.status(200).send('OK')`)
   * to prevent Chargebee from retrying the webhook.
   */
  response?: ResT;
}

/**
 * Webhook handler for processing Chargebee webhook events.
 *
 * Extends Node.js `EventEmitter` to provide a familiar, event-driven API for
 * handling webhooks. Supports type-safe event listeners with full TypeScript
 * autocomplete for all Chargebee event types.
 *
 * @typeParam ReqT - Framework-specific request type (e.g., `express.Request`)
 * @typeParam ResT - Framework-specific response type (e.g., `express.Response`)
 *
 * @remarks
 * **Lifecycle Warning:** Event listeners persist for the lifetime of the handler
 * instance. Register handlers once at application startup, not per-request.
 *
 * @example Basic Usage with Express
 * ```typescript
 * import express from 'express';
 * import { createHandler, basicAuthValidator } from 'chargebee/webhook';
 *
 * const app = express();
 * app.use(express.json());
 *
 * // Create handler with Basic Auth
 * const webhookHandler = createHandler({
 *   requestValidator: basicAuthValidator((u, p) => u === 'admin' && p === 'secret'),
 * });
 *
 * // Register event listeners ONCE at startup (not per-request!)
 * webhookHandler.on('subscription_created', async ({ event, response }) => {
 *   console.log('New subscription:', event.content.subscription.id);
 *   response?.status(200).send('OK');
 * });
 *
 * webhookHandler.on('error', (error, { response }) => {
 *   console.error('Webhook error:', error);
 *   response?.status(500).send('Error');
 * });
 *
 * // Route handler
 * app.post('/webhooks', async (req, res) => {
 *   await webhookHandler.handle({
 *     body: req.body,
 *     headers: req.headers,
 *     request: req,
 *     response: res,
 *   });
 * });
 * ```
 *
 * @example Available Event Types
 * ```typescript
 * // Subscription events
 * handler.on('subscription_created', ({ event }) => { ... });
 * handler.on('subscription_changed', ({ event }) => { ... });
 * handler.on('subscription_cancelled', ({ event }) => { ... });
 *
 * // Customer events
 * handler.on('customer_created', ({ event }) => { ... });
 * handler.on('customer_changed', ({ event }) => { ... });
 *
 * // Payment events
 * handler.on('payment_succeeded', ({ event }) => { ... });
 * handler.on('payment_failed', ({ event }) => { ... });
 *
 * // Special events
 * handler.on('unhandled_event', ({ event }) => {
 *   console.log('Unhandled event type:', event.event_type);
 * });
 *
 * handler.on('error', (error, { response }) => {
 *   console.error('Processing error:', error);
 *   response?.status(500).send('Error');
 * });
 * ```
 *
 * @example Async Handlers
 * ```typescript
 * // Handlers can be async - errors are captured and emitted to 'error' event
 * handler.on('subscription_created', async ({ event, response }) => {
 *   await saveToDatabase(event.content.subscription);
 *   await sendWelcomeEmail(event.content.customer);
 *   response?.status(200).send('OK');
 * });
 * ```
 */
export class WebhookHandler<
  ReqT = unknown,
  ResT = unknown,
> extends EventEmitter<WebhookEventMap<ReqT, ResT>> {
  private _requestValidator?: RequestValidator;
  private _noAuthWarningShown = false;

  /**
   * Creates a new WebhookHandler instance.
   *
   * @param options - Optional configuration options
   *
   * @example
   * ```typescript
   * // Without authentication (not recommended for production)
   * const handler = new WebhookHandler();
   *
   * // With Basic Auth
   * const handler = new WebhookHandler({
   *   requestValidator: basicAuthValidator((u, p) => u === 'user' && p === 'pass'),
   * });
   * ```
   */
  constructor(options?: WebhookHandlerOptions) {
    super({ captureRejections: true });
    this._requestValidator = options?.requestValidator;
  }

  /**
   * Gets the current request validator function.
   *
   * @returns The configured validator or `undefined` if no authentication is set
   *
   * @example
   * ```typescript
   * if (handler.requestValidator) {
   *   console.log('Authentication is configured');
   * }
   * ```
   */
  get requestValidator(): RequestValidator | undefined {
    return this._requestValidator;
  }

  /**
   * Sets or updates the request validator function.
   *
   * Use this to configure authentication after handler creation,
   * or to change validators at runtime.
   *
   * @param validator - The validator function, or `undefined` to disable authentication
   *
   * @example
   * ```typescript
   * // Set up Basic Auth after creation
   * handler.requestValidator = basicAuthValidator((u, p) => u === 'admin' && p === 'secret');
   *
   * // Custom header validation
   * handler.requestValidator = (headers) => {
   *   if (headers['x-webhook-secret'] !== process.env.WEBHOOK_SECRET) {
   *     throw new Error('Invalid webhook secret');
   *   }
   * };
   *
   * // Disable authentication (not recommended)
   * handler.requestValidator = undefined;
   * ```
   */
  set requestValidator(validator: RequestValidator | undefined) {
    this._requestValidator = validator;
  }

  /**
   * Registers an event listener for a specific webhook event type.
   *
   * This method is inherited from Node.js `EventEmitter` but is documented here
   * for clarity on available Chargebee webhook events.
   *
   * @param eventName - The Chargebee event type to listen for (e.g., `'subscription_created'`)
   * @param listener - Callback function invoked when the event occurs
   * @returns This handler instance for method chaining
   *
   * @remarks
   * **Memory Leak Warning:** Listeners persist for the handler's lifetime.
   * Always register listeners once at application startup, never inside
   * request handlers or loops.
   *
   * @example Available Events
   * ```typescript
   * // Chargebee business events
   * handler.on('subscription_created', ({ event, response }) => { ... });
   * handler.on('subscription_changed', ({ event, response }) => { ... });
   * handler.on('subscription_cancelled', ({ event, response }) => { ... });
   * handler.on('customer_created', ({ event, response }) => { ... });
   * handler.on('payment_succeeded', ({ event, response }) => { ... });
   * handler.on('invoice_generated', ({ event, response }) => { ... });
   * // ... and many more - see WebhookEventType enum for full list
   *
   * // Special events
   * handler.on('unhandled_event', ({ event }) => {
   *   // Called when no listener exists for the event type
   *   console.log('Unhandled:', event.event_type);
   * });
   *
   * handler.on('error', (error, { response }) => {
   *   // Called on validation errors, parse errors, or handler errors
   *   console.error('Webhook error:', error);
   *   response?.status(500).send('Error');
   * });
   * ```
   *
   * @example Correct Usage
   * ```typescript
   * // ✅ GOOD: Register once at startup
   * const handler = createHandler();
   * handler.on('subscription_created', handleSubscription);
   * handler.on('error', handleError);
   *
   * app.post('/webhooks', async (req, res) => {
   *   await handler.handle({ body: req.body, headers: req.headers, response: res });
   * });
   * ```
   *
   * @example Incorrect Usage
   * ```typescript
   * // ❌ BAD: Don't register inside request handlers - causes memory leak!
   * app.post('/webhooks', async (req, res) => {
   *   handler.on('subscription_created', async () => { ... }); // Memory leak!
   *   await handler.handle({ ... });
   * });
   * ```
   */
  // Note: on() is inherited from EventEmitter with proper typing via WebhookEventMap

  /**
   * Handles an incoming webhook request from Chargebee.
   *
   * This method:
   * 1. Validates the request using the configured `requestValidator` (if any)
   * 2. Parses the request body (if it's a string)
   * 3. Validates required fields (`event_type`, `id`)
   * 4. Emits the appropriate event to registered listeners
   *
   * @param options - The webhook request options
   * @returns A promise that resolves when the event has been emitted
   *
   * @throws Error if no `error` listener is registered and an error occurs
   *
   * @remarks
   * **Async Behavior:** This method emits events but does not wait for async
   * listeners to complete. Errors in async listeners are captured via
   * `captureRejections` and emitted to the `error` event.
   *
   * **Response Handling:** The handler does NOT automatically send HTTP responses.
   * Your event listeners must call `response.status(200).send('OK')` or similar.
   *
   * @example Express Integration
   * ```typescript
   * app.post('/webhooks', async (req, res) => {
   *   try {
   *     await handler.handle({
   *       body: req.body,
   *       headers: req.headers,
   *       request: req,
   *       response: res,
   *     });
   *   } catch (error) {
   *     // Only reached if no 'error' listener is registered
   *     res.status(500).send('Internal error');
   *   }
   * });
   * ```
   *
   * @example Fastify Integration
   * ```typescript
   * fastify.post('/webhooks', async (request, reply) => {
   *   await handler.handle({
   *     body: request.body,
   *     headers: request.headers,
   *     request,
   *     response: reply,
   *   });
   * });
   * ```
   *
   * @example Raw Node.js HTTP
   * ```typescript
   * http.createServer(async (req, res) => {
   *   if (req.method === 'POST' && req.url === '/webhooks') {
   *     const body = await getBody(req);
   *     await handler.handle({ body, headers: req.headers, response: res });
   *   }
   * });
   * ```
   */
  async handle(options: HandleOptions<ReqT, ResT>): Promise<void> {
    const { body, headers, request, response } = options;
    try {
      if (this._requestValidator) {
        if (!headers) {
          console.warn(
            '[chargebee] Warning: Request validator is configured but no headers were passed. ' +
              'Authentication check skipped. If this is intentional (no-auth webhook), ' +
              'you can remove the requestValidator or ignore this warning.',
          );
        } else {
          await this._requestValidator(headers);
        }
      } else if (!this._noAuthWarningShown) {
        this._noAuthWarningShown = true;
        console.warn(
          '[chargebee] Warning: No webhook authentication configured. ' +
            'Consider using basicAuthValidator() or a custom requestValidator for production. ' +
            'See: https://www.chargebee.com/docs/billing/2.0/site-configuration/webhook_settings#basic-authentication',
        );
      }

      const event: WebhookEvent =
        typeof body === 'string' ? JSON.parse(body) : (body as WebhookEvent);

      // Validate required fields
      if (!event || typeof event !== 'object' || Array.isArray(event)) {
        throw new Error('Invalid webhook payload: body must be a JSON object');
      }
      if (!event.event_type || typeof event.event_type !== 'string') {
        throw new Error(
          'Invalid webhook payload: missing or invalid event_type',
        );
      }
      if (!event.id) {
        throw new Error('Invalid webhook payload: missing event id');
      }

      const context: WebhookContext<ReqT, ResT> = {
        event,
        request,
        response,
      };

      const eventType = event.event_type as keyof WebhookEventMap<ReqT, ResT>;

      if (this.listenerCount(eventType) > 0) {
        this.emit(eventType, context);
      } else {
        this.emit('unhandled_event', context);
      }
    } catch (err) {
      const error = err instanceof Error ? err : new Error(String(err));
      if (this.listenerCount('error') === 0) {
        console.warn(
          '[chargebee] Webhook error with no handler:',
          error.message,
        );
        throw error;
      }
      this.emit('error', error, { request, response });
    }
  }
}

/**
 * Creates a new WebhookHandler with custom configuration.
 *
 * This is the recommended factory function for creating webhook handlers.
 * Use this when you need explicit control over authentication configuration.
 *
 * @typeParam ReqT - Framework-specific request type (e.g., `express.Request`)
 * @typeParam ResT - Framework-specific response type (e.g., `express.Response`)
 *
 * @param options - Optional configuration for the handler
 * @returns A new WebhookHandler instance
 *
 * @remarks
 * For multi-route or multi-tenant scenarios, create separate handler instances
 * to maintain isolation and avoid event listener conflicts.
 *
 * @example Basic Auth Configuration
 * ```typescript
 * import { createHandler, basicAuthValidator } from 'chargebee/webhook';
 *
 * const handler = createHandler({
 *   requestValidator: basicAuthValidator((username, password) => {
 *     return username === 'admin' && password === 'secret';
 *   }),
 * });
 * ```
 *
 * @example Custom Authentication
 * ```typescript
 * const handler = createHandler({
 *   requestValidator: async (headers) => {
 *     const signature = headers['x-chargebee-signature'];
 *     const isValid = await verifySignature(signature);
 *     if (!isValid) throw new Error('Invalid signature');
 *   },
 * });
 * ```
 *
 * @example Multi-Route Setup
 * ```typescript
 * // Separate handlers for different webhook endpoints
 * const billingHandler = createHandler({ ... });
 * const notificationHandler = createHandler({ ... });
 *
 * billingHandler.on('subscription_created', handleBillingEvent);
 * notificationHandler.on('subscription_created', sendNotification);
 *
 * app.post('/webhooks/billing', (req, res) => billingHandler.handle({ ... }));
 * app.post('/webhooks/notifications', (req, res) => notificationHandler.handle({ ... }));
 * ```
 *
 * @example Without Authentication (Development Only)
 * ```typescript
 * // ⚠️ Not recommended for production
 * const handler = createHandler();
 * ```
 */
export function createHandler<ReqT = unknown, ResT = unknown>(
  options?: WebhookHandlerOptions,
): WebhookHandler<ReqT, ResT> {
  return new WebhookHandler<ReqT, ResT>(options);
}

/**
 * Creates a WebhookHandler with auto-configured Basic Auth from environment variables.
 *
 * This is a convenience function that automatically configures Basic Auth
 * when the following environment variables are set:
 * - `CHARGEBEE_WEBHOOK_USERNAME`
 * - `CHARGEBEE_WEBHOOK_PASSWORD`
 *
 * If these environment variables are not set, the handler is created without
 * authentication (a warning will be logged on first webhook handling).
 *
 * @typeParam ReqT - Framework-specific request type (e.g., `express.Request`)
 * @typeParam ResT - Framework-specific response type (e.g., `express.Response`)
 *
 * @returns A new WebhookHandler instance with optional auto-configured auth
 *
 * @remarks
 * This function is used internally by `chargebee.webhooks` to provide a
 * pre-configured handler on the Chargebee instance.
 *
 * @example Environment-Based Setup
 * ```bash
 * # .env file
 * CHARGEBEE_WEBHOOK_USERNAME=webhook_user
 * CHARGEBEE_WEBHOOK_PASSWORD=webhook_secret
 * ```
 *
 * ```typescript
 * import { createDefaultHandler } from 'chargebee/webhook';
 *
 * // Auth is automatically configured from env vars
 * const handler = createDefaultHandler();
 *
 * handler.on('subscription_created', ({ event, response }) => {
 *   console.log('Subscription:', event.content.subscription.id);
 *   response?.status(200).send('OK');
 * });
 * ```
 *
 * @example Overriding Auto-Configured Auth
 * ```typescript
 * const handler = createDefaultHandler();
 *
 * // Override with custom validator if needed
 * handler.requestValidator = myCustomValidator;
 * ```
 *
 * @see {@link createHandler} for explicit configuration without environment variables
 */
export function createDefaultHandler<
  ReqT = unknown,
  ResT = unknown,
>(): WebhookHandler<ReqT, ResT> {
  const handler = new WebhookHandler<ReqT, ResT>();
  const username = process.env.CHARGEBEE_WEBHOOK_USERNAME;
  const password = process.env.CHARGEBEE_WEBHOOK_PASSWORD;
  if (username && password) {
    handler.requestValidator = basicAuthValidator(
      (u, p) => u === username && p === password,
    );
  }
  return handler;
}

export type { WebhookEvent } from './content.js';
export { basicAuthValidator, type CredentialValidator } from './auth.js';
