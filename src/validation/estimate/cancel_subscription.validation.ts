// Generated Zod validator: Estimate.cancelSubscription
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const cancelSubscriptionEstimateEventBasedAddonsSchema = z.object({
  id: z.array(z.string().max(100).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  unit_price: z.array(z.number().int().min(0).optional()).optional(),
  service_period_in_days: z
    .array(z.number().int().min(1).max(4000).optional())
    .optional(),
});
const cancelSubscriptionEstimateBodySchema = z.looseObject({
  cancel_option: z
    .enum([
      'immediately',
      'end_of_term',
      'specific_date',
      'end_of_billing_term',
    ])
    .optional(),
  end_of_term: z.boolean().default(false).optional(),
  cancel_at: z.number().int().optional(),
  credit_option_for_current_term_charges: z
    .enum(['none', 'prorate', 'full'])
    .optional(),
  unbilled_charges_option: z.enum(['invoice', 'delete']).optional(),
  account_receivables_handling: z
    .enum(['no_action', 'schedule_payment_collection', 'write_off'])
    .optional(),
  refundable_credits_handling: z
    .enum(['no_action', 'schedule_refund'])
    .optional(),
  contract_term_cancel_option: z
    .enum([
      'terminate_immediately',
      'end_of_contract_term',
      'specific_date',
      'end_of_subscription_billing_term',
    ])
    .optional(),
  invoice_date: z.number().int().optional(),
  cancel_reason_code: z.string().max(100).optional(),
  event_based_addons:
    cancelSubscriptionEstimateEventBasedAddonsSchema.optional(),
});
export { cancelSubscriptionEstimateBodySchema };
