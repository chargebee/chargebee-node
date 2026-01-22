/**
 * Credential validator function type.
 * Can be synchronous or asynchronous (e.g., for database lookups).
 */
export type CredentialValidator = (
  username: string,
  password: string,
) => boolean | Promise<boolean>;

/**
 * Creates a Basic Auth validator for webhook requests.
 * Parses the Authorization header and validates credentials.
 *
 * @param validateCredentials - Function to validate username/password.
 *   Can be sync or async (e.g., for database lookups).
 * @returns A request validator function for use with WebhookHandler
 *
 * @example
 * // Simple sync validation
 * const validator = basicAuthValidator((u, p) => u === 'admin' && p === 'secret');
 *
 * @example
 * // Async validation (e.g., database lookup)
 * const validator = basicAuthValidator(async (u, p) => {
 *   const user = await db.findUser(u);
 *   return user && await bcrypt.compare(p, user.passwordHash);
 * });
 */
export const basicAuthValidator = (
  validateCredentials: CredentialValidator,
) => {
  return async (
    headers: Record<string, string | string[] | undefined>,
  ): Promise<void> => {
    const authHeader = headers['authorization'] || headers['Authorization'];

    if (!authHeader) {
      throw new Error('Missing authorization header');
    }

    const authStr = Array.isArray(authHeader) ? authHeader[0] : authHeader;
    if (!authStr) {
      throw new Error('Invalid authorization header');
    }

    const parts = authStr.split(' ');
    if (parts.length !== 2 || parts[0] !== 'Basic') {
      throw new Error('Invalid authorization header format');
    }

    const decoded = Buffer.from(parts[1], 'base64').toString();
    const separatorIndex = decoded.indexOf(':');

    if (separatorIndex === -1) {
      throw new Error('Invalid credentials format');
    }

    const username = decoded.substring(0, separatorIndex);
    const password = decoded.substring(separatorIndex + 1);

    const isValid = await validateCredentials(username, password);
    if (!isValid) {
      throw new Error('Invalid credentials');
    }
  };
};
