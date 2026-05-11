// Generated Zod schemas: Transaction
// Actions: createAuthorization, recordRefund, reconcile, refund, transactionsForCustomer, transactionsForSubscription, paymentsForInvoice, deleteOfflineTransaction
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//Transaction.createAuthorization

const CreateAuthorizationTransactionBodySchema = z.looseObject({
  customer_id: z.string().max(50),
  payment_source_id: z.string().max(40).optional(),
  currency_code: z.string().max(3).optional(),
  amount: z.number().int().min(1),
});
export { CreateAuthorizationTransactionBodySchema };
export type CreateAuthorizationTransactionBody = z.infer<
  typeof CreateAuthorizationTransactionBodySchema
>;

//Transaction.recordRefund

const RecordRefundTransactionBodySchema = z.looseObject({
  amount: z.number().int().min(1).optional(),
  payment_method: z.enum([
    'cash',
    'check',
    'chargeback',
    'bank_transfer',
    'other',
    'app_store',
    'play_store',
    'custom',
  ]),
  date: z.number().int(),
  reference_number: z.string().max(100).optional(),
  custom_payment_method_id: z.string().max(50).optional(),
  comment: z.string().max(300).optional(),
});
export { RecordRefundTransactionBodySchema };
export type RecordRefundTransactionBody = z.infer<
  typeof RecordRefundTransactionBodySchema
>;

//Transaction.reconcile

const ReconcileTransactionBodySchema = z.looseObject({
  id_at_gateway: z.string().max(100).optional(),
  customer_id: z.string().max(50).optional(),
  status: z.enum(['success', 'failure']).optional(),
});
export { ReconcileTransactionBodySchema };
export type ReconcileTransactionBody = z.infer<
  typeof ReconcileTransactionBodySchema
>;

//Transaction.refund

const RefundTransactionBodySchema = z.looseObject({
  amount: z.number().int().min(1).optional(),
  comment: z.string().max(300).optional(),
});
export { RefundTransactionBodySchema };
export type RefundTransactionBody = z.infer<typeof RefundTransactionBodySchema>;

//Transaction.transactionsForCustomer

const TransactionsForCustomerTransactionBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
});
export { TransactionsForCustomerTransactionBodySchema };
export type TransactionsForCustomerTransactionBody = z.infer<
  typeof TransactionsForCustomerTransactionBodySchema
>;

//Transaction.transactionsForSubscription

const TransactionsForSubscriptionTransactionBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
});
export { TransactionsForSubscriptionTransactionBodySchema };
export type TransactionsForSubscriptionTransactionBody = z.infer<
  typeof TransactionsForSubscriptionTransactionBodySchema
>;

//Transaction.paymentsForInvoice

const PaymentsForInvoiceTransactionBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
});
export { PaymentsForInvoiceTransactionBodySchema };
export type PaymentsForInvoiceTransactionBody = z.infer<
  typeof PaymentsForInvoiceTransactionBodySchema
>;

//Transaction.deleteOfflineTransaction

const DeleteOfflineTransactionTransactionBodySchema = z.looseObject({
  comment: z.string().max(300).optional(),
});
export { DeleteOfflineTransactionTransactionBodySchema };
export type DeleteOfflineTransactionTransactionBody = z.infer<
  typeof DeleteOfflineTransactionTransactionBodySchema
>;
