///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'chargebee' {
  export interface AlertStatus {
    alert_id: string;
    subscription_id: string;
    alert_status: AlertStatusEnum;
    alarm_triggered_at?: number;
  }
}
