// Generated Zod schemas: OfferFulfillment
// Actions: offerFulfillments, offerFulfillmentsUpdate
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//OfferFulfillment.offerFulfillments

const OfferFulfillmentsOfferFulfillmentBodySchema = z.looseObject({
  personalized_offer_id: z.string().max(50),
  option_id: z.string().max(50),
});
export { OfferFulfillmentsOfferFulfillmentBodySchema };
export type OfferFulfillmentsOfferFulfillmentBody = z.infer<
  typeof OfferFulfillmentsOfferFulfillmentBodySchema
>;

//OfferFulfillment.offerFulfillmentsUpdate

const OfferFulfillmentsUpdateOfferFulfillmentBodySchema = z.looseObject({
  id: z.string().max(50),
  status: z.enum(['completed', 'failed']),
  failure_reason: z.string().max(100).optional(),
});
export { OfferFulfillmentsUpdateOfferFulfillmentBodySchema };
export type OfferFulfillmentsUpdateOfferFulfillmentBody = z.infer<
  typeof OfferFulfillmentsUpdateOfferFulfillmentBodySchema
>;
