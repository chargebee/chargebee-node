// Generated Zod validator: Invoice.updateDetails
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const updateDetailsInvoiceBillingAddressSchema = z.object({
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
const updateDetailsInvoiceShippingAddressSchema = z.object({
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
const updateDetailsInvoiceStatementDescriptorSchema = z.object({
  descriptor: z.string().max(65000).optional(),
});
const updateDetailsInvoiceBodySchema = z.looseObject({
  vat_number: z.string().max(20).optional(),
  vat_number_prefix: z.string().max(10).optional(),
  po_number: z.string().max(100).optional(),
  comment: z.string().max(300).optional(),
  billing_address: updateDetailsInvoiceBillingAddressSchema.optional(),
  shipping_address: updateDetailsInvoiceShippingAddressSchema.optional(),
  statement_descriptor:
    updateDetailsInvoiceStatementDescriptorSchema.optional(),
});
export { updateDetailsInvoiceBodySchema };
