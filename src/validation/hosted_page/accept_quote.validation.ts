// Generated Zod validator: HostedPage.acceptQuote
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const acceptQuoteHostedPageQuoteSchema = z.object({
  id: z.string().max(50),
});
const acceptQuoteHostedPageBodySchema = z.looseObject({
  redirect_url: z.string().max(250).optional(),
  layout: z.enum(['in_app', 'full_page']).optional(),
  quote: acceptQuoteHostedPageQuoteSchema.optional(),
});
export { acceptQuoteHostedPageBodySchema };
