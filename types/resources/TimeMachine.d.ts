///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
declare module 'chargebee' {
  export interface TimeMachine {
    

    name:string;

    time_travel_status:'not_enabled' | 'in_progress' | 'succeeded' | 'failed';

    genesis_time:number;

    destination_time:number;

    failure_code?:string;

    failure_reason?:string;

    error_json?:string;

  }
  export namespace TimeMachine {
    export class TimeMachineResource {  
      retrieve(time_machine_name:string):ChargebeeRequest<RetrieveResponse>;
       
      start_afresh(time_machine_name:string, input?:StartAfreshInputParam):ChargebeeRequest<StartAfreshResponse>;
       
      travel_forward(time_machine_name:string, input?:TravelForwardInputParam):ChargebeeRequest<TravelForwardResponse>;
    }
    export interface RetrieveResponse {  
       time_machine:TimeMachine;
    }
    
    export interface StartAfreshResponse {  
       time_machine:TimeMachine;
    }
    export interface StartAfreshInputParam {
       
      genesis_time?:number;
    }
    export interface TravelForwardResponse {  
       time_machine:TimeMachine;
    }
    export interface TravelForwardInputParam {
       
      destination_time?:number;
    }
    
  }
}