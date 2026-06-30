// Generated Zod schemas: TimeMachine
// Actions: startAfresh, travelForward
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//TimeMachine.startAfresh

const StartAfreshTimeMachineBodySchema = z.looseObject({
  genesis_time: z.number().int().optional(),
});
export { StartAfreshTimeMachineBodySchema };
export type StartAfreshTimeMachineBody = z.infer<
  typeof StartAfreshTimeMachineBodySchema
>;

//TimeMachine.travelForward

const TravelForwardTimeMachineBodySchema = z.looseObject({
  destination_time: z.number().int().optional(),
});
export { TravelForwardTimeMachineBodySchema };
export type TravelForwardTimeMachineBody = z.infer<
  typeof TravelForwardTimeMachineBodySchema
>;
