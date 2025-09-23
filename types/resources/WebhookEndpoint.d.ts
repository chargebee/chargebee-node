///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
declare module 'chargebee' {
  export interface WebhookEndpoint {
    

    id:string;

    name:string;

    url:string;

    send_card_resource?:boolean;

    disabled:boolean;

    primary_url:boolean;

    api_version:'v1' | 'v2';

    chargebee_response_schema_type?:ChargebeeResponseSchemaType;

    enabled_events?:'coupon_created' | 'coupon_updated' | 'coupon_deleted' | 'coupon_set_created' | 'coupon_set_updated' | 'coupon_set_deleted' | 'coupon_codes_added' | 'coupon_codes_deleted' | 'coupon_codes_updated' | 'customer_created' | 'customer_changed' | 'customer_deleted' | 'customer_moved_out' | 'customer_moved_in' | 'promotional_credits_added' | 'promotional_credits_deducted' | 'subscription_created' | 'subscription_created_with_backdating' | 'subscription_started' | 'subscription_trial_end_reminder' | 'subscription_activated' | 'subscription_activated_with_backdating' | 'subscription_changed' | 'subscription_trial_extended' | 'mrr_updated' | 'subscription_changed_with_backdating' | 'subscription_cancellation_scheduled' | 'subscription_cancellation_reminder' | 'subscription_cancelled' | 'subscription_canceled_with_backdating' | 'subscription_reactivated' | 'subscription_reactivated_with_backdating' | 'subscription_renewed' | 'subscription_items_renewed' | 'subscription_scheduled_cancellation_removed' | 'subscription_changes_scheduled' | 'subscription_scheduled_changes_removed' | 'subscription_shipping_address_updated' | 'subscription_deleted' | 'subscription_paused' | 'subscription_pause_scheduled' | 'subscription_scheduled_pause_removed' | 'subscription_resumed' | 'subscription_resumption_scheduled' | 'subscription_scheduled_resumption_removed' | 'subscription_advance_invoice_schedule_added' | 'subscription_advance_invoice_schedule_updated' | 'subscription_advance_invoice_schedule_removed' | 'pending_invoice_created' | 'pending_invoice_updated' | 'invoice_generated' | 'invoice_generated_with_backdating' | 'invoice_updated' | 'invoice_deleted' | 'credit_note_created' | 'credit_note_created_with_backdating' | 'credit_note_updated' | 'credit_note_deleted' | 'payment_schedules_created' | 'payment_schedules_updated' | 'payment_schedule_scheme_created' | 'payment_schedule_scheme_deleted' | 'subscription_renewal_reminder' | 'add_usages_reminder' | 'transaction_created' | 'transaction_updated' | 'transaction_deleted' | 'payment_succeeded' | 'payment_failed' | 'dunning_updated' | 'payment_refunded' | 'payment_initiated' | 'refund_initiated' | 'authorization_succeeded' | 'authorization_voided' | 'card_added' | 'card_updated' | 'card_expiry_reminder' | 'card_expired' | 'card_deleted' | 'payment_source_added' | 'payment_source_updated' | 'payment_source_deleted' | 'payment_source_expiring' | 'payment_source_expired' | 'payment_source_locally_deleted' | 'virtual_bank_account_added' | 'virtual_bank_account_updated' | 'virtual_bank_account_deleted' | 'token_created' | 'token_consumed' | 'token_expired' | 'unbilled_charges_created' | 'unbilled_charges_voided' | 'unbilled_charges_deleted' | 'unbilled_charges_invoiced' | 'order_created' | 'order_updated' | 'order_cancelled' | 'order_delivered' | 'order_returned' | 'order_ready_to_process' | 'order_ready_to_ship' | 'order_deleted' | 'order_resent' | 'quote_created' | 'quote_updated' | 'quote_deleted' | 'tax_withheld_recorded' | 'tax_withheld_deleted' | 'tax_withheld_refunded' | 'gift_scheduled' | 'gift_unclaimed' | 'gift_claimed' | 'gift_expired' | 'gift_cancelled' | 'gift_updated' | 'hierarchy_created' | 'hierarchy_deleted' | 'payment_intent_created' | 'payment_intent_updated' | 'contract_term_created' | 'contract_term_renewed' | 'contract_term_terminated' | 'contract_term_completed' | 'contract_term_cancelled' | 'item_family_created' | 'item_family_updated' | 'item_family_deleted' | 'item_created' | 'item_updated' | 'item_deleted' | 'item_price_created' | 'item_price_updated' | 'item_price_deleted' | 'attached_item_created' | 'attached_item_updated' | 'attached_item_deleted' | 'differential_price_created' | 'differential_price_updated' | 'differential_price_deleted' | 'feature_created' | 'feature_updated' | 'feature_deleted' | 'feature_activated' | 'feature_reactivated' | 'feature_archived' | 'item_entitlements_updated' | 'entitlement_overrides_updated' | 'entitlement_overrides_removed' | 'item_entitlements_removed' | 'entitlement_overrides_auto_removed' | 'subscription_entitlements_created' | 'subscription_entitlements_updated' | 'business_entity_created' | 'business_entity_updated' | 'business_entity_deleted' | 'customer_business_entity_changed' | 'subscription_business_entity_changed' | 'purchase_created' | 'voucher_created' | 'voucher_expired' | 'voucher_create_failed' | 'item_price_entitlements_updated' | 'item_price_entitlements_removed' | 'subscription_ramp_created' | 'subscription_ramp_deleted' | 'subscription_ramp_applied' | 'subscription_ramp_drafted' | 'subscription_ramp_updated' | 'price_variant_created' | 'price_variant_updated' | 'price_variant_deleted' | 'customer_entitlements_updated' | 'subscription_moved_in' | 'subscription_moved_out' | 'subscription_movement_failed' | 'omnichannel_subscription_created' | 'omnichannel_subscription_item_renewed' | 'omnichannel_subscription_item_downgraded' | 'omnichannel_subscription_item_expired' | 'omnichannel_subscription_item_cancellation_scheduled' | 'omnichannel_subscription_item_scheduled_cancellation_removed' | 'omnichannel_subscription_item_resubscribed' | 'omnichannel_subscription_item_upgraded' | 'omnichannel_subscription_item_cancelled' | 'omnichannel_subscription_imported' | 'omnichannel_subscription_item_grace_period_started' | 'omnichannel_subscription_item_grace_period_expired' | 'omnichannel_subscription_item_dunning_started' | 'omnichannel_subscription_item_dunning_expired' | 'rule_created' | 'rule_updated' | 'rule_deleted' | 'record_purchase_failed' | 'omnichannel_subscription_item_change_scheduled' | 'omnichannel_subscription_item_scheduled_change_removed' | 'omnichannel_subscription_item_reactivated' | 'sales_order_created' | 'sales_order_updated' | 'omnichannel_subscription_item_changed' | 'omnichannel_subscription_item_paused' | 'omnichannel_subscription_item_resumed' | 'omnichannel_one_time_order_created' | 'omnichannel_one_time_order_item_cancelled' | 'usage_file_ingested' | 'omnichannel_subscription_item_pause_scheduled' | 'omnichannel_subscription_moved_in' | 'plan_created' | 'plan_updated' | 'plan_deleted' | 'addon_created' | 'addon_updated' | 'addon_deleted'[];

  }
  export namespace WebhookEndpoint {
    export class WebhookEndpointResource {  
      create(input:CreateInputParam):ChargebeeRequest<CreateResponse>;
       
      update(webhook_endpoint_id:string, input?:UpdateInputParam):ChargebeeRequest<UpdateResponse>;
       
      retrieve(webhook_endpoint_id:string):ChargebeeRequest<RetrieveResponse>;
       
      delete(webhook_endpoint_id:string):ChargebeeRequest<DeleteResponse>;
       
      list(input?:ListInputParam):ChargebeeRequest<ListResponse>;
    }
    export interface CreateResponse {  
       webhook_endpoint:WebhookEndpoint;
    }
    export interface CreateInputParam {
       
      name:string;
       
      api_version?:'v1' | 'v2';
       
      url:string;
       
      primary_url?:boolean;
       
      disabled?:boolean;
       
      basic_auth_password?:string;
       
      basic_auth_username?:string;
       
      send_card_resource?:boolean;
       
      chargebee_response_schema_type?:ChargebeeResponseSchemaType;
       
      enabled_events?:'coupon_created' | 'coupon_updated' | 'coupon_deleted' | 'coupon_set_created' | 'coupon_set_updated' | 'coupon_set_deleted' | 'coupon_codes_added' | 'coupon_codes_deleted' | 'coupon_codes_updated' | 'customer_created' | 'customer_changed' | 'customer_deleted' | 'customer_moved_out' | 'customer_moved_in' | 'promotional_credits_added' | 'promotional_credits_deducted' | 'subscription_created' | 'subscription_created_with_backdating' | 'subscription_started' | 'subscription_trial_end_reminder' | 'subscription_activated' | 'subscription_activated_with_backdating' | 'subscription_changed' | 'subscription_trial_extended' | 'mrr_updated' | 'subscription_changed_with_backdating' | 'subscription_cancellation_scheduled' | 'subscription_cancellation_reminder' | 'subscription_cancelled' | 'subscription_canceled_with_backdating' | 'subscription_reactivated' | 'subscription_reactivated_with_backdating' | 'subscription_renewed' | 'subscription_items_renewed' | 'subscription_scheduled_cancellation_removed' | 'subscription_changes_scheduled' | 'subscription_scheduled_changes_removed' | 'subscription_shipping_address_updated' | 'subscription_deleted' | 'subscription_paused' | 'subscription_pause_scheduled' | 'subscription_scheduled_pause_removed' | 'subscription_resumed' | 'subscription_resumption_scheduled' | 'subscription_scheduled_resumption_removed' | 'subscription_advance_invoice_schedule_added' | 'subscription_advance_invoice_schedule_updated' | 'subscription_advance_invoice_schedule_removed' | 'pending_invoice_created' | 'pending_invoice_updated' | 'invoice_generated' | 'invoice_generated_with_backdating' | 'invoice_updated' | 'invoice_deleted' | 'credit_note_created' | 'credit_note_created_with_backdating' | 'credit_note_updated' | 'credit_note_deleted' | 'payment_schedules_created' | 'payment_schedules_updated' | 'payment_schedule_scheme_created' | 'payment_schedule_scheme_deleted' | 'subscription_renewal_reminder' | 'add_usages_reminder' | 'transaction_created' | 'transaction_updated' | 'transaction_deleted' | 'payment_succeeded' | 'payment_failed' | 'dunning_updated' | 'payment_refunded' | 'payment_initiated' | 'refund_initiated' | 'authorization_succeeded' | 'authorization_voided' | 'card_added' | 'card_updated' | 'card_expiry_reminder' | 'card_expired' | 'card_deleted' | 'payment_source_added' | 'payment_source_updated' | 'payment_source_deleted' | 'payment_source_expiring' | 'payment_source_expired' | 'payment_source_locally_deleted' | 'virtual_bank_account_added' | 'virtual_bank_account_updated' | 'virtual_bank_account_deleted' | 'token_created' | 'token_consumed' | 'token_expired' | 'unbilled_charges_created' | 'unbilled_charges_voided' | 'unbilled_charges_deleted' | 'unbilled_charges_invoiced' | 'order_created' | 'order_updated' | 'order_cancelled' | 'order_delivered' | 'order_returned' | 'order_ready_to_process' | 'order_ready_to_ship' | 'order_deleted' | 'order_resent' | 'quote_created' | 'quote_updated' | 'quote_deleted' | 'tax_withheld_recorded' | 'tax_withheld_deleted' | 'tax_withheld_refunded' | 'gift_scheduled' | 'gift_unclaimed' | 'gift_claimed' | 'gift_expired' | 'gift_cancelled' | 'gift_updated' | 'hierarchy_created' | 'hierarchy_deleted' | 'payment_intent_created' | 'payment_intent_updated' | 'contract_term_created' | 'contract_term_renewed' | 'contract_term_terminated' | 'contract_term_completed' | 'contract_term_cancelled' | 'item_family_created' | 'item_family_updated' | 'item_family_deleted' | 'item_created' | 'item_updated' | 'item_deleted' | 'item_price_created' | 'item_price_updated' | 'item_price_deleted' | 'attached_item_created' | 'attached_item_updated' | 'attached_item_deleted' | 'differential_price_created' | 'differential_price_updated' | 'differential_price_deleted' | 'feature_created' | 'feature_updated' | 'feature_deleted' | 'feature_activated' | 'feature_reactivated' | 'feature_archived' | 'item_entitlements_updated' | 'entitlement_overrides_updated' | 'entitlement_overrides_removed' | 'item_entitlements_removed' | 'entitlement_overrides_auto_removed' | 'subscription_entitlements_created' | 'subscription_entitlements_updated' | 'business_entity_created' | 'business_entity_updated' | 'business_entity_deleted' | 'customer_business_entity_changed' | 'subscription_business_entity_changed' | 'purchase_created' | 'voucher_created' | 'voucher_expired' | 'voucher_create_failed' | 'item_price_entitlements_updated' | 'item_price_entitlements_removed' | 'subscription_ramp_created' | 'subscription_ramp_deleted' | 'subscription_ramp_applied' | 'subscription_ramp_drafted' | 'subscription_ramp_updated' | 'price_variant_created' | 'price_variant_updated' | 'price_variant_deleted' | 'customer_entitlements_updated' | 'subscription_moved_in' | 'subscription_moved_out' | 'subscription_movement_failed' | 'omnichannel_subscription_created' | 'omnichannel_subscription_item_renewed' | 'omnichannel_subscription_item_downgraded' | 'omnichannel_subscription_item_expired' | 'omnichannel_subscription_item_cancellation_scheduled' | 'omnichannel_subscription_item_scheduled_cancellation_removed' | 'omnichannel_subscription_item_resubscribed' | 'omnichannel_subscription_item_upgraded' | 'omnichannel_subscription_item_cancelled' | 'omnichannel_subscription_imported' | 'omnichannel_subscription_item_grace_period_started' | 'omnichannel_subscription_item_grace_period_expired' | 'omnichannel_subscription_item_dunning_started' | 'omnichannel_subscription_item_dunning_expired' | 'rule_created' | 'rule_updated' | 'rule_deleted' | 'record_purchase_failed' | 'omnichannel_subscription_item_change_scheduled' | 'omnichannel_subscription_item_scheduled_change_removed' | 'omnichannel_subscription_item_reactivated' | 'sales_order_created' | 'sales_order_updated' | 'omnichannel_subscription_item_changed' | 'omnichannel_subscription_item_paused' | 'omnichannel_subscription_item_resumed' | 'omnichannel_one_time_order_created' | 'omnichannel_one_time_order_item_cancelled' | 'usage_file_ingested' | 'omnichannel_subscription_item_pause_scheduled' | 'omnichannel_subscription_moved_in' | 'plan_created' | 'plan_updated' | 'plan_deleted' | 'addon_created' | 'addon_updated' | 'addon_deleted'[];
    }
    export interface UpdateResponse {  
       webhook_endpoint:WebhookEndpoint;
    }
    export interface UpdateInputParam {
       
      name?:string;
       
      api_version?:'v1' | 'v2';
       
      url?:string;
       
      primary_url?:boolean;
       
      send_card_resource?:boolean;
       
      basic_auth_password?:string;
       
      basic_auth_username?:string;
       
      disabled?:boolean;
       
      enabled_events?:'coupon_created' | 'coupon_updated' | 'coupon_deleted' | 'coupon_set_created' | 'coupon_set_updated' | 'coupon_set_deleted' | 'coupon_codes_added' | 'coupon_codes_deleted' | 'coupon_codes_updated' | 'customer_created' | 'customer_changed' | 'customer_deleted' | 'customer_moved_out' | 'customer_moved_in' | 'promotional_credits_added' | 'promotional_credits_deducted' | 'subscription_created' | 'subscription_created_with_backdating' | 'subscription_started' | 'subscription_trial_end_reminder' | 'subscription_activated' | 'subscription_activated_with_backdating' | 'subscription_changed' | 'subscription_trial_extended' | 'mrr_updated' | 'subscription_changed_with_backdating' | 'subscription_cancellation_scheduled' | 'subscription_cancellation_reminder' | 'subscription_cancelled' | 'subscription_canceled_with_backdating' | 'subscription_reactivated' | 'subscription_reactivated_with_backdating' | 'subscription_renewed' | 'subscription_items_renewed' | 'subscription_scheduled_cancellation_removed' | 'subscription_changes_scheduled' | 'subscription_scheduled_changes_removed' | 'subscription_shipping_address_updated' | 'subscription_deleted' | 'subscription_paused' | 'subscription_pause_scheduled' | 'subscription_scheduled_pause_removed' | 'subscription_resumed' | 'subscription_resumption_scheduled' | 'subscription_scheduled_resumption_removed' | 'subscription_advance_invoice_schedule_added' | 'subscription_advance_invoice_schedule_updated' | 'subscription_advance_invoice_schedule_removed' | 'pending_invoice_created' | 'pending_invoice_updated' | 'invoice_generated' | 'invoice_generated_with_backdating' | 'invoice_updated' | 'invoice_deleted' | 'credit_note_created' | 'credit_note_created_with_backdating' | 'credit_note_updated' | 'credit_note_deleted' | 'payment_schedules_created' | 'payment_schedules_updated' | 'payment_schedule_scheme_created' | 'payment_schedule_scheme_deleted' | 'subscription_renewal_reminder' | 'add_usages_reminder' | 'transaction_created' | 'transaction_updated' | 'transaction_deleted' | 'payment_succeeded' | 'payment_failed' | 'dunning_updated' | 'payment_refunded' | 'payment_initiated' | 'refund_initiated' | 'authorization_succeeded' | 'authorization_voided' | 'card_added' | 'card_updated' | 'card_expiry_reminder' | 'card_expired' | 'card_deleted' | 'payment_source_added' | 'payment_source_updated' | 'payment_source_deleted' | 'payment_source_expiring' | 'payment_source_expired' | 'payment_source_locally_deleted' | 'virtual_bank_account_added' | 'virtual_bank_account_updated' | 'virtual_bank_account_deleted' | 'token_created' | 'token_consumed' | 'token_expired' | 'unbilled_charges_created' | 'unbilled_charges_voided' | 'unbilled_charges_deleted' | 'unbilled_charges_invoiced' | 'order_created' | 'order_updated' | 'order_cancelled' | 'order_delivered' | 'order_returned' | 'order_ready_to_process' | 'order_ready_to_ship' | 'order_deleted' | 'order_resent' | 'quote_created' | 'quote_updated' | 'quote_deleted' | 'tax_withheld_recorded' | 'tax_withheld_deleted' | 'tax_withheld_refunded' | 'gift_scheduled' | 'gift_unclaimed' | 'gift_claimed' | 'gift_expired' | 'gift_cancelled' | 'gift_updated' | 'hierarchy_created' | 'hierarchy_deleted' | 'payment_intent_created' | 'payment_intent_updated' | 'contract_term_created' | 'contract_term_renewed' | 'contract_term_terminated' | 'contract_term_completed' | 'contract_term_cancelled' | 'item_family_created' | 'item_family_updated' | 'item_family_deleted' | 'item_created' | 'item_updated' | 'item_deleted' | 'item_price_created' | 'item_price_updated' | 'item_price_deleted' | 'attached_item_created' | 'attached_item_updated' | 'attached_item_deleted' | 'differential_price_created' | 'differential_price_updated' | 'differential_price_deleted' | 'feature_created' | 'feature_updated' | 'feature_deleted' | 'feature_activated' | 'feature_reactivated' | 'feature_archived' | 'item_entitlements_updated' | 'entitlement_overrides_updated' | 'entitlement_overrides_removed' | 'item_entitlements_removed' | 'entitlement_overrides_auto_removed' | 'subscription_entitlements_created' | 'subscription_entitlements_updated' | 'business_entity_created' | 'business_entity_updated' | 'business_entity_deleted' | 'customer_business_entity_changed' | 'subscription_business_entity_changed' | 'purchase_created' | 'voucher_created' | 'voucher_expired' | 'voucher_create_failed' | 'item_price_entitlements_updated' | 'item_price_entitlements_removed' | 'subscription_ramp_created' | 'subscription_ramp_deleted' | 'subscription_ramp_applied' | 'subscription_ramp_drafted' | 'subscription_ramp_updated' | 'price_variant_created' | 'price_variant_updated' | 'price_variant_deleted' | 'customer_entitlements_updated' | 'subscription_moved_in' | 'subscription_moved_out' | 'subscription_movement_failed' | 'omnichannel_subscription_created' | 'omnichannel_subscription_item_renewed' | 'omnichannel_subscription_item_downgraded' | 'omnichannel_subscription_item_expired' | 'omnichannel_subscription_item_cancellation_scheduled' | 'omnichannel_subscription_item_scheduled_cancellation_removed' | 'omnichannel_subscription_item_resubscribed' | 'omnichannel_subscription_item_upgraded' | 'omnichannel_subscription_item_cancelled' | 'omnichannel_subscription_imported' | 'omnichannel_subscription_item_grace_period_started' | 'omnichannel_subscription_item_grace_period_expired' | 'omnichannel_subscription_item_dunning_started' | 'omnichannel_subscription_item_dunning_expired' | 'rule_created' | 'rule_updated' | 'rule_deleted' | 'record_purchase_failed' | 'omnichannel_subscription_item_change_scheduled' | 'omnichannel_subscription_item_scheduled_change_removed' | 'omnichannel_subscription_item_reactivated' | 'sales_order_created' | 'sales_order_updated' | 'omnichannel_subscription_item_changed' | 'omnichannel_subscription_item_paused' | 'omnichannel_subscription_item_resumed' | 'omnichannel_one_time_order_created' | 'omnichannel_one_time_order_item_cancelled' | 'usage_file_ingested' | 'omnichannel_subscription_item_pause_scheduled' | 'omnichannel_subscription_moved_in' | 'plan_created' | 'plan_updated' | 'plan_deleted' | 'addon_created' | 'addon_updated' | 'addon_deleted'[];
    }
    export interface RetrieveResponse {  
       webhook_endpoint:WebhookEndpoint;
    }
    
    export interface DeleteResponse {  
       webhook_endpoint:WebhookEndpoint;
    }
    
    export interface ListResponse {  
       list:{webhook_endpoint:WebhookEndpoint}[];
       
       next_offset?:string;
    }
    export interface ListInputParam {
      [key : string]: any;  
      /**
        * @description The number of resources to be returned.

        */
        
      limit?:number;
       
      /**
        * @description Determines your position in the list for pagination. To ensure that the next page is retrieved correctly, always set &#x27;offset&#x27; to the value of &#x27;next_offset&#x27; obtained in the previous iteration of the API call.

        */
        
      offset?:string;
    }
    
  }
}