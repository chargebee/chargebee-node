// Generated Zod validator: TimeMachine.travelForward
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const travelForwardTimeMachineBodySchema = z.looseObject({
  destination_time: z.number().int().optional(),
});
export { travelForwardTimeMachineBodySchema };
