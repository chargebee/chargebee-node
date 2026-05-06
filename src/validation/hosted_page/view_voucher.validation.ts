// Generated Zod validator: HostedPage.viewVoucher
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const viewVoucherHostedPagePaymentVoucherSchema = z.object({
  id: z.string().max(40),
});
const viewVoucherHostedPageCustomerSchema = z.object({
  locale: z.string().max(50).optional(),
});
const viewVoucherHostedPageBodySchema = z.looseObject({
  payment_voucher: viewVoucherHostedPagePaymentVoucherSchema.optional(),
  customer: viewVoucherHostedPageCustomerSchema.optional(),
});
export { viewVoucherHostedPageBodySchema };
