///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
///<reference path='./filter.d.ts'/>
declare module 'chargebee' {
  export interface AlertStatus {
    alert_id: string;
    subscription_id: string;
    alarm_status: AlarmStatusEnum;
    alarm_triggered_at?: number;
  }

  export namespace AlertStatus {
    export class AlertStatusResource {
      alertStatusesForSubscription(
        subscription_id: string,
        input?: AlertStatusesForSubscriptionInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<AlertStatusesForSubscriptionResponse>>;

      alertStatusesForAlert(
        alert_id: string,
        input?: AlertStatusesForAlertInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<AlertStatusesForAlertResponse>>;
    }

    export interface AlertStatusesForSubscriptionResponse {
      list: { alert_status: AlertStatus }[];
      next_offset?: string;
    }

    export interface AlertStatusesForAlertResponse {
      list: { alert_status: AlertStatus }[];
      next_offset?: string;
    }

    // REQUEST PARAMS
    //---------------

    export interface AlertStatusesForSubscriptionInputParam {
      limit?: number;
      offset?: string;
      alarm_status?: filter.Enum;
      alert_id?: filter.String;
    }
    export interface AlertStatusesForAlertInputParam {
      limit?: number;
      offset?: string;
      alarm_status?: filter.Enum;
    }
  }
}
