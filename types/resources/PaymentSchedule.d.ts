///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'chargebee' {
  export interface PaymentSchedule {
    id: string;
    scheme_id: string;
    entity_type: 'invoice';
    entity_id: string;
    amount?: number;
    created_at: number;
    resource_version?: number;
    updated_at?: number;
    currency_code?: string;
    schedule_entries?: PaymentSchedule.ScheduleEntry[];
  }

  export namespace PaymentSchedule {
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
