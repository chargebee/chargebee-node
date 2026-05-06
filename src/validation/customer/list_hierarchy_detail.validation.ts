// Generated Zod validator: Customer.listHierarchyDetail
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const listHierarchyDetailCustomerBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
  hierarchy_operation_type: z.enum([
    'complete_hierarchy',
    'subordinates',
    'path_to_root',
    'subordinates_with_unbilled_charges_payable_by_parent',
    'immediate_children',
  ]),
});
export { listHierarchyDetailCustomerBodySchema };
