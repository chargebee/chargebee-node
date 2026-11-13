// Generated Zod schemas: UnbilledCharge
// Actions: createUnbilledCharge, create, invoiceUnbilledCharges, list, invoiceNowEstimate
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//UnbilledCharge.createUnbilledCharge

const CreateUnbilledChargeUnbilledChargeAddonsItemSchema = z.object({
  id: z.string().max(100).optional(),
  quantity: z.number().int().min(1).optional(),
  unit_price: z.number().int().min(0).optional(),
  quantity_in_decimal: z.string().max(33).optional(),
  unit_price_in_decimal: z.string().max(39).optional(),
  date_from: z.number().int().optional(),
  date_to: z.number().int().optional(),
});
const CreateUnbilledChargeUnbilledChargeAddonsSchema = z.object({
  id: z.array(z.string().max(100).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  unit_price: z.array(z.number().int().min(0).optional()).optional(),
  quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
  unit_price_in_decimal: z.array(z.string().max(39).optional()).optional(),
  date_from: z.array(z.number().int().optional()).optional(),
  date_to: z.array(z.number().int().optional()).optional(),
});
const CreateUnbilledChargeUnbilledChargeChargesItemSchema = z.object({
  amount: z.number().int().min(1).optional(),
  amount_in_decimal: z.string().max(39).optional(),
  description: z.string().max(250).optional(),
  taxable: z.boolean().default(true).optional(),
  tax_profile_id: z.string().max(50).optional(),
  avalara_tax_code: z.string().max(50).optional(),
  hsn_code: z.string().max(50).optional(),
  taxjar_product_code: z.string().max(50).optional(),
  avalara_sale_type: z
    .enum(['wholesale', 'retail', 'consumed', 'vendor_use'])
    .optional(),
  avalara_transaction_type: z.number().int().optional(),
  avalara_service_type: z.number().int().optional(),
  date_from: z.number().int().optional(),
  date_to: z.number().int().optional(),
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
const CreateUnbilledChargeUnbilledChargeTaxProvidersFieldsItemSchema = z.object(
  {
    provider_name: z.string().max(50).optional(),
    field_id: z.string().max(50).optional(),
    field_value: z.string().max(50).optional(),
  },
);
const CreateUnbilledChargeUnbilledChargeTaxProvidersFieldsSchema = z.object({
  provider_name: z.array(z.string().max(50).optional()).optional(),
  field_id: z.array(z.string().max(50).optional()).optional(),
  field_value: z.array(z.string().max(50).optional()).optional(),
});
const CreateUnbilledChargeUnbilledChargeBodySchema = z.looseObject({
  subscription_id: z.string().max(50),
  currency_code: z.string().max(3).optional(),
  addons: z
    .union([
      z.array(CreateUnbilledChargeUnbilledChargeAddonsItemSchema.optional()),
      CreateUnbilledChargeUnbilledChargeAddonsSchema,
    ])
    .optional(),
  charges: z
    .union([
      z.array(CreateUnbilledChargeUnbilledChargeChargesItemSchema.optional()),
      CreateUnbilledChargeUnbilledChargeChargesSchema,
    ])
    .optional(),
  tax_providers_fields: z
    .union([
      z.array(
        CreateUnbilledChargeUnbilledChargeTaxProvidersFieldsItemSchema.optional(),
      ),
      CreateUnbilledChargeUnbilledChargeTaxProvidersFieldsSchema,
    ])
    .optional(),
});
export { CreateUnbilledChargeUnbilledChargeBodySchema };
export type CreateUnbilledChargeUnbilledChargeBody = z.infer<
  typeof CreateUnbilledChargeUnbilledChargeBodySchema
>;

//UnbilledCharge.create

const CreateUnbilledChargeItemPricesItemSchema = z.object({
  item_price_id: z.string().max(100).optional(),
  quantity: z.number().int().min(1).optional(),
  quantity_in_decimal: z.string().max(33).optional(),
  unit_price: z.number().int().min(0).optional(),
  unit_price_in_decimal: z.string().max(39).optional(),
  date_from: z.number().int().optional(),
  date_to: z.number().int().optional(),
});
const CreateUnbilledChargeItemPricesSchema = z.object({
  item_price_id: z.array(z.string().max(100).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
  unit_price: z.array(z.number().int().min(0).optional()).optional(),
  unit_price_in_decimal: z.array(z.string().max(39).optional()).optional(),
  date_from: z.array(z.number().int().optional()).optional(),
  date_to: z.array(z.number().int().optional()).optional(),
});
const CreateUnbilledChargeItemTiersItemSchema = z.object({
  item_price_id: z.string().max(100).optional(),
  starting_unit: z.number().int().min(1).optional(),
  ending_unit: z.number().int().optional(),
  price: z.number().int().min(0).optional(),
  starting_unit_in_decimal: z.string().max(33).optional(),
  ending_unit_in_decimal: z.string().max(33).optional(),
  price_in_decimal: z.string().max(39).optional(),
  pricing_type: z.enum(['per_unit', 'flat_fee', 'package']).optional(),
  package_size: z.number().int().min(1).optional(),
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
const CreateUnbilledChargeChargesItemSchema = z.object({
  amount: z.number().int().min(1).optional(),
  amount_in_decimal: z.string().max(39).optional(),
  description: z.string().max(250).optional(),
  taxable: z.boolean().default(true).optional(),
  tax_profile_id: z.string().max(50).optional(),
  avalara_tax_code: z.string().max(50).optional(),
  hsn_code: z.string().max(50).optional(),
  taxjar_product_code: z.string().max(50).optional(),
  avalara_sale_type: z
    .enum(['wholesale', 'retail', 'consumed', 'vendor_use'])
    .optional(),
  avalara_transaction_type: z.number().int().optional(),
  avalara_service_type: z.number().int().optional(),
  date_from: z.number().int().optional(),
  date_to: z.number().int().optional(),
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
const CreateUnbilledChargeTaxProvidersFieldsItemSchema = z.object({
  provider_name: z.string().max(50).optional(),
  field_id: z.string().max(50).optional(),
  field_value: z.string().max(50).optional(),
});
const CreateUnbilledChargeTaxProvidersFieldsSchema = z.object({
  provider_name: z.array(z.string().max(50).optional()).optional(),
  field_id: z.array(z.string().max(50).optional()).optional(),
  field_value: z.array(z.string().max(50).optional()).optional(),
});
const CreateUnbilledChargeBodySchema = z.looseObject({
  subscription_id: z.string().max(50),
  currency_code: z.string().max(3).optional(),
  item_prices: z
    .union([
      z.array(CreateUnbilledChargeItemPricesItemSchema.optional()),
      CreateUnbilledChargeItemPricesSchema,
    ])
    .optional(),
  item_tiers: z
    .union([
      z.array(CreateUnbilledChargeItemTiersItemSchema.optional()),
      CreateUnbilledChargeItemTiersSchema,
    ])
    .optional(),
  charges: z
    .union([
      z.array(CreateUnbilledChargeChargesItemSchema.optional()),
      CreateUnbilledChargeChargesSchema,
    ])
    .optional(),
  tax_providers_fields: z
    .union([
      z.array(CreateUnbilledChargeTaxProvidersFieldsItemSchema.optional()),
      CreateUnbilledChargeTaxProvidersFieldsSchema,
    ])
    .optional(),
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

//UnbilledCharge.list

const ListUnbilledChargeSubscriptionIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  is_present: z.union([z.boolean(), z.enum(['true', 'false'])]).optional(),
  in: z
    .union([
      z.array(z.string().optional()),
      z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')),
    ])
    .optional(),
  not_in: z
    .union([
      z.array(z.string().optional()),
      z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')),
    ])
    .optional(),
});
const ListUnbilledChargeCustomerIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  is_present: z.union([z.boolean(), z.enum(['true', 'false'])]).optional(),
  in: z
    .union([
      z.array(z.string().optional()),
      z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')),
    ])
    .optional(),
  not_in: z
    .union([
      z.array(z.string().optional()),
      z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')),
    ])
    .optional(),
});
const ListUnbilledChargeBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
  include_deleted: z.boolean().default(false).optional(),
  is_voided: z.boolean().default(false).optional(),
  subscription_id: ListUnbilledChargeSubscriptionIdSchema.optional(),
  customer_id: ListUnbilledChargeCustomerIdSchema.optional(),
});
export { ListUnbilledChargeBodySchema };
export type ListUnbilledChargeBody = z.infer<
  typeof ListUnbilledChargeBodySchema
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
