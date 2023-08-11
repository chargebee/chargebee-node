///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface Hierarchy {
    
    /**
      * @description The &#x60;id&#x60; of the customer

      */
    
    customer_id:string;
    
    /**
      * @description The &#x60;id&#x60; of the customer who is the immediate parent.

      */
    
    parent_id?:string;
    
    /**
      * @description The &#x60;id&#x60; of the customer who pays the invoices for this customer. Can be the customer itself or the &#x60;invoice_owner_id&#x60;

      */
    
    payment_owner_id:string;
    
    /**
      * @description The &#x60;id&#x60; of the customer who is invoiced for charges incurred. Can be the customer itself or any parent in its hierarchy.

      */
    
    invoice_owner_id:string;
    
    /**
      * @description The list of immediate children of the customer

      */
    
    children_ids?:string[];
  }
}