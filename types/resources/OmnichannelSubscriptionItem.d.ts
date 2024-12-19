///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'chargebee' {
  export interface OmnichannelSubscriptionItem {
    id: string;
    item_id_at_source: string;
    status:
      | 'active'
      | 'expired'
      | 'cancelled'
      | 'in_dunning'
      | 'in_grace_period';
    current_term_start?: number;
    current_term_end?: number;
    expired_at?: number;
    expiration_reason?: 'billing_error' | 'product_not_available' | 'other';
    cancelled_at?: number;
    cancellation_reason?:
      | 'customer_cancelled'
      | 'customer_did_not_consent_to_price_increase';
    grace_period_expires_at?: number;
    resource_version?: number;
  }
}
