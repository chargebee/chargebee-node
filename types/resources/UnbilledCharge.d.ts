///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
///<reference path='./filter.d.ts'/>
declare module 'Chargebee' {
  export interface UnbilledCharge {
    id?: string;

    customer_id?: string;

    subscription_id?: string;

    date_from?: number;

    date_to?: number;

    unit_amount?: number;

    pricing_model?: PricingModel;

    quantity?: number;

    amount?: number;

    currency_code: string;

    discount_amount?: number;

    description?: string;

    entity_type:
      | 'adhoc'
      | 'plan_item_price'
      | 'addon_item_price'
      | 'charge_item_price'
      | 'plan_setup'
      | 'plan'
      | 'addon';

    entity_id?: string;

    is_voided: boolean;

    voided_at?: number;

    unit_amount_in_decimal?: string;

    quantity_in_decimal?: string;

    amount_in_decimal?: string;

    updated_at: number;

    tiers?: UnbilledCharge.Tier[];

    is_advance_charge?: boolean;

    business_entity_id?: string;

    deleted: boolean;
  }
  export namespace UnbilledCharge {
    export class UnbilledChargeResource {
      createUnbilledCharge(
        input: CreateUnbilledChargeInputParam,
      ): Promise<ChargebeeResponse<CreateUnbilledChargeResponse>>;

      create(
        input: CreateInputParam,
      ): Promise<ChargebeeResponse<CreateResponse>>;

      invoiceUnbilledCharges(
        input?: InvoiceUnbilledChargesInputParam,
      ): Promise<ChargebeeResponse<InvoiceUnbilledChargesResponse>>;

      delete(
        unbilled_charge_id: string,
      ): Promise<ChargebeeResponse<DeleteResponse>>;

      list(input?: ListInputParam): Promise<ChargebeeResponse<ListResponse>>;

      invoiceNowEstimate(
        input?: InvoiceNowEstimateInputParam,
      ): Promise<ChargebeeResponse<InvoiceNowEstimateResponse>>;
    }
    export interface CreateUnbilledChargeResponse {
      unbilled_charges: UnbilledCharge[];
    }

    export interface CreateResponse {
      unbilled_charges: UnbilledCharge[];
    }

    export interface InvoiceUnbilledChargesResponse {
      invoices: Invoice[];
    }

    export interface DeleteResponse {
      unbilled_charge: UnbilledCharge;
    }

    export interface ListResponse {
      list: { unbilled_charge: UnbilledCharge }[];

      next_offset?: string;
    }

    export interface InvoiceNowEstimateResponse {
      estimate: Estimate;
    }

    export interface Tier {
      starting_unit: number;

      ending_unit?: number;

      quantity_used: number;

      unit_amount: number;

      starting_unit_in_decimal?: string;

      ending_unit_in_decimal?: string;

      quantity_used_in_decimal?: string;

      unit_amount_in_decimal?: string;
    }
    // REQUEST PARAMS
    //---------------

    export interface CreateUnbilledChargeInputParam {
      subscription_id: string;
      currency_code?: string;
      addons?: AddonsCreateUnbilledChargeInputParam[];
      charges?: ChargesCreateUnbilledChargeInputParam[];
      tax_providers_fields?: TaxProvidersFieldsCreateUnbilledChargeInputParam[];
    }
    export interface CreateInputParam {
      subscription_id: string;
      currency_code?: string;
      item_prices?: ItemPricesCreateInputParam[];
      item_tiers?: ItemTiersCreateInputParam[];
      charges?: ChargesCreateInputParam[];
      tax_providers_fields?: TaxProvidersFieldsCreateInputParam[];
    }
    export interface InvoiceUnbilledChargesInputParam {
      subscription_id?: string;
      customer_id?: string;
    }
    export interface ListInputParam {
      limit?: number;
      offset?: string;
      include_deleted?: boolean;
      is_voided?: boolean;
      subscription_id?: filter.String;
      customer_id?: filter.String;
    }
    export interface InvoiceNowEstimateInputParam {
      subscription_id?: string;
      customer_id?: string;
    }
    export interface ChargesCreateUnbilledChargeInputParam {
      amount?: number;

      amount_in_decimal?: string;

      description?: string;

      taxable?: boolean;

      tax_profile_id?: string;

      avalara_tax_code?: string;

      hsn_code?: string;

      taxjar_product_code?: string;

      avalara_sale_type?: AvalaraSaleType;

      avalara_transaction_type?: number;

      avalara_service_type?: number;

      date_from?: number;

      date_to?: number;
    }
    export interface AddonsCreateUnbilledChargeInputParam {
      id?: string;

      quantity?: number;

      unit_price?: number;

      quantity_in_decimal?: string;

      unit_price_in_decimal?: string;

      date_from?: number;

      date_to?: number;
    }
    export interface TaxProvidersFieldsCreateUnbilledChargeInputParam {
      provider_name?: string;

      field_id?: string;

      field_value?: string;
    }
    export interface ChargesCreateInputParam {
      amount?: number;

      amount_in_decimal?: string;

      description?: string;

      taxable?: boolean;

      tax_profile_id?: string;

      avalara_tax_code?: string;

      hsn_code?: string;

      taxjar_product_code?: string;

      avalara_sale_type?: AvalaraSaleType;

      avalara_transaction_type?: number;

      avalara_service_type?: number;

      date_from?: number;

      date_to?: number;
    }
    export interface ItemTiersCreateInputParam {
      item_price_id?: string;

      starting_unit?: number;

      ending_unit?: number;

      price?: number;

      starting_unit_in_decimal?: string;

      ending_unit_in_decimal?: string;

      price_in_decimal?: string;
    }
    export interface ItemPricesCreateInputParam {
      item_price_id?: string;

      quantity?: number;

      quantity_in_decimal?: string;

      unit_price?: number;

      unit_price_in_decimal?: string;

      date_from?: number;

      date_to?: number;
    }
    export interface TaxProvidersFieldsCreateInputParam {
      provider_name?: string;

      field_id?: string;

      field_value?: string;
    }
  }
}
