///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'chargebee' {
  export interface Currency {
    id?: string;

    enabled: boolean;

    forex_type?: 'manual' | 'auto';

    currency_code?: string;

    is_base_currency?: boolean;

    manual_exchange_rate?: string;
  }
  export namespace Currency {
    export class CurrencyResource {
      list(): ChargebeeRequest<ChargebeeResponse<ListResponse>>;

      retrieve(
        site_currency_id: string,
      ): ChargebeeRequest<ChargebeeResponse<RetrieveResponse>>;

      create(
        input: CreateInputParam,
      ): ChargebeeRequest<ChargebeeResponse<CreateResponse>>;

      update(
        site_currency_id: string,
        input: UpdateInputParam,
      ): ChargebeeRequest<ChargebeeResponse<UpdateResponse>>;

      addSchedule(
        site_currency_id: string,
        input: AddScheduleInputParam,
      ): ChargebeeRequest<ChargebeeResponse<AddScheduleResponse>>;

      removeSchedule(
        site_currency_id: string,
      ): ChargebeeRequest<ChargebeeResponse<RemoveScheduleResponse>>;
    }
    export interface ListResponse {
      currency: Currency;
    }

    export interface RetrieveResponse {
      currency: Currency;
    }

    export interface CreateResponse {
      currency: Currency;
    }

    export interface UpdateResponse {
      currency: Currency;
    }

    export interface AddScheduleResponse {
      scheduled_at: number;

      currency: Currency;
    }

    export interface RemoveScheduleResponse {
      scheduled_at: number;

      currency: Currency;
    }

    // REQUEST PARAMS
    //---------------

    export interface CreateInputParam {
      currency_code: string;
      forex_type: 'manual' | 'auto';
      manual_exchange_rate?: string;
    }
    export interface UpdateInputParam {
      forex_type: 'manual' | 'auto';
      manual_exchange_rate?: string;
    }
    export interface AddScheduleInputParam {
      manual_exchange_rate: string;
      schedule_at: number;
    }
  }
}
