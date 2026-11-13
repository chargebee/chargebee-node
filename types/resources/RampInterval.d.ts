///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'chargebee' {
  export interface RampInterval {
    starting_billing_cycle: number;
    ending_billing_cycle?: number;
    apply_catalog_price?: boolean;
    price?: number;
    price_in_decimal?: string;
  }
}
