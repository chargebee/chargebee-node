// Generated Zod validator: Customer.hierarchy
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const hierarchyCustomerBodySchema = z.looseObject({
  hierarchy_operation_type: z.enum([
    'complete_hierarchy',
    'subordinates',
    'path_to_root',
    'subordinates_with_unbilled_charges_payable_by_parent',
    'immediate_children',
  ]),
});
export { hierarchyCustomerBodySchema };
