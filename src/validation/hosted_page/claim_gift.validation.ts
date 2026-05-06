// Generated Zod validator: HostedPage.claimGift
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const claimGiftHostedPageGiftSchema = z.object({
  id: z.string().max(150),
});
const claimGiftHostedPageCustomerSchema = z.object({
  locale: z.string().max(50).optional(),
});
const claimGiftHostedPageBodySchema = z.looseObject({
  redirect_url: z.string().max(250).optional(),
  gift: claimGiftHostedPageGiftSchema.optional(),
  customer: claimGiftHostedPageCustomerSchema.optional(),
});
export { claimGiftHostedPageBodySchema };
