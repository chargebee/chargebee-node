// Generated Zod validator: OfferEvent.offerEvents
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const offerEventsOfferEventBodySchema = z.looseObject({
  personalized_offer_id: z.string().max(50),
  type: z.enum(['viewed', 'dismissed']),
});
export { offerEventsOfferEventBodySchema };
