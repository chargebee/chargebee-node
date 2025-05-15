///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
declare module 'chargebee' {
  export interface VirtualBankAccount {
    

    id:string;

    customer_id:string;

    email:string;

    scheme?:'ach_credit' | 'sepa_credit' | 'us_automated_bank_transfer' | 'gb_automated_bank_transfer' | 'eu_automated_bank_transfer' | 'jp_automated_bank_transfer' | 'mx_automated_bank_transfer';

    bank_name?:string;

    account_number:string;

    routing_number?:string;

    swift_code?:string;

    gateway:Gateway;

    gateway_account_id:string;

    resource_version?:number;

    updated_at?:number;

    created_at:number;

    reference_id:string;

    deleted:boolean;

  }
  export namespace VirtualBankAccount {
    export class VirtualBankAccountResource {  
      create_using_permanent_token(input:CreateUsingPermanentTokenInputParam):ChargebeeRequest<CreateUsingPermanentTokenResponse>;
       
      create(input:CreateInputParam):ChargebeeRequest<CreateResponse>;
       
      retrieve(virtual_bank_account_id:string):ChargebeeRequest<RetrieveResponse>;
       
      list(input?:ListInputParam):ChargebeeRequest<ListResponse>;
       
      delete(virtual_bank_account_id:string):ChargebeeRequest<DeleteResponse>;
       
      delete_local(virtual_bank_account_id:string):ChargebeeRequest<DeleteLocalResponse>;
    }
    export interface CreateUsingPermanentTokenResponse {  
       virtual_bank_account:VirtualBankAccount;
       
       customer?:Customer;
    }
    export interface CreateUsingPermanentTokenInputParam {
       
      customer_id:string;
       
      reference_id:string;
       
      scheme?:'ach_credit' | 'sepa_credit' | 'us_automated_bank_transfer' | 'gb_automated_bank_transfer' | 'eu_automated_bank_transfer' | 'jp_automated_bank_transfer' | 'mx_automated_bank_transfer';
    }
    export interface CreateResponse {  
       virtual_bank_account:VirtualBankAccount;
       
       customer?:Customer;
    }
    export interface CreateInputParam {
       
      customer_id:string;
       
      email?:string;
       
      scheme?:'ach_credit' | 'sepa_credit' | 'us_automated_bank_transfer' | 'gb_automated_bank_transfer' | 'eu_automated_bank_transfer' | 'jp_automated_bank_transfer' | 'mx_automated_bank_transfer';
    }
    export interface RetrieveResponse {  
       virtual_bank_account:VirtualBankAccount;
    }
    
    export interface ListResponse {  
       list:{virtual_bank_account:VirtualBankAccount}[];
       
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
        * @description Identifier of the customer.

        */
        
      customer_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description Timestamp indicating when this virtual bank account resource was last updated.

        */
        
      updated_at?:{after?:string,before?:string,between?:string,on?:string};
       
      /**
        * @description Timestamp indicating when this virtual bank account resource is created.

        */
        
      created_at?:{after?:string,before?:string,between?:string,on?:string};
    }
    export interface DeleteResponse {  
       virtual_bank_account:VirtualBankAccount;
    }
    
    export interface DeleteLocalResponse {  
       virtual_bank_account:VirtualBankAccount;
    }
    
    
  }
}