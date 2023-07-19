///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface VirtualBankAccount {
    
    id:string;
    customer_id:string;
    email:string;
    scheme?:'ach_credit' | 'sepa_credit';
    bank_name?:string;
    account_number:string;
    routing_number?:string;
    swift_code:string;
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
      delete_local(virtual_bank_account_id:string):ChargebeeRequest<DeleteLocalResponse>;
      delete(virtual_bank_account_id:string):ChargebeeRequest<DeleteResponse>;
      list(input?:ListInputParam):ChargebeeRequest<ListResponse>;
      create(input:CreateInputParam):ChargebeeRequest<CreateResponse>;
      retrieve(virtual_bank_account_id:string):ChargebeeRequest<RetrieveResponse>;
      create_using_permanent_token(input:CreateUsingPermanentTokenInputParam):ChargebeeRequest<CreateUsingPermanentTokenResponse>;
    }
    export interface DeleteLocalResponse {
      virtual_bank_account:VirtualBankAccount;
    }
    
    export interface DeleteResponse {
      virtual_bank_account:VirtualBankAccount;
    }
    
    export interface ListResponse {
      list:{virtual_bank_account:VirtualBankAccount}[];
      next_offset?:string;
    }
    export interface ListInputParam {
      [key: string]: string | number | object | boolean;
      limit?:number;
      offset?:string;
      customer_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
      updated_at?:{after?:string,before?:string,between?:string,on?:string};
      created_at?:{after?:string,before?:string,between?:string,on?:string};
    }
    export interface CreateResponse {
      virtual_bank_account:VirtualBankAccount;
      customer?:Customer;
    }
    export interface CreateInputParam {
      
      customer_id:string;
      email?:string;
      scheme?:'ach_credit' | 'sepa_credit';
    }
    export interface RetrieveResponse {
      virtual_bank_account:VirtualBankAccount;
    }
    
    export interface CreateUsingPermanentTokenResponse {
      virtual_bank_account:VirtualBankAccount;
      customer?:Customer;
    }
    export interface CreateUsingPermanentTokenInputParam {
      
      customer_id:string;
      reference_id:string;
      scheme?:'ach_credit' | 'sepa_credit';
    }
    
  }
}