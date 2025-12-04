import { EventEmitter } from 'node:events';
import { WebhookEvent } from './content.js';
import { basicAuthValidator } from './auth.js';

export type EventType = import('chargebee').EventTypeEnum;

export interface WebhookEventMap extends Record<EventType, [WebhookEvent]> {
  unhandled_event: [WebhookEvent];
  error: [Error];
}

export type WebhookEventListener<K extends keyof WebhookEventMap> = (
  ...args: WebhookEventMap[K]
) => Promise<void> | void;

export class WebhookHandler extends EventEmitter<WebhookEventMap> {
  requestValidator?: (
    headers: Record<string, string | string[] | undefined>,
  ) => void;

  constructor() {
    super({ captureRejections: true });
  }
  
  handle(
    body: string | object,
    headers?: Record<string, string | string[] | undefined>,
  ): void {
    try {
      if (this.requestValidator && headers) {
        this.requestValidator(headers);
      }

      const event: WebhookEvent =
        typeof body === 'string' ? JSON.parse(body) : (body as WebhookEvent);

      const eventType = event.event_type as keyof WebhookEventMap;

      if (this.listenerCount(eventType) > 0) {
        this.emit(eventType, event);
      } else {
        this.emit('unhandled_event', event);
      }
    } catch (err) {
      this.emit('error', err instanceof Error ? err : new Error(String(err)));
    }
  }
}

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
