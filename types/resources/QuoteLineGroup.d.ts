///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'chargebee' {
  export interface QuoteLineGroup {
    version?: number;

    id?: string;

    sub_total: number;

    total?: number;

    credits_applied?: number;

    amount_paid?: number;

    amount_due?: number;

    charge_event?:
      | 'immediate'
      | 'subscription_creation'
      | 'trial_start'
      | 'subscription_change'
      | 'subscription_renewal'
      | 'subscription_cancel';

    billing_cycle_number?: number;

    line_items?: QuoteLineGroup.LineItem[];

    discounts?: QuoteLineGroup.Discount[];

    line_item_discounts?: QuoteLineGroup.LineItemDiscount[];

    taxes?: QuoteLineGroup.Tax[];

    line_item_taxes?: QuoteLineGroup.LineItemTax[];
  }
  export namespace QuoteLineGroup {
    export interface LineItem {
      id?: string;

      subscription_id?: string;

      date_from: number;

      date_to: number;

      unit_amount: number;

      quantity?: number;

      amount?: number;

      pricing_model?:
        | 'flat_fee'
        | 'per_unit'
        | 'tiered'
        | 'volume'
        | 'stairstep';

      is_taxed: boolean;

      tax_amount?: number;

      tax_rate?: number;

      unit_amount_in_decimal?: string;

      quantity_in_decimal?: string;

      amount_in_decimal?: string;

      discount_amount?: number;

      item_level_discount_amount?: number;

      usage_percentage?: string;

      reference_line_item_id?: string;

      description: string;

      entity_description?: string;

      entity_type:
        | 'adhoc'
        | 'plan_item_price'
        | 'addon_item_price'
        | 'charge_item_price'
        | 'plan_setup'
        | 'plan'
        | 'addon';

      tax_exempt_reason?:
        | 'tax_not_configured'
        | 'region_non_taxable'
        | 'export'
        | 'customer_exempt'
        | 'product_exempt'
        | 'zero_rated'
        | 'reverse_charge'
        | 'high_value_physical_goods'
        | 'zero_value_item'
        | 'tax_not_configured_external_provider';

      entity_id?: string;

      customer_id?: string;
    }
    export interface Discount {
      amount: number;

      description?: string;

      entity_type:
        | 'item_level_coupon'
        | 'document_level_coupon'
        | 'promotional_credits'
        | 'prorated_credits'
        | 'item_level_discount'
        | 'document_level_discount';

      entity_id?: string;

      coupon_set_code?: string;
    }
    export interface LineItemDiscount {
      line_item_id: string;

      discount_type:
        | 'item_level_coupon'
        | 'document_level_coupon'
        | 'promotional_credits'
        | 'prorated_credits'
        | 'item_level_discount'
        | 'document_level_discount';

      coupon_id?: string;

      entity_id?: string;

      discount_amount: number;
    }
    export interface Tax {
      name: string;

      amount: number;

      description?: string;
    }
    export interface LineItemTax {
      line_item_id?: string;

      tax_name: string;

      tax_rate: number;

      date_to?: number;

      date_from?: number;

      prorated_taxable_amount?: number;

      is_partial_tax_applied?: boolean;

      is_non_compliance_tax?: boolean;

      taxable_amount: number;

      tax_amount: number;

      tax_juris_type?:
        | 'country'
        | 'federal'
        | 'state'
        | 'county'
        | 'city'
        | 'special'
        | 'unincorporated'
        | 'other';

      tax_juris_name?: string;

      tax_juris_code?: string;

      tax_amount_in_local_currency?: number;

      local_currency_code?: string;
    }
    // REQUEST PARAMS
    //---------------
  }
}
