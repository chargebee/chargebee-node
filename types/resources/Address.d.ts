///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
declare module 'chargebee' {
  export interface Address {
    

    label:string;

    first_name?:string;

    last_name?:string;

    email?:string;

    company?:string;

    phone?:string;

    addr?:string;

    extended_addr?:string;

    extended_addr2?:string;

    city?:string;

    state_code?:string;

    state?:string;

    country?:string;

    zip?:string;

    validation_status?:ValidationStatus;

    subscription_id:string;

  }
  export namespace Address {
    export class AddressResource {  
      retrieve(input:RetrieveInputParam):ChargebeeRequest<RetrieveResponse>;
       
      update(input:UpdateInputParam):ChargebeeRequest<UpdateResponse>;
    }
    export interface RetrieveResponse {  
       address:Address;
    }
    export interface RetrieveInputParam {
       
      subscription_id:string;
       
      label:string;
    }
    export interface UpdateResponse {  
       address:Address;
    }
    export interface UpdateInputParam {
       
      subscription_id:string;
       
      label:string;
       
      first_name?:string;
       
      last_name?:string;
       
      email?:string;
       
      company?:string;
       
      phone?:string;
       
      addr?:string;
       
      extended_addr?:string;
       
      extended_addr2?:string;
       
      city?:string;
       
      state_code?:string;
       
      state?:string;
       
      zip?:string;
       
      country?:string;
       
      validation_status?:ValidationStatus;
    }
    
  }
}