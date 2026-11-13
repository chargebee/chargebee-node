///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'chargebee' {
  export interface CollectionsDispute {
    id: string;
    customer_id: string;
    invoice_id: string;
    line_item_id?: string;
    currency_code: string;
    billed_amount: number;
    claimed_deduction: number;
    status: 'open' | 'resolved' | 'withdrawn';
    dispute_reason_code: string;
    resolved_reason_code?: string;
    reason?: string;
    opened_at: number;
    resolved_at?: number;
    created_at: number;
    updated_at: number;
    resource_version?: number;
    undisputed_amount?: number;
  }
}
