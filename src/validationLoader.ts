/**
 * Lazy schema loader for opt-in Zod validation.
 *
 * Schemas are loaded on first use. Node.js automatically caches imported modules,
 * so repeated imports of the same schema file are efficient.
 *
 * Each resource module lives at {@code schema/<resource_snake>.schema.ts}
 * and exports one body schema per action.
 *
 * The body schema const name follows {@code ZodNamingStrategy.bodySchemaName} in sdk-generator:
 * {@code {PascalAction}{PascalResource}BodySchema}
 *
 * Uses native dynamic import() - TypeScript transpiles appropriately for ESM/CJS targets.
 */

import type { ZodObject, ZodRawShape } from 'zod';

type AnyZodObject = ZodObject<ZodRawShape>;

function toCamel(s: string): string {
  return s.replace(/_([a-z])/g, (_, c: string) => c.toUpperCase());
}

function toPascal(s: string): string {
  const camel = toCamel(s);
  return camel.charAt(0).toUpperCase() + camel.slice(1);
}

/** Matches ZodNamingStrategy.bodySchemaName() in sdk-generator. */
function schemaConstName(resourceKey: string, actionName: string): string {
  return toPascal(actionName) + toPascal(resourceKey) + 'BodySchema';
}

/** camelCase resource key → snake_case module basename (e.g. virtualBankAccount → virtual_bank_account). */
function resourceSchemaBasename(resourceKey: string): string {
  return resourceKey
    .replace(/([A-Z])/g, '_$1')
    .toLowerCase()
    .replace(/^_/, '');
}

/**
 * Load the Zod schema for a given resource + action.
 * Returns null if no schema file exists for this combination.
 *
 * Node.js automatically caches the imported modules, so repeated calls
 * for the same resource will reuse the cached module.
 *
 * TypeScript compiler handles module system differences:
 * - ESM build: keeps await import() as-is
 * - CJS build: transpiles to require() or Promise-based equivalent
 */
export async function getSchema(
  resourceKey: string,
  actionName: string,
): Promise<AnyZodObject | null> {
  const base = resourceSchemaBasename(resourceKey);
  const constName = schemaConstName(resourceKey, actionName);

  try {
    const mod = await import(`./schema/${base}.schema.js`);
    const schema = (mod[constName] as AnyZodObject) ?? null;
    return schema;
  } catch {
    return null;
  }
}
