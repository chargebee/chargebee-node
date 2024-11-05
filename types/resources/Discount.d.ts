///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'chargebee' {
  export interface Discount {
    id: string;
    invoice_name?: string;
    type: 'fixed_amount' | 'percentage';
    percentage?: number;
    amount?: number;
    currency_code?: string;
    duration_type: DurationTypeEnum;
    period?: number;
    period_unit?: PeriodUnitEnum;
    included_in_mrr: boolean;
    apply_on: ApplyOnEnum;
    item_price_id?: string;
    created_at: number;
    apply_till?: number;
    applied_count?: number;
    coupon_id: string;
    index: number;
  }
}
