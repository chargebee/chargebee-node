///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'chargebee' {
  export interface BillingConfiguration {
    is_calendar_billing_enabled: boolean;
    billing_dates?: BillingConfiguration.BillingDate[];
  }

  export namespace BillingConfiguration {
    export interface BillingDate {
      start_date?: number;
      end_date?: number;
    }
    // REQUEST PARAMS
    //---------------
  }
}
