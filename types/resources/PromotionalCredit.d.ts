///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface PromotionalCredit {
    
    /**
      * @description Unique reference ID provided for promotional credits

      */
    
    id:string;
    
    /**
      * @description Identifier of the customer.

      */
    
    customer_id:string;
    
    /**
      * @description Type of promotional credits \* decrement - Decrement \* increment - Increment

      */
    
    type:'decrement' | 'increment';
    
    /**
      * @description Amount in decimal

      */
    
    amount_in_decimal?:string;
    
    /**
      * @description Promotional credits amount

      */
    
    amount:number;
    
    /**
      * @description The currency code (ISO 4217 format) for promotional credit

      */
    
    currency_code:string;
    
    /**
      * @description Detailed description of this promotional credits.

      */
    
    description:string;
    
    /**
      * @description Type of promotional credits provided to customer \* referral_rewards - Referral \* loyalty_credits - Loyalty Credits \* general - General

      */
    
    credit_type:CreditType;
    
    /**
      * @description Describes why promotional credits were provided

      */
    
    reference?:string;
    
    /**
      * @description Closing balance as on end date.

      */
    
    closing_balance:number;
    
    /**
      * @description The user who added/deducted the credit. If created via API, this contains the name given for the API key used.

      */
    
    done_by?:string;
    
    /**
      * @description Timestamp indicating when this promotional credit resource is created.

      */
    
    created_at:number;
  }
  export namespace PromotionalCredit {
    export class PromotionalCreditResource {  
      /**
        * @description This API call can be used to add promotional credits to a customer. [Learn more about Promotional Credits](https://www.chargebee.com/docs/2.0/credit-notes.html#creating-promotional-credits).

For example, if a customer has credits of $10, if you pass the **amount** as $10, then the customer&#x27;s credit balance would become $20.

        */
      
      add(input:AddInputParam):ChargebeeRequest<AddResponse>;
       
      /**
        * @description This API call can be used to deduct promotional credits for a customer. [Learn more about Promotional Credits](https://www.chargebee.com/docs/2.0/credit-notes.html#creating-promotional-credits).

For example, if a customer has a credit balance of $20, if you pass the **amount** as $5, then the customer&#x27;s credit balance would become $15.

If you do not pass any amount as the input parameter then, it will deduct the whole available amount from the credit balance.

        */
      
      deduct(input:DeductInputParam):ChargebeeRequest<DeductResponse>;
       
      /**
        * @description This API call can be used to set the promotional credits balance of a customer. [Learn more about Promotional Credits](https://www.chargebee.com/docs/2.0/credit-notes.html#creating-promotional-credits).

For example, if a customer has a credit balance of $10 and if you would like to set the balance to $100, you could pass the **amount** as $100.

        */
      
      set(input:SetInputParam):ChargebeeRequest<SetResponse>;
       
      /**
        * @description This endpoint lists the promotional credits set for a customer

        */
      
      list(input?:ListInputParam):ChargebeeRequest<ListResponse>;
       
      /**
        * @description This endpoint retrieves the promotional credit based on the promotional credit id

        */
      
      retrieve(account_credit_id:string):ChargebeeRequest<RetrieveResponse>;
    }
    export interface AddResponse {  
       customer:Customer;
       
       promotional_credit:PromotionalCredit;
    }
    export interface AddInputParam {
       
      /**
        * @description Identifier of the customer.

        */
       
      customer_id:string;
       
      /**
        * @description Promotional credits amount.

        */
       
      amount?:number;
       
      /**
        * @description Amount in decimal.

        */
       
      amount_in_decimal?:string;
       
      /**
        * @description The currency code (ISO 4217 format) for promotional credit.

        */
       
      currency_code?:string;
       
      /**
        * @description Detailed description of this promotional credits.

        */
       
      description:string;
       
      /**
        * @description Type of promotional credits provided to customer. \* general - General \* referral_rewards - Referral \* loyalty_credits - Loyalty Credits

        */
       
      credit_type?:CreditType;
       
      /**
        * @description Describes why promotional credits were provided.

        */
       
      reference?:string;
    }
    export interface DeductResponse {  
       customer:Customer;
       
       promotional_credit:PromotionalCredit;
    }
    export interface DeductInputParam {
       
      /**
        * @description Identifier of the customer.

        */
       
      customer_id:string;
       
      /**
        * @description Promotional credits amount.

        */
       
      amount?:number;
       
      /**
        * @description Amount in decimal.

        */
       
      amount_in_decimal?:string;
       
      /**
        * @description The currency code (ISO 4217 format) for promotional credit.

        */
       
      currency_code?:string;
       
      /**
        * @description Detailed description of this promotional credits.

        */
       
      description:string;
       
      /**
        * @description Type of promotional credits provided to customer. \* general - General \* referral_rewards - Referral \* loyalty_credits - Loyalty Credits

        */
       
      credit_type?:CreditType;
       
      /**
        * @description Describes why promotional credits were provided.

        */
       
      reference?:string;
    }
    export interface SetResponse {  
       customer:Customer;
       
       promotional_credit:PromotionalCredit;
    }
    export interface SetInputParam {
       
      /**
        * @description Identifier of the customer.

        */
       
      customer_id:string;
       
      /**
        * @description Promotional credits amount.

        */
       
      amount?:number;
       
      /**
        * @description Amount in decimal.

        */
       
      amount_in_decimal?:string;
       
      /**
        * @description The currency code (ISO 4217 format) for promotional credit.

        */
       
      currency_code?:string;
       
      /**
        * @description Detailed description of this promotional credits.

        */
       
      description:string;
       
      /**
        * @description Type of promotional credits provided to customer. \* general - General \* referral_rewards - Referral \* loyalty_credits - Loyalty Credits

        */
       
      credit_type?:CreditType;
       
      /**
        * @description Describes why promotional credits were provided.

        */
       
      reference?:string;
    }
    export interface ListResponse {  
      /**
        * @description This endpoint lists the promotional credits set for a customer

        */
       
       list:{promotional_credit:PromotionalCredit}[];
       
      /**
        * @description This endpoint lists the promotional credits set for a customer

        */
       
       next_offset?:string;
    }
    export interface ListInputParam {
      [key : string]: any;  
      /**
        * @description This endpoint lists the promotional credits set for a customer

        */
        
      limit?:number;
       
      /**
        * @description This endpoint lists the promotional credits set for a customer

        */
        
      offset?:string;
       
      /**
        * @description This endpoint lists the promotional credits set for a customer

        */
        
      id?:{is?:string,is_not?:string,starts_with?:string};
       
      /**
        * @description This endpoint lists the promotional credits set for a customer

        */
        
      created_at?:{after?:string,before?:string,between?:string,on?:string};
       
      /**
        * @description This endpoint lists the promotional credits set for a customer

        */
        
      type?:{in?:string,is?:'decrement' | 'increment',is_not?:'decrement' | 'increment',not_in?:string};
       
      /**
        * @description This endpoint lists the promotional credits set for a customer

        */
        
      customer_id?:{is?:string,is_not?:string,starts_with?:string};
    }
    export interface RetrieveResponse {  
       promotional_credit:PromotionalCredit;
    }
    
    
  }
}