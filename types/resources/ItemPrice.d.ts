///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
///<reference path='./filter.d.ts'/>
declare module 'chargebee' {
  export interface ItemPrice {
    [key: string]: unknown;
    id: string;
    name: string;
    item_family_id?: string;
    item_id?: string;
    description?: string;
    status?: 'active' | 'archived' | 'deleted';
    external_name?: string;
    price_variant_id?: string;
    proration_type?: 'site_default' | 'partial_term' | 'full_term';
    pricing_model: PricingModelEnum;
    price?: number;
    price_in_decimal?: string;
    period?: number;
    currency_code: string;
    period_unit?: 'day' | 'week' | 'month' | 'year';
    trial_period?: number;
    trial_period_unit?: 'day' | 'month';
    trial_end_action?:
      | 'site_default'
      | 'activate_subscription'
      | 'cancel_subscription';
    shipping_period?: number;
    shipping_period_unit?: 'day' | 'week' | 'month' | 'year';
    billing_cycles?: number;
    free_quantity: number;
    free_quantity_in_decimal?: string;
    channel?: ChannelEnum;
    resource_version?: number;
    updated_at?: number;
    created_at: number;
    usage_accumulation_reset_frequency?: UsageAccumulationResetFrequencyEnum;
    archived_at?: number;
    invoice_notes?: string;
    tiers?: ItemPrice.Tier[];
    is_taxable?: boolean;
    tax_detail?: ItemPrice.TaxDetail;
    tax_providers_fields?: ItemPrice.TaxProvidersField[];
    accounting_detail?: ItemPrice.AccountingDetail;
    metadata?: any;
    item_type?: ItemTypeEnum;
    archivable?: boolean;
    parent_item_id?: string;
    show_description_in_invoices?: boolean;
    show_description_in_quotes?: boolean;
    business_entity_id?: string;
  }

  export namespace ItemPrice {
    export class ItemPriceResource {
      create(
        input: CreateInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<CreateResponse>>;

      retrieve(
        item_price_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<RetrieveResponse>>;

      update(
        item_price_id: string,
        input: UpdateInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<UpdateResponse>>;

      list(
        input?: ListInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ListResponse>>;

      delete(
        item_price_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<DeleteResponse>>;

      findApplicableItems(
        item_price_id: string,
        input?: FindApplicableItemsInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<FindApplicableItemsResponse>>;

      findApplicableItemPrices(
        item_price_id: string,
        input?: FindApplicableItemPricesInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<FindApplicableItemPricesResponse>>;
    }

    export interface CreateResponse {
      item_price: ItemPrice;
    }

    export interface RetrieveResponse {
      item_price: ItemPrice;
    }

    export interface UpdateResponse {
      item_price: ItemPrice;
    }

    export interface ListResponse {
      list: { item_price: ItemPrice }[];
      next_offset?: string;
    }

    export interface DeleteResponse {
      item_price: ItemPrice;
    }

    export interface FindApplicableItemsResponse {
      list: { item: Item }[];
      next_offset?: string;
    }

    export interface FindApplicableItemPricesResponse {
      list: { item_price: ItemPrice }[];
      next_offset?: string;
    }

    export interface Tier {
      starting_unit: number;
      ending_unit?: number;
      price: number;
      starting_unit_in_decimal?: string;
      ending_unit_in_decimal?: string;
      price_in_decimal?: string;
    }
    export interface TaxDetail {
      tax_profile_id?: string;
      avalara_sale_type?: AvalaraSaleTypeEnum;
      avalara_transaction_type?: number;
      avalara_service_type?: number;
      avalara_tax_code?: string;
      hsn_code?: string;
      taxjar_product_code?: string;
    }
    export interface TaxProvidersField {
      provider_name: string;
      field_id: string;
      field_value: string;
    }
    export interface AccountingDetail {
      sku?: string;
      accounting_code?: string;
      accounting_category1?: string;
      accounting_category2?: string;
      accounting_category3?: string;
      accounting_category4?: string;
    }
    // REQUEST PARAMS
    //---------------

    export interface CreateInputParam {
      id: string;
      name: string;
      description?: string;
      item_id: string;
      invoice_notes?: string;
      proration_type?: 'site_default' | 'partial_term' | 'full_term';
      external_name?: string;
      currency_code?: string;
      price_variant_id?: string;
      is_taxable?: boolean;
      free_quantity?: number;
      free_quantity_in_decimal?: string;
      metadata?: any;
      show_description_in_invoices?: boolean;
      show_description_in_quotes?: boolean;
      usage_accumulation_reset_frequency?: UsageAccumulationResetFrequencyEnum;
      business_entity_id?: string;
      pricing_model?: PricingModelEnum;
      price?: number;
      price_in_decimal?: string;
      period_unit?: 'day' | 'week' | 'month' | 'year';
      period?: number;
      trial_period_unit?: 'day' | 'month';
      trial_period?: number;
      shipping_period?: number;
      shipping_period_unit?: 'day' | 'week' | 'month' | 'year';
      billing_cycles?: number;
      trial_end_action?:
        | 'site_default'
        | 'activate_subscription'
        | 'cancel_subscription';
      tax_detail?: TaxDetailCreateInputParam;
      accounting_detail?: AccountingDetailCreateInputParam;
      tiers?: TiersCreateInputParam[];
      tax_providers_fields?: TaxProvidersFieldsCreateInputParam[];
      [key: `cf_${string}`]: unknown;
    }
    export interface UpdateInputParam {
      name?: string;
      description?: string;
      proration_type?: 'site_default' | 'partial_term' | 'full_term';
      price_variant_id?: string;
      status?: 'active' | 'archived';
      external_name?: string;
      usage_accumulation_reset_frequency?: UsageAccumulationResetFrequencyEnum;
      currency_code?: string;
      invoice_notes?: string;
      is_taxable?: boolean;
      free_quantity?: number;
      free_quantity_in_decimal?: string;
      metadata?: any;
      pricing_model?: PricingModelEnum;
      price?: number;
      price_in_decimal?: string;
      period_unit?: 'day' | 'week' | 'month' | 'year';
      period?: number;
      trial_period_unit?: 'day' | 'month';
      trial_period?: number;
      shipping_period?: number;
      shipping_period_unit?: 'day' | 'week' | 'month' | 'year';
      billing_cycles?: number;
      trial_end_action?:
        | 'site_default'
        | 'activate_subscription'
        | 'cancel_subscription';
      show_description_in_invoices?: boolean;
      show_description_in_quotes?: boolean;
      tax_detail?: TaxDetailUpdateInputParam;
      accounting_detail?: AccountingDetailUpdateInputParam;
      tiers?: TiersUpdateInputParam[];
      tax_providers_fields?: TaxProvidersFieldsUpdateInputParam[];
      [key: `cf_${string}`]: unknown;
    }
    export interface ListInputParam {
      limit?: number;
      offset?: string;
      id?: filter.String;
      name?: filter.String;
      pricing_model?: filter.Enum;
      item_id?: filter.String;
      item_family_id?: filter.String;
      item_type?: filter.Enum;
      currency_code?: filter.String;
      price_variant_id?: filter.String;
      trial_period?: filter.Number;
      trial_period_unit?: filter.Enum;
      status?: filter.Enum;
      updated_at?: filter.Timestamp;
      business_entity_id?: filter.String;
      include_site_level_resources?: filter.Boolean;
      period_unit?: filter.Enum;
      period?: filter.Number;
      channel?: filter.Enum;
      'sort_by[asc]'?: string;
      'sort_by[desc]'?: string;
    }
    export interface FindApplicableItemsInputParam {
      limit?: number;
      offset?: string;
      'sort_by[asc]'?: string;
      'sort_by[desc]'?: string;
    }
    export interface FindApplicableItemPricesInputParam {
      limit?: number;
      offset?: string;
      item_id?: string;
      'sort_by[asc]'?: string;
      'sort_by[desc]'?: string;
    }
    export interface TaxDetailCreateInputParam {
      tax_profile_id?: string;
      avalara_tax_code?: string;
      hsn_code?: string;
      avalara_sale_type?: AvalaraSaleTypeEnum;
      avalara_transaction_type?: number;
      avalara_service_type?: number;
      taxjar_product_code?: string;
    }
    export interface AccountingDetailCreateInputParam {
      sku?: string;
      accounting_code?: string;
      accounting_category1?: string;
      accounting_category2?: string;
      accounting_category3?: string;
      accounting_category4?: string;
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
    export interface TaxDetailUpdateInputParam {
      tax_profile_id?: string;
      avalara_tax_code?: string;
      hsn_code?: string;
      avalara_sale_type?: AvalaraSaleTypeEnum;
      avalara_transaction_type?: number;
      avalara_service_type?: number;
      taxjar_product_code?: string;
    }
    export interface AccountingDetailUpdateInputParam {
      sku?: string;
      accounting_code?: string;
      accounting_category1?: string;
      accounting_category2?: string;
      accounting_category3?: string;
      accounting_category4?: string;
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
