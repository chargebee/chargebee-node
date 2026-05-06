// Generated Zod validator: TimeMachine.startAfresh
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const startAfreshTimeMachineBodySchema = z.looseObject({
  genesis_time: z.number().int().optional(),
});
export { startAfreshTimeMachineBodySchema };
