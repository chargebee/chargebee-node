///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'chargebee' {
  export interface TimeMachine {
    name: string;

    time_travel_status: 'not_enabled' | 'in_progress' | 'succeeded' | 'failed';

    genesis_time: number;

    destination_time: number;

    failure_code?: string;

    failure_reason?: string;

    error_json?: string;
  }
  export namespace TimeMachine {
    export class TimeMachineResource {
      retrieve(
        time_machine_name: string,
      ): ChargebeeRequest<ChargebeeResponse<RetrieveResponse>>;

      startAfresh(
        time_machine_name: string,
        input?: StartAfreshInputParam,
      ): ChargebeeRequest<ChargebeeResponse<StartAfreshResponse>>;

      travelForward(
        time_machine_name: string,
        input?: TravelForwardInputParam,
      ): ChargebeeRequest<ChargebeeResponse<TravelForwardResponse>>;
    }
    export interface RetrieveResponse {
      time_machine: TimeMachine;
    }

    export interface StartAfreshResponse {
      time_machine: TimeMachine;
    }

    export interface TravelForwardResponse {
      time_machine: TimeMachine;
    }

    // REQUEST PARAMS
    //---------------

    export interface StartAfreshInputParam {
      genesis_time?: number;
    }
    export interface TravelForwardInputParam {
      destination_time?: number;
    }
  }
}
