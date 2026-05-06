// Generated Zod validator: Address.retrieve
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const retrieveAddressBodySchema = z.looseObject({
  subscription_id: z.string().max(50),
  label: z.string().max(50),
});
export { retrieveAddressBodySchema };
