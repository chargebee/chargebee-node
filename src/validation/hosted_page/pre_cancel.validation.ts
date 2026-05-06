// Generated Zod validator: HostedPage.preCancel
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const preCancelHostedPageSubscriptionSchema = z.object({
  id: z.string().max(50),
});
const preCancelHostedPageBodySchema = z.looseObject({
  pass_thru_content: z.string().max(2048).optional(),
  cancel_url: z.string().max(250).optional(),
  redirect_url: z.string().max(250).optional(),
  subscription: preCancelHostedPageSubscriptionSchema.optional(),
});
export { preCancelHostedPageBodySchema };
