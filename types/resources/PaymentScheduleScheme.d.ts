///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'chargebee' {
  export interface PaymentScheduleScheme {
    id: string;
    description?: string;
    number_of_schedules: number;
    period_unit: 'day' | 'week' | 'month';
    period?: number;
    created_at: number;
    resource_version?: number;
    updated_at?: number;
    preferred_schedules?: PaymentScheduleScheme.PreferredSchedule[];
  }

  export namespace PaymentScheduleScheme {
    export class PaymentScheduleSchemeResource {
      create(
        input: CreateInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<CreateResponse>>;

      retrieve(
        payment_schedule_scheme_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<RetrieveResponse>>;

      delete(
        payment_schedule_scheme_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<DeleteResponse>>;
    }

    export interface CreateResponse {
      payment_schedule_scheme: PaymentScheduleScheme;
    }

    export interface RetrieveResponse {
      payment_schedule_scheme: PaymentScheduleScheme;
    }

    export interface DeleteResponse {
      payment_schedule_scheme: PaymentScheduleScheme;
    }

    export interface PreferredSchedule {
      period?: number;
      amount_percentage?: number;
    }
    // REQUEST PARAMS
    //---------------

    export interface CreateInputParam {
      number_of_schedules: number;
      period_unit: 'day' | 'week' | 'month';
      period?: number;
      description?: string;
    }
  }
}
