///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'Chargebee' {
  export interface Purchase {
    id?: string;

    customer_id: string;

    created_at?: number;

    modified_at?: number;

    subscription_ids?: string[];

    invoice_ids?: string[];
  }
  export namespace Purchase {
    export class PurchaseResource {
      create(
        input: CreateInputParam,
      ): ChargebeeRequest<ChargebeeResponse<CreateResponse>>;

      estimate(
        input: EstimateInputParam,
      ): ChargebeeRequest<ChargebeeResponse<EstimateResponse>>;
    }
    export interface CreateResponse {
      purchase: Purchase;
    }

    export interface EstimateResponse {
      estimate: Estimate;
    }

    // REQUEST PARAMS
    //---------------

    export interface CreateInputParam {
      customer_id: string;
      payment_source_id?: string;
      invoice_info?: InvoiceInfoCreateInputParam;
      statement_descriptor?: StatementDescriptorCreateInputParam;
      installment_info?: InstallmentInfoCreateInputParam;
      purchase_items?: PurchaseItemsCreateInputParam[];
      item_tiers?: ItemTiersCreateInputParam[];
      shipping_addresses?: ShippingAddressesCreateInputParam[];
      discounts?: DiscountsCreateInputParam[];
      subscription_info?: SubscriptionInfoCreateInputParam[];
      contract_terms?: ContractTermsCreateInputParam[];
    }
    export interface EstimateInputParam {
      client_profile_id?: string;
      customer_id?: string;
      customer?: CustomerEstimateInputParam;
      billing_address?: BillingAddressEstimateInputParam;
      purchase_items?: PurchaseItemsEstimateInputParam[];
      item_tiers?: ItemTiersEstimateInputParam[];
      shipping_addresses?: ShippingAddressesEstimateInputParam[];
      discounts?: DiscountsEstimateInputParam[];
      subscription_info?: SubscriptionInfoEstimateInputParam[];
      contract_terms?: ContractTermsEstimateInputParam[];
    }
    export interface StatementDescriptorCreateInputParam {
      descriptor?: string;
    }
    export interface InvoiceInfoCreateInputParam {
      po_number?: string;

      notes?: string;
    }
    export interface InstallmentInfoCreateInputParam {
      config_id?: string;

      amount?: number;
    }

    export interface SubscriptionInfoCreateInputParam {
      index: number;

      subscription_id?: string;

      billing_cycles?: number;

      contract_term_billing_cycle_on_renewal?: number;

      meta_data?: any;
    }
    export interface PurchaseItemsCreateInputParam {
      index: number;

      item_price_id: string;

      quantity?: number;

      unit_amount?: number;

      unit_amount_in_decimal?: string;

      quantity_in_decimal?: string;
    }
    export interface DiscountsCreateInputParam {
      index?: number;

      coupon_id?: string;

      percentage?: number;

      amount?: number;

      included_in_mrr?: boolean;
    }
    export interface ContractTermsCreateInputParam {
      index: number;

      action_at_term_end?: 'renew' | 'evergreen' | 'cancel' | 'renew_once';

      cancellation_cutoff_period?: number;
    }
    export interface ItemTiersCreateInputParam {
      index: number;

      item_price_id?: string;

      starting_unit?: number;

      ending_unit?: number;

      price?: number;

      starting_unit_in_decimal?: string;

      ending_unit_in_decimal?: string;

      price_in_decimal?: string;
    }
    export interface ShippingAddressesCreateInputParam {
      first_name?: string;

      last_name?: string;

      email?: string;

      company?: string;

      phone?: string;

      line1?: string;

      line2?: string;

      line3?: string;

      city?: string;

      state?: string;

      state_code?: string;

      country?: string;

      zip?: string;

      validation_status?: ValidationStatus;
    }
    export interface BillingAddressEstimateInputParam {
      line1?: string;

      line2?: string;

      line3?: string;

      city?: string;

      state_code?: string;

      zip?: string;

      country?: string;

      validation_status?: ValidationStatus;
    }
    export interface CustomerEstimateInputParam {
      vat_number?: string;

      vat_number_prefix?: string;

      registered_for_gst?: boolean;

      taxability?: Taxability;

      entity_code?: EntityCode;

      exempt_number?: string;

      exemption_details?: any;

      customer_type?: CustomerType;
    }

    export interface SubscriptionInfoEstimateInputParam {
      index: number;

      subscription_id?: string;

      billing_cycles?: number;

      contract_term_billing_cycle_on_renewal?: number;
    }
    export interface PurchaseItemsEstimateInputParam {
      index: number;

      item_price_id: string;

      quantity?: number;

      unit_amount?: number;

      unit_amount_in_decimal?: string;

      quantity_in_decimal?: string;
    }
    export interface DiscountsEstimateInputParam {
      index?: number;

      coupon_id?: string;

      percentage?: number;

      amount?: number;

      included_in_mrr?: boolean;
    }
    export interface ContractTermsEstimateInputParam {
      index: number;

      action_at_term_end?: 'renew' | 'evergreen' | 'cancel' | 'renew_once';

      cancellation_cutoff_period?: number;
    }
    export interface ItemTiersEstimateInputParam {
      index: number;

      item_price_id?: string;

      starting_unit?: number;

      ending_unit?: number;

      price?: number;

      starting_unit_in_decimal?: string;

      ending_unit_in_decimal?: string;

      price_in_decimal?: string;
    }
    export interface ShippingAddressesEstimateInputParam {
      first_name?: string;

      last_name?: string;

      email?: string;

      company?: string;

      phone?: string;

      line1?: string;

      line2?: string;

      line3?: string;

      city?: string;

      state?: string;

      state_code?: string;

      country?: string;

      zip?: string;

      validation_status?: ValidationStatus;
    }
  }
}
