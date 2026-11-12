///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'chargebee' {
  export interface BillingLineItem {
    id?: string;
    invoice_number?: string;
    quantity?: number;
  }
}
