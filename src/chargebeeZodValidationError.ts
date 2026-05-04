import type { ZodError } from 'zod';

export class ChargebeeZodValidationError extends Error {
  readonly actionName: string;
  readonly zodError: ZodError;

  constructor(actionName: string, zodError: ZodError) {
    const messages = zodError.issues
      .map((e) => `${e.path.join('.')}: ${e.message}`)
      .join('; ');
    super(`[Chargebee] Validation failed for '${actionName}': ${messages}`);
    this.name = 'ChargebeeZodValidationError';
    this.actionName = actionName;
    this.zodError = zodError;
    Error.captureStackTrace?.(this, this.constructor);
  }
}
