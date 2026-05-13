// Generated Zod schemas: PaymentVoucher
// Actions: create, payment_vouchersForInvoice, payment_vouchersForCustomer
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//PaymentVoucher.create

const CreatePaymentVoucherVoucherPaymentSourceSchema = z.object({
  voucher_type: z.enum(['boleto']),
});
const CreatePaymentVoucherInvoiceAllocationsSchema = z.object({
  invoice_id: z.array(z.string().max(50).optional()),
});
const CreatePaymentVoucherBodySchema = z.looseObject({
  customer_id: z.string().max(50),
  payment_source_id: z.string().max(40).optional(),
  voucher_payment_source:
    CreatePaymentVoucherVoucherPaymentSourceSchema.optional(),
  invoice_allocations: CreatePaymentVoucherInvoiceAllocationsSchema.optional(),
});
export { CreatePaymentVoucherBodySchema };
export type CreatePaymentVoucherBody = z.infer<
  typeof CreatePaymentVoucherBodySchema
>;

//PaymentVoucher.payment_vouchersForInvoice

const PaymentVouchersforinvoicePaymentVoucherStatusSchema = z.object({
  is: z.enum(['active', 'consumed', 'expired', 'failure']).optional(),
  is_not: z.enum(['active', 'consumed', 'expired', 'failure']).optional(),
  in: z.enum(['active', 'consumed', 'expired', 'failure']).optional(),
  not_in: z.enum(['active', 'consumed', 'expired', 'failure']).optional(),
});
const PaymentVouchersforinvoicePaymentVoucherSortBySchema = z.looseObject({
  asc: z.enum(['date', 'updated_at']).optional(),
  desc: z.enum(['date', 'updated_at']).optional(),
});
const PaymentVouchersforinvoicePaymentVoucherBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
  status: PaymentVouchersforinvoicePaymentVoucherStatusSchema.optional(),
  sort_by: PaymentVouchersforinvoicePaymentVoucherSortBySchema.optional(),
});
export { PaymentVouchersforinvoicePaymentVoucherBodySchema };
export type PaymentVouchersforinvoicePaymentVoucherBody = z.infer<
  typeof PaymentVouchersforinvoicePaymentVoucherBodySchema
>;

//PaymentVoucher.payment_vouchersForCustomer

const PaymentVouchersforcustomerPaymentVoucherStatusSchema = z.object({
  is: z.enum(['active', 'consumed', 'expired', 'failure']).optional(),
  is_not: z.enum(['active', 'consumed', 'expired', 'failure']).optional(),
  in: z.enum(['active', 'consumed', 'expired', 'failure']).optional(),
  not_in: z.enum(['active', 'consumed', 'expired', 'failure']).optional(),
});
const PaymentVouchersforcustomerPaymentVoucherSortBySchema = z.looseObject({
  asc: z.enum(['date', 'updated_at']).optional(),
  desc: z.enum(['date', 'updated_at']).optional(),
});
const PaymentVouchersforcustomerPaymentVoucherBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
  status: PaymentVouchersforcustomerPaymentVoucherStatusSchema.optional(),
  sort_by: PaymentVouchersforcustomerPaymentVoucherSortBySchema.optional(),
});
export { PaymentVouchersforcustomerPaymentVoucherBodySchema };
export type PaymentVouchersforcustomerPaymentVoucherBody = z.infer<
  typeof PaymentVouchersforcustomerPaymentVoucherBodySchema
>;
