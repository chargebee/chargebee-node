///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'chargebee' {
  export interface OmnichannelTransaction {
    id: string;
    id_at_source: string;
    app_id: string;
    price_currency: string;
    price_units: number;
    price_nanos: number;
    type: 'purchase' | 'renewal';
    transacted_at: number;
    created_at: number;
    resource_version?: number;
  }
}
