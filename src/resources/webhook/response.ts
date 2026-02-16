type NodeLike = {
  setHeader(name: string, value: string | readonly string[]): unknown;
};

type ReplyLike = {
  header?(name: string, value: string): unknown; // e.g. fastify/hono-style
  set?(name: string, value: string): unknown;    // e.g. koa ctx.set
};

type WebHeaderTarget =
  | Headers
  | { headers: Headers }
  | Response;

type HeaderTarget = WebHeaderTarget | NodeLike | ReplyLike;

export let webhookUserAgent: string = "Chargebee-NodeJs-Client; Webhook";

export function setWebhookUserAgent(userAgent: string) {
  webhookUserAgent = userAgent;
}

/**
 * Set headers on the response object
 * - Works with:
 *   - Web: Response, Headers, { headers: Headers }
 *   - Node/Bun http-like: { setHeader(name, value): any }
 *   - Some libs (optional): { header(name, value): any } or { set(name, value): any }
 *
 * No dependency on express/fastify/hono/etc types existing.
 */
export function setResponseHeader<T extends HeaderTarget>(
  response: T,
  name: string,
  value: string
): T {

  // instance of Headers
  if (isHeaders(response)) {
    response.set(name, value);
    return response;
  }

  // Object with .headers (Request-like/Response-like wrappers)
  if (hasHeaders(response)) {
    response.headers.set(name, value);
    return response;
  }

  // Node/Bun http-like response: setHeader(name, value)
  if (hasSetHeader(response)) {
    response.setHeader(name, value);
    return response;
  }

  // Object with .header(name, value)
  if (typeof (response as any).header === "function") {
    (response as any).header(name, value);
    return response;
  }
  // Context-like object with .set(name, value)
  if (typeof (response as any).set === "function") {
    (response as any).set(name, value);
    return response;
  }

  return response;
}

function isHeaders(x: unknown): x is Headers {
  return typeof x === "object" && x !== null && typeof (x as any).set === "function"
    && typeof (x as any).append === "function"
    && typeof (x as any).get === "function";
}

function hasHeaders(x: unknown): x is { headers: Headers } {
  return typeof x === "object" && x !== null && isHeaders((x as any).headers);
}

function hasSetHeader(x: unknown): x is NodeLike {
  return typeof x === "object" && x !== null && typeof (x as any).setHeader === "function";
}
