// Generated Zod schemas: OmnichannelSubscriptionItem
// Actions: listOmniSubItemScheduleChanges
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//OmnichannelSubscriptionItem.listOmniSubItemScheduleChanges

const ListOmniSubItemScheduleChangesOmnichannelSubscriptionItemBodySchema =
  z.looseObject({
    limit: z.number().int().min(1).max(100).optional(),
    offset: z.string().max(1000).optional(),
  });
export { ListOmniSubItemScheduleChangesOmnichannelSubscriptionItemBodySchema };
export type ListOmniSubItemScheduleChangesOmnichannelSubscriptionItemBody =
  z.infer<
    typeof ListOmniSubItemScheduleChangesOmnichannelSubscriptionItemBodySchema
  >;
