///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'chargebee' {
  export interface QuoteEntitlement {
    entity_id: string;
    entity_type: 'plan_price' | 'addon_price' | 'charge_price' | 'charge';
    feature_id: string;
    value: string;
    is_enabled: boolean;
    start_date?: number;
    end_date?: number;
    created_at: number;
    modified_at: number;
  }
}
