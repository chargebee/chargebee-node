// Generated Zod schemas: RetrySegment
// Actions: retrieve
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//RetrySegment.retrieve

const RetrieveRetrySegmentBodySchema = z.looseObject({
  invoice_id: z.string().max(50).optional(),
});
export { RetrieveRetrySegmentBodySchema };
export type RetrieveRetrySegmentBody = z.infer<
  typeof RetrieveRetrySegmentBodySchema
>;
