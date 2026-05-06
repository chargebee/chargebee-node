// Generated Zod validator: Transaction.reconcile
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const reconcileTransactionBodySchema = z.looseObject({
  id_at_gateway: z.string().max(100).optional(),
  customer_id: z.string().max(50).optional(),
  status: z.enum(['success', 'failure']).optional(),
});
export { reconcileTransactionBodySchema };
