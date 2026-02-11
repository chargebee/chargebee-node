/**
 * Base class for all webhook-related errors.
 * Extends the standard Error class with proper stack trace support.
 */
export class WebhookError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'WebhookError';
    // Maintains proper stack trace for where error was thrown (V8 only)
    Error.captureStackTrace?.(this, this.constructor);
  }
}

/**
 * Authentication error thrown when webhook request authentication fails.
 *
 * Common scenarios:
 * - Missing authorization header
 * - Invalid authorization header format
 * - Invalid credentials
 *
 * Typically maps to HTTP 401 Unauthorized.
 *
 * @example
 * ```typescript
 * handler.on('error', (error, { response }) => {
 *   if (error instanceof AuthenticationError) {
 *     response?.status(401).json({ error: 'Unauthorized' });
 *   }
 * });
 * ```
 */
export class AuthenticationError extends WebhookError {
  constructor(message: string) {
    super(message);
    this.name = 'AuthenticationError';
  }
}

/**
 * Payload validation error thrown when the webhook payload structure is invalid.
 *
 * Common scenarios:
 * - Missing required fields (event_type, id)
 * - Invalid field types
 * - Malformed payload structure
 *
 * Typically maps to HTTP 400 Bad Request.
 *
 * @example
 * ```typescript
 * handler.on('error', (error, { response }) => {
 *   if (error instanceof PayloadValidationError) {
 *     response?.status(400).json({ error: 'Bad Request', message: error.message });
 *   }
 * });
 * ```
 */
export class PayloadValidationError extends WebhookError {
  constructor(message: string) {
    super(message);
    this.name = 'PayloadValidationError';
  }
}

/**
 * JSON parsing error thrown when the webhook body cannot be parsed as JSON.
 *
 * Includes the raw body that failed to parse (if available) for debugging.
 *
 * Typically maps to HTTP 400 Bad Request.
 *
 * @example
 * ```typescript
 * handler.on('error', (error, { response }) => {
 *   if (error instanceof PayloadParseError) {
 *     console.error('Failed to parse:', error.rawBody);
 *     response?.status(400).json({ error: 'Invalid JSON' });
 *   }
 * });
 * ```
 */
export class PayloadParseError extends WebhookError {
  constructor(
    message: string,
    public readonly rawBody?: string,
  ) {
    super(message);
    this.name = 'PayloadParseError';
  }
}
