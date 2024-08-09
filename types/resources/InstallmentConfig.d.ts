///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'Chargebee' {
  export interface InstallmentConfig {
    id: string;

    description?: string;

    number_of_installments: number;

    period_unit: 'day' | 'week' | 'month';

    period?: number;

    preferred_day?: number;

    created_at: number;

    resource_version?: number;

    updated_at?: number;

    installments?: InstallmentConfig.Installment[];
  }
  export namespace InstallmentConfig {
    export class InstallmentConfigResource {
      create(
        input: CreateInputParam,
      ): ChargebeeRequest<ChargebeeResponse<CreateResponse>>;

      retrieve(
        installment_config_id: string,
      ): ChargebeeRequest<ChargebeeResponse<RetrieveResponse>>;

      delete(
        installment_config_id: string,
      ): ChargebeeRequest<ChargebeeResponse<DeleteResponse>>;
    }
    export interface CreateResponse {
      installment_config: InstallmentConfig;
    }

    export interface RetrieveResponse {
      installment_config: InstallmentConfig;
    }

    export interface DeleteResponse {
      installment_config: InstallmentConfig;
    }

    export interface Installment {
      period?: number;

      amount_percentage?: number;
    }
    // REQUEST PARAMS
    //---------------

    export interface CreateInputParam {
      number_of_installments: number;
      period_unit: 'day' | 'week' | 'month';
      period?: number;
      preferred_day?: number;
      description?: string;
      installments?: InstallmentsCreateInputParam[];
    }
    export interface InstallmentsCreateInputParam {
      period?: number;

      amount_percentage?: number;
    }
  }
}
