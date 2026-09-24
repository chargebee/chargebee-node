///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
///<reference path='./filter.d.ts'/>
declare module 'chargebee' {
  export interface PaymentScheduleScheme {
    id: string;
    name?: string;
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

      list(
        input?: ListInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ListResponse>>;

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

    export interface ListResponse {
      list: { payment_schedule_scheme: PaymentScheduleScheme }[];
      next_offset?: string;
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
      name: string;
      flexible_schedules?: FlexibleSchedulesCreateInputParam[];
    }
    export interface ListInputParam {
      limit?: number;
      offset?: string;
      id?: filter.String;
      updated_at?: filter.Timestamp;
    }
    export interface FlexibleSchedulesCreateInputParam {
      period?: number;
      amount_percentage?: number;
    }
  }
}
