// Generated Zod validator: PaymentSource.createCard
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const createCardPaymentSourceAdditionalInformationSchema = z.looseObject({});
const createCardPaymentSourceCardSchema = z.object({
  gateway_account_id: z.string().max(50).optional(),
  first_name: z.string().max(50).optional(),
  last_name: z.string().max(50).optional(),
  number: z.string().max(1500),
  expiry_month: z.number().int().min(1).max(12),
  expiry_year: z.number().int(),
  cvv: z.string().max(520).optional(),
  preferred_scheme: z
    .enum(['cartes_bancaires', 'mastercard', 'visa'])
    .optional(),
  billing_addr1: z.string().max(150).optional(),
  billing_addr2: z.string().max(150).optional(),
  billing_city: z.string().max(50).optional(),
  billing_state_code: z.string().max(50).optional(),
  billing_state: z.string().max(50).optional(),
  billing_zip: z.string().max(20).optional(),
  billing_country: z.string().max(50).optional(),
  additional_information:
    createCardPaymentSourceAdditionalInformationSchema.optional(),
});
const createCardPaymentSourceBodySchema = z.looseObject({
  customer_id: z.string().max(50),
  replace_primary_payment_source: z.boolean().default(false).optional(),
  card: createCardPaymentSourceCardSchema.optional(),
});
export { createCardPaymentSourceBodySchema };
