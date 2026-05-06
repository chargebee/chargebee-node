// Generated Zod validator: ResourceMigration.retrieveLatest
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const retrieveLatestResourceMigrationBodySchema = z.looseObject({
  from_site: z.string().max(50).min(4),
  entity_type: z.enum(['customer']),
  entity_id: z.string().max(100),
});
export { retrieveLatestResourceMigrationBodySchema };
