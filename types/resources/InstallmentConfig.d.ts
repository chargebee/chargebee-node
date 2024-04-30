///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface InstallmentConfig {
    
    /**
      * @description An auto-generated unique identifier for the Payment installment Configuration.

      */
    
    id:string;
    
    /**
      * @description A brief description for this installment configuration.

      */
    
    description?:string;
    
    /**
      * @description Specifies the total number of installments for the invoice.

      */
    
    number_of_installments:number;
    
    /**
      * @description Defines the time unit for intervals between installments.Possible values are: day, week, month \* month - month \* week - week \* day - day

      */
    
    period_unit:'week' | 'month' | 'day';
    
    /**
      * @description The time period between the effective dates of two consecutive installments, expressed in period_units.

      */
    
    period?:number;
    
    /**
      * @description The day of the week (or month) when the installment is in effect. For week: A value between 1 (Sunday) and 7 (Saturday) indicating the preferred day of the week for the installment dates. For example, 2 represents Monday. For month: A value from 1 to 31, indicating the preferred day of the month for installment dates. For example, 15 represents the 15th day of the month. If the month has fewer days than the specified preferred_day, the installment date is the last day of the month.

      */
    
    preferred_day?:number;
    
    /**
      * @description The timestamp at which the installment_config was created.

      */
    
    created_at:number;
    
    /**
      * @description Version number of this resource. The &#x60;resource_version&#x60; is updated with a new timestamp in milliseconds for every change made to the resource. This attribute will be present only if the resource has been updated after 2016-09-28.

      */
    
    resource_version?:number;
    
    /**
      * @description The timestamp at which the installment_config was last updated at.

      */
    
    updated_at?:number;
    
    /**
      * @description Defines the details for each installment individually.

      */
    
    installments?:InstallmentConfig.Installment[];
  }
  export namespace InstallmentConfig {
    export class InstallmentConfigResource {  
      /**
        * @description Creates an installment configuration. After creating an installment_config, you can use it to generate installments for multiple invoices.

        */
      
      create(input:CreateInputParam):ChargebeeRequest<CreateResponse>;
       
      /**
        * @description This endpoint retrieves an installment_config resource.

        */
      
      retrieve(installment_config_id:string):ChargebeeRequest<RetrieveResponse>;
       
      /**
        * @description This endpoint deletes an installment_config resource.

        */
      
      delete(installment_config_id:string):ChargebeeRequest<DeleteResponse>;
    }
    export interface CreateResponse {  
       installment_config:InstallmentConfig;
    }
    export interface CreateInputParam {
       
      /**
        * @description Specifies the total number of installments for the invoice.

        */
       
      number_of_installments:number;
       
      /**
        * @description Defines the time unit for intervals between installments.Possible values are: day, week, month \* month - month \* week - week \* day - day

        */
       
      period_unit:'week' | 'month' | 'day';
       
      /**
        * @description The time period between the effective dates of two consecutive installments, expressed in period_units.

        */
       
      period?:number;
       
      /**
        * @description The day of the week (or month) when the installment is in effect. For week: A value between 1 (Sunday) and 7 (Saturday) indicating the preferred day of the week for the installment dates. For example, 2 represents Monday. For month: A value from 1 to 31, indicating the preferred day of the month for installment dates. For example, 15 represents the 15th day of the month. If the month has fewer days than the specified preferred_day, the installment date is the last day of the month.

        */
       
      preferred_day?:number;
       
      /**
        * @description A brief description for this installment configuration.

        */
       
      description?:string;
       
      /**
        * @description Parameters for installments

        */
       
      installments?:{amount_percentage?:number,period?:number}[];
    }
    export interface RetrieveResponse {  
       installment_config:InstallmentConfig;
    }
    
    export interface DeleteResponse {  
       installment_config:InstallmentConfig;
    }
    
    export interface Installments {  
         /**
          * @description The period of time (expressed in period_units) after the invoice.date, marking the date when installment is in effect. For example, when installments.period is 3 and period_unit is month, this installment is effective 3 months after the invoice.date

          */
       
      period?:number;
       
         /**
          * @description The percentage of invoice.amount_due allocated to this installment. If unspecified, the invoice.amount_due is distributed equally among the installments.

          */
       
      amount_percentage?:number;
    }
  }
}