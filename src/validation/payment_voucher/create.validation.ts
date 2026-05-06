// Generated Zod validator: PaymentVoucher.create
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const createPaymentVoucherVoucherPaymentSourceSchema = z.object({
  voucher_type: z.enum(['boleto']),
});
const createPaymentVoucherInvoiceAllocationsSchema = z.object({
  invoice_id: z.array(z.string().max(50).optional()),
});
const createPaymentVoucherBodySchema = z.looseObject({
  customer_id: z.string().max(50),
  payment_source_id: z.string().max(40).optional(),
  voucher_payment_source:
    createPaymentVoucherVoucherPaymentSourceSchema.optional(),
  invoice_allocations: createPaymentVoucherInvoiceAllocationsSchema.optional(),
});
export { createPaymentVoucherBodySchema };
