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

// Locate the chargebee package's cjs/ directory and build a require function
// anchored there. This works in CJS, ESM, tsx, and ts-node because we use
// createRequire (not the global require which is absent in ESM).
//
// Strategy: resolve 'chargebee' (the default CJS entry) from the caller's
// working directory to get the absolute path of cjs/chargebee.cjs.js,
// then anchor _require to that same directory.
const _cwdRequire = createRequire(
  nodePath.resolve(process.cwd(), 'package.json'),
);
const _cjsEntry: string = _cwdRequire.resolve('chargebee');
const _cjsDir: string = nodePath.dirname(_cjsEntry);
const _require: NodeRequire = createRequire(_cjsDir + nodePath.sep);

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
