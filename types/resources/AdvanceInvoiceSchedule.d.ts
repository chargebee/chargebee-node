///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface AdvanceInvoiceSchedule {
    
    /**
      * @description System-generated and immutable unique Id for the &#x60;advance_invoice_schedule&#x60;.

      */
    
    id:string;
    
    /**
      * @description The type of advance invoice or advance invoicing schedule. \* specific_dates - The advance charges occur on specific dates. For each date, [a fixed number of billing cycles](advance_invoice_schedules#advance_invoice_schedule_specific_dates_schedule_terms_to_charge) is charged for. There can be up to 5 dates configured. \* fixed_intervals - The advance charges occur at [fixed intervals of time](advance_invoice_schedules#advance_invoice_schedule_fixed_interval_schedule_terms_to_charge).

      */
    
    schedule_type?:'specific_dates' | 'fixed_intervals';
    
    /**
      * @description When the &#x60;schedule_type&#x60; is &#x60;fixed_intervals&#x60;, this object gives further details of the schedule.

      */
    
    fixed_interval_schedule?:AdvanceInvoiceSchedule.FixedIntervalSchedule;
    
    /**
      * @description The advance charges occur on specific dates. For each date, [a fixed number of billing cycles](advance_invoice_schedules#advance_invoice_schedule_specific_dates_schedule_terms_to_charge) is charged for. There can be up to 5 dates configured.

      */
    
    specific_dates_schedule?:AdvanceInvoiceSchedule.SpecificDatesSchedule;
  }
  export namespace AdvanceInvoiceSchedule {
    
    
    export interface FixedIntervalSchedule {  
         /**
          * @description Specifies when the schedule should end. \* after_number_of_intervals - Advance invoices are generated a &#x60;specified number of times&#x60; \* subscription_end - Advance invoices are generated for as long as the subscription is active. \* specific_date - End the advance invoicing schedule on a &#x60;specific date&#x60;.

          */
       
      end_schedule_on?:EndScheduleOn;
       
         /**
          * @description The number of advance invoices to generate. The schedule is created such that the total number of billing cycles in the schedule does not exceed the [&#x60;remaining_billing_cycles&#x60;](subscriptions#subscription_remaining_billing_cycles) of the subscription. This parameter is applicable only when [&#x60;fixed_interval_schedule[end_schedule_on]&#x60;](advance_invoice_schedules#advance_invoice_schedule_fixed_interval_schedule_end_schedule_on) &#x3D; &#x60;after_number_of_intervals&#x60;

          */
       
      number_of_occurrences?:number;
       
         /**
          * @description The number of days before each interval that advance invoices are generated.

          */
       
      days_before_renewal?:number;
       
         /**
          * @description The date when the schedule should end. Advance invoices are not generated beyond this date. It must be at least 1 day before the start of the last billing cycle of the subscription and also within 5 years from the current date. This parameter is only applicable when [&#x60;fixed_interval_schedule[end_schedule_on]&#x60;](advance_invoice_schedules#advance_invoice_schedule_fixed_interval_schedule_end_schedule_on) &#x3D; &#x60;specific_date&#x60;.

          */
       
      end_date?:number;
       
         /**
          * @description The date when this advance invoicing schedule was created.

          */
       
      created_at?:number;
       
         /**
          * @description The number of billing cycles in one interval.

          */
       
      terms_to_charge?:number;
    }
    export interface SpecificDatesSchedule {  
         /**
          * @description The number of billing cycles to charge for, on the date specified. Applicable only when [&#x60;schedule_type&#x60;](advance_invoice_schedules#advance_invoice_schedule_schedule_type) is specific_dates.

          */
       
      terms_to_charge?:number;
       
         /**
          * @description The unique id of the member of the advance_invoice_schedule array which corresponds to the specific_dates_schedule that you intend to modify. Only applicable when [&#x60;schedule_type&#x60;](advance_invoice_schedules#advance_invoice_schedule_schedule_type) is &#x60;specific_dates&#x60;.

          */
       
      date?:number;
       
         /**
          * @description The date when this advance invoicing schedule was created.

          */
       
      created_at?:number;
    }
  }
}