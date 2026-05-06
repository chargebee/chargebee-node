/**
 * Lazy schema loader for opt-in Zod validation.
 *
 * Schemas are loaded on first use and cached. The schema const name follows the
 * convention: `{camelAction}{PascalResource}BodySchema`
 * e.g. resource=customer, action=create → createCustomerBodySchema
 */

import type { ZodObject, ZodRawShape } from 'zod';
import { createRequire } from 'node:module';
import * as nodePath from 'node:path';

// Locate the chargebee package's CJS entry file and build a require function
// anchored there. createRequire() resolves relative paths from dirname(filename);
// passing a directory path ending with a separator makes dirname() skip past `cjs`,
// so we must pass the entry file (e.g. cjs/chargebee.cjs.js), not the folder.
//
// Strategy: resolve 'chargebee' (the default CJS entry) from the caller's
// working directory, then createRequire(entryFile) so ./validation/... loads
// from the cjs/ directory next to that file.
const _cwdRequire = createRequire(
  nodePath.resolve(process.cwd(), 'package.json'),
);
const _cjsEntry: string = _cwdRequire.resolve('chargebee');
const _require: NodeRequire = createRequire(_cjsEntry);

type AnyZodObject = ZodObject<ZodRawShape>;
const schemaCache = new Map<string, AnyZodObject | null>();

function toCamel(s: string): string {
  return s.replace(/_([a-z])/g, (_, c: string) => c.toUpperCase());
}

function toPascal(s: string): string {
  const camel = toCamel(s);
  return camel.charAt(0).toUpperCase() + camel.slice(1);
}

/** Matches JoiNamingStrategy.bodySchemaName() in sdk-generator. */
function schemaConstName(resourceKey: string, actionName: string): string {
  return toCamel(actionName) + toPascal(resourceKey) + 'BodySchema';
}

/** camelCase resource key → snake_case directory name. */
function resourceDir(resourceKey: string): string {
  return resourceKey
    .replace(/([A-Z])/g, '_$1')
    .toLowerCase()
    .replace(/^_/, '');
}

/** camelCase action name → snake_case file name. */
function actionFileName(actionName: string): string {
  return actionName
    .replace(/([A-Z])/g, '_$1')
    .toLowerCase()
    .replace(/^_/, '');
}

/**
 * Load and cache the Zod schema for a given resource + action.
 * Returns null if no schema file exists for this combination.
 */
export function getSchema(
  resourceKey: string,
  actionName: string,
): AnyZodObject | null {
  const cacheKey = `${resourceKey}:${actionName}`;
  if (schemaCache.has(cacheKey)) {
    return schemaCache.get(cacheKey)!;
  }

  const dir = resourceDir(resourceKey);
  const fileName = actionFileName(actionName);
  const constName = schemaConstName(resourceKey, actionName);

  try {
    // Load from cjs/validation/ using _require (works in both CJS and ESM).
    const mod = _require(`./validation/${dir}/${fileName}.validation.js`);
    const schema = (mod[constName] as AnyZodObject) ?? null;
    schemaCache.set(cacheKey, schema);
    return schema;
  } catch {
    schemaCache.set(cacheKey, null);
    return null;
  }
}
