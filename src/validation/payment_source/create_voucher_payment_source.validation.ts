// Generated Zod validator: PaymentSource.createVoucherPaymentSource
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const createVoucherPaymentSourcePaymentSourceBillingAddressSchema =
  z.looseObject({});
const createVoucherPaymentSourcePaymentSourceVoucherPaymentSourceSchema =
  z.object({
    voucher_type: z.enum(['boleto']),
    gateway_account_id: z.string().max(50).optional(),
    tax_id: z.string().max(20).optional(),
    billing_address:
      createVoucherPaymentSourcePaymentSourceBillingAddressSchema.optional(),
  });
const createVoucherPaymentSourcePaymentSourceBodySchema = z.looseObject({
  customer_id: z.string().max(50),
  voucher_payment_source:
    createVoucherPaymentSourcePaymentSourceVoucherPaymentSourceSchema.optional(),
});
export { createVoucherPaymentSourcePaymentSourceBodySchema };
