export enum EventType {
  ADD_USAGES_REMINDER = 'add_usages_reminder',

  ADDON_CREATED = 'addon_created',

  ADDON_DELETED = 'addon_deleted',

  ADDON_UPDATED = 'addon_updated',

  ATTACHED_ITEM_CREATED = 'attached_item_created',

  ATTACHED_ITEM_DELETED = 'attached_item_deleted',

  ATTACHED_ITEM_UPDATED = 'attached_item_updated',

  AUTHORIZATION_SUCCEEDED = 'authorization_succeeded',

  AUTHORIZATION_VOIDED = 'authorization_voided',

  BUSINESS_ENTITY_CREATED = 'business_entity_created',

  BUSINESS_ENTITY_DELETED = 'business_entity_deleted',

  BUSINESS_ENTITY_UPDATED = 'business_entity_updated',

  CARD_ADDED = 'card_added',

  CARD_DELETED = 'card_deleted',

  CARD_EXPIRED = 'card_expired',

  CARD_EXPIRY_REMINDER = 'card_expiry_reminder',

  CARD_UPDATED = 'card_updated',

  CONTRACT_TERM_CANCELLED = 'contract_term_cancelled',

  CONTRACT_TERM_COMPLETED = 'contract_term_completed',

  CONTRACT_TERM_CREATED = 'contract_term_created',

  CONTRACT_TERM_RENEWED = 'contract_term_renewed',

  CONTRACT_TERM_TERMINATED = 'contract_term_terminated',

  COUPON_CODES_ADDED = 'coupon_codes_added',

  COUPON_CODES_DELETED = 'coupon_codes_deleted',

  COUPON_CODES_UPDATED = 'coupon_codes_updated',

  COUPON_CREATED = 'coupon_created',

  COUPON_DELETED = 'coupon_deleted',

  COUPON_SET_CREATED = 'coupon_set_created',

  COUPON_SET_DELETED = 'coupon_set_deleted',

  COUPON_SET_UPDATED = 'coupon_set_updated',

  COUPON_UPDATED = 'coupon_updated',

  CREDIT_NOTE_CREATED = 'credit_note_created',

  CREDIT_NOTE_CREATED_WITH_BACKDATING = 'credit_note_created_with_backdating',

  CREDIT_NOTE_DELETED = 'credit_note_deleted',

  CREDIT_NOTE_UPDATED = 'credit_note_updated',

  CUSTOMER_BUSINESS_ENTITY_CHANGED = 'customer_business_entity_changed',

  CUSTOMER_CHANGED = 'customer_changed',

  CUSTOMER_CREATED = 'customer_created',

  CUSTOMER_DELETED = 'customer_deleted',

  CUSTOMER_ENTITLEMENTS_UPDATED = 'customer_entitlements_updated',

  CUSTOMER_MOVED_IN = 'customer_moved_in',

  CUSTOMER_MOVED_OUT = 'customer_moved_out',

  DIFFERENTIAL_PRICE_CREATED = 'differential_price_created',

  DIFFERENTIAL_PRICE_DELETED = 'differential_price_deleted',

  DIFFERENTIAL_PRICE_UPDATED = 'differential_price_updated',

  DUNNING_UPDATED = 'dunning_updated',

  ENTITLEMENT_OVERRIDES_AUTO_REMOVED = 'entitlement_overrides_auto_removed',

  ENTITLEMENT_OVERRIDES_REMOVED = 'entitlement_overrides_removed',

  ENTITLEMENT_OVERRIDES_UPDATED = 'entitlement_overrides_updated',

  FEATURE_ACTIVATED = 'feature_activated',

  FEATURE_ARCHIVED = 'feature_archived',

  FEATURE_CREATED = 'feature_created',

  FEATURE_DELETED = 'feature_deleted',

  FEATURE_REACTIVATED = 'feature_reactivated',

  FEATURE_UPDATED = 'feature_updated',

  GIFT_CANCELLED = 'gift_cancelled',

  GIFT_CLAIMED = 'gift_claimed',

  GIFT_EXPIRED = 'gift_expired',

  GIFT_SCHEDULED = 'gift_scheduled',

  GIFT_UNCLAIMED = 'gift_unclaimed',

  GIFT_UPDATED = 'gift_updated',

  HIERARCHY_CREATED = 'hierarchy_created',

  HIERARCHY_DELETED = 'hierarchy_deleted',

  INVOICE_DELETED = 'invoice_deleted',

  INVOICE_GENERATED = 'invoice_generated',

  INVOICE_GENERATED_WITH_BACKDATING = 'invoice_generated_with_backdating',

  INVOICE_UPDATED = 'invoice_updated',

  ITEM_CREATED = 'item_created',

  ITEM_DELETED = 'item_deleted',

  ITEM_ENTITLEMENTS_REMOVED = 'item_entitlements_removed',

  ITEM_ENTITLEMENTS_UPDATED = 'item_entitlements_updated',

  ITEM_FAMILY_CREATED = 'item_family_created',

  ITEM_FAMILY_DELETED = 'item_family_deleted',

  ITEM_FAMILY_UPDATED = 'item_family_updated',

  ITEM_PRICE_CREATED = 'item_price_created',

  ITEM_PRICE_DELETED = 'item_price_deleted',

  ITEM_PRICE_ENTITLEMENTS_REMOVED = 'item_price_entitlements_removed',

  ITEM_PRICE_ENTITLEMENTS_UPDATED = 'item_price_entitlements_updated',

  ITEM_PRICE_UPDATED = 'item_price_updated',

  ITEM_UPDATED = 'item_updated',

  MRR_UPDATED = 'mrr_updated',

  NETD_PAYMENT_DUE_REMINDER = 'netd_payment_due_reminder',

  OMNICHANNEL_ONE_TIME_ORDER_CREATED = 'omnichannel_one_time_order_created',

  OMNICHANNEL_ONE_TIME_ORDER_ITEM_CANCELLED = 'omnichannel_one_time_order_item_cancelled',

  OMNICHANNEL_SUBSCRIPTION_CREATED = 'omnichannel_subscription_created',

  OMNICHANNEL_SUBSCRIPTION_IMPORTED = 'omnichannel_subscription_imported',

  OMNICHANNEL_SUBSCRIPTION_ITEM_CANCELLATION_SCHEDULED = 'omnichannel_subscription_item_cancellation_scheduled',

  OMNICHANNEL_SUBSCRIPTION_ITEM_CANCELLED = 'omnichannel_subscription_item_cancelled',

  OMNICHANNEL_SUBSCRIPTION_ITEM_CHANGE_SCHEDULED = 'omnichannel_subscription_item_change_scheduled',

  OMNICHANNEL_SUBSCRIPTION_ITEM_CHANGED = 'omnichannel_subscription_item_changed',

  OMNICHANNEL_SUBSCRIPTION_ITEM_DOWNGRADE_SCHEDULED = 'omnichannel_subscription_item_downgrade_scheduled',

  OMNICHANNEL_SUBSCRIPTION_ITEM_DOWNGRADED = 'omnichannel_subscription_item_downgraded',

  OMNICHANNEL_SUBSCRIPTION_ITEM_DUNNING_EXPIRED = 'omnichannel_subscription_item_dunning_expired',

  OMNICHANNEL_SUBSCRIPTION_ITEM_DUNNING_STARTED = 'omnichannel_subscription_item_dunning_started',

  OMNICHANNEL_SUBSCRIPTION_ITEM_EXPIRED = 'omnichannel_subscription_item_expired',

  OMNICHANNEL_SUBSCRIPTION_ITEM_GRACE_PERIOD_EXPIRED = 'omnichannel_subscription_item_grace_period_expired',

  OMNICHANNEL_SUBSCRIPTION_ITEM_GRACE_PERIOD_STARTED = 'omnichannel_subscription_item_grace_period_started',

  OMNICHANNEL_SUBSCRIPTION_ITEM_PAUSE_SCHEDULED = 'omnichannel_subscription_item_pause_scheduled',

  OMNICHANNEL_SUBSCRIPTION_ITEM_PAUSED = 'omnichannel_subscription_item_paused',

  OMNICHANNEL_SUBSCRIPTION_ITEM_REACTIVATED = 'omnichannel_subscription_item_reactivated',

  OMNICHANNEL_SUBSCRIPTION_ITEM_RENEWED = 'omnichannel_subscription_item_renewed',

  OMNICHANNEL_SUBSCRIPTION_ITEM_RESUBSCRIBED = 'omnichannel_subscription_item_resubscribed',

  OMNICHANNEL_SUBSCRIPTION_ITEM_RESUMED = 'omnichannel_subscription_item_resumed',

  OMNICHANNEL_SUBSCRIPTION_ITEM_SCHEDULED_CANCELLATION_REMOVED = 'omnichannel_subscription_item_scheduled_cancellation_removed',

  OMNICHANNEL_SUBSCRIPTION_ITEM_SCHEDULED_CHANGE_REMOVED = 'omnichannel_subscription_item_scheduled_change_removed',

  OMNICHANNEL_SUBSCRIPTION_ITEM_SCHEDULED_DOWNGRADE_REMOVED = 'omnichannel_subscription_item_scheduled_downgrade_removed',

  OMNICHANNEL_SUBSCRIPTION_ITEM_UPGRADED = 'omnichannel_subscription_item_upgraded',

  OMNICHANNEL_SUBSCRIPTION_MOVED_IN = 'omnichannel_subscription_moved_in',

  OMNICHANNEL_TRANSACTION_CREATED = 'omnichannel_transaction_created',

  ORDER_CANCELLED = 'order_cancelled',

  ORDER_CREATED = 'order_created',

  ORDER_DELETED = 'order_deleted',

  ORDER_DELIVERED = 'order_delivered',

  ORDER_READY_TO_PROCESS = 'order_ready_to_process',

  ORDER_READY_TO_SHIP = 'order_ready_to_ship',

  ORDER_RESENT = 'order_resent',

  ORDER_RETURNED = 'order_returned',

  ORDER_UPDATED = 'order_updated',

  PAYMENT_FAILED = 'payment_failed',

  PAYMENT_INITIATED = 'payment_initiated',

  PAYMENT_INTENT_CREATED = 'payment_intent_created',

  PAYMENT_INTENT_UPDATED = 'payment_intent_updated',

  PAYMENT_REFUNDED = 'payment_refunded',

  PAYMENT_SCHEDULE_SCHEME_CREATED = 'payment_schedule_scheme_created',

  PAYMENT_SCHEDULE_SCHEME_DELETED = 'payment_schedule_scheme_deleted',

  PAYMENT_SCHEDULES_CREATED = 'payment_schedules_created',

  PAYMENT_SCHEDULES_UPDATED = 'payment_schedules_updated',

  PAYMENT_SOURCE_ADDED = 'payment_source_added',

  PAYMENT_SOURCE_DELETED = 'payment_source_deleted',

  PAYMENT_SOURCE_EXPIRED = 'payment_source_expired',

  PAYMENT_SOURCE_EXPIRING = 'payment_source_expiring',

  PAYMENT_SOURCE_LOCALLY_DELETED = 'payment_source_locally_deleted',

  PAYMENT_SOURCE_UPDATED = 'payment_source_updated',

  PAYMENT_SUCCEEDED = 'payment_succeeded',

  PENDING_INVOICE_CREATED = 'pending_invoice_created',

  PENDING_INVOICE_UPDATED = 'pending_invoice_updated',

  PLAN_CREATED = 'plan_created',

  PLAN_DELETED = 'plan_deleted',

  PLAN_UPDATED = 'plan_updated',

  PRICE_VARIANT_CREATED = 'price_variant_created',

  PRICE_VARIANT_DELETED = 'price_variant_deleted',

  PRICE_VARIANT_UPDATED = 'price_variant_updated',

  PRODUCT_CREATED = 'product_created',

  PRODUCT_DELETED = 'product_deleted',

  PRODUCT_UPDATED = 'product_updated',

  PROMOTIONAL_CREDITS_ADDED = 'promotional_credits_added',

  PROMOTIONAL_CREDITS_DEDUCTED = 'promotional_credits_deducted',

  PURCHASE_CREATED = 'purchase_created',

  QUOTE_CREATED = 'quote_created',

  QUOTE_DELETED = 'quote_deleted',

  QUOTE_UPDATED = 'quote_updated',

  RECORD_PURCHASE_FAILED = 'record_purchase_failed',

  REFUND_INITIATED = 'refund_initiated',

  RULE_CREATED = 'rule_created',

  RULE_DELETED = 'rule_deleted',

  RULE_UPDATED = 'rule_updated',

  SALES_ORDER_CREATED = 'sales_order_created',

  SALES_ORDER_UPDATED = 'sales_order_updated',

  SUBSCRIPTION_ACTIVATED = 'subscription_activated',

  SUBSCRIPTION_ACTIVATED_WITH_BACKDATING = 'subscription_activated_with_backdating',

  SUBSCRIPTION_ADVANCE_INVOICE_SCHEDULE_ADDED = 'subscription_advance_invoice_schedule_added',

  SUBSCRIPTION_ADVANCE_INVOICE_SCHEDULE_REMOVED = 'subscription_advance_invoice_schedule_removed',

  SUBSCRIPTION_ADVANCE_INVOICE_SCHEDULE_UPDATED = 'subscription_advance_invoice_schedule_updated',

  SUBSCRIPTION_BUSINESS_ENTITY_CHANGED = 'subscription_business_entity_changed',

  SUBSCRIPTION_CANCELED_WITH_BACKDATING = 'subscription_canceled_with_backdating',

  SUBSCRIPTION_CANCELLATION_REMINDER = 'subscription_cancellation_reminder',

  SUBSCRIPTION_CANCELLATION_SCHEDULED = 'subscription_cancellation_scheduled',

  SUBSCRIPTION_CANCELLED = 'subscription_cancelled',

  SUBSCRIPTION_CHANGED = 'subscription_changed',

  SUBSCRIPTION_CHANGED_WITH_BACKDATING = 'subscription_changed_with_backdating',

  SUBSCRIPTION_CHANGES_SCHEDULED = 'subscription_changes_scheduled',

  SUBSCRIPTION_CREATED = 'subscription_created',

  SUBSCRIPTION_CREATED_WITH_BACKDATING = 'subscription_created_with_backdating',

  SUBSCRIPTION_DELETED = 'subscription_deleted',

  SUBSCRIPTION_ENTITLEMENTS_CREATED = 'subscription_entitlements_created',

  SUBSCRIPTION_ENTITLEMENTS_UPDATED = 'subscription_entitlements_updated',

  SUBSCRIPTION_ITEMS_RENEWED = 'subscription_items_renewed',

  SUBSCRIPTION_MOVED_IN = 'subscription_moved_in',

  SUBSCRIPTION_MOVED_OUT = 'subscription_moved_out',

  SUBSCRIPTION_MOVEMENT_FAILED = 'subscription_movement_failed',

  SUBSCRIPTION_PAUSE_SCHEDULED = 'subscription_pause_scheduled',

  SUBSCRIPTION_PAUSED = 'subscription_paused',

  SUBSCRIPTION_RAMP_APPLIED = 'subscription_ramp_applied',

  SUBSCRIPTION_RAMP_CREATED = 'subscription_ramp_created',

  SUBSCRIPTION_RAMP_DELETED = 'subscription_ramp_deleted',

  SUBSCRIPTION_RAMP_DRAFTED = 'subscription_ramp_drafted',

  SUBSCRIPTION_RAMP_UPDATED = 'subscription_ramp_updated',

  SUBSCRIPTION_REACTIVATED = 'subscription_reactivated',

  SUBSCRIPTION_REACTIVATED_WITH_BACKDATING = 'subscription_reactivated_with_backdating',

  SUBSCRIPTION_RENEWAL_REMINDER = 'subscription_renewal_reminder',

  SUBSCRIPTION_RENEWED = 'subscription_renewed',

  SUBSCRIPTION_RESUMED = 'subscription_resumed',

  SUBSCRIPTION_RESUMPTION_SCHEDULED = 'subscription_resumption_scheduled',

  SUBSCRIPTION_SCHEDULED_CANCELLATION_REMOVED = 'subscription_scheduled_cancellation_removed',

  SUBSCRIPTION_SCHEDULED_CHANGES_REMOVED = 'subscription_scheduled_changes_removed',

  SUBSCRIPTION_SCHEDULED_PAUSE_REMOVED = 'subscription_scheduled_pause_removed',

  SUBSCRIPTION_SCHEDULED_RESUMPTION_REMOVED = 'subscription_scheduled_resumption_removed',

  SUBSCRIPTION_SHIPPING_ADDRESS_UPDATED = 'subscription_shipping_address_updated',

  SUBSCRIPTION_STARTED = 'subscription_started',

  SUBSCRIPTION_TRIAL_END_REMINDER = 'subscription_trial_end_reminder',

  SUBSCRIPTION_TRIAL_EXTENDED = 'subscription_trial_extended',

  TAX_WITHHELD_DELETED = 'tax_withheld_deleted',

  TAX_WITHHELD_RECORDED = 'tax_withheld_recorded',

  TAX_WITHHELD_REFUNDED = 'tax_withheld_refunded',

  TOKEN_CONSUMED = 'token_consumed',

  TOKEN_CREATED = 'token_created',

  TOKEN_EXPIRED = 'token_expired',

  TRANSACTION_CREATED = 'transaction_created',

  TRANSACTION_DELETED = 'transaction_deleted',

  TRANSACTION_UPDATED = 'transaction_updated',

  UNBILLED_CHARGES_CREATED = 'unbilled_charges_created',

  UNBILLED_CHARGES_DELETED = 'unbilled_charges_deleted',

  UNBILLED_CHARGES_INVOICED = 'unbilled_charges_invoiced',

  UNBILLED_CHARGES_VOIDED = 'unbilled_charges_voided',

  USAGE_FILE_INGESTED = 'usage_file_ingested',

  VARIANT_CREATED = 'variant_created',

  VARIANT_DELETED = 'variant_deleted',

  VARIANT_UPDATED = 'variant_updated',

  VIRTUAL_BANK_ACCOUNT_ADDED = 'virtual_bank_account_added',

  VIRTUAL_BANK_ACCOUNT_DELETED = 'virtual_bank_account_deleted',

  VIRTUAL_BANK_ACCOUNT_UPDATED = 'virtual_bank_account_updated',

  VOUCHER_CREATE_FAILED = 'voucher_create_failed',

  VOUCHER_CREATED = 'voucher_created',

  VOUCHER_EXPIRED = 'voucher_expired',
}
