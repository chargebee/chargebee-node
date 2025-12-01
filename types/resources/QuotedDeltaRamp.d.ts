///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'chargebee' {
  export interface QuotedDeltaRamp {
    line_items?: QuotedDeltaRamp.LineItem[];
  }

  export namespace QuotedDeltaRamp {
    export interface LineItem {
      item_level_discount_per_billing_cycle_in_decimal?: string;
    }
    // REQUEST PARAMS
    //---------------
  }
}
