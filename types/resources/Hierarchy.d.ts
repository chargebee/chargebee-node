///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface Hierarchy {
    
    /**
      * @description The &#x60;id&#x60; of the customer associated with this &#x60;hierarchy&#x60; resource.

      */
    
    customer_id:string;
    
    /**
      * @description The &#x60;id&#x60; of the immediate parent for the customer identified by &#x60;customer_id&#x60;. If the customer is the root of the hierarchy, this attribute isn&#x27;t returned.

      */
    
    parent_id?:string;
    
    /**
      * @description The &#x60;id&#x60; of the customer responsible for paying the invoices for the customer identified by &#x60;customer_id&#x60;. This ID must match either &#x60;customer_id&#x60; or &#x60;invoice_owner_id&#x60;.

      */
    
    payment_owner_id:string;
    
    /**
      * @description The &#x60;id&#x60; of the customer who receives the invoice for charges incurred by the customer identified by &#x60;customer_id&#x60;. This ID must match either &#x60;customer_id&#x60; or one of its ancestors.

      */
    
    invoice_owner_id:string;
    
    /**
      * @description A list of &#x60;id&#x60;s representing the immediate children, if any exist, for the customer identified by &#x60;customer_id&#x60;.

      */
    
    children_ids?:string[];
  }
}