///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
///<reference path='./filter.d.ts'/>
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
    reference_transactions?: PaymentSchedule.ReferenceTransaction[];
  }

  export namespace PaymentSchedule {
    export class PaymentScheduleResource {
      list(
        input?: ListInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ListResponse>>;
    }

    export interface ListResponse {
      list: { payment_schedule: PaymentSchedule }[];
      next_offset?: string;
    }

    export interface ScheduleEntry {
      id: string;
      date: number;
      amount: number;
      scheduled_amount: number;
      status: 'posted' | 'payment_due' | 'paid';
    }
    export interface ReferenceTransaction {
      schedule_entry_id: string;
      applied_amount?: number;
      txn_id: string;
      txn_status?:
        | 'in_progress'
        | 'success'
        | 'voided'
        | 'failure'
        | 'timeout'
        | 'needs_attention'
        | 'late_failure';
      txn_date?: number;
      txn_amount?: number;
    }
    // REQUEST PARAMS
    //---------------

    export interface ListInputParam {
      limit?: number;
      offset?: string;
      invoice_id?: filter.String;
      id?: filter.String;
      updated_at?: filter.Timestamp;
    }
  }
}
