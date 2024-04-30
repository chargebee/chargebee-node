///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface Installment {
    
    /**
      * @description An auto-generated unique identifier for the Payment installment.

      */
    
    id:string;
    
    /**
      * @description The ID of the invoice to which this installment belongs.

      */
    
    invoice_id:string;
    
    /**
      * @description The date when this installment is in effect.

      */
    
    date:number;
    
    /**
      * @description The part of invoice.amount_due allocated to this installment.

      */
    
    amount:number;
    
    /**
      * @description The payment status of the installment. Possible values are paid, payment_due: The payment is due, posted. \* posted - The invoice is finalized but the payment is not due yet. \* payment_due - The payment is due. One or more payments were attempted for the installment but were unsuccessful. \* paid - The installment has been paid.

      */
    
    status:'paid' | 'posted' | 'payment_due';
    
    /**
      * @description The time when this resource was created.

      */
    
    created_at:number;
    
    resource_version?:number;
    
    /**
      * @description The time when this resource was last updated.

      */
    
    updated_at?:number;
  }
  export namespace Installment {
    export class InstallmentResource {  
      /**
        * @description Retrieves a specific installment resource.

        */
      
      retrieve(installment_id:string):ChargebeeRequest<RetrieveResponse>;
       
      /**
        * @description Lists the installments that match the criteria provided in the filter parameters.

        */
      
      list(input:ListInputParam):ChargebeeRequest<ListResponse>;
    }
    export interface RetrieveResponse {  
       installment:Installment;
    }
    
    export interface ListResponse {  
      /**
        * @description Lists the installments that match the criteria provided in the filter parameters.

        */
       
       list:{installment:Installment}[];
       
      /**
        * @description Lists the installments that match the criteria provided in the filter parameters.

        */
       
       next_offset?:string;
    }
    export interface ListInputParam {
      [key : string]: any;  
      /**
        * @description Lists the installments that match the criteria provided in the filter parameters.

        */
        
      limit?:number;
       
      /**
        * @description Lists the installments that match the criteria provided in the filter parameters.

        */
        
      offset?:string;
       
      /**
        * @description Lists the installments that match the criteria provided in the filter parameters.

        */
        
      sort_by?:string;
       
      /**
        * @description Lists the installments that match the criteria provided in the filter parameters.

        */
        
      invoice_id:{in?:string,is?:string};
    }
    
  }
}