// Generated Zod validator: UnbilledCharge.createUnbilledCharge
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const createUnbilledChargeUnbilledChargeAddonsSchema = z.object({
  id: z.array(z.string().max(100).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  unit_price: z.array(z.number().int().min(0).optional()).optional(),
  quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
  unit_price_in_decimal: z.array(z.string().max(39).optional()).optional(),
  date_from: z.array(z.number().int().optional()).optional(),
  date_to: z.array(z.number().int().optional()).optional(),
});
const createUnbilledChargeUnbilledChargeChargesSchema = z.object({
  amount: z.array(z.number().int().min(1).optional()).optional(),
  amount_in_decimal: z.array(z.string().max(39).optional()).optional(),
  description: z.array(z.string().max(250).optional()).optional(),
  taxable: z.array(z.boolean().default(true).optional()).optional(),
  tax_profile_id: z.array(z.string().max(50).optional()).optional(),
  avalara_tax_code: z.array(z.string().max(50).optional()).optional(),
  hsn_code: z.array(z.string().max(50).optional()).optional(),
  taxjar_product_code: z.array(z.string().max(50).optional()).optional(),
  avalara_sale_type: z
    .array(z.enum(['wholesale', 'retail', 'consumed', 'vendor_use']).optional())
    .optional(),
  avalara_transaction_type: z.array(z.number().int().optional()).optional(),
  avalara_service_type: z.array(z.number().int().optional()).optional(),
  date_from: z.array(z.number().int().optional()).optional(),
  date_to: z.array(z.number().int().optional()).optional(),
});
const createUnbilledChargeUnbilledChargeTaxProvidersFieldsSchema = z.object({
  provider_name: z.array(z.string().max(50).optional()).optional(),
  field_id: z.array(z.string().max(50).optional()).optional(),
  field_value: z.array(z.string().max(50).optional()).optional(),
});
const createUnbilledChargeUnbilledChargeBodySchema = z.looseObject({
  subscription_id: z.string().max(50),
  currency_code: z.string().max(3).optional(),
  addons: createUnbilledChargeUnbilledChargeAddonsSchema.optional(),
  charges: createUnbilledChargeUnbilledChargeChargesSchema.optional(),
  tax_providers_fields:
    createUnbilledChargeUnbilledChargeTaxProvidersFieldsSchema.optional(),
});
export { createUnbilledChargeUnbilledChargeBodySchema };
