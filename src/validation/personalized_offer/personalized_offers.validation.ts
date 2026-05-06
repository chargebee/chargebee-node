// Generated Zod validator: PersonalizedOffer.personalizedOffers
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const personalizedOffersPersonalizedOfferCustomSchema = z.looseObject({});
const personalizedOffersPersonalizedOfferRequestContextSchema = z.object({
  user_agent: z.string().max(255).optional(),
  locale: z.string().max(50).optional(),
  timezone: z.string().max(64).optional(),
  url: z.string().max(250).optional(),
  referrer_url: z.string().max(250).optional(),
});
const personalizedOffersPersonalizedOfferBodySchema = z.looseObject({
  first_name: z.string().max(150).optional(),
  last_name: z.string().max(150).optional(),
  email: z.string().email().max(70).optional(),
  roles: z.array(z.string().max(50).optional()).optional(),
  external_user_id: z.string().max(50).optional(),
  subscription_id: z.string().max(50).optional(),
  customer_id: z.string().max(50),
  custom: personalizedOffersPersonalizedOfferCustomSchema.optional(),
  request_context:
    personalizedOffersPersonalizedOfferRequestContextSchema.optional(),
});
export { personalizedOffersPersonalizedOfferBodySchema };
