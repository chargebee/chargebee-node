///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
///<reference path='./filter.d.ts'/>
declare module 'chargebee' {
  export interface Plan {
    [key: string]: unknown;
    id: string;
    name: string;
    invoice_name?: string;
    description?: string;
    price?: number;
    currency_code: string;
    period: number;
    period_unit: 'day' | 'week' | 'month' | 'year';
    trial_period?: number;
    trial_period_unit?: 'day' | 'month';
    trial_end_action?:
      | 'site_default'
      | 'activate_subscription'
      | 'cancel_subscription';
    pricing_model: PricingModelEnum;
    charge_model: 'flat_fee' | 'per_unit' | 'tiered' | 'volume' | 'stairstep';
    free_quantity: number;
    setup_cost?: number;
    downgrade_penalty?: number;
    status: 'active' | 'archived' | 'deleted';
    archived_at?: number;
    billing_cycles?: number;
    redirect_url?: string;
    enabled_in_hosted_pages: boolean;
    enabled_in_portal: boolean;
    addon_applicability: 'all' | 'restricted';
    tax_code?: string;
    hsn_code?: string;
    taxjar_product_code?: string;
    avalara_sale_type?: AvalaraSaleTypeEnum;
    avalara_transaction_type?: number;
    avalara_service_type?: number;
    sku?: string;
    accounting_code?: string;
    accounting_category1?: string;
    accounting_category2?: string;
    accounting_category3?: string;
    accounting_category4?: string;
    is_shippable?: boolean;
    shipping_frequency_period?: number;
    shipping_frequency_period_unit?: 'year' | 'month' | 'week' | 'day';
    resource_version?: number;
    updated_at?: number;
    giftable: boolean;
    claim_url?: string;
    free_quantity_in_decimal?: string;
    price_in_decimal?: string;
    channel?: ChannelEnum;
    invoice_notes?: string;
    taxable?: boolean;
    tax_profile_id?: string;
    meta_data?: any;
    tiers?: Plan.Tier[];
    tax_providers_fields?: Plan.TaxProvidersField[];
    applicable_addons?: Plan.ApplicableAddon[];
    attached_addons?: Plan.AttachedAddon[];
    event_based_addons?: Plan.EventBasedAddon[];
    show_description_in_invoices?: boolean;
    show_description_in_quotes?: boolean;
  }

  export namespace Plan {
    export class PlanResource {
      create(
        input: CreateInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<CreateResponse>>;

      update(
        plan_id: string,
        input: UpdateInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<UpdateResponse>>;

      list(
        input?: ListInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ListResponse>>;

      retrieve(
        plan_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<RetrieveResponse>>;

      delete(
        plan_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<DeleteResponse>>;

      copy(
        input: CopyInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<CopyResponse>>;

      unarchive(
        plan_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<UnarchiveResponse>>;
    }

    export interface CreateResponse {
      plan: Plan;
    }

    export interface UpdateResponse {
      plan: Plan;
    }

    export interface ListResponse {
      list: { plan: Plan }[];
      next_offset?: string;
    }

    export interface RetrieveResponse {
      plan: Plan;
    }

    export interface DeleteResponse {
      plan: Plan;
    }

    export interface CopyResponse {
      plan: Plan;
    }

    export interface UnarchiveResponse {
      plan: Plan;
    }

    export interface Tier {
      starting_unit: number;
      ending_unit?: number;
      price: number;
      starting_unit_in_decimal?: string;
      ending_unit_in_decimal?: string;
      price_in_decimal?: string;
      pricing_type?: 'per_unit' | 'flat_fee' | 'package';
      package_size?: number;
    }
    export interface TaxProvidersField {
      provider_name: string;
      field_id: string;
      field_value: string;
    }
    export interface ApplicableAddon {
      id: string;
    }
    export interface AttachedAddon {
      id: string;
      quantity: number;
      billing_cycles?: number;
      type: 'recommended' | 'mandatory';
      quantity_in_decimal?: string;
    }
    export interface EventBasedAddon {
      id: string;
      quantity: number;
      on_event:
        | 'subscription_creation'
        | 'subscription_trial_start'
        | 'plan_activation'
        | 'subscription_activation'
        | 'contract_termination';
      charge_once: boolean;
      quantity_in_decimal?: string;
    }
    // REQUEST PARAMS
    //---------------

    export interface CreateInputParam {
      id: string;
      name: string;
      invoice_name?: string;
      description?: string;
      trial_period?: number;
      trial_period_unit?: 'day' | 'month';
      trial_end_action?:
        | 'site_default'
        | 'activate_subscription'
        | 'cancel_subscription';
      period?: number;
      period_unit?: 'day' | 'week' | 'month' | 'year';
      setup_cost?: number;
      price?: number;
      price_in_decimal?: string;
      currency_code?: string;
      billing_cycles?: number;
      pricing_model?: PricingModelEnum /**
       * @deprecated Please refer API docs to use other attributes
       */;

      charge_model?:
        | 'flat_fee'
        | 'per_unit'
        | 'tiered'
        | 'volume'
        | 'stairstep';
      free_quantity?: number;
      free_quantity_in_decimal?: string;
      addon_applicability?: 'all' | 'restricted' /**
       * @deprecated Please refer API docs to use other attributes
       */;

      downgrade_penalty?: number;
      redirect_url?: string;
      enabled_in_hosted_pages?: boolean;
      enabled_in_portal?: boolean;
      taxable?: boolean;
      tax_profile_id?: string;
      tax_code?: string;
      hsn_code?: string;
      taxjar_product_code?: string;
      avalara_sale_type?: AvalaraSaleTypeEnum;
      avalara_transaction_type?: number;
      avalara_service_type?: number;
      sku?: string;
      accounting_code?: string;
      accounting_category1?: string;
      accounting_category2?: string;
      accounting_category3?: string;
      accounting_category4?: string;
      is_shippable?: boolean;
      shipping_frequency_period?: number;
      shipping_frequency_period_unit?: 'year' | 'month' | 'week' | 'day';
      invoice_notes?: string;
      meta_data?: any;
      show_description_in_invoices?: boolean;
      show_description_in_quotes?: boolean;
      giftable?: boolean;
      status?: 'active' | 'archived';
      claim_url?: string;
      tiers?: TiersCreateInputParam[];
      tax_providers_fields?: TaxProvidersFieldsCreateInputParam[];
      applicable_addons?: ApplicableAddonsCreateInputParam[];
      event_based_addons?: EventBasedAddonsCreateInputParam[];
      attached_addons?: AttachedAddonsCreateInputParam[];
      [key: `cf_${string}`]: unknown;
    }
    export interface UpdateInputParam {
      name?: string;
      invoice_name?: string;
      description?: string;
      trial_period?: number;
      trial_period_unit?: 'day' | 'month';
      trial_end_action?:
        | 'site_default'
        | 'activate_subscription'
        | 'cancel_subscription';
      period?: number;
      period_unit?: 'day' | 'week' | 'month' | 'year';
      setup_cost?: number;
      price?: number;
      price_in_decimal?: string;
      currency_code?: string;
      billing_cycles?: number;
      pricing_model?: PricingModelEnum /**
       * @deprecated Please refer API docs to use other attributes
       */;

      charge_model?:
        | 'flat_fee'
        | 'per_unit'
        | 'tiered'
        | 'volume'
        | 'stairstep';
      free_quantity?: number;
      free_quantity_in_decimal?: string;
      addon_applicability?: 'all' | 'restricted' /**
       * @deprecated Please refer API docs to use other attributes
       */;

      downgrade_penalty?: number;
      redirect_url?: string;
      enabled_in_hosted_pages?: boolean;
      enabled_in_portal?: boolean;
      taxable?: boolean;
      tax_profile_id?: string;
      tax_code?: string;
      hsn_code?: string;
      taxjar_product_code?: string;
      avalara_sale_type?: AvalaraSaleTypeEnum;
      avalara_transaction_type?: number;
      avalara_service_type?: number;
      sku?: string;
      accounting_code?: string;
      accounting_category1?: string;
      accounting_category2?: string;
      accounting_category3?: string;
      accounting_category4?: string;
      is_shippable?: boolean;
      shipping_frequency_period?: number;
      shipping_frequency_period_unit?: 'year' | 'month' | 'week' | 'day';
      invoice_notes?: string;
      meta_data?: any;
      show_description_in_invoices?: boolean;
      show_description_in_quotes?: boolean;
      tiers?: TiersUpdateInputParam[];
      tax_providers_fields?: TaxProvidersFieldsUpdateInputParam[];
      applicable_addons?: ApplicableAddonsUpdateInputParam[];
      attached_addons?: AttachedAddonsUpdateInputParam[];
      event_based_addons?: EventBasedAddonsUpdateInputParam[];
      [key: `cf_${string}`]: unknown;
    }
    export interface ListInputParam {
      limit?: number;
      offset?: string;
      id?: filter.String;
      name?: filter.String;
      price?: filter.Number;
      period?: filter.Number;
      period_unit?: filter.Enum;
      trial_period?: filter.Number;
      trial_period_unit?: filter.Enum;
      addon_applicability?: filter.Enum;
      giftable?: filter.Boolean /**
       * @deprecated Please refer API docs to use other attributes
       */;

      charge_model?: filter.Enum;
      pricing_model?: filter.Enum;
      status?: filter.Enum;
      updated_at?: filter.Timestamp;
      currency_code?: filter.String;
      channel?: filter.Enum;
      include_deleted?: boolean;
      [key: `cf_${string}`]: unknown;
    }
    export interface CopyInputParam {
      from_site: string;
      id_at_from_site: string;
      id?: string;
      for_site_merging?: boolean;
    }
    export interface TiersCreateInputParam {
      starting_unit?: number;
      ending_unit?: number;
      price?: number;
      starting_unit_in_decimal?: string;
      ending_unit_in_decimal?: string;
      price_in_decimal?: string;
    }
    export interface EventBasedAddonsCreateInputParam {
      id?: string;
      quantity?: number;
      quantity_in_decimal?: string;
      on_event?: OnEventEnum;
      charge_once?: boolean;
    }
    export interface AttachedAddonsCreateInputParam {
      id?: string;
      quantity?: number;
      quantity_in_decimal?: string;
      billing_cycles?: number;
      type?: 'recommended' | 'mandatory';
    }
    export interface ApplicableAddonsCreateInputParam {
      id?: string;
    }
    export interface TaxProvidersFieldsCreateInputParam {
      provider_name: string;
      field_id: string;
      field_value: string;
    }
    export interface TiersUpdateInputParam {
      starting_unit?: number;
      ending_unit?: number;
      price?: number;
      starting_unit_in_decimal?: string;
      ending_unit_in_decimal?: string;
      price_in_decimal?: string;
    }
    export interface EventBasedAddonsUpdateInputParam {
      id?: string;
      quantity?: number;
      quantity_in_decimal?: string;
      on_event?: OnEventEnum;
      charge_once?: boolean;
    }
    export interface AttachedAddonsUpdateInputParam {
      id?: string;
      quantity?: number;
      quantity_in_decimal?: string;
      billing_cycles?: number;
      type?: 'recommended' | 'mandatory';
    }
    export interface ApplicableAddonsUpdateInputParam {
      id?: string;
    }
    export interface TaxProvidersFieldsUpdateInputParam {
      provider_name: string;
      field_id: string;
      field_value: string;
    }
  }
}
