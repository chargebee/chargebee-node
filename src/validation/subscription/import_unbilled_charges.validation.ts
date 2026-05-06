// Generated Zod validator: Subscription.importUnbilledCharges
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const importUnbilledChargesSubscriptionUnbilledChargesSchema = z.object({
  id: z.array(z.string().max(40).optional()).optional(),
  date_from: z.array(z.number().int().optional()),
  date_to: z.array(z.number().int().optional()),
  entity_type: z.array(
    z
      .enum([
        'adhoc',
        'plan_item_price',
        'addon_item_price',
        'charge_item_price',
        'plan_setup',
        'plan',
        'addon',
      ])
      .optional(),
  ),
  entity_id: z.array(z.string().max(100).optional()).optional(),
  description: z.array(z.string().max(250).optional()).optional(),
  unit_amount: z.array(z.number().int().min(0).optional()).optional(),
  quantity: z.array(z.number().int().min(0).optional()).optional(),
  amount: z.array(z.number().int().min(0).optional()).optional(),
  unit_amount_in_decimal: z.array(z.string().max(39).optional()).optional(),
  quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
  amount_in_decimal: z.array(z.string().max(39).optional()).optional(),
  discount_amount: z.array(z.number().int().min(0).optional()).optional(),
  use_for_proration: z.array(z.boolean().default(false).optional()).optional(),
  is_advance_charge: z.array(z.boolean().default(false).optional()).optional(),
});
const importUnbilledChargesSubscriptionDiscountsSchema = z.object({
  unbilled_charge_id: z.array(z.string().max(40).optional()).optional(),
  entity_type: z
    .array(
      z
        .enum([
          'item_level_coupon',
          'document_level_coupon',
          'item_level_discount',
          'document_level_discount',
        ])
        .optional(),
    )
    .optional(),
  entity_id: z.array(z.string().max(100).optional()).optional(),
  description: z.array(z.string().max(250).optional()).optional(),
  amount: z.array(z.number().int().min(0).optional()),
});
const importUnbilledChargesSubscriptionTiersSchema = z.object({
  unbilled_charge_id: z.array(z.string().max(40).optional()),
  starting_unit: z.array(z.number().int().min(0).optional()).optional(),
  ending_unit: z.array(z.number().int().optional()).optional(),
  quantity_used: z.array(z.number().int().min(0).optional()).optional(),
  unit_amount: z.array(z.number().int().min(0).optional()).optional(),
  starting_unit_in_decimal: z.array(z.string().max(33).optional()).optional(),
  ending_unit_in_decimal: z.array(z.string().max(33).optional()).optional(),
  quantity_used_in_decimal: z.array(z.string().max(33).optional()).optional(),
  unit_amount_in_decimal: z.array(z.string().max(40).optional()).optional(),
});
const importUnbilledChargesSubscriptionBodySchema = z.looseObject({
  unbilled_charges:
    importUnbilledChargesSubscriptionUnbilledChargesSchema.optional(),
  discounts: importUnbilledChargesSubscriptionDiscountsSchema.optional(),
  tiers: importUnbilledChargesSubscriptionTiersSchema.optional(),
});
export { importUnbilledChargesSubscriptionBodySchema };
