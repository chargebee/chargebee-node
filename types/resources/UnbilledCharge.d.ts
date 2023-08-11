///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface UnbilledCharge {
    
    /**
      * @description Uniquely identifies an unbilled charge.

      */
    
    id?:string;
    
    /**
      * @description A unique identifier for the customer being charged.

      */
    
    customer_id?:string;
    
    /**
      * @description A unique identifier for the subscription this charge belongs to.

      */
    
    subscription_id?:string;
    
    /**
      * @description Start date of this charge.

      */
    
    date_from?:number;
    
    /**
      * @description End date of this charge.

      */
    
    date_to?:number;
    
    /**
      * @description Unit amount of the charge item.

      */
    
    unit_amount?:number;
    
    /**
      * @description The pricing scheme for this line item. \* tiered - The per unit price is based on the tier that the total quantity falls in. \* volume - There are quantity tiers for which per unit prices are set. Quantities are purchased from successive tiers. \* per_unit - A fixed price per unit quantity. \* flat_fee - A fixed price that is not quantity-based. \* stairstep - A quantity-based pricing scheme. The item is charged a fixed price based on the tier that the total quantity falls in.

      */
    
    pricing_model?:PricingModel;
    
    /**
      * @description Quantity of the item which is represented by this charge.

      */
    
    quantity?:number;
    
    /**
      * @description Total amount of this charge. Typically equals to unit amount x quantity.

      */
    
    amount?:number;
    
    /**
      * @description The currency code (ISO 4217 format) for the charge.

      */
    
    currency_code:string;
    
    /**
      * @description Total discounts for this charge.

      */
    
    discount_amount?:number;
    
    /**
      * @description Detailed description about this charge.

      */
    
    description?:string;
    
    /**
      * @description Specifies the modelled entity this line item is based on. \* plan_setup - Indicates that this lineitem is based on &#x27;Plan Setup&#x27; charge. The &#x27;entity_id&#x27; attribute specifies the [plan](/docs/api/plans#plan_attributes) id \* charge_item_price - Indicates that this line item is based on charge Item Price \* plan - Indicates that this lineitem is based on &#x27;Plan&#x27; entity. The &#x27;entity_id&#x27; attribute specifies the [plan](/docs/api/plans#plan_attributes) id \* addon_item_price - Indicates that this line item is based on addon Item Price \* plan_item_price - Indicates that this line item is based on plan Item Price \* adhoc - Indicates that this lineitem is not modelled. i.e created adhoc. So the &#x27;entity_id&#x27; attribute will be null in this case \* addon - Indicates that this lineitem is based on &#x27;Addon&#x27; entity. The &#x27;entity_id&#x27; attribute specifies the [addon](/docs/api/addons#addon_attributes) id

      */
    
    entity_type:'addon_item_price' | 'plan_item_price' | 'charge_item_price' | 'adhoc';
    
    /**
      * @description The identifier of the modelled entity this charge is based on. Will be null for &#x27;adhoc&#x27; entity type.

      */
    
    entity_id?:string;
    
    /**
      * @description Will be true if the charge has been voided. Usually the unbilled charge will be voided and revised to different charges(s) during proration.

      */
    
    is_voided:boolean;
    
    /**
      * @description Timestamp indicating the date and time this charge got voided.

      */
    
    voided_at?:number;
    
    /**
      * @description The decimal representation of the unit amount for the entity. The value is in major units of the currency. Returned when the entity is quantity-based and [multi-decimal pricing](https://apidocs.chargebee.com/docs/api#handling_currency_units ) is enabled.

      */
    
    unit_amount_in_decimal?:string;
    
    /**
      * @description The decimal representation of the quantity of this entity. Returned when the entity is quantity-based and [multi-decimal pricing](https://apidocs.chargebee.com/docs/api#handling_currency_units ) is enabled.

      */
    
    quantity_in_decimal?:string;
    
    /**
      * @description The decimal representation of the amount for the charge, in major units of the currency. Typically equals to &#x60;unit_amount_in_decimal&#x60; x &#x60;quantity_in_decimal&#x60;. Returned when [multi-decimal pricing](https://apidocs.chargebee.com/docs/api#handling_currency_units ) is enabled.

      */
    
    amount_in_decimal?:string;
    
    /**
      * @description Timestamp indicating when the unbilled charge was last updated

      */
    
    updated_at:number;
    
    is_advance_charge?:boolean;
    
    /**
      * @description Indicates that this resource has been deleted.

      */
    
    deleted:boolean;
    
    /**
      * @description The list of tiers applicable for this line item

      */
    
    tiers?:UnbilledCharge.LineItemTier[];
  }
  export namespace UnbilledCharge {
    export class UnbilledChargeResource {  
      /**
        * @description Use this API to delete an unbilled charge by specifying the id of the charge.

        */
      
      delete(unbilled_charge_id:string):ChargebeeRequest<DeleteResponse>;
       
      /**
        * @description This is similar to the &quot;Create an invoice for unbilled charges&quot; API but no invoice will be created, only an estimate for this operation is created.

In the estimate response,

* **estimate.invoice_estimates** is an array of **estimate.invoice_estimate**. This has the details of the invoices that will be generated now.

**Note:**

* This API when invoked does not perform the actual operation. It just generates an estimate.
* Both *subscription_id* and *customer_id* parameters should not be given at the same time.




        */
      
      invoice_now_estimate(input?:InvoiceNowEstimateInputParam):ChargebeeRequest<InvoiceNowEstimateResponse>;
       
      /**
        * @description Use this API to bill the [unbilled charges](https://www.chargebee.com/docs/unbilled-charges.html). Available Credits and Excess Payments will automatically be applied while creating the invoice.

If the *Auto Collection* is turned on for the particular customer, the invoice will be created in payment_due state and the payment collection will be scheduled immediately.

During invoice creation, the PO number for the line items will be filled from the subscription&#x27;s current PO number, if available.

If no recurring item is present in the created invoice, the invoice will be marked as recurring&#x3D;false.

If consolidated invoicing is enabled and the parameter &#x27;customer_id&#x27; is passed, multiple invoices can be created based on the following factors.

* Currency
* PO number if &#x27;Group by PO number&#x27; is enabled
* Shipping address
* Auto Collection
* Payment method

        */
      
      invoice_unbilled_charges(input?:InvoiceUnbilledChargesInputParam):ChargebeeRequest<InvoiceUnbilledChargesResponse>;
       
      /**
        * @description This endpoint lists all the unbilled charges.

        */
      
      list(input?:ListInputParam):ChargebeeRequest<ListResponse>;
       
      /**
        * @description This endpoint creates unbilled charges for a subscription.

        */
      
      create(input:CreateInputParam):ChargebeeRequest<CreateResponse>;
    }
    export interface DeleteResponse {  
      /**
        * @description Use this API to delete an unbilled charge by specifying the id of the charge.

        */
       
       unbilled_charge:UnbilledCharge;
    }
    
    export interface InvoiceNowEstimateResponse {  
      /**
        * @description This is similar to the &quot;Create an invoice for unbilled charges&quot; API but no invoice will be created, only an estimate for this operation is created.

In the estimate response,

* **estimate.invoice_estimates** is an array of **estimate.invoice_estimate**. This has the details of the invoices that will be generated now.

**Note:**

* This API when invoked does not perform the actual operation. It just generates an estimate.
* Both *subscription_id* and *customer_id* parameters should not be given at the same time.




        */
       
       estimate:Estimate;
    }
    export interface InvoiceNowEstimateInputParam {
       
      /**
        * @description Identifier of the subscription for which this estimate needs to be created. Should be given if &#x27;customer_id&#x27; is not specified.

        */
       
      subscription_id?:string;
       
      /**
        * @description Identifier of the customer for whom this estimate is created. Is given if &#x27;subscription_id&#x27; is not specified. Applicable only if the &#x27;Consolidated Invoicing&#x27; is enabled. If &#x27;Consolidated Invoicing&#x27; is not enabled, an invoice will be generated for every subscription.

        */
       
      customer_id?:string;
    }
    export interface InvoiceUnbilledChargesResponse {  
      /**
        * @description Use this API to bill the [unbilled charges](https://www.chargebee.com/docs/unbilled-charges.html). Available Credits and Excess Payments will automatically be applied while creating the invoice.

If the *Auto Collection* is turned on for the particular customer, the invoice will be created in payment_due state and the payment collection will be scheduled immediately.

During invoice creation, the PO number for the line items will be filled from the subscription&#x27;s current PO number, if available.

If no recurring item is present in the created invoice, the invoice will be marked as recurring&#x3D;false.

If consolidated invoicing is enabled and the parameter &#x27;customer_id&#x27; is passed, multiple invoices can be created based on the following factors.

* Currency
* PO number if &#x27;Group by PO number&#x27; is enabled
* Shipping address
* Auto Collection
* Payment method

        */
       
       invoices:Invoice[];
    }
    export interface InvoiceUnbilledChargesInputParam {
       
      /**
        * @description Identifier of the subscription for which this invoice needs to be created. Should be specified if &#x27;customer_id&#x27; is not specified.

        */
       
      subscription_id?:string;
       
      /**
        * @description Identifier of the customer for whom this invoice needs to be created. Should be specified if &#x27;subscription_id&#x27; is not specified. Applicable only if the consolidated invoicing is enabled. .

        */
       
      customer_id?:string;
    }
    export interface ListResponse {  
      /**
        * @description This endpoint lists all the unbilled charges.

        */
       
       list:{unbilled_charge:UnbilledCharge}[];
       
      /**
        * @description This endpoint lists all the unbilled charges.

        */
       
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
        * @description Indicates whether to include deleted objects in the list. The deleted objects have the attribute \&#x60;deleted\&#x60; as \&#x60;true\&#x60;.

        */
        
      include_deleted?:boolean;
       
      /**
        * @description This endpoint lists all the unbilled charges.

        */
        
      is_voided?:boolean;
       
      /**
        * @description A unique identifier for the subscription this charge belongs to.

        */
        
      subscription_id?:{in?:string,is?:string,is_not?:string,is_present?:'true' | 'false',not_in?:string,starts_with?:string};
       
      /**
        * @description A unique identifier for the customer being charged.

        */
        
      customer_id?:{in?:string,is?:string,is_not?:string,is_present?:'true' | 'false',not_in?:string,starts_with?:string};
    }
    export interface CreateResponse {  
      /**
        * @description This endpoint creates unbilled charges for a subscription.

        */
       
       unbilled_charges:UnbilledCharge[];
    }
    export interface CreateInputParam {
       
      /**
        * @description Identifier of the subscription for which this unbilled charges needs to be created.

        */
       
      subscription_id:string;
       
      /**
        * @description The currency code (ISO 4217 format) of the unbilled_charge.

        */
       
      currency_code?:string;
       
      /**
        * @description Parameters for item_prices

        */
       
      item_prices?:{date_from?:number,date_to?:number,item_price_id?:string,quantity?:number,quantity_in_decimal?:string,unit_price?:number,unit_price_in_decimal?:string}[];
       
      /**
        * @description Parameters for item_tiers

        */
       
      item_tiers?:{ending_unit?:number,ending_unit_in_decimal?:string,item_price_id?:string,price?:number,price_in_decimal?:string,starting_unit?:number,starting_unit_in_decimal?:string}[];
       
      /**
        * @description Parameters for charges

        */
       
      charges?:{amount?:number,amount_in_decimal?:string,avalara_sale_type?:AvalaraSaleType,avalara_service_type?:number,avalara_tax_code?:string,avalara_transaction_type?:number,date_from?:number,date_to?:number,description?:string,hsn_code?:string,tax_profile_id?:string,taxable?:boolean,taxjar_product_code?:string}[];
    }
    export interface LineItemTier {  
      starting_unit?:number;
       
      ending_unit?:number;
       
      quantity_used?:number;
       
      unit_amount?:number;
       
      starting_unit_in_decimal?:string;
       
      ending_unit_in_decimal?:string;
       
      quantity_used_in_decimal?:string;
       
      unit_amount_in_decimal?:string;
    }
  }
}