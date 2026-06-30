// Generated Zod schemas: PersonalizedOffer
// Actions: personalizedOffers
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//PersonalizedOffer.personalizedOffers

const PersonalizedOffersPersonalizedOfferCustomSchema = z.looseObject({});
const PersonalizedOffersPersonalizedOfferRequestContextSchema = z.object({
  user_agent: z.string().max(255).optional(),
  locale: z.string().max(50).optional(),
  timezone: z.string().max(64).optional(),
  url: z.string().max(250).optional(),
  referrer_url: z.string().max(250).optional(),
});
const PersonalizedOffersPersonalizedOfferBodySchema = z.looseObject({
  first_name: z.string().max(150).optional(),
  last_name: z.string().max(150).optional(),
  email: z.string().email().max(70).optional(),
  roles: z.array(z.string().max(50).optional()).optional(),
  external_user_id: z.string().max(50).optional(),
  subscription_id: z.string().max(50).optional(),
  customer_id: z.string().max(50),
  custom: PersonalizedOffersPersonalizedOfferCustomSchema.optional(),
  request_context:
    PersonalizedOffersPersonalizedOfferRequestContextSchema.optional(),
});
export { PersonalizedOffersPersonalizedOfferBodySchema };
export type PersonalizedOffersPersonalizedOfferBody = z.infer<
  typeof PersonalizedOffersPersonalizedOfferBodySchema
>;
