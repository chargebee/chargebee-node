///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'chargebee' {
  export interface Alert {
    id: string;
    type?: TypeEnum;
    name: string;
    description?: string;
    metered_feature_id: string;
    subscription_id?: string;
    status?: 'enabled' | 'disabled';
    alarm_triggered_at?: number;
    scope?: 'global' | 'subscription';
    meta?: string;
    created_at: number;
    updated_at: number;
  }
}
