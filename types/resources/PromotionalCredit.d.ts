///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
declare module 'chargebee' {
  export interface PromotionalCredit {
    

    id:string;

    customer_id:string;

    type:'increment' | 'decrement';

    amount_in_decimal?:string;

    amount:number;

    currency_code:string;

    description:string;

    credit_type:CreditType;

    reference?:string;

    closing_balance:number;

    done_by?:string;

    created_at:number;

  }
  export namespace PromotionalCredit {
    export class PromotionalCreditResource {  
      add(input:AddInputParam):ChargebeeRequest<AddResponse>;
       
      deduct(input:DeductInputParam):ChargebeeRequest<DeductResponse>;
       
      set(input:SetInputParam):ChargebeeRequest<SetResponse>;
       
      list(input?:ListInputParam):ChargebeeRequest<ListResponse>;
       
      retrieve(account_credit_id:string):ChargebeeRequest<RetrieveResponse>;
    }
    export interface AddResponse {  
       customer:Customer;
       
       promotional_credit:PromotionalCredit;
    }
    export interface AddInputParam {
       
      customer_id:string;
       
      amount?:number;
       
      amount_in_decimal?:string;
       
      currency_code?:string;
       
      description:string;
       
      credit_type?:CreditType;
       
      reference?:string;
    }
    export interface DeductResponse {  
       customer:Customer;
       
       promotional_credit:PromotionalCredit;
    }
    export interface DeductInputParam {
       
      customer_id:string;
       
      amount?:number;
       
      amount_in_decimal?:string;
       
      currency_code?:string;
       
      description:string;
       
      credit_type?:CreditType;
       
      reference?:string;
    }
    export interface SetResponse {  
       customer:Customer;
       
       promotional_credit:PromotionalCredit;
    }
    export interface SetInputParam {
       
      customer_id:string;
       
      amount?:number;
       
      amount_in_decimal?:string;
       
      currency_code?:string;
       
      description:string;
       
      credit_type?:CreditType;
       
      reference?:string;
    }
    export interface ListResponse {  
       list:{promotional_credit:PromotionalCredit}[];
       
       next_offset?:string;
    }
    export interface ListInputParam {
      [key : string]: any;  
      /**
        * @description The number of resources to be returned.

        */
        
      limit?:number;
       
      /**
        * @description Determines your position in the list for pagination. To ensure that the next page is retrieved correctly, always set \&#x60;offset\&#x60; to the value of \&#x60;next_offset\&#x60; obtained in the previous iteration of the API call.

        */
        
      offset?:string;
       
      /**
        * @description Unique reference ID provided for promotional credits

        */
        
      id?:{is?:string,is_not?:string,starts_with?:string};
       
      /**
        * @description Timestamp indicating when this promotional credit resource is created.

        */
        
      created_at?:{after?:string,before?:string,between?:string,on?:string};
       
      /**
        * @description Type of promotional credits

        */
        
      type?:{in?:string,is?:'increment' | 'decrement',is_not?:'increment' | 'decrement',not_in?:string};
       
      /**
        * @description Identifier of the customer.

        */
        
      customer_id?:{is?:string,is_not?:string,starts_with?:string};
    }
    export interface RetrieveResponse {  
       promotional_credit:PromotionalCredit;
    }
    
    
  }
}