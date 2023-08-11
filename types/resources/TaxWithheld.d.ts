///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface TaxWithheld {
    
    /**
      * @description An auto-generated unique identifier for the tax withheld. The value starts with the prefix &#x60;tax_wh_&#x60;. For example, &#x60;tax_wh_16BdDXSlbu4uV1Ee6&#x60;.

      */
    
    id:string;
    
    /**
      * @description A unique external reference number for the tax withheld. Typically, this is the reference number used by the system you are integrating the API with. Depending on your integration, this could be the reference number issued by the taxation authority to identify the customer or the specific tax transaction.

      */
    
    reference_number?:string;
    
    /**
      * @description The description for this tax withheld.

      */
    
    description?:string;
    
    /**
      * @description Date or time associated with the tax withheld.

      */
    
    date?:number;
    
    /**
      * @description The amount withheld by the customer as tax from the invoice. The unit depends on the [type of currency](/docs/api#md_disabled).

      */
    
    amount?:number;
    
    resource_version?:number;
    
    updated_at?:number;
  }
}