import { EventEmitter } from 'node:events';
import { WebhookEvent } from './content.js';
import { basicAuthValidator } from './auth.js';
import { WebhookEventType, WebhookContentType } from './eventType.js';

export { WebhookEventType, WebhookContentType };

export type EventType = import('chargebee').EventTypeEnum;

/**
 * Context object passed to webhook event listeners.
 * Wraps the event data with optional framework-specific request/response objects.
 */
export interface WebhookContext<ReqT = unknown, ResT = unknown> {
  /** The parsed webhook event from Chargebee */
  event: WebhookEvent;
  /** Framework-specific request object (Express, Fastify, etc.) */
  request?: ReqT;
  /** Framework-specific response object (Express, Fastify, etc.) */
  response?: ResT;
}

export interface WebhookEventMap<ReqT, ResT>
  extends Record<EventType, [WebhookContext<ReqT, ResT>]> {
  unhandled_event: [WebhookContext<ReqT, ResT>];
  error: [Error];
}

export type WebhookEventListener<
  ReqT,
  ResT,
  K extends keyof WebhookEventMap<ReqT, ResT>,
> = (...args: WebhookEventMap<ReqT, ResT>[K]) => Promise<void> | void;

/**
 * Validator function type for authenticating webhook requests.
 * Can be synchronous or asynchronous.
 */
export type RequestValidator = (
  headers: Record<string, string | string[] | undefined>,
) => void | Promise<void>;

/**
 * Configuration options for WebhookHandler.
 */
export interface WebhookHandlerOptions {
  /**
   * Optional validator function to authenticate incoming webhook requests.
   * Typically used for Basic Auth validation.
   * Can be sync or async - throw an error to reject the request.
   */
  requestValidator?: RequestValidator;
}

export class WebhookHandler<
  ReqT = unknown,
  ResT = unknown,
> extends EventEmitter<WebhookEventMap<ReqT, ResT>> {
  private _requestValidator?: RequestValidator;

  constructor(options?: WebhookHandlerOptions) {
    super({ captureRejections: true });
    this._requestValidator = options?.requestValidator;
  }

  /**
   * Gets the current request validator.
   */
  get requestValidator(): RequestValidator | undefined {
    return this._requestValidator;
  }

  /**
   * Sets a new request validator.
   */
  set requestValidator(validator: RequestValidator | undefined) {
    this._requestValidator = validator;
  }

  /**
   * Handles an incoming webhook request.
   * Validates the request (if validator configured), parses the body,
   * and emits the appropriate event.
   *
   * @param body - The raw request body (string) or pre-parsed object
   * @param headers - Optional HTTP headers for validation
   * @param request - Optional framework-specific request object
   * @param response - Optional framework-specific response object
   */
  async handle(
    body: string | object,
    headers?: Record<string, string | string[] | undefined>,
    request?: ReqT,
    response?: ResT,
  ): Promise<void> {
    try {
      if (this._requestValidator && headers) {
        await this._requestValidator(headers);
      }

      const event: WebhookEvent =
        typeof body === 'string' ? JSON.parse(body) : (body as WebhookEvent);

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
      this.emit('error', err instanceof Error ? err : new Error(String(err)));
    }
  }
}

// Default instance for simple use cases
const webhook = new WebhookHandler();

// Auto-configure basic auth if env vars are present
const username = process.env.CHARGEBEE_WEBHOOK_USERNAME;
const password = process.env.CHARGEBEE_WEBHOOK_PASSWORD;

if (username && password) {
  webhook.requestValidator = basicAuthValidator(
    (u, p) => u === username && p === password,
  );
}

export default webhook;

export type { WebhookEvent } from './content.js';
export { basicAuthValidator, type CredentialValidator } from './auth.js';
