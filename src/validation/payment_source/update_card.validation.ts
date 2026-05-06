// Generated Zod validator: PaymentSource.updateCard
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const updateCardPaymentSourceGatewayMetaDataSchema = z.looseObject({});
const updateCardPaymentSourceAdditionalInformationSchema = z.looseObject({});
const updateCardPaymentSourceCardSchema = z.object({
  first_name: z.string().max(50).optional(),
  last_name: z.string().max(50).optional(),
  expiry_month: z.number().int().min(1).max(12).optional(),
  expiry_year: z.number().int().optional(),
  billing_addr1: z.string().max(150).optional(),
  billing_addr2: z.string().max(150).optional(),
  billing_city: z.string().max(50).optional(),
  billing_zip: z.string().max(20).optional(),
  billing_state_code: z.string().max(50).optional(),
  billing_state: z.string().max(50).optional(),
  billing_country: z.string().max(50).optional(),
  additional_information:
    updateCardPaymentSourceAdditionalInformationSchema.optional(),
});
const updateCardPaymentSourceBodySchema = z.looseObject({
  gateway_meta_data: updateCardPaymentSourceGatewayMetaDataSchema.optional(),
  reference_transaction: z.string().max(50).optional(),
  card: updateCardPaymentSourceCardSchema.optional(),
});
export { updateCardPaymentSourceBodySchema };
