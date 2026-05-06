// Generated Zod validator: PaymentVoucher.payment_vouchersForCustomer
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const paymentVouchersforcustomerPaymentVoucherStatusSchema = z.object({
  is: z.enum(['active', 'consumed', 'expired', 'failure']).optional(),
  is_not: z.enum(['active', 'consumed', 'expired', 'failure']).optional(),
  in: z.enum(['active', 'consumed', 'expired', 'failure']).optional(),
  not_in: z.enum(['active', 'consumed', 'expired', 'failure']).optional(),
});
const paymentVouchersforcustomerPaymentVoucherSortBySchema = z.looseObject({
  asc: z.enum(['date', 'updated_at']).optional(),
  desc: z.enum(['date', 'updated_at']).optional(),
});
const paymentVouchersforcustomerPaymentVoucherBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
  status: paymentVouchersforcustomerPaymentVoucherStatusSchema.optional(),
  sort_by: paymentVouchersforcustomerPaymentVoucherSortBySchema.optional(),
});
export { paymentVouchersforcustomerPaymentVoucherBodySchema };
