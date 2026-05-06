// Generated Zod validator: Customer.updateHierarchySettings
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const updateHierarchySettingsCustomerParentAccountAccessSchema = z.object({
  portal_edit_child_subscriptions: z
    .enum(['yes', 'view_only', 'no'])
    .optional(),
  portal_download_child_invoices: z.enum(['yes', 'view_only', 'no']).optional(),
  send_subscription_emails: z.boolean().optional(),
  send_payment_emails: z.boolean().optional(),
  send_invoice_emails: z.boolean().optional(),
});
const updateHierarchySettingsCustomerChildAccountAccessSchema = z.object({
  portal_edit_subscriptions: z.enum(['yes', 'view_only']).optional(),
  portal_download_invoices: z.enum(['yes', 'view_only', 'no']).optional(),
  send_subscription_emails: z.boolean().optional(),
  send_payment_emails: z.boolean().optional(),
  send_invoice_emails: z.boolean().optional(),
});
const updateHierarchySettingsCustomerBodySchema = z.looseObject({
  use_default_hierarchy_settings: z.boolean().default(true).optional(),
  parent_account_access:
    updateHierarchySettingsCustomerParentAccountAccessSchema.optional(),
  child_account_access:
    updateHierarchySettingsCustomerChildAccountAccessSchema.optional(),
});
export { updateHierarchySettingsCustomerBodySchema };
