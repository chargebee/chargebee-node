/**
 * Runs inside a Node worker thread ({ type: 'module' }) to ensure the ESM
 * worker bundle parses and exposes webhook exports in an isolated context.
 */
import { parentPort, workerData } from 'node:worker_threads';
import { pathToFileURL } from 'node:url';
import path from 'node:path';

const required = [
  'default',
  'WebhookEventType',
  'WebhookContentType',
  'basicAuthValidator',
  'WebhookError',
  'WebhookAuthenticationError',
  'WebhookPayloadValidationError',
  'WebhookPayloadParseError',
];

try {
  const root = workerData.root;
  const bundlePath = path.join(root, 'esm/chargebee.esm.worker.js');
  const mod = await import(pathToFileURL(bundlePath).href);
  const missing = required.filter((k) => mod[k] === undefined);
  if (missing.length) {
    parentPort.postMessage({ ok: false, error: 'missing exports', missing });
  } else {
    parentPort.postMessage({ ok: true });
  }
} catch (err) {
  parentPort.postMessage({
    ok: false,
    error: err instanceof Error ? err.message : String(err),
    stack: err instanceof Error ? err.stack : undefined,
  });
}
