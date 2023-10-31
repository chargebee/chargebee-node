///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface Event {
    
    /**
      * @description Uniquely identifies a event

      */
    
    id:string;
    
    /**
      * @description Timestamp indicating when this event had occurred.

      */
    
    occurred_at:number;
    
    /**
      * @description Source of the event \* admin_console - Operation made through the Chargebee admin UI \* external_service - Operation that are triggered via webhook \* scheduled_job - Operation made through the Scheduled Jobs \* bulk_operation - Operation that are triggerd through bulk operation. \* hosted_page - Operation made through the Hosted Pages \* portal - Operation made through [Self-Serve Portal](https://www.chargebee.com/docs/2.0/inapp-self-serve-portal.html) \* system - Operation that are triggered by ChargeBee System \* migration - Deprecated \* none - If no source can be identified for an operation \* api - Operation made through the API \* js_api - Operation made through the JS API

      */
    
    source:Source;
    
    /**
      * @description The &quot;user&quot; that triggered the event. The value depends on the &#x60;source&#x60; attribute:  

* When &#x60;source&#x60; is &#x60;admin_console&#x60;: the email address of the user that triggered the event.
* When &#x60;source&#x60; is &#x60;api&#x60;, &#x60;js_api&#x60; or &#x60;bulk_operation&#x60;: the [name](https://www.chargebee.com/docs/api_keys.html#create-an-api-key) of the API key that was used to trigger the event.
* When the &#x60;source&#x60; is &#x60;external_service&#x60;: the name of the service that called our webhook. Eg. &#x60;ADYEN&#x60;, &#x60;STRIPE&#x60;, &#x60;AMAZON_PAYMENTS&#x60; etc.
* When the &#x60;source&#x60; is &#x60;hosted_page&#x60; or &#x60;portal&#x60;: the &#x60;user&#x60; attribute is not passed.

      */
    
    user?:string;
    
    /**
      * @description The types of event provided by chargebee. Refer [event types](#event_types) for all the event types provided by us currently. \* card_deleted - Sent when a card is deleted for a customer \* subscription_cancelled - Sent when the subscription gets cancelled. If cancelled due to non payment or card not present, the subscription will have the possible reason as &#x27;cancel_reason&#x27;. \* customer_changed - Sent when a customer is changed \* invoice_deleted - Event triggered when an invoice is deleted. \* subscription_shipping_address_updated - Triggered when shipping address is added or updated for a subscription. \* differential_price_created - Triggered when a differential price is created \* subscription_created - Sent when a new subscription is created. \* payment_initiated - Sent when a payment is initiated via direct debit \* quote_updated - Triggered when quote is updated \* payment_source_added - Sent when a payment source is added for a customer. \* contract_term_created - Triggered when new contract term is created \* subscription_deleted - Sent when a subscription has been deleted \* differential_price_deleted - Triggered when a differential price is deleted \* voucher_created - Triggered when a payment voucher is created \* transaction_deleted - Triggered when a transaction is deleted. \* item_family_deleted - Triggered when an item family is deleted \* product_updated - Triggered when the product update is completed successfully \* payment_failed - Sent when attempt to charge customer&#x27;s credit card fails \* subscription_reactivated_with_backdating - Sent when the subscription is moved from cancelled state to active or in_trial state with past date \* payment_source_expiring - Sent when the customer&#x27;s payment source is expiring soon. Sent 30 days before the expiry date. \* item_price_updated - Triggered when an item price is updated \* order_ready_to_process - Triggered when order reaches it&#x27;s order date \* entitlement_overrides_updated - Triggered when an override entitlement is updated \* item_updated - Triggered when an item is updated \* coupon_set_updated - Sent when a coupon set is changed \* subscription_reactivated - Sent when the subscription is moved from cancelled state to active or in_trial state \* variant_created - Triggered when product variant create completed successfully \* addon_updated - Sent when a addon is changed. \* subscription_scheduled_changes_removed - Sent when scheduled change for the subscription is removed. \* payment_refunded - Sent when a payment refund is made \* subscription_started - Sent when a &#x27;future&#x27; subscription gets started at the scheduled date. \* attached_item_created - Triggered when an Attached item is created \* token_created - Sent when a Token is created \* item_family_created - Triggered when an item family is created \* subscription_created_with_backdating - Sent when a new subscription is created with backdating. \* unbilled_charges_deleted - Triggered when unbilled charges are deleted \* promotional_credits_added - Sent when a customer prmotion credits added \* subscription_canceled_with_backdating - Sent when the subscription gets cancelled. If cancelled due to non payment or card not present, the subscription will have the possible reason as &#x27;cancel_reason&#x27;. \* item_entitlements_updated - Triggered when item entitlements are updated to a feature \* card_expired - Sent when a card for a customer is expired \* payment_intent_created - Sent when a Payment intent is created \* subscription_changed_with_backdating - Sent after the subscription&#x27;s recurring items have been changed with backdated date \* subscription_scheduled_cancellation_removed - Sent when scheduled cancellation is removed for the subscription. \* feature_updated - Triggered when an feature is updated \* plan_deleted - Sent when a plan is deleted. \* tax_withheld_refunded - Sent when a tax withheld refund is made \* unbilled_charges_voided - Triggered when unbilled charges are voided \* customer_moved_out - Sent when a customer is copied to another site \* feature_created - Triggered when a feature is created. \* coupon_codes_deleted - Sent when coupon codes are deleted in coupon set \* subscription_paused - Sent when the subscription is paused. \* order_updated - Triggered when order is updated \* unbilled_charges_created - Triggered when unbilled charges are created \* feature_archived - Triggered when an feature is archived \* payment_succeeded - Sent when the payment is successfully collected \* voucher_expired - Triggered when a payment voucher is expired \* mrr_updated - Sent when either of MRR or CMRR of a subscription changes \* subscription_scheduled_resumption_removed - Triggered when scheduled resumption is removed for the subscription. \* subscription_changes_scheduled - Sent when subscription changes are scheduled for later. Changes will be applied at the end of current term. \* order_ready_to_ship - Triggered when order reaches it&#x27;s shipping date \* purchase_created - Triggered when purchase action completed successfully \* variant_updated - Triggered when product variant update completed successfully \* variant_deleted - Triggered when product variant delete completed successfully \* subscription_trial_end_reminder - Sent when the customer&#x27;s trial period is about to end. \* feature_activated - Triggered when a feature \&#x60;status\&#x60; transitions to \&#x60;active\&#x60; for the first time. \* subscription_renewed - Sent when the subscription is renewed from the current term. \* plan_created - Sent when a plan is created. \* item_created - Triggered when an item is created \* coupon_codes_updated - Sent when coupon codes are updated \* gift_unclaimed - Triggered when a new gift is unclaimed and is ready to be claimed \* subscription_entitlements_created - Triggered when subscription entitlements are created for a new subscription \* virtual_bank_account_added - Sent when a virtual bank account is added for a customer. \* contract_term_completed - Triggered when contract term is completed \* feature_deleted - Triggered when a feature is deleted \* subscription_renewal_reminder - Sent before each subscription&#x27;s renewal based on plan&#x27;s period \* coupon_updated - Sent when a coupon is changed. \* token_consumed - Sent when a Token is consumed \* transaction_created - Triggered when a transaction is recorded \* customer_deleted - Sent when a customer is deleted \* coupon_deleted - Sent when a coupon is deleted. \* quote_deleted - Triggered when quote is deleted \* card_updated - Sent when the card is updated for a customer. \* coupon_created - Sent when a coupon is created. \* quote_created - Triggered when quote is created \* add_usages_reminder - Sent every month day before renewal date of plan&#x27;s period \* business_entity_updated - Sent when a business entity is updated. \* subscription_changed - Sent after the subscription&#x27;s recurring items have been changed \* customer_created - Sent when a customer is created. This event happens when only a new customer is created or when a customer is automatically created during new subscription creation. \* coupon_set_deleted - Sent when a coupon set is deleted \* refund_initiated - Sent when a refund is initiated via direct debit \* order_cancelled - Triggered when order is cancelled \* entitlement_overrides_removed - Triggered when an override entitlement is removed \* coupon_codes_added - Sent when coupon codes are added in coupon set \* card_added - Sent when a card is added for a customer. \* gift_cancelled - Triggered when a gift is cancelled. \* entitlement_overrides_auto_removed - Triggered when Subscription entitlements overrides for a feature are auto removed after expiry \* payment_source_deleted - Sent when a payment source is deleted for a customer \* credit_note_created - Sent when a credit note is created \* subscription_resumption_scheduled - Triggered when the subscription resumption is scheduled. \* item_price_deleted - Triggered when an item price is deleted \* subscription_advance_invoice_schedule_updated - Triggered when scheduled advance invoice is updated for a subscription. \* item_deleted - Triggered when an item is deleted \* gift_claimed - Triggered when a gift is claimed \* feature_reactivated - Triggered when a feature \&#x60;status\&#x60; transitions to \&#x60;active\&#x60; for the second time or more. \* subscription_activated - Sent after the subscription has been moved from trial to active state \* subscription_resumed - Sent when the subscription is moved from paused state to active state \* credit_note_deleted - Sent when a credit note is deleted \* subscription_advance_invoice_schedule_added - Triggered when advance invoice is scheduled for a subscription. \* differential_price_updated - Triggered when a differential price is updated \* order_deleted - Triggered when order is deleted \* token_expired - Sent when a Token is expired \* transaction_updated - Triggered when a transaction is updated. E.g. (1) When a transaction is removed, (2) or when an excess payment is applied on an invoice, (3) or when amount_capturable gets updated. \* subscription_cancellation_reminder - Sent when the customer&#x27;s subscription is nearing it&#x27;s scheduled cancellation date. \* product_deleted - Triggered when the product delete is completed successfully \* invoice_generated - Event triggered when a new invoice is generated. In case of metered billing, this event is triggered when a &quot;Pending&quot; invoice is closed. \* order_delivered - Triggered when order is marked as delivered \* pending_invoice_created - Event triggered (in the case of metered billing) when a &quot;Pending&quot; invoice is created that has usage related charges or line items to be added, before being closed. This is triggered only when the &quot;Notify for Pending Invoices&quot; option is enabled. \* authorization_succeeded - Triggered when a authorization transaction is created. \* invoice_generated_with_backdating - Event triggered when a new invoice is generated with past date as invoice date. \* subscription_cancellation_scheduled - Sent when subscription is scheduled to cancel at end of current term \* order_created - Triggered when order is created \* hierarchy_deleted - Triggered when a hierarchy is deleted \* subscription_activated_with_backdating - Sent after the subscription changes to \&#x60;active\&#x60; from another \&#x60;status\&#x60;, while the change is backdated. \* plan_updated - Sent when a plan is changed. \* tax_withheld_recorded - Triggered when a tax withheld is recorded for an invoice \* credit_note_created_with_backdating - Sent when a credit note is created with past date as credit note date \* gift_updated - Triggered when a gift is updated \* order_resent - Triggered when order is resent \* hierarchy_created - Triggered when a hierarchy is created \* addon_deleted - Sent when a addon is deleted. \* voucher_create_failed - Triggered when a payment voucher creation is failed \* customer_moved_in - Sent when a customer is copied from another site \* attached_item_deleted - Triggered when an Attached item is deleted \* unbilled_charges_invoiced - Triggered when unbilled charges are invoiced \* subscription_pause_scheduled - Sent when the subscription is scheduled to pause. \* order_returned - Triggered when order is marked as returned \* payment_source_expired - Sent when a payment source for a customer is expired \* contract_term_terminated - Triggered when contract term is terminated \* product_created - Triggered when the product create is completed successfully \* payment_source_updated - Sent when the payment source is updated for a customer or when role is assigned to the payment source. \* pending_invoice_updated - Event triggered when the option &quot;Notify and wait to close invoices&quot; is enabled, and the &#x27;Pending&#x27; invoice is updated. \* subscription_advance_invoice_schedule_removed - Triggered when scheduled advance invoice is removed for a subscription. \* tax_withheld_deleted - Triggered when a tax withheld is deleted \* business_entity_created - Sent when a business entity is created. \* item_price_created - Triggered when an item price is created \* virtual_bank_account_updated - Sent when the virtual bank account is updated for a customer. \* credit_note_updated - Sent when a credit note is updated \* subscription_scheduled_pause_removed - Triggered when scheduled pause is removed for the subscription. \* card_expiry_reminder - Sent when the customer&#x27;s credit card is expiring soon. Sent 30 days before the expiry date. \* coupon_set_created - Sent when a coupon set is created \* virtual_bank_account_deleted - Sent when a virtual bank account is deleted for a customer. \* gift_scheduled - Triggered when a new gift is created \* business_entity_deleted - Sent when a business entity is deleted. \* promotional_credits_deducted - Sent when a customer prmotion credits deducted \* contract_term_renewed - Triggered when new contract term is renewed \* subscription_trial_extended - Trial Extension \* item_entitlements_removed - Triggered when item entitlements are removed for a feature \* gift_expired - Triggered when a gift expires \* contract_term_cancelled - Triggered when contract term is cancelled \* authorization_voided - Triggered when a authorization transaction is voided. Authorization can be voided either manually or when blocked funds are released by the gateway after a certain period of time. \* item_family_updated - Triggered when an item family is updated \* addon_created - Sent when a addon is created. \* attached_item_updated - Triggered when an Attached item is updated \* invoice_updated - Triggered when the invoice&#x27;s shipping/billing address is updated, if the invoice is voided, or when the amount due is modified due to payments applied/removed. \* payment_intent_updated - Sent when a Payment intent is updated \* payment_source_locally_deleted - Sent when a payment source for a customer removed from Chargebee

      */
    
    event_type?:EventType;
    
    /**
      * @description The Chargebee API Version used for rendering this event content. While processing webhooks, ensure this version is same as the API version used by your webhook server&#x27;s client library. \* v1 - Chargebee API version V1 \* v2 - Chargebee API version V2

      */
    
    api_version?:ApiVersion;
    
    /**
      * @description The JSON data associated with this event. Has resources (*subscription* , *invoice* etc) based on the [event type](#event_types). These resources are structured based on the Chargebee API version indicated by the *api_version* attribute.

      */
    
    content:object;
    
    /**
      * @description Array of webhook call statuses: one for each of the webhooks configured for the site. This object is only available after the first webhook call for the event has completed or timed out. Also, creation/updation of the &#x60;webhook&#x60; object data is a queued operation and hence there can be an additional delay of up to 5 seconds.

      */
    
    webhooks?:Event.Webhook[];
  }
  export namespace Event {
    export class EventResource {  
      /**
        * @description Retrieves list of events.


        */
      
      list(input?:ListInputParam):ChargebeeRequest<ListResponse>;
       
      /**
        * @description Retrieves a specific event identified by a unique event identifier.

**Note:** Only events that are less than 90 days old will be retrieved.

        */
      
      retrieve(event_id:string):ChargebeeRequest<RetrieveResponse>;
    }
    export interface ListResponse {  
      /**
        * @description Retrieves list of events.


        */
       
       list:{event:Event}[];
       
      /**
        * @description Retrieves list of events.


        */
       
       next_offset?:string;
    }
    export interface ListInputParam {
      [key : string]: any;  
      /**
        * @description Retrieves list of events.


        */
        
      limit?:number;
       
      /**
        * @description Retrieves list of events.


        */
        
      offset?:string;
       
      /**
        * @description Retrieves list of events.


        */
        
      id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description Retrieves list of events.


        */
        
      webhook_status?:{in?:string,is?:'not_configured' | 're_scheduled' | 'scheduled' | 'failed' | 'not_applicable' | 'succeeded' | 'skipped',is_not?:'not_configured' | 're_scheduled' | 'scheduled' | 'failed' | 'not_applicable' | 'succeeded' | 'skipped',not_in?:string};
       
      /**
        * @description Retrieves list of events.


        */
        
      event_type?:{in?:string,is?:'subscription_pause_scheduled' | 'order_delivered' | 'subscription_advance_invoice_schedule_added' | 'gift_expired' | 'tax_withheld_deleted' | 'coupon_codes_added' | 'unbilled_charges_deleted' | 'gift_cancelled' | 'coupon_updated' | 'order_cancelled' | 'coupon_deleted' | 'product_updated' | 'subscription_scheduled_changes_removed' | 'pending_invoice_created' | 'product_deleted' | 'entitlement_overrides_auto_removed' | 'unbilled_charges_created' | 'subscription_resumed' | 'subscription_cancelled' | 'item_entitlements_removed' | 'business_entity_created' | 'payment_source_deleted' | 'quote_deleted' | 'invoice_updated' | 'coupon_set_updated' | 'differential_price_updated' | 'subscription_advance_invoice_schedule_removed' | 'entitlement_overrides_removed' | 'subscription_activated_with_backdating' | 'card_deleted' | 'order_ready_to_ship' | 'subscription_trial_end_reminder' | 'subscription_shipping_address_updated' | 'variant_updated' | 'voucher_create_failed' | 'gift_claimed' | 'business_entity_updated' | 'subscription_scheduled_resumption_removed' | 'payment_initiated' | 'feature_archived' | 'subscription_reactivated_with_backdating' | 'customer_deleted' | 'token_expired' | 'card_added' | 'coupon_created' | 'refund_initiated' | 'invoice_generated_with_backdating' | 'add_usages_reminder' | 'item_price_deleted' | 'virtual_bank_account_deleted' | 'subscription_created' | 'voucher_created' | 'feature_activated' | 'subscription_entitlements_created' | 'payment_source_locally_deleted' | 'order_returned' | 'subscription_deleted' | 'invoice_generated' | 'voucher_expired' | 'authorization_succeeded' | 'payment_source_added' | 'gift_scheduled' | 'item_price_created' | 'subscription_changes_scheduled' | 'subscription_changed_with_backdating' | 'variant_created' | 'subscription_scheduled_cancellation_removed' | 'payment_refunded' | 'gift_unclaimed' | 'product_created' | 'differential_price_created' | 'virtual_bank_account_added' | 'payment_intent_created' | 'transaction_created' | 'credit_note_created_with_backdating' | 'contract_term_terminated' | 'item_family_updated' | 'order_created' | 'payment_succeeded' | 'plan_deleted' | 'subscription_canceled_with_backdating' | 'unbilled_charges_voided' | 'quote_created' | 'customer_moved_in' | 'coupon_set_deleted' | 'subscription_advance_invoice_schedule_updated' | 'attached_item_created' | 'customer_changed' | 'subscription_started' | 'item_deleted' | 'subscription_activated' | 'payment_source_expiring' | 'subscription_reactivated' | 'order_updated' | 'subscription_scheduled_pause_removed' | 'subscription_cancellation_reminder' | 'addon_deleted' | 'subscription_created_with_backdating' | 'order_deleted' | 'item_entitlements_updated' | 'token_consumed' | 'addon_updated' | 'hierarchy_deleted' | 'subscription_cancellation_scheduled' | 'gift_updated' | 'subscription_trial_extended' | 'subscription_renewed' | 'feature_updated' | 'addon_created' | 'feature_deleted' | 'item_family_created' | 'card_expiry_reminder' | 'token_created' | 'purchase_created' | 'plan_created' | 'entitlement_overrides_updated' | 'plan_updated' | 'promotional_credits_added' | 'item_family_deleted' | 'subscription_resumption_scheduled' | 'feature_reactivated' | 'coupon_codes_deleted' | 'card_expired' | 'credit_note_updated' | 'promotional_credits_deducted' | 'payment_source_expired' | 'customer_moved_out' | 'subscription_paused' | 'order_ready_to_process' | 'feature_created' | 'hierarchy_created' | 'attached_item_deleted' | 'transaction_deleted' | 'credit_note_created' | 'item_updated' | 'item_created' | 'coupon_set_created' | 'transaction_updated' | 'payment_intent_updated' | 'variant_deleted' | 'mrr_updated' | 'order_resent' | 'unbilled_charges_invoiced' | 'tax_withheld_recorded' | 'item_price_updated' | 'differential_price_deleted' | 'coupon_codes_updated' | 'virtual_bank_account_updated' | 'contract_term_created' | 'subscription_changed' | 'contract_term_cancelled' | 'contract_term_renewed' | 'invoice_deleted' | 'payment_failed' | 'credit_note_deleted' | 'tax_withheld_refunded' | 'contract_term_completed' | 'card_updated' | 'customer_created' | 'pending_invoice_updated' | 'quote_updated' | 'subscription_renewal_reminder' | 'attached_item_updated' | 'payment_source_updated' | 'business_entity_deleted' | 'authorization_voided',is_not?:'subscription_pause_scheduled' | 'order_delivered' | 'subscription_advance_invoice_schedule_added' | 'gift_expired' | 'tax_withheld_deleted' | 'coupon_codes_added' | 'unbilled_charges_deleted' | 'gift_cancelled' | 'coupon_updated' | 'order_cancelled' | 'coupon_deleted' | 'product_updated' | 'subscription_scheduled_changes_removed' | 'pending_invoice_created' | 'product_deleted' | 'entitlement_overrides_auto_removed' | 'unbilled_charges_created' | 'subscription_resumed' | 'subscription_cancelled' | 'item_entitlements_removed' | 'business_entity_created' | 'payment_source_deleted' | 'quote_deleted' | 'invoice_updated' | 'coupon_set_updated' | 'differential_price_updated' | 'subscription_advance_invoice_schedule_removed' | 'entitlement_overrides_removed' | 'subscription_activated_with_backdating' | 'card_deleted' | 'order_ready_to_ship' | 'subscription_trial_end_reminder' | 'subscription_shipping_address_updated' | 'variant_updated' | 'voucher_create_failed' | 'gift_claimed' | 'business_entity_updated' | 'subscription_scheduled_resumption_removed' | 'payment_initiated' | 'feature_archived' | 'subscription_reactivated_with_backdating' | 'customer_deleted' | 'token_expired' | 'card_added' | 'coupon_created' | 'refund_initiated' | 'invoice_generated_with_backdating' | 'add_usages_reminder' | 'item_price_deleted' | 'virtual_bank_account_deleted' | 'subscription_created' | 'voucher_created' | 'feature_activated' | 'subscription_entitlements_created' | 'payment_source_locally_deleted' | 'order_returned' | 'subscription_deleted' | 'invoice_generated' | 'voucher_expired' | 'authorization_succeeded' | 'payment_source_added' | 'gift_scheduled' | 'item_price_created' | 'subscription_changes_scheduled' | 'subscription_changed_with_backdating' | 'variant_created' | 'subscription_scheduled_cancellation_removed' | 'payment_refunded' | 'gift_unclaimed' | 'product_created' | 'differential_price_created' | 'virtual_bank_account_added' | 'payment_intent_created' | 'transaction_created' | 'credit_note_created_with_backdating' | 'contract_term_terminated' | 'item_family_updated' | 'order_created' | 'payment_succeeded' | 'plan_deleted' | 'subscription_canceled_with_backdating' | 'unbilled_charges_voided' | 'quote_created' | 'customer_moved_in' | 'coupon_set_deleted' | 'subscription_advance_invoice_schedule_updated' | 'attached_item_created' | 'customer_changed' | 'subscription_started' | 'item_deleted' | 'subscription_activated' | 'payment_source_expiring' | 'subscription_reactivated' | 'order_updated' | 'subscription_scheduled_pause_removed' | 'subscription_cancellation_reminder' | 'addon_deleted' | 'subscription_created_with_backdating' | 'order_deleted' | 'item_entitlements_updated' | 'token_consumed' | 'addon_updated' | 'hierarchy_deleted' | 'subscription_cancellation_scheduled' | 'gift_updated' | 'subscription_trial_extended' | 'subscription_renewed' | 'feature_updated' | 'addon_created' | 'feature_deleted' | 'item_family_created' | 'card_expiry_reminder' | 'token_created' | 'purchase_created' | 'plan_created' | 'entitlement_overrides_updated' | 'plan_updated' | 'promotional_credits_added' | 'item_family_deleted' | 'subscription_resumption_scheduled' | 'feature_reactivated' | 'coupon_codes_deleted' | 'card_expired' | 'credit_note_updated' | 'promotional_credits_deducted' | 'payment_source_expired' | 'customer_moved_out' | 'subscription_paused' | 'order_ready_to_process' | 'feature_created' | 'hierarchy_created' | 'attached_item_deleted' | 'transaction_deleted' | 'credit_note_created' | 'item_updated' | 'item_created' | 'coupon_set_created' | 'transaction_updated' | 'payment_intent_updated' | 'variant_deleted' | 'mrr_updated' | 'order_resent' | 'unbilled_charges_invoiced' | 'tax_withheld_recorded' | 'item_price_updated' | 'differential_price_deleted' | 'coupon_codes_updated' | 'virtual_bank_account_updated' | 'contract_term_created' | 'subscription_changed' | 'contract_term_cancelled' | 'contract_term_renewed' | 'invoice_deleted' | 'payment_failed' | 'credit_note_deleted' | 'tax_withheld_refunded' | 'contract_term_completed' | 'card_updated' | 'customer_created' | 'pending_invoice_updated' | 'quote_updated' | 'subscription_renewal_reminder' | 'attached_item_updated' | 'payment_source_updated' | 'business_entity_deleted' | 'authorization_voided',not_in?:string};
       
      /**
        * @description Retrieves list of events.


        */
        
      source?:{in?:string,is?:'admin_console' | 'system' | 'scheduled_job' | 'js_api' | 'bulk_operation' | 'hosted_page' | 'migration' | 'api' | 'none' | 'portal' | 'external_service',is_not?:'admin_console' | 'system' | 'scheduled_job' | 'js_api' | 'bulk_operation' | 'hosted_page' | 'migration' | 'api' | 'none' | 'portal' | 'external_service',not_in?:string};
       
      /**
        * @description Retrieves list of events.


        */
        
      occurred_at?:{after?:string,before?:string,between?:string,on?:string};
       
      /**
        * @description Retrieves list of events.


        */
        
      sort_by?:{asc?:'occurred_at',desc?:'occurred_at'};
    }
    export interface RetrieveResponse {  
       event:Event;
    }
    
    export interface Webhook {  
         /**
          * @description Uniquely identifies a webhook

          */
       
      id:string;
       
         /**
          * @description * **When the event resource is retrieved via API:** Represents the status of the webhook call made to this webhook.
* **When the event resource is passed as part of a webhook call:** The &#x60;webhooks&#x60; object is unavailable on the first webhook call for the event. For subsequent calls, this attribute holds the status from after the last retry.
\* failed - Webhook call has been suspended after the all retries have resulted in failure. \* succeeded - Webhook call was successful. \* scheduled - Webhook call has been scheduled. \* re_scheduled - Webhook call has been rescheduled due failure(s) in previous call(s) \* not_applicable - Webhook call is not applicable for this event. \* skipped - Skipped as specified in request \* not_configured - Webhook was not configured when this event occurred

          */
       
      webhook_status:'not_configured' | 're_scheduled' | 'scheduled' | 'failed' | 'not_applicable' | 'succeeded' | 'skipped';
    }
  }
}