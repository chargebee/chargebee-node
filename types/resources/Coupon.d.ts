///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
///<reference path='./filter.d.ts'/>
declare module 'chargebee' {
  export interface Coupon {
    [key: string]: unknown;
    id: string;
    name: string;
    invoice_name?: string;
    discount_type: 'fixed_amount' | 'percentage' | 'offer_quantity';
    discount_percentage?: number;
    discount_amount?: number;
    discount_quantity?: number;
    currency_code?: string;
    duration_type: 'one_time' | 'forever' | 'limited_period';
    duration_month?: number;
    valid_from?: number;
    valid_till?: number;
    max_redemptions?: number;
    status?: 'active' | 'expired' | 'archived' | 'deleted' | 'future';
    apply_discount_on:
      | 'plans'
      | 'plans_and_addons'
      | 'plans_with_quantity'
      | 'not_applicable';
    apply_on: 'invoice_amount' | 'each_specified_item';
    plan_constraint: 'none' | 'all' | 'specific' | 'not_applicable';
    addon_constraint: 'none' | 'all' | 'specific' | 'not_applicable';
    created_at: number;
    archived_at?: number;
    resource_version?: number;
    updated_at?: number;
    included_in_mrr?: boolean;
    period?: number;
    period_unit?: PeriodUnitEnum;
    plan_ids?: string[];
    addon_ids?: string[];
    item_constraints?: Coupon.ItemConstraint[];
    item_constraint_criteria?: Coupon.ItemConstraintCriteria[];
    redemptions?: number;
    invoice_notes?: string;
    meta_data?: any;
    coupon_constraints?: Coupon.CouponConstraint[];
    deleted: boolean;
  }

  export namespace Coupon {
    export class CouponResource {
      create(
        input: CreateInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<CreateResponse>>;

      createForItems(
        input: CreateForItemsInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<CreateForItemsResponse>>;

      updateForItems(
        coupon_id: string,
        input: UpdateForItemsInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<UpdateForItemsResponse>>;

      list(
        input?: ListInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ListResponse>>;

      retrieve(
        coupon_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<RetrieveResponse>>;

      update(
        coupon_id: string,
        input?: UpdateInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<UpdateResponse>>;

      delete(
        coupon_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<DeleteResponse>>;

      copy(
        input: CopyInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<CopyResponse>>;

      unarchive(
        coupon_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<UnarchiveResponse>>;
    }

    export interface CreateResponse {
      coupon: Coupon;
    }

    export interface CreateForItemsResponse {
      coupon: Coupon;
    }

    export interface UpdateForItemsResponse {
      coupon: Coupon;
    }

    export interface ListResponse {
      list: { coupon: Coupon }[];
      next_offset?: string;
    }

    export interface RetrieveResponse {
      coupon: Coupon;
    }

    export interface UpdateResponse {
      coupon: Coupon;
    }

    export interface DeleteResponse {
      coupon: Coupon;
    }

    export interface CopyResponse {
      coupon: Coupon;
    }

    export interface UnarchiveResponse {
      coupon: Coupon;
    }

    export interface ItemConstraint {
      item_type: 'plan' | 'addon' | 'charge';
      constraint: 'none' | 'all' | 'specific' | 'criteria';
      item_price_ids?: any[];
    }
    export interface ItemConstraintCriteria {
      item_type: 'plan' | 'addon' | 'charge';
      currencies?: any[];
      item_family_ids?: any[];
      item_price_periods?: any[];
    }
    export interface CouponConstraint {
      entity_type: 'customer';
      type:
        | 'max_redemptions'
        | 'unique_by'
        | 'existing_customer'
        | 'new_customer';
      value?: string;
    }
    // REQUEST PARAMS
    //---------------

    export interface CreateInputParam {
      id: string;
      name: string;
      invoice_name?: string;
      discount_type?: 'fixed_amount' | 'percentage' | 'offer_quantity';
      discount_amount?: number;
      currency_code?: string;
      discount_percentage?: number;
      discount_quantity?: number;
      apply_on: 'invoice_amount' | 'each_specified_item';
      duration_type?: 'one_time' | 'forever' | 'limited_period';
      duration_month?: number;
      valid_till?: number;
      max_redemptions?: number;
      invoice_notes?: string;
      meta_data?: any;
      included_in_mrr?: boolean;
      period?: number;
      period_unit?: PeriodUnitEnum;
      plan_constraint?: 'none' | 'all' | 'specific';
      addon_constraint?: 'none' | 'all' | 'specific';
      plan_ids?: string[];
      addon_ids?: string[];
      status?: 'active' | 'archived';
    }
    export interface CreateForItemsInputParam {
      id: string;
      name: string;
      invoice_name?: string;
      discount_type?: 'fixed_amount' | 'percentage' | 'offer_quantity';
      discount_amount?: number;
      currency_code?: string;
      discount_percentage?: number;
      discount_quantity?: number;
      apply_on: 'invoice_amount' | 'each_specified_item';
      duration_type?: 'one_time' | 'forever' | 'limited_period';
      duration_month?: number;
      valid_from?: number;
      valid_till?: number;
      max_redemptions?: number;
      invoice_notes?: string;
      meta_data?: any;
      included_in_mrr?: boolean;
      period?: number;
      period_unit?: PeriodUnitEnum;
      status?: 'active' | 'archived';
      item_constraints?: ItemConstraintsCreateForItemsInputParam[];
      item_constraint_criteria?: ItemConstraintCriteriaCreateForItemsInputParam[];
      coupon_constraints?: CouponConstraintsCreateForItemsInputParam[];
      [key: `cf_${string}`]: unknown;
    }
    export interface UpdateForItemsInputParam {
      name?: string;
      invoice_name?: string;
      discount_type?: 'fixed_amount' | 'percentage' | 'offer_quantity';
      discount_amount?: number;
      currency_code?: string;
      discount_percentage?: number;
      discount_quantity?: number;
      apply_on?: 'invoice_amount' | 'each_specified_item';
      duration_type?: 'one_time' | 'forever' | 'limited_period';
      duration_month?: number;
      valid_from?: number;
      valid_till?: number;
      max_redemptions?: number;
      invoice_notes?: string;
      meta_data?: any;
      included_in_mrr?: boolean;
      period?: number;
      period_unit?: PeriodUnitEnum;
      item_constraints?: ItemConstraintsUpdateForItemsInputParam[];
      item_constraint_criteria?: ItemConstraintCriteriaUpdateForItemsInputParam[];
      coupon_constraints?: CouponConstraintsUpdateForItemsInputParam[];
      [key: `cf_${string}`]: unknown;
    }
    export interface ListInputParam {
      limit?: number;
      offset?: string;
      id?: filter.String;
      name?: filter.String;
      discount_type?: filter.Enum;
      duration_type?: filter.Enum;
      status?: filter.Enum;
      apply_on?: filter.Enum;
      created_at?: filter.Timestamp;
      updated_at?: filter.Timestamp;
      currency_code?: filter.String;
      applicable_item_price_ids?: filter.String;
      'sort_by[asc]'?: string;
      'sort_by[desc]'?: string;
      [key: `cf_${string}`]: unknown;
    }
    export interface UpdateInputParam {
      name?: string;
      invoice_name?: string;
      discount_type?: 'fixed_amount' | 'percentage' | 'offer_quantity';
      discount_amount?: number;
      currency_code?: string;
      discount_percentage?: number;
      discount_quantity?: number;
      apply_on?: 'invoice_amount' | 'each_specified_item';
      duration_type?: 'one_time' | 'forever' | 'limited_period';
      duration_month?: number;
      valid_till?: number;
      max_redemptions?: number;
      invoice_notes?: string;
      meta_data?: any;
      included_in_mrr?: boolean;
      period?: number;
      period_unit?: PeriodUnitEnum;
      plan_constraint?: 'none' | 'all' | 'specific';
      addon_constraint?: 'none' | 'all' | 'specific';
      plan_ids?: string[];
      addon_ids?: string[];
    }
    export interface CopyInputParam {
      from_site: string;
      id_at_from_site: string;
      id?: string;
      for_site_merging?: boolean;
    }
    export interface ItemConstraintCriteriaCreateForItemsInputParam {
      item_type?: 'plan' | 'addon' | 'charge';
      item_family_ids?: any;
      currencies?: any;
      item_price_periods?: any;
    }
    export interface CouponConstraintsCreateForItemsInputParam {
      entity_type: 'customer';
      type:
        | 'max_redemptions'
        | 'unique_by'
        | 'existing_customer'
        | 'new_customer';
      value?: string;
    }
    export interface ItemConstraintsCreateForItemsInputParam {
      constraint: 'none' | 'all' | 'specific' | 'criteria';
      item_type: 'plan' | 'addon' | 'charge';
      item_price_ids?: any;
    }
    export interface ItemConstraintCriteriaUpdateForItemsInputParam {
      item_type?: 'plan' | 'addon' | 'charge';
      item_family_ids?: any;
      currencies?: any;
      item_price_periods?: any;
    }
    export interface CouponConstraintsUpdateForItemsInputParam {
      entity_type: 'customer';
      type:
        | 'max_redemptions'
        | 'unique_by'
        | 'existing_customer'
        | 'new_customer';
      value?: string;
    }
    export interface ItemConstraintsUpdateForItemsInputParam {
      constraint: 'none' | 'all' | 'specific' | 'criteria';
      item_type: 'plan' | 'addon' | 'charge';
      item_price_ids?: any;
    }
  }
}
