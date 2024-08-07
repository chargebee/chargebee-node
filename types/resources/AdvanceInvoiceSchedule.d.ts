///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'chargebee' {
  export interface AdvanceInvoiceSchedule {
    id: string;

    schedule_type?: 'fixed_intervals' | 'specific_dates';

    fixed_interval_schedule?: AdvanceInvoiceSchedule.FixedIntervalSchedule;

    specific_dates_schedule?: AdvanceInvoiceSchedule.SpecificDatesSchedule;
  }
  export namespace AdvanceInvoiceSchedule {
    export interface FixedIntervalSchedule {
      end_schedule_on?: EndScheduleOn;

      number_of_occurrences?: number;

      days_before_renewal?: number;

      end_date?: number;

      created_at: number;

      terms_to_charge?: number;
    }
    export interface SpecificDatesSchedule {
      terms_to_charge?: number;

      date?: number;

      created_at: number;
    }
    // REQUEST PARAMS
    //---------------
  }
}
