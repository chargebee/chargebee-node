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

/**
 * Options for the handle() method.
 */
export interface HandleOptions<ReqT = unknown, ResT = unknown> {
  /** The raw request body (string) or pre-parsed object */
  body: string | object;
  /** Optional HTTP headers for validation */
  headers?: Record<string, string | string[] | undefined>;
  /** Optional framework-specific request object (Express, Fastify, etc.) */
  request?: ReqT;
  /** Optional framework-specific response object (Express, Fastify, etc.) */
  response?: ResT;
}

export class WebhookHandler<
  ReqT = unknown,
  ResT = unknown,
> extends EventEmitter<WebhookEventMap<ReqT, ResT>> {
  private _requestValidator?: RequestValidator;
  private _noAuthWarningShown = false;

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
   * @param options - Handle options containing body, headers, request, and response
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
            'See: https://apidocs.chargebee.com/docs/api/webhooks',
        );
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

/**
 * Creates a WebhookHandler with auto-configured Basic Auth from environment variables.
 * If CHARGEBEE_WEBHOOK_USERNAME and CHARGEBEE_WEBHOOK_PASSWORD are set,
 * the handler will automatically validate incoming requests against those credentials.
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
