///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface TimeMachine {
    
    /**
      * @description The name of the time machine. Currently only **delorean** is allowed

      */
    
    name:string;
    
    /**
      * @description The current status of time travel \* succeeded - Time travel has succeeded. \* not_enabled - Time travel has not been enabled for the site \* failed - Time travel has failed. Check the failure code and failure reason attributes for further details.  
**Note:** The time machine needs to be reset by starting afresh again. \* in_progress - Time travel is in progress

      */
    
    time_travel_status:'in_progress' | 'not_enabled' | 'failed' | 'succeeded';
    
    /**
      * @description The start time of the time machine. Specified when &#x27;starting afresh&#x27;

      */
    
    genesis_time:number;
    
    /**
      * @description The destination time to which the time machine is travelling (or has traveled)

      */
    
    destination_time:number;
    
    /**
      * @description The failure code. This will follow the api error code convention

      */
    
    failure_code?:string;
    
    /**
      * @description The more descriptive failure reason.

      */
    
    failure_reason?:string;
    
    /**
      * @description The failure details as error json.

      */
    
    error_json?:string;
  }
  export namespace TimeMachine {
    export class TimeMachineResource {  
      /**
        * @description Retrieves the time machine. Currently only one time machine is available per site and is named &#x27;delorean&#x27;.

        */
      
      retrieve(time_machine_name:string):ChargebeeRequest<RetrieveResponse>;
       
      /**
        * @description Restart the time machine. This will clear the &quot;customer&quot; data like customer details, subscriptions, invoices, transactions. Also a time travel is initiated to travel back to specified genesis time.

**Note:** This API call is asynchronous. You need to check if the &quot;start afresh&quot; operation has completed by checking if the time travel status is **successful** by retrieving the time machine in a loop with a minimum delay of 3 secs between two retrieve requests. In case you are using any of the client libraries, use the **wait for time travel completion** function provided as a instance method in the library. Use method **waitForTimeTravelCompletion()** on the returned **time_machine** resource which will block until the time travel completes. Use method **waitForTimeTravelCompletion()** on the returned **time_machine** resource which will block until the time travel completes. Use method **wait_for_time_travel_completion** on the returned **time_machine** resource which will block until the time travel completes. Use method **wait_for_time_travel_completion** on the returned **time_machine** resource which will block until the time travel completes. Use method **WaitForTimeTravelCompletion** on the returned **time_machine** resource which will block until the time travel completes. Use method **wait_for_time_travel_completion** on the returned **time_machine** resource which will block until the time travel completes. Use method **waitForTimeTravelCompletion** on the returned **time_machine** resource which will block until the time travel completes. Use method **wait_for_time_travel_completion** on the returned **time_machine** resource which will block until the time travel completes.

        */
      
      start_afresh(time_machine_name:string, input?:StartAfreshInputParam):ChargebeeRequest<StartAfreshResponse>;
       
      /**
        * @description Travel forward in time. This operation is **asynchronous** . You need to check if the &quot;start afresh&quot; operation has completed by checking if the time travel status is **successful** by retrieving the time machine in a loop with a minimum delay of 3 secs between two retrieve requests. Use method **waitForTimeTravelCompletion()** on the returned time_machine resource which will block until the time travel completes.

        */
      
      travel_forward(time_machine_name:string, input?:TravelForwardInputParam):ChargebeeRequest<TravelForwardResponse>;
    }
    export interface RetrieveResponse {  
       time_machine:TimeMachine;
    }
    
    export interface StartAfreshResponse {  
       time_machine:TimeMachine;
    }
    export interface StartAfreshInputParam {
       
      /**
        * @description The genesis time to travel back as part of the reset operation. If not provided, then the travel is set to 6 months in the past.   
**Note:** Can only be in the past.

        */
       
      genesis_time?:number;
    }
    export interface TravelForwardResponse {  
       time_machine:TimeMachine;
    }
    export interface TravelForwardInputParam {
       
      /**
        * @description The **time** to travel to. Should be between the &#x27;current&#x27; destination time of the time machine and present time.

        */
       
      destination_time?:number;
    }
    
  }
}