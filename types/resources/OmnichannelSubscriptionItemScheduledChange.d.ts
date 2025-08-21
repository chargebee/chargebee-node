///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
declare module 'chargebee' {
  export interface OmnichannelSubscriptionItemScheduledChange {
    

    id?:string;

    omnichannel_subscription_item_id?:string;

    scheduled_at:number;

    change_type:'downgrade' | 'pause';

    created_at:number;

    modified_at:number;

    resource_version?:number;

    current_state?:OmnichannelSubscriptionItemScheduledChange.CurrentState;

    scheduled_state?:OmnichannelSubscriptionItemScheduledChange.ScheduledState;

  }
  export namespace OmnichannelSubscriptionItemScheduledChange {
    
    
    export interface CurrentState {  
      item_id_at_source?:string;
    }
    export interface ScheduledState {  
      item_id_at_source?:string;
    }
  }
}