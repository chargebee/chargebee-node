declare module 'chargebee' {
  export interface TimeMachine {
    
    name:string;
    time_travel_status:'in_progress' | 'not_enabled' | 'failed' | 'succeeded';
    genesis_time:number;
    destination_time:number;
    failure_code?:string;
    failure_reason?:string;
    error_json?:string;
  }
  export namespace TimeMachine {
    export class TimeMachineResource {
      retrieve(time_machine_name:string):ChargebeeRequest<RetrieveResponse>;
      travel_forward(time_machine_name:string, input?:TravelForwardInputParam):ChargebeeRequest<TravelForwardResponse>;
      start_afresh(time_machine_name:string, input?:StartAfreshInputParam):ChargebeeRequest<StartAfreshResponse>;
    }
    export interface RetrieveResponse {
      time_machine:TimeMachine;
    }
    
    export interface TravelForwardResponse {
      time_machine:TimeMachine;
    }
    export interface TravelForwardInputParam {
      
      destination_time?:number;
    }
    export interface StartAfreshResponse {
      time_machine:TimeMachine;
    }
    export interface StartAfreshInputParam {
      
      genesis_time?:number;
    }
    
  }
}