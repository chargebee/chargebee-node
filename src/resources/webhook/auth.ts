export const basicAuthValidator = (
  validateCredentials: (username: string, password: string) => boolean,
) => {
  return (headers: Record<string, string | string[] | undefined>) => {
    const authHeader = headers['authorization'] || headers['Authorization'];

    if (!authHeader) {
      throw new Error('Invalid authorization header');
    }

    const authStr = Array.isArray(authHeader) ? authHeader[0] : authHeader;
    if (!authStr) {
      throw new Error('Invalid authorization header');
    }

    const parts = authStr.split(' ');
    if (parts.length !== 2 || parts[0] !== 'Basic') {
      throw new Error('Invalid authorization header');
    }

    const credentials = Buffer.from(parts[1], 'base64').toString().split(':');
    if (credentials.length !== 2) {
      throw new Error('Invalid credentials');
    }

    if (!validateCredentials(credentials[0], credentials[1])) {
      throw new Error('Invalid credentials');
    }
  };
};
