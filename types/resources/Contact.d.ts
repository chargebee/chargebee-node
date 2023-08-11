///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface Contact {
    
    /**
      * @description Unique reference ID provided for the contact.

      */
    
    id:string;
    
    /**
      * @description First name of the contact.

      */
    
    first_name?:string;
    
    /**
      * @description Last name of the contact.

      */
    
    last_name?:string;
    
    /**
      * @description Email of the contact.

      */
    
    email:string;
    
    /**
      * @description Phone number of the contact.

      */
    
    phone?:string;
    
    /**
      * @description Label/Tag provided for contact.

      */
    
    label?:string;
    
    /**
      * @description Contact enabled / disabled

      */
    
    enabled:boolean;
    
    /**
      * @description Whether Account Emails option is enabled for the contact.

      */
    
    send_account_email:boolean;
    
    /**
      * @description Whether Billing Emails option is enabled for the contact.

      */
    
    send_billing_email:boolean;
  }
}