///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'chargebee' {
  export interface BillingMetadata {
    item_price_id?: string;
    line_items?: BillingLineItem[];
  }
}
