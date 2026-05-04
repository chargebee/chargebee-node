///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
///<reference path='./filter.d.ts'/>
declare module 'chargebee' {
  export interface Alert {
    id: string;
    type: TypeEnum;
    name: string;
    description?: string;
    metered_feature_id: string;
    subscription_id?: string;
    status?: 'enabled' | 'disabled';
    meta?: string;
    created_at: number;
    updated_at: number;
  }

  export namespace Alert {
    export class AlertResource {
      create(
        input: CreateInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<CreateResponse>>;

      retrieve(
        alert_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<RetrieveResponse>>;

      list(
        input?: ListInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ListResponse>>;

      update(
        alert_id: string,
        input?: UpdateInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<UpdateResponse>>;

      delete(
        alert_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<DeleteResponse>>;

      applicationAlertsForSubscription(
        subscription_id: string,
        input?: ApplicationAlertsForSubscriptionInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ApplicationAlertsForSubscriptionResponse>>;
    }

    export interface CreateResponse {
      alert: Alert;
    }

    export interface RetrieveResponse {
      alert: Alert;
    }

    export interface ListResponse {
      list: { alert: Alert }[];
      next_offset?: string;
    }

    export interface UpdateResponse {
      alert: Alert;
    }

    export interface DeleteResponse {
      alert: Alert;
    }

    export interface ApplicationAlertsForSubscriptionResponse {
      list: { alert: Alert }[];
      next_offset?: string;
    }

    // REQUEST PARAMS
    //---------------

    export interface CreateInputParam {
      type: TypeEnum;
      name: string;
      description?: string;
      metered_feature_id: string;
      subscription_id?: string;
      meta?: string;
      threshold?: ThresholdCreateInputParam;
      filter_conditions?: FilterConditionsCreateInputParam[];
    }
    export interface ListInputParam {
      limit?: number;
      offset?: string;
      id?: filter.String;
      type?: filter.Enum;
      subscription_id?: filter.String;
      status?: filter.Enum;
    }
    export interface UpdateInputParam {
      status?: 'enabled' | 'disabled';
      threshold?: ThresholdUpdateInputParam;
    }
    export interface ApplicationAlertsForSubscriptionInputParam {
      limit?: number;
      offset?: string;
      status?: filter.Enum;
      type?: filter.Enum;
    }
    export interface ThresholdCreateInputParam {
      mode: ModeEnum;
      value: number;
    }

    export interface FilterConditionsCreateInputParam {
      field?: 'plan_price_id';
      operator?: 'equals' | 'not_equals';
      value?: string;
    }
    export interface ThresholdUpdateInputParam {
      mode?: ModeEnum;
      value?: number;
    }
  }
}
