///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'chargebee' {
  export interface PaymentScheduleEstimate {
    id: string;
    scheme_id: string;
    entity_type: 'invoice';
    entity_id?: string;
    amount: number;
    currency_code?: string;
    schedule_entries?: PaymentScheduleEstimate.ScheduleEntry[];
  }

  export namespace PaymentScheduleEstimate {
    export interface ScheduleEntry {
      id: string;
      date: number;
      amount: number;
      status: 'posted' | 'payment_due' | 'paid';
    }
    // REQUEST PARAMS
    //---------------
  }
}
