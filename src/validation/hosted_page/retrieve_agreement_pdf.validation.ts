// Generated Zod validator: HostedPage.retrieveAgreementPdf
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const retrieveAgreementPdfHostedPageBodySchema = z.looseObject({
  payment_source_id: z.string().max(40),
});
export { retrieveAgreementPdfHostedPageBodySchema };
