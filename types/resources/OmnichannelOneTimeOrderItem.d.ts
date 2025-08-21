///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'chargebee' {
  export interface OmnichannelOneTimeOrderItem {
    id: string;
    item_id_at_source: string;
    item_type_at_source?: string;
    quantity?: number;
    cancelled_at?: number;
    cancellation_reason?:
      | 'customer_cancelled'
      | 'customer_did_not_consent_to_price_increase'
      | 'refunded_due_to_app_issue'
      | 'refunded_for_other_reason'
      | 'merchant_revoked';
    created_at: number;
    resource_version?: number;
  }
}
