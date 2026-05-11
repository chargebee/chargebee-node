// Generated Zod schemas: UnbilledCharge
// Actions: createUnbilledCharge, create, invoiceUnbilledCharges, invoiceNowEstimate
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//UnbilledCharge.createUnbilledCharge

const CreateUnbilledChargeUnbilledChargeAddonsSchema = z.object({
  id: z.array(z.string().max(100).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  unit_price: z.array(z.number().int().min(0).optional()).optional(),
  quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
  unit_price_in_decimal: z.array(z.string().max(39).optional()).optional(),
  date_from: z.array(z.number().int().optional()).optional(),
  date_to: z.array(z.number().int().optional()).optional(),
});
const CreateUnbilledChargeUnbilledChargeChargesSchema = z.object({
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
const CreateUnbilledChargeUnbilledChargeTaxProvidersFieldsSchema = z.object({
  provider_name: z.array(z.string().max(50).optional()).optional(),
  field_id: z.array(z.string().max(50).optional()).optional(),
  field_value: z.array(z.string().max(50).optional()).optional(),
});
const CreateUnbilledChargeUnbilledChargeBodySchema = z.looseObject({
  subscription_id: z.string().max(50),
  currency_code: z.string().max(3).optional(),
  addons: CreateUnbilledChargeUnbilledChargeAddonsSchema.optional(),
  charges: CreateUnbilledChargeUnbilledChargeChargesSchema.optional(),
  tax_providers_fields:
    CreateUnbilledChargeUnbilledChargeTaxProvidersFieldsSchema.optional(),
});
export { CreateUnbilledChargeUnbilledChargeBodySchema };
export type CreateUnbilledChargeUnbilledChargeBody = z.infer<
  typeof CreateUnbilledChargeUnbilledChargeBodySchema
>;

//UnbilledCharge.create

const CreateUnbilledChargeItemPricesSchema = z.object({
  item_price_id: z.array(z.string().max(100).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
  unit_price: z.array(z.number().int().min(0).optional()).optional(),
  unit_price_in_decimal: z.array(z.string().max(39).optional()).optional(),
  date_from: z.array(z.number().int().optional()).optional(),
  date_to: z.array(z.number().int().optional()).optional(),
});
const CreateUnbilledChargeItemTiersSchema = z.object({
  item_price_id: z.array(z.string().max(100).optional()).optional(),
  starting_unit: z.array(z.number().int().min(1).optional()).optional(),
  ending_unit: z.array(z.number().int().optional()).optional(),
  price: z.array(z.number().int().min(0).optional()).optional(),
  starting_unit_in_decimal: z.array(z.string().max(33).optional()).optional(),
  ending_unit_in_decimal: z.array(z.string().max(33).optional()).optional(),
  price_in_decimal: z.array(z.string().max(39).optional()).optional(),
  pricing_type: z
    .array(z.enum(['per_unit', 'flat_fee', 'package']).optional())
    .optional(),
  package_size: z.array(z.number().int().min(1).optional()).optional(),
});
const CreateUnbilledChargeChargesSchema = z.object({
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
const CreateUnbilledChargeTaxProvidersFieldsSchema = z.object({
  provider_name: z.array(z.string().max(50).optional()).optional(),
  field_id: z.array(z.string().max(50).optional()).optional(),
  field_value: z.array(z.string().max(50).optional()).optional(),
});
const CreateUnbilledChargeBodySchema = z.looseObject({
  subscription_id: z.string().max(50),
  currency_code: z.string().max(3).optional(),
  item_prices: CreateUnbilledChargeItemPricesSchema.optional(),
  item_tiers: CreateUnbilledChargeItemTiersSchema.optional(),
  charges: CreateUnbilledChargeChargesSchema.optional(),
  tax_providers_fields: CreateUnbilledChargeTaxProvidersFieldsSchema.optional(),
});
export { CreateUnbilledChargeBodySchema };
export type CreateUnbilledChargeBody = z.infer<
  typeof CreateUnbilledChargeBodySchema
>;

//UnbilledCharge.invoiceUnbilledCharges

const InvoiceUnbilledChargesUnbilledChargeBodySchema = z.looseObject({
  subscription_id: z.string().max(50).optional(),
  customer_id: z.string().max(50).optional(),
});
export { InvoiceUnbilledChargesUnbilledChargeBodySchema };
export type InvoiceUnbilledChargesUnbilledChargeBody = z.infer<
  typeof InvoiceUnbilledChargesUnbilledChargeBodySchema
>;

//UnbilledCharge.invoiceNowEstimate

const InvoiceNowEstimateUnbilledChargeBodySchema = z.looseObject({
  subscription_id: z.string().max(50).optional(),
  customer_id: z.string().max(50).optional(),
});
export { InvoiceNowEstimateUnbilledChargeBodySchema };
export type InvoiceNowEstimateUnbilledChargeBody = z.infer<
  typeof InvoiceNowEstimateUnbilledChargeBodySchema
>;
