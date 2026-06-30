// Generated Zod schemas: OfferEvent
// Actions: offerEvents
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//OfferEvent.offerEvents

const OfferEventsOfferEventBodySchema = z.looseObject({
  personalized_offer_id: z.string().max(50),
  type: z.enum(['viewed', 'dismissed']),
});
export { OfferEventsOfferEventBodySchema };
export type OfferEventsOfferEventBody = z.infer<
  typeof OfferEventsOfferEventBodySchema
>;
