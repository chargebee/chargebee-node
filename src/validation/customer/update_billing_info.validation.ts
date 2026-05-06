// Generated Zod validator: Customer.updateBillingInfo
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const updateBillingInfoCustomerBillingAddressSchema = z.object({
  first_name: z.string().max(150).optional(),
  last_name: z.string().max(150).optional(),
  email: z.string().email().max(70).optional(),
  company: z.string().max(250).optional(),
  phone: z.string().max(50).optional(),
  line1: z.string().max(150).optional(),
  line2: z.string().max(150).optional(),
  line3: z.string().max(150).optional(),
  city: z.string().max(50).optional(),
  state_code: z.string().max(50).optional(),
  state: z.string().max(50).optional(),
  zip: z.string().max(20).optional(),
  country: z.string().max(50).optional(),
  validation_status: z
    .enum(['not_validated', 'valid', 'partially_valid', 'invalid'])
    .optional(),
});
const updateBillingInfoCustomerEntityIdentifiersSchema = z.object({
  id: z.array(z.string().max(40).optional()).optional(),
  scheme: z.array(z.string().max(50).optional()).optional(),
  value: z.array(z.string().max(50).optional()).optional(),
  operation: z
    .array(z.enum(['create', 'update', 'delete']).optional())
    .optional(),
  standard: z.array(z.string().max(50).optional()).optional(),
});
const updateBillingInfoCustomerTaxProvidersFieldsSchema = z.object({
  provider_name: z.array(z.string().max(50).optional()).optional(),
  field_id: z.array(z.string().max(50).optional()).optional(),
  field_value: z.array(z.string().max(50).optional()).optional(),
});
const updateBillingInfoCustomerBodySchema = z.looseObject({
  vat_number: z.string().max(20).optional(),
  vat_number_prefix: z.string().max(10).optional(),
  entity_identifier_scheme: z.string().max(50).optional(),
  entity_identifier_standard: z.string().max(50).optional(),
  registered_for_gst: z.boolean().optional(),
  business_customer_without_vat_number: z.boolean().optional(),
  is_einvoice_enabled: z.boolean().optional(),
  einvoicing_method: z.enum(['automatic', 'manual', 'site_default']).optional(),
  billing_address: updateBillingInfoCustomerBillingAddressSchema.optional(),
  entity_identifiers:
    updateBillingInfoCustomerEntityIdentifiersSchema.optional(),
  tax_providers_fields:
    updateBillingInfoCustomerTaxProvidersFieldsSchema.optional(),
});
export { updateBillingInfoCustomerBodySchema };
