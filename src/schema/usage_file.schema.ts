// Generated Zod schemas: UsageFile
// Actions: uploadUrl
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//UsageFile.uploadUrl

const UploadUrlUsageFileBodySchema = z.looseObject({
  file_name: z.string().max(150),
  mime_type: z.string().max(100),
});
export { UploadUrlUsageFileBodySchema };
export type UploadUrlUsageFileBody = z.infer<
  typeof UploadUrlUsageFileBodySchema
>;
