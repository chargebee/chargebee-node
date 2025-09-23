///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'chargebee' {
  export interface OmnichannelSubscriptionItemOffer {
    id: string;
    offer_id_at_source?: string;
    category: CategoryEnum;
    category_at_source?: string;
    type: TypeEnum;
    type_at_source?: string;
    discount_type?: DiscountTypeEnum;
    duration: string;
    percentage?: number;
    price_currency?: string;
    price_units?: number;
    price_nanos?: number;
    offer_term_start?: number;
    offer_term_end?: number;
    resource_version?: number;
  }
}
