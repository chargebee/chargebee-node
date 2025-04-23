///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
///<reference path='./filter.d.ts'/>
declare module 'chargebee' {
  export interface Addon {
    [key: string]: unknown;
    id: string;
    name: string;
    invoice_name?: string;
    description?: string;
    pricing_model: PricingModelEnum;
    type: 'on_off' | 'quantity' | 'tiered' | 'volume' | 'stairstep';
    charge_type: 'recurring' | 'non_recurring';
    price?: number;
    currency_code: string;
    period?: number;
    period_unit: 'day' | 'week' | 'month' | 'year' | 'not_applicable';
    unit?: string;
    status: 'active' | 'archived' | 'deleted';
    archived_at?: number;
    enabled_in_portal: boolean;
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
    price_in_decimal?: string;
    included_in_mrr?: boolean;
    channel?: ChannelEnum;
    proration_type?: 'site_default' | 'partial_term' | 'full_term';
    invoice_notes?: string;
    taxable?: boolean;
    tax_profile_id?: string;
    meta_data?: any;
    tiers?: Addon.Tier[];
    tax_providers_fields?: Addon.TaxProvidersField[];
    show_description_in_invoices?: boolean;
    show_description_in_quotes?: boolean;
  }

  export namespace Addon {
    export class AddonResource {
      create(
        input: CreateInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<CreateResponse>>;

      update(
        addon_id: string,
        input: UpdateInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<UpdateResponse>>;

      list(
        input?: ListInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ListResponse>>;

      retrieve(
        addon_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<RetrieveResponse>>;

      delete(
        addon_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<DeleteResponse>>;

      copy(
        input: CopyInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<CopyResponse>>;

      unarchive(
        addon_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<UnarchiveResponse>>;
    }

    export interface CreateResponse {
      addon: Addon;
    }

    export interface UpdateResponse {
      addon: Addon;
    }

    export interface ListResponse {
      list: { addon: Addon }[];
      next_offset?: string;
    }

    export interface RetrieveResponse {
      addon: Addon;
    }

    export interface DeleteResponse {
      addon: Addon;
    }

    export interface CopyResponse {
      addon: Addon;
    }

    export interface UnarchiveResponse {
      addon: Addon;
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
    // REQUEST PARAMS
    //---------------

    export interface CreateInputParam {
      id: string;
      name: string;
      invoice_name?: string;
      description?: string;
      charge_type: 'recurring' | 'non_recurring';
      price?: number;
      currency_code?: string;
      period?: number;
      period_unit?: 'day' | 'week' | 'month' | 'year' | 'not_applicable';
      pricing_model?: PricingModelEnum /**
       * @deprecated Please refer API docs to use other attributes
       */;

      type?: 'on_off' | 'quantity' | 'tiered' | 'volume' | 'stairstep';
      unit?: string;
      enabled_in_portal?: boolean;
      taxable?: boolean;
      tax_profile_id?: string;
      avalara_sale_type?: AvalaraSaleTypeEnum;
      avalara_transaction_type?: number;
      avalara_service_type?: number;
      tax_code?: string;
      hsn_code?: string;
      taxjar_product_code?: string;
      invoice_notes?: string;
      meta_data?: any;
      sku?: string;
      accounting_code?: string;
      accounting_category1?: string;
      accounting_category2?: string;
      accounting_category3?: string;
      accounting_category4?: string;
      is_shippable?: boolean;
      shipping_frequency_period?: number;
      shipping_frequency_period_unit?: 'year' | 'month' | 'week' | 'day';
      included_in_mrr?: boolean;
      show_description_in_invoices?: boolean;
      show_description_in_quotes?: boolean;
      price_in_decimal?: string;
      proration_type?: 'site_default' | 'partial_term' | 'full_term';
      status?: 'active' | 'archived';
      tiers?: TiersCreateInputParam[];
      tax_providers_fields?: TaxProvidersFieldsCreateInputParam[];
      [key: `cf_${string}`]: unknown;
    }
    export interface UpdateInputParam {
      name?: string;
      invoice_name?: string;
      description?: string;
      charge_type?: 'recurring' | 'non_recurring';
      price?: number;
      currency_code?: string;
      period?: number;
      period_unit?: 'day' | 'week' | 'month' | 'year' | 'not_applicable';
      pricing_model?: PricingModelEnum /**
       * @deprecated Please refer API docs to use other attributes
       */;

      type?: 'on_off' | 'quantity' | 'tiered' | 'volume' | 'stairstep';
      unit?: string;
      enabled_in_portal?: boolean;
      taxable?: boolean;
      tax_profile_id?: string;
      avalara_sale_type?: AvalaraSaleTypeEnum;
      avalara_transaction_type?: number;
      avalara_service_type?: number;
      tax_code?: string;
      hsn_code?: string;
      taxjar_product_code?: string;
      invoice_notes?: string;
      meta_data?: any;
      sku?: string;
      accounting_code?: string;
      accounting_category1?: string;
      accounting_category2?: string;
      accounting_category3?: string;
      accounting_category4?: string;
      is_shippable?: boolean;
      shipping_frequency_period?: number;
      shipping_frequency_period_unit?: 'year' | 'month' | 'week' | 'day';
      included_in_mrr?: boolean;
      show_description_in_invoices?: boolean;
      show_description_in_quotes?: boolean;
      price_in_decimal?: string;
      proration_type?: 'site_default' | 'partial_term' | 'full_term';
      tiers?: TiersUpdateInputParam[];
      tax_providers_fields?: TaxProvidersFieldsUpdateInputParam[];
      [key: `cf_${string}`]: unknown;
    }
    export interface ListInputParam {
      limit?: number;
      offset?: string;
      id?: filter.String;
      name?: filter.String;
      pricing_model?: filter.Enum /**
       * @deprecated Please refer API docs to use other attributes
       */;

      type?: filter.Enum;
      charge_type?: filter.Enum;
      price?: filter.Number;
      period?: filter.Number;
      period_unit?: filter.Enum;
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
    export interface TaxProvidersFieldsUpdateInputParam {
      provider_name: string;
      field_id: string;
      field_value: string;
    }
  }
}
