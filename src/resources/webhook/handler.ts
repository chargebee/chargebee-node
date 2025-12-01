import { EventEmitter } from 'node:events';
import { WebhookEvent } from './content.js';

export type EventType = import('chargebee').EventTypeEnum;

export interface WebhookEventMap extends Record<EventType, WebhookEvent> {
  unhandled_event: WebhookEvent;
  error: unknown;
}

export type WebhookEventListener<K extends keyof WebhookEventMap> = (
  event: WebhookEventMap[K],
) => Promise<void> | void;

export class WebhookHandler extends EventEmitter {
  requestValidator?: (
    headers: Record<string, string | string[] | undefined>,
  ) => void;

  on<K extends keyof WebhookEventMap>(
    eventName: K,
    listener: WebhookEventListener<K>,
  ): this {
    return super.on(eventName, listener as (...args: unknown[]) => void);
  }

  once<K extends keyof WebhookEventMap>(
    eventName: K,
    listener: WebhookEventListener<K>,
  ): this {
    return super.once(eventName, listener as (...args: unknown[]) => void);
  }

  off<K extends keyof WebhookEventMap>(
    eventName: K,
    listener: WebhookEventListener<K>,
  ): this {
    return super.off(eventName, listener as (...args: unknown[]) => void);
  }

  emit<K extends keyof WebhookEventMap>(
    eventName: K,
    event: WebhookEventMap[K],
  ): boolean {
    return super.emit(eventName, event);
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
      } else if (this.listenerCount('unhandled_event') > 0) {
        this.emit('unhandled_event', event);
      }
    } catch (err) {
      this.emit('error', err);
    }
  }
}

export type { WebhookEvent } from './content.js';
