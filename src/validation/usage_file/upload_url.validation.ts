// Generated Zod validator: UsageFile.uploadUrl
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const uploadUrlUsageFileBodySchema = z.looseObject({
  file_name: z.string().max(150),
  mime_type: z.string().max(100),
});
export { uploadUrlUsageFileBodySchema };
