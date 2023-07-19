declare module 'chargebee' {
  export interface Contact {
    
    id:string;
    first_name?:string;
    last_name?:string;
    email:string;
    phone?:string;
    label?:string;
    enabled:boolean;
    send_account_email:boolean;
    send_billing_email:boolean;
  }
  
}