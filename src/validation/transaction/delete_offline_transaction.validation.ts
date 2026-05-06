// Generated Zod validator: Transaction.deleteOfflineTransaction
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const deleteOfflineTransactionTransactionBodySchema = z.looseObject({
  comment: z.string().max(300).optional(),
});
export { deleteOfflineTransactionTransactionBodySchema };
