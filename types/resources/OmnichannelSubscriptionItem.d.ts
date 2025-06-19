///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
///<reference path='./filter.d.ts'/>
declare module 'chargebee' {
  export interface OmnichannelSubscriptionItem {
    id: string;
    item_id_at_source: string;
    item_parent_id_at_source?: string;
    status:
      | 'active'
      | 'expired'
      | 'cancelled'
      | 'in_dunning'
      | 'in_grace_period'
      | 'paused';
    auto_renew_status?: 'off' | 'on';
    current_term_start?: number;
    current_term_end?: number;
    expired_at?: number;
    expiration_reason?: 'billing_error' | 'product_not_available' | 'other';
    cancelled_at?: number;
    cancellation_reason?:
      | 'customer_cancelled'
      | 'customer_did_not_consent_to_price_increase'
      | 'refunded_due_to_app_issue'
      | 'refunded_for_other_reason'
      | 'merchant_revoked';
    grace_period_expires_at?: number;
    resumes_at?: number;
    has_scheduled_changes: boolean;
    resource_version?: number;
    upcoming_renewal?: OmnichannelSubscriptionItem.UpcomingRenewal;
    linked_item?: OmnichannelSubscriptionItem.LinkedItem;
  }

  export namespace OmnichannelSubscriptionItem {
    export class OmnichannelSubscriptionItemResource {
      listOmniSubItemScheduleChanges(
        omnichannel_subscription_item_id: string,
        input?: ListOmniSubItemScheduleChangesInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ListOmniSubItemScheduleChangesResponse>>;
    }

    export interface ListOmniSubItemScheduleChangesResponse {
      list: {
        omnichannel_subscription_item_scheduled_change: OmnichannelSubscriptionItemScheduledChange;
      }[];
      next_offset?: string;
    }

    export interface UpcomingRenewal {
      price_currency?: string;
      price_units?: number;
      price_nanos?: number;
    }
    export interface LinkedItem {
      id: string;
      linked_at?: number;
    }
    // REQUEST PARAMS
    //---------------

    export interface ListOmniSubItemScheduleChangesInputParam {
      limit?: number;
      offset?: string;
    }
  }
}
