// Generated Zod validator: Customer.relationships
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const relationshipsCustomerParentAccountAccessSchema = z.object({
  portal_edit_child_subscriptions: z
    .enum(['yes', 'view_only', 'no'])
    .optional(),
  portal_download_child_invoices: z.enum(['yes', 'view_only', 'no']).optional(),
  send_subscription_emails: z.boolean().optional(),
  send_payment_emails: z.boolean().optional(),
  send_invoice_emails: z.boolean().optional(),
});
const relationshipsCustomerChildAccountAccessSchema = z.object({
  portal_edit_subscriptions: z.enum(['yes', 'view_only']).optional(),
  portal_download_invoices: z.enum(['yes', 'view_only', 'no']).optional(),
  send_subscription_emails: z.boolean().optional(),
  send_payment_emails: z.boolean().optional(),
  send_invoice_emails: z.boolean().optional(),
});
const relationshipsCustomerBodySchema = z.looseObject({
  parent_id: z.string().max(50).optional(),
  payment_owner_id: z.string().max(50).optional(),
  invoice_owner_id: z.string().max(50).optional(),
  use_default_hierarchy_settings: z.boolean().default(true).optional(),
  parent_account_access:
    relationshipsCustomerParentAccountAccessSchema.optional(),
  child_account_access:
    relationshipsCustomerChildAccountAccessSchema.optional(),
});
export { relationshipsCustomerBodySchema };
