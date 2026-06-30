// Generated Zod schemas: LedgerAccountBalance
// Actions: listLedgerAccountBalances
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//LedgerAccountBalance.listLedgerAccountBalances

const ListLedgerAccountBalancesLedgerAccountBalanceSubscriptionIdSchema =
  z.object({
    is: z.string().min(1).optional(),
  });
const ListLedgerAccountBalancesLedgerAccountBalanceUnitIdSchema = z.object({
  is: z.string().min(1).optional(),
});
const ListLedgerAccountBalancesLedgerAccountBalanceBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
  subscription_id:
    ListLedgerAccountBalancesLedgerAccountBalanceSubscriptionIdSchema,
  unit_id: ListLedgerAccountBalancesLedgerAccountBalanceUnitIdSchema.optional(),
});
export { ListLedgerAccountBalancesLedgerAccountBalanceBodySchema };
export type ListLedgerAccountBalancesLedgerAccountBalanceBody = z.infer<
  typeof ListLedgerAccountBalancesLedgerAccountBalanceBodySchema
>;
