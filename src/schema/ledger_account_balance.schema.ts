// Generated Zod schemas: LedgerAccountBalance
// Actions: listLedgerAccountBalances, updateOverdraftLimit
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

//LedgerAccountBalance.updateOverdraftLimit

const UpdateOverdraftLimitLedgerAccountBalanceBodySchema = z.looseObject({
  subscription_id: z.string().max(50),
  unit_id: z.string().max(50),
  is_unlimited: z.boolean(),
  limit: z.string().max(36).optional(),
  change_reason: z.string().max(255).optional(),
});
export { UpdateOverdraftLimitLedgerAccountBalanceBodySchema };
export type UpdateOverdraftLimitLedgerAccountBalanceBody = z.infer<
  typeof UpdateOverdraftLimitLedgerAccountBalanceBodySchema
>;
