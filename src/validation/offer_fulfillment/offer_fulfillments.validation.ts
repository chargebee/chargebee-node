// Generated Zod validator: OfferFulfillment.offerFulfillments
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const offerFulfillmentsOfferFulfillmentBodySchema = z.looseObject({
  personalized_offer_id: z.string().max(50),
  option_id: z.string().max(50),
});
export { offerFulfillmentsOfferFulfillmentBodySchema };
