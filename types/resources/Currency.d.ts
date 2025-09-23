///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
declare module 'chargebee' {
  export interface Currency {
    

    id:string;

    enabled:boolean;

    forex_type?:'manual' | 'auto';

    currency_code:string;

    is_base_currency:boolean;

    manual_exchange_rate?:string;

  }
  export namespace Currency {
    export class CurrencyResource {  
      list(input?:ListInputParam):ChargebeeRequest<ListResponse>;
       
      retrieve(site_currency_id:string):ChargebeeRequest<RetrieveResponse>;
       
      create(input:CreateInputParam):ChargebeeRequest<CreateResponse>;
       
      update(site_currency_id:string, input:UpdateInputParam):ChargebeeRequest<UpdateResponse>;
       
      add_schedule(site_currency_id:string, input:AddScheduleInputParam):ChargebeeRequest<AddScheduleResponse>;
       
      remove_schedule(site_currency_id:string):ChargebeeRequest<RemoveScheduleResponse>;
    }
    export interface ListResponse {  
       list:{currency:Currency}[];
       
       next_offset?:string;
    }
    export interface ListInputParam {
      [key : string]: any;  
      /**
        * @description The number of resources to be returned.

        */
        
      limit?:number;
       
      /**
        * @description Determines your position in the list for pagination. To ensure that the next page is retrieved correctly, always set &#x27;offset&#x27; to the value of &#x27;next_offset&#x27; obtained in the previous iteration of the API call.

        */
        
      offset?:string;
    }
    export interface RetrieveResponse {  
       currency:Currency;
    }
    
    export interface CreateResponse {  
       currency:Currency;
    }
    export interface CreateInputParam {
       
      currency_code:string;
       
      forex_type:'manual' | 'auto';
       
      manual_exchange_rate?:string;
    }
    export interface UpdateResponse {  
       currency:Currency;
    }
    export interface UpdateInputParam {
       
      forex_type:'manual' | 'auto';
       
      manual_exchange_rate?:string;
    }
    export interface AddScheduleResponse {  
       scheduled_at:number;
       
       currency:Currency;
    }
    export interface AddScheduleInputParam {
       
      manual_exchange_rate:string;
       
      schedule_at:number;
    }
    export interface RemoveScheduleResponse {  
       scheduled_at:number;
       
       currency:Currency;
    }
    
    
  }
}