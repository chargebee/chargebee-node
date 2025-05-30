///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
///<reference path='./filter.d.ts'/>
declare module 'chargebee' {
  export interface Ramp {
    id: string;
    description?: string;
    subscription_id: string;
    effective_from: number;
    status: 'scheduled' | 'succeeded' | 'failed' | 'draft';
    created_at: number;
    resource_version?: number;
    updated_at?: number;
    items_to_add?: Ramp.ItemsToAdd[];
    items_to_update?: Ramp.ItemsToUpdate[];
    coupons_to_add?: Ramp.CouponsToAdd[];
    discounts_to_add?: Ramp.DiscountsToAdd[];
    item_tiers?: Ramp.ItemTier[];
    items_to_remove?: string[];
    coupons_to_remove?: string[];
    discounts_to_remove?: string[];
    deleted: boolean;
    status_transition_reason?: Ramp.StatusTransitionReason;
  }

  export namespace Ramp {
    export class RampResource {
      createForSubscription(
        subscription_id: string,
        input: CreateForSubscriptionInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<CreateForSubscriptionResponse>>;

      update(
        ramp_id: string,
        input: UpdateInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<UpdateResponse>>;

      retrieve(
        ramp_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<RetrieveResponse>>;

      delete(
        ramp_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<DeleteResponse>>;

      list(
        input: ListInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ListResponse>>;
    }

    export interface CreateForSubscriptionResponse {
      ramp: Ramp;
    }

    export interface UpdateResponse {
      ramp: Ramp;
    }

    export interface RetrieveResponse {
      ramp: Ramp;
    }

    export interface DeleteResponse {
      ramp: Ramp;
    }

    export interface ListResponse {
      list: { ramp: Ramp }[];
      next_offset?: string;
    }

    export interface ItemsToAdd {
      item_price_id: string;
      item_type: 'plan' | 'addon' | 'charge';
      quantity?: number;
      quantity_in_decimal?: string;
      unit_price?: number;
      unit_price_in_decimal?: string;
      amount?: number;
      amount_in_decimal?: string;
      free_quantity?: number;
      free_quantity_in_decimal?: string;
      billing_cycles?: number;
      service_period_days?: number;
      metered_quantity?: string;
    }
    export interface ItemsToUpdate {
      item_price_id: string;
      item_type: 'plan' | 'addon' | 'charge';
      quantity?: number;
      quantity_in_decimal?: string;
      unit_price?: number;
      unit_price_in_decimal?: string;
      amount?: number;
      amount_in_decimal?: string;
      free_quantity?: number;
      free_quantity_in_decimal?: string;
      billing_cycles?: number;
      service_period_days?: number;
      metered_quantity?: string;
    }
    export interface CouponsToAdd {
      coupon_id: string;
      apply_till?: number;
    }
    export interface DiscountsToAdd {
      id: string;
      invoice_name?: string;
      type: 'fixed_amount' | 'percentage';
      percentage?: number;
      amount?: number;
      duration_type: 'one_time' | 'forever' | 'limited_period';
      period?: number;
      period_unit?: 'day' | 'week' | 'month' | 'year';
      included_in_mrr: boolean;
      apply_on: 'invoice_amount' | 'specific_item_price';
      item_price_id?: string;
      created_at: number;
    }
    export interface ItemTier {
      item_price_id: string;
      starting_unit: number;
      ending_unit?: number;
      price: number;
      starting_unit_in_decimal?: string;
      ending_unit_in_decimal?: string;
      price_in_decimal?: string;
      pricing_type?: 'per_unit' | 'flat_fee' | 'package';
      package_size?: number;
      index: number;
    }
    export interface StatusTransitionReason {
      code?: string;
      message?: string;
    }
    // REQUEST PARAMS
    //---------------

    export interface CreateForSubscriptionInputParam {
      effective_from: number;
      description?: string;
      coupons_to_remove?: string[];
      discounts_to_remove?: string[];
      items_to_remove?: string[];
      items_to_add?: ItemsToAddCreateForSubscriptionInputParam[];
      items_to_update?: ItemsToUpdateCreateForSubscriptionInputParam[];
      item_tiers?: ItemTiersCreateForSubscriptionInputParam[];
      coupons_to_add?: CouponsToAddCreateForSubscriptionInputParam[];
      discounts_to_add?: DiscountsToAddCreateForSubscriptionInputParam[];
    }
    export interface UpdateInputParam {
      effective_from: number;
      description?: string;
      coupons_to_remove?: string[];
      discounts_to_remove?: string[];
      items_to_remove?: string[];
      items_to_add?: ItemsToAddUpdateInputParam[];
      items_to_update?: ItemsToUpdateUpdateInputParam[];
      item_tiers?: ItemTiersUpdateInputParam[];
      coupons_to_add?: CouponsToAddUpdateInputParam[];
      discounts_to_add?: DiscountsToAddUpdateInputParam[];
    }
    export interface ListInputParam {
      limit?: number;
      offset?: string;
      include_deleted?: boolean;
      status?: filter.Enum;
      subscription_id: filter.String;
      effective_from?: filter.Timestamp;
      updated_at?: filter.Timestamp;
      'sort_by[asc]'?: string;
      'sort_by[desc]'?: string;
    }
    export interface ItemsToAddCreateForSubscriptionInputParam {
      item_price_id: string;
      quantity?: number;
      quantity_in_decimal?: string;
      unit_price?: number;
      unit_price_in_decimal?: string;
      billing_cycles?: number;
      service_period_days?: number;
    }
    export interface CouponsToAddCreateForSubscriptionInputParam {
      coupon_id?: string;
      apply_till?: number;
    }
    export interface ItemTiersCreateForSubscriptionInputParam {
      item_price_id?: string;
      starting_unit?: number;
      ending_unit?: number;
      price?: number;
      starting_unit_in_decimal?: string;
      ending_unit_in_decimal?: string;
      price_in_decimal?: string;
      pricing_type?: PricingTypeEnum;
      package_size?: number;
    }
    export interface ItemsToUpdateCreateForSubscriptionInputParam {
      item_price_id: string;
      quantity?: number;
      quantity_in_decimal?: string;
      unit_price?: number;
      unit_price_in_decimal?: string;
      billing_cycles?: number;
      service_period_days?: number;
    }
    export interface DiscountsToAddCreateForSubscriptionInputParam {
      apply_on: ApplyOnEnum;
      duration_type: DurationTypeEnum;
      percentage?: number;
      amount?: number;
      period?: number;
      period_unit?: PeriodUnitEnum;
      included_in_mrr?: boolean;
      item_price_id?: string;
    }
    export interface ItemsToAddUpdateInputParam {
      item_price_id: string;
      quantity?: number;
      quantity_in_decimal?: string;
      unit_price?: number;
      unit_price_in_decimal?: string;
      billing_cycles?: number;
      service_period_days?: number;
    }
    export interface CouponsToAddUpdateInputParam {
      coupon_id?: string;
      apply_till?: number;
    }
    export interface ItemTiersUpdateInputParam {
      item_price_id?: string;
      starting_unit?: number;
      ending_unit?: number;
      price?: number;
      starting_unit_in_decimal?: string;
      ending_unit_in_decimal?: string;
      price_in_decimal?: string;
      pricing_type?: PricingTypeEnum;
      package_size?: number;
    }
    export interface ItemsToUpdateUpdateInputParam {
      item_price_id: string;
      quantity?: number;
      quantity_in_decimal?: string;
      unit_price?: number;
      unit_price_in_decimal?: string;
      billing_cycles?: number;
      service_period_days?: number;
    }
    export interface DiscountsToAddUpdateInputParam {
      apply_on: ApplyOnEnum;
      duration_type: DurationTypeEnum;
      percentage?: number;
      amount?: number;
      period?: number;
      period_unit?: PeriodUnitEnum;
      included_in_mrr?: boolean;
      item_price_id?: string;
    }
  }
}
