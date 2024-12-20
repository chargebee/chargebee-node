type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';
type EndpointTuple = [
  action: string,
  method: Method,
  urlPrefix: string,
  urlSuffix: string | null,
  hasPathParameters: boolean,
];
interface Endpoints {
  subscription: EndpointTuple[];
  contractTerm: EndpointTuple[];
  discount: EndpointTuple[];
  advanceInvoiceSchedule: EndpointTuple[];
  customer: EndpointTuple[];
  hierarchy: EndpointTuple[];
  contact: EndpointTuple[];
  businessEntityTransfer: EndpointTuple[];
  token: EndpointTuple[];
  paymentSource: EndpointTuple[];
  thirdPartyPaymentMethod: EndpointTuple[];
  virtualBankAccount: EndpointTuple[];
  card: EndpointTuple[];
  promotionalCredit: EndpointTuple[];
  invoice: EndpointTuple[];
  paymentReferenceNumber: EndpointTuple[];
  paymentSchedule: EndpointTuple[];
  taxWithheld: EndpointTuple[];
  creditNote: EndpointTuple[];
  unbilledCharge: EndpointTuple[];
  order: EndpointTuple[];
  gift: EndpointTuple[];
  transaction: EndpointTuple[];
  hostedPage: EndpointTuple[];
  estimate: EndpointTuple[];
  quote: EndpointTuple[];
  quotedSubscription: EndpointTuple[];
  quotedCharge: EndpointTuple[];
  quoteLineGroup: EndpointTuple[];
  plan: EndpointTuple[];
  addon: EndpointTuple[];
  coupon: EndpointTuple[];
  couponSet: EndpointTuple[];
  couponCode: EndpointTuple[];
  address: EndpointTuple[];
  usage: EndpointTuple[];
  event: EndpointTuple[];
  comment: EndpointTuple[];
  download: EndpointTuple[];
  portalSession: EndpointTuple[];
  siteMigrationDetail: EndpointTuple[];
  resourceMigration: EndpointTuple[];
  timeMachine: EndpointTuple[];
  export: EndpointTuple[];
  paymentIntent: EndpointTuple[];
  gatewayErrorDetail: EndpointTuple[];
  itemFamily: EndpointTuple[];
  item: EndpointTuple[];
  priceVariant: EndpointTuple[];
  attribute: EndpointTuple[];
  itemPrice: EndpointTuple[];
  attachedItem: EndpointTuple[];
  differentialPrice: EndpointTuple[];
  configuration: EndpointTuple[];
  feature: EndpointTuple[];
  impactedSubscription: EndpointTuple[];
  impactedItem: EndpointTuple[];
  impactedItemPrice: EndpointTuple[];
  metadata: EndpointTuple[];
  subscriptionEntitlement: EndpointTuple[];
  customerEntitlement: EndpointTuple[];
  itemEntitlement: EndpointTuple[];
  entitlement: EndpointTuple[];
  inAppSubscription: EndpointTuple[];
  nonSubscription: EndpointTuple[];
  entitlementOverride: EndpointTuple[];
  businessEntity: EndpointTuple[];
  purchase: EndpointTuple[];
  paymentVoucher: EndpointTuple[];
  currency: EndpointTuple[];
  ramp: EndpointTuple[];
  paymentScheduleScheme: EndpointTuple[];
  pricingPageSession: EndpointTuple[];
  omnichannelSubscription: EndpointTuple[];
  omnichannelTransaction: EndpointTuple[];
  omnichannelSubscriptionItem: EndpointTuple[];
  recordedPurchase: EndpointTuple[];
}
export const Endpoints: Endpoints = {
  subscription: [
    ['create', 'POST', '/subscriptions', null, false],
    ['createForCustomer', 'POST', '/customers', '/subscriptions', true],
    ['createWithItems', 'POST', '/customers', '/subscription_for_items', true],
    ['list', 'GET', '/subscriptions', null, false],
    ['subscriptionsForCustomer', 'GET', '/customers', '/subscriptions', true],
    [
      'contractTermsForSubscription',
      'GET',
      '/subscriptions',
      '/contract_terms',
      true,
    ],
    ['listDiscounts', 'GET', '/subscriptions', '/discounts', true],
    ['retrieve', 'GET', '/subscriptions', null, true],
    [
      'retrieveWithScheduledChanges',
      'GET',
      '/subscriptions',
      '/retrieve_with_scheduled_changes',
      true,
    ],
    [
      'removeScheduledChanges',
      'POST',
      '/subscriptions',
      '/remove_scheduled_changes',
      true,
    ],
    [
      'removeScheduledCancellation',
      'POST',
      '/subscriptions',
      '/remove_scheduled_cancellation',
      true,
    ],
    ['removeCoupons', 'POST', '/subscriptions', '/remove_coupons', true],
    ['update', 'POST', '/subscriptions', null, true],
    ['updateForItems', 'POST', '/subscriptions', '/update_for_items', true],
    ['changeTermEnd', 'POST', '/subscriptions', '/change_term_end', true],
    ['reactivate', 'POST', '/subscriptions', '/reactivate', true],
    [
      'addChargeAtTermEnd',
      'POST',
      '/subscriptions',
      '/add_charge_at_term_end',
      true,
    ],
    [
      'chargeAddonAtTermEnd',
      'POST',
      '/subscriptions',
      '/charge_addon_at_term_end',
      true,
    ],
    [
      'chargeFutureRenewals',
      'POST',
      '/subscriptions',
      '/charge_future_renewals',
      true,
    ],
    [
      'editAdvanceInvoiceSchedule',
      'POST',
      '/subscriptions',
      '/edit_advance_invoice_schedule',
      true,
    ],
    [
      'retrieveAdvanceInvoiceSchedule',
      'GET',
      '/subscriptions',
      '/retrieve_advance_invoice_schedule',
      true,
    ],
    [
      'removeAdvanceInvoiceSchedule',
      'POST',
      '/subscriptions',
      '/remove_advance_invoice_schedule',
      true,
    ],
    [
      'regenerateInvoice',
      'POST',
      '/subscriptions',
      '/regenerate_invoice',
      true,
    ],
    [
      'importSubscription',
      'POST',
      '/subscriptions',
      '/import_subscription',
      false,
    ],
    ['importForCustomer', 'POST', '/customers', '/import_subscription', true],
    [
      'importContractTerm',
      'POST',
      '/subscriptions',
      '/import_contract_term',
      true,
    ],
    [
      'importUnbilledCharges',
      'POST',
      '/subscriptions',
      '/import_unbilled_charges',
      true,
    ],
    ['importForItems', 'POST', '/customers', '/import_for_items', true],
    [
      'overrideBillingProfile',
      'POST',
      '/subscriptions',
      '/override_billing_profile',
      true,
    ],
    ['delete', 'POST', '/subscriptions', '/delete', true],
    ['pause', 'POST', '/subscriptions', '/pause', true],
    ['cancel', 'POST', '/subscriptions', '/cancel', true],
    ['cancelForItems', 'POST', '/subscriptions', '/cancel_for_items', true],
    ['resume', 'POST', '/subscriptions', '/resume', true],
    [
      'removeScheduledPause',
      'POST',
      '/subscriptions',
      '/remove_scheduled_pause',
      true,
    ],
    [
      'removeScheduledResumption',
      'POST',
      '/subscriptions',
      '/remove_scheduled_resumption',
      true,
    ],
    ['move', 'POST', '/subscriptions', '/move', true],
  ],
  contractTerm: [],
  discount: [],
  advanceInvoiceSchedule: [],
  customer: [
    ['create', 'POST', '/customers', null, false],
    ['list', 'GET', '/customers', null, false],
    ['retrieve', 'GET', '/customers', null, true],
    ['update', 'POST', '/customers', null, true],
    [
      'updatePaymentMethod',
      'POST',
      '/customers',
      '/update_payment_method',
      true,
    ],
    ['updateBillingInfo', 'POST', '/customers', '/update_billing_info', true],
    ['contactsForCustomer', 'GET', '/customers', '/contacts', true],
    ['assignPaymentRole', 'POST', '/customers', '/assign_payment_role', true],
    ['addContact', 'POST', '/customers', '/add_contact', true],
    ['updateContact', 'POST', '/customers', '/update_contact', true],
    ['deleteContact', 'POST', '/customers', '/delete_contact', true],
    [
      'addPromotionalCredits',
      'POST',
      '/customers',
      '/add_promotional_credits',
      true,
    ],
    [
      'deductPromotionalCredits',
      'POST',
      '/customers',
      '/deduct_promotional_credits',
      true,
    ],
    [
      'setPromotionalCredits',
      'POST',
      '/customers',
      '/set_promotional_credits',
      true,
    ],
    [
      'recordExcessPayment',
      'POST',
      '/customers',
      '/record_excess_payment',
      true,
    ],
    ['collectPayment', 'POST', '/customers', '/collect_payment', true],
    ['delete', 'POST', '/customers', '/delete', true],
    ['move', 'POST', '/customers', '/move', false],
    ['changeBillingDate', 'POST', '/customers', '/change_billing_date', true],
    ['merge', 'POST', '/customers', '/merge', false],
    ['clearPersonalData', 'POST', '/customers', '/clear_personal_data', true],
    ['relationships', 'POST', '/customers', '/relationships', true],
    ['deleteRelationship', 'POST', '/customers', '/delete_relationship', true],
    ['hierarchy', 'GET', '/customers', '/hierarchy', true],
    [
      'updateHierarchySettings',
      'POST',
      '/customers',
      '/update_hierarchy_settings',
      true,
    ],
  ],
  hierarchy: [],
  contact: [],
  businessEntityTransfer: [],
  token: [],
  paymentSource: [
    [
      'createUsingTempToken',
      'POST',
      '/payment_sources',
      '/create_using_temp_token',
      false,
    ],
    [
      'createUsingPermanentToken',
      'POST',
      '/payment_sources',
      '/create_using_permanent_token',
      false,
    ],
    [
      'createUsingToken',
      'POST',
      '/payment_sources',
      '/create_using_token',
      false,
    ],
    [
      'createUsingPaymentIntent',
      'POST',
      '/payment_sources',
      '/create_using_payment_intent',
      false,
    ],
    [
      'createVoucherPaymentSource',
      'POST',
      '/payment_sources',
      '/create_voucher_payment_source',
      false,
    ],
    ['createCard', 'POST', '/payment_sources', '/create_card', false],
    [
      'createBankAccount',
      'POST',
      '/payment_sources',
      '/create_bank_account',
      false,
    ],
    ['updateCard', 'POST', '/payment_sources', '/update_card', true],
    [
      'updateBankAccount',
      'POST',
      '/payment_sources',
      '/update_bank_account',
      true,
    ],
    [
      'verifyBankAccount',
      'POST',
      '/payment_sources',
      '/verify_bank_account',
      true,
    ],
    ['retrieve', 'GET', '/payment_sources', null, true],
    ['list', 'GET', '/payment_sources', null, false],
    [
      'switchGatewayAccount',
      'POST',
      '/payment_sources',
      '/switch_gateway_account',
      true,
    ],
    [
      'exportPaymentSource',
      'POST',
      '/payment_sources',
      '/export_payment_source',
      true,
    ],
    ['delete', 'POST', '/payment_sources', '/delete', true],
    ['deleteLocal', 'POST', '/payment_sources', '/delete_local', true],
  ],
  thirdPartyPaymentMethod: [],
  virtualBankAccount: [
    [
      'createUsingPermanentToken',
      'POST',
      '/virtual_bank_accounts',
      '/create_using_permanent_token',
      false,
    ],
    ['create', 'POST', '/virtual_bank_accounts', null, false],
    ['retrieve', 'GET', '/virtual_bank_accounts', null, true],
    ['list', 'GET', '/virtual_bank_accounts', null, false],
    ['delete', 'POST', '/virtual_bank_accounts', '/delete', true],
    ['deleteLocal', 'POST', '/virtual_bank_accounts', '/delete_local', true],
  ],
  card: [
    ['retrieve', 'GET', '/cards', null, true],
    ['updateCardForCustomer', 'POST', '/customers', '/credit_card', true],
    ['switchGatewayForCustomer', 'POST', '/customers', '/switch_gateway', true],
    ['copyCardForCustomer', 'POST', '/customers', '/copy_card', true],
    ['deleteCardForCustomer', 'POST', '/customers', '/delete_card', true],
  ],
  promotionalCredit: [
    ['add', 'POST', '/promotional_credits', '/add', false],
    ['deduct', 'POST', '/promotional_credits', '/deduct', false],
    ['set', 'POST', '/promotional_credits', '/set', false],
    ['list', 'GET', '/promotional_credits', null, false],
    ['retrieve', 'GET', '/promotional_credits', null, true],
  ],
  invoice: [
    ['create', 'POST', '/invoices', null, false],
    [
      'createForChargeItemsAndCharges',
      'POST',
      '/invoices',
      '/create_for_charge_items_and_charges',
      false,
    ],
    ['charge', 'POST', '/invoices', '/charge', false],
    ['chargeAddon', 'POST', '/invoices', '/charge_addon', false],
    [
      'createForChargeItem',
      'POST',
      '/invoices',
      '/create_for_charge_item',
      false,
    ],
    ['stopDunning', 'POST', '/invoices', '/stop_dunning', true],
    ['importInvoice', 'POST', '/invoices', '/import_invoice', false],
    ['applyPayments', 'POST', '/invoices', '/apply_payments', true],
    ['syncUsages', 'POST', '/invoices', '/sync_usages', true],
    ['deleteLineItems', 'POST', '/invoices', '/delete_line_items', true],
    ['applyCredits', 'POST', '/invoices', '/apply_credits', true],
    ['list', 'GET', '/invoices', null, false],
    ['invoicesForCustomer', 'GET', '/customers', '/invoices', true],
    ['invoicesForSubscription', 'GET', '/subscriptions', '/invoices', true],
    ['retrieve', 'GET', '/invoices', null, true],
    ['pdf', 'POST', '/invoices', '/pdf', true],
    ['downloadEinvoice', 'GET', '/invoices', '/download_einvoice', true],
    [
      'listPaymentReferenceNumbers',
      'GET',
      '/invoices',
      '/payment_reference_numbers',
      false,
    ],
    ['addCharge', 'POST', '/invoices', '/add_charge', true],
    ['addAddonCharge', 'POST', '/invoices', '/add_addon_charge', true],
    ['addChargeItem', 'POST', '/invoices', '/add_charge_item', true],
    ['close', 'POST', '/invoices', '/close', true],
    ['collectPayment', 'POST', '/invoices', '/collect_payment', true],
    ['recordPayment', 'POST', '/invoices', '/record_payment', true],
    ['recordTaxWithheld', 'POST', '/invoices', '/record_tax_withheld', true],
    ['removeTaxWithheld', 'POST', '/invoices', '/remove_tax_withheld', true],
    ['refund', 'POST', '/invoices', '/refund', true],
    ['recordRefund', 'POST', '/invoices', '/record_refund', true],
    ['removePayment', 'POST', '/invoices', '/remove_payment', true],
    ['removeCreditNote', 'POST', '/invoices', '/remove_credit_note', true],
    ['voidInvoice', 'POST', '/invoices', '/void', true],
    ['writeOff', 'POST', '/invoices', '/write_off', true],
    ['delete', 'POST', '/invoices', '/delete', true],
    ['updateDetails', 'POST', '/invoices', '/update_details', true],
    [
      'applyPaymentScheduleScheme',
      'POST',
      '/invoices',
      '/apply_payment_schedule_scheme',
      true,
    ],
    ['paymentSchedules', 'GET', '/invoices', '/payment_schedules', true],
    ['resendEinvoice', 'POST', '/invoices', '/resend_einvoice', true],
    ['sendEinvoice', 'POST', '/invoices', '/send_einvoice', true],
  ],
  paymentReferenceNumber: [],
  paymentSchedule: [],
  taxWithheld: [],
  creditNote: [
    ['create', 'POST', '/credit_notes', null, false],
    ['retrieve', 'GET', '/credit_notes', null, true],
    ['pdf', 'POST', '/credit_notes', '/pdf', true],
    ['downloadEinvoice', 'GET', '/credit_notes', '/download_einvoice', true],
    ['refund', 'POST', '/credit_notes', '/refund', true],
    ['recordRefund', 'POST', '/credit_notes', '/record_refund', true],
    ['voidCreditNote', 'POST', '/credit_notes', '/void', true],
    ['list', 'GET', '/credit_notes', null, false],
    ['creditNotesForCustomer', 'GET', '/customers', '/credit_notes', true],
    ['delete', 'POST', '/credit_notes', '/delete', true],
    [
      'removeTaxWithheldRefund',
      'POST',
      '/credit_notes',
      '/remove_tax_withheld_refund',
      true,
    ],
    ['resendEinvoice', 'POST', '/credit_notes', '/resend_einvoice', true],
    ['sendEinvoice', 'POST', '/credit_notes', '/send_einvoice', true],
    ['importCreditNote', 'POST', '/credit_notes', '/import_credit_note', false],
  ],
  unbilledCharge: [
    ['createUnbilledCharge', 'POST', '/unbilled_charges', '/create', false],
    ['create', 'POST', '/unbilled_charges', null, false],
    [
      'invoiceUnbilledCharges',
      'POST',
      '/unbilled_charges',
      '/invoice_unbilled_charges',
      false,
    ],
    ['delete', 'POST', '/unbilled_charges', '/delete', true],
    ['list', 'GET', '/unbilled_charges', null, false],
    [
      'invoiceNowEstimate',
      'POST',
      '/unbilled_charges',
      '/invoice_now_estimate',
      false,
    ],
  ],
  order: [
    ['create', 'POST', '/orders', null, false],
    ['update', 'POST', '/orders', null, true],
    ['importOrder', 'POST', '/orders', '/import_order', false],
    ['assignOrderNumber', 'POST', '/orders', '/assign_order_number', true],
    ['cancel', 'POST', '/orders', '/cancel', true],
    [
      'createRefundableCreditNote',
      'POST',
      '/orders',
      '/create_refundable_credit_note',
      true,
    ],
    ['reopen', 'POST', '/orders', '/reopen', true],
    ['retrieve', 'GET', '/orders', null, true],
    ['delete', 'POST', '/orders', '/delete', true],
    ['list', 'GET', '/orders', null, false],
    ['ordersForInvoice', 'GET', '/invoices', '/orders', true],
    ['resend', 'POST', '/orders', '/resend', true],
  ],
  gift: [
    ['create', 'POST', '/gifts', null, false],
    ['createForItems', 'POST', '/gifts', '/create_for_items', false],
    ['retrieve', 'GET', '/gifts', null, true],
    ['list', 'GET', '/gifts', null, false],
    ['claim', 'POST', '/gifts', '/claim', true],
    ['cancel', 'POST', '/gifts', '/cancel', true],
    ['updateGift', 'POST', '/gifts', '/update_gift', true],
  ],
  transaction: [
    [
      'createAuthorization',
      'POST',
      '/transactions',
      '/create_authorization',
      false,
    ],
    ['voidTransaction', 'POST', '/transactions', '/void', true],
    ['recordRefund', 'POST', '/transactions', '/record_refund', true],
    ['reconcile', 'POST', '/transactions', '/reconcile', true],
    ['refund', 'POST', '/transactions', '/refund', true],
    ['list', 'GET', '/transactions', null, false],
    ['transactionsForCustomer', 'GET', '/customers', '/transactions', true],
    [
      'transactionsForSubscription',
      'GET',
      '/subscriptions',
      '/transactions',
      true,
    ],
    ['paymentsForInvoice', 'GET', '/invoices', '/payments', true],
    ['retrieve', 'GET', '/transactions', null, true],
    [
      'deleteOfflineTransaction',
      'POST',
      '/transactions',
      '/delete_offline_transaction',
      true,
    ],
  ],
  hostedPage: [
    ['checkoutNew', 'POST', '/hosted_pages', '/checkout_new', false],
    ['checkoutOneTime', 'POST', '/hosted_pages', '/checkout_one_time', false],
    [
      'checkoutOneTimeForItems',
      'POST',
      '/hosted_pages',
      '/checkout_one_time_for_items',
      false,
    ],
    [
      'checkoutNewForItems',
      'POST',
      '/hosted_pages',
      '/checkout_new_for_items',
      false,
    ],
    ['checkoutExisting', 'POST', '/hosted_pages', '/checkout_existing', false],
    [
      'checkoutExistingForItems',
      'POST',
      '/hosted_pages',
      '/checkout_existing_for_items',
      false,
    ],
    ['updateCard', 'POST', '/hosted_pages', '/update_card', false],
    [
      'updatePaymentMethod',
      'POST',
      '/hosted_pages',
      '/update_payment_method',
      false,
    ],
    [
      'managePaymentSources',
      'POST',
      '/hosted_pages',
      '/manage_payment_sources',
      false,
    ],
    ['collectNow', 'POST', '/hosted_pages', '/collect_now', false],
    ['acceptQuote', 'POST', '/hosted_pages', '/accept_quote', false],
    [
      'extendSubscription',
      'POST',
      '/hosted_pages',
      '/extend_subscription',
      false,
    ],
    ['checkoutGift', 'POST', '/hosted_pages', '/checkout_gift', false],
    [
      'checkoutGiftForItems',
      'POST',
      '/hosted_pages',
      '/checkout_gift_for_items',
      false,
    ],
    ['claimGift', 'POST', '/hosted_pages', '/claim_gift', false],
    [
      'retrieveAgreementPdf',
      'POST',
      '/hosted_pages',
      '/retrieve_agreement_pdf',
      false,
    ],
    ['acknowledge', 'POST', '/hosted_pages', '/acknowledge', true],
    ['retrieve', 'GET', '/hosted_pages', null, true],
    ['list', 'GET', '/hosted_pages', null, false],
    ['preCancel', 'POST', '/hosted_pages', '/pre_cancel', false],
    ['events', 'POST', '/hosted_pages', '/events', false],
    ['viewVoucher', 'POST', '/hosted_pages', '/view_voucher', false],
  ],
  estimate: [
    ['createSubscription', 'POST', '/estimates', '/create_subscription', false],
    [
      'createSubItemEstimate',
      'POST',
      '/estimates',
      '/create_subscription_for_items',
      false,
    ],
    [
      'createSubForCustomerEstimate',
      'GET',
      '/customers',
      '/create_subscription_estimate',
      true,
    ],
    [
      'createSubItemForCustomerEstimate',
      'POST',
      '/customers',
      '/create_subscription_for_items_estimate',
      true,
    ],
    ['updateSubscription', 'POST', '/estimates', '/update_subscription', false],
    [
      'updateSubscriptionForItems',
      'POST',
      '/estimates',
      '/update_subscription_for_items',
      false,
    ],
    ['renewalEstimate', 'GET', '/subscriptions', '/renewal_estimate', true],
    [
      'advanceInvoiceEstimate',
      'POST',
      '/subscriptions',
      '/advance_invoice_estimate',
      true,
    ],
    [
      'regenerateInvoiceEstimate',
      'POST',
      '/subscriptions',
      '/regenerate_invoice_estimate',
      true,
    ],
    [
      'upcomingInvoicesEstimate',
      'GET',
      '/customers',
      '/upcoming_invoices_estimate',
      true,
    ],
    [
      'changeTermEnd',
      'POST',
      '/subscriptions',
      '/change_term_end_estimate',
      true,
    ],
    [
      'cancelSubscription',
      'POST',
      '/subscriptions',
      '/cancel_subscription_estimate',
      true,
    ],
    [
      'cancelSubscriptionForItems',
      'POST',
      '/subscriptions',
      '/cancel_subscription_for_items_estimate',
      true,
    ],
    [
      'pauseSubscription',
      'POST',
      '/subscriptions',
      '/pause_subscription_estimate',
      true,
    ],
    [
      'resumeSubscription',
      'POST',
      '/subscriptions',
      '/resume_subscription_estimate',
      true,
    ],
    ['giftSubscription', 'POST', '/estimates', '/gift_subscription', false],
    [
      'giftSubscriptionForItems',
      'POST',
      '/estimates',
      '/gift_subscription_for_items',
      false,
    ],
    ['createInvoice', 'POST', '/estimates', '/create_invoice', false],
    [
      'createInvoiceForItems',
      'POST',
      '/estimates',
      '/create_invoice_for_items',
      false,
    ],
    ['paymentSchedules', 'POST', '/estimates', '/payment_schedules', false],
  ],
  quote: [
    ['retrieve', 'GET', '/quotes', null, true],
    [
      'createSubForCustomerQuote',
      'POST',
      '/customers',
      '/create_subscription_quote',
      true,
    ],
    [
      'editCreateSubForCustomerQuote',
      'POST',
      '/quotes',
      '/edit_create_subscription_quote',
      true,
    ],
    [
      'updateSubscriptionQuote',
      'POST',
      '/quotes',
      '/update_subscription_quote',
      false,
    ],
    [
      'editUpdateSubscriptionQuote',
      'POST',
      '/quotes',
      '/edit_update_subscription_quote',
      true,
    ],
    [
      'createForOnetimeCharges',
      'POST',
      '/quotes',
      '/create_for_onetime_charges',
      false,
    ],
    ['editOneTimeQuote', 'POST', '/quotes', '/edit_one_time_quote', true],
    [
      'createSubItemsForCustomerQuote',
      'POST',
      '/customers',
      '/create_subscription_quote_for_items',
      true,
    ],
    [
      'editCreateSubCustomerQuoteForItems',
      'POST',
      '/quotes',
      '/edit_create_subscription_quote_for_items',
      true,
    ],
    [
      'updateSubscriptionQuoteForItems',
      'POST',
      '/quotes',
      '/update_subscription_quote_for_items',
      false,
    ],
    [
      'editUpdateSubscriptionQuoteForItems',
      'POST',
      '/quotes',
      '/edit_update_subscription_quote_for_items',
      true,
    ],
    [
      'createForChargeItemsAndCharges',
      'POST',
      '/quotes',
      '/create_for_charge_items_and_charges',
      false,
    ],
    [
      'editForChargeItemsAndCharges',
      'POST',
      '/quotes',
      '/edit_for_charge_items_and_charges',
      true,
    ],
    ['list', 'GET', '/quotes', null, false],
    ['quoteLineGroupsForQuote', 'GET', '/quotes', '/quote_line_groups', true],
    ['convert', 'POST', '/quotes', '/convert', true],
    ['updateStatus', 'POST', '/quotes', '/update_status', true],
    ['extendExpiryDate', 'POST', '/quotes', '/extend_expiry_date', true],
    ['delete', 'POST', '/quotes', '/delete', true],
    ['pdf', 'POST', '/quotes', '/pdf', true],
  ],
  quotedSubscription: [],
  quotedCharge: [],
  quoteLineGroup: [],
  plan: [
    ['create', 'POST', '/plans', null, false],
    ['update', 'POST', '/plans', null, true],
    ['list', 'GET', '/plans', null, false],
    ['retrieve', 'GET', '/plans', null, true],
    ['delete', 'POST', '/plans', '/delete', true],
    ['copy', 'POST', '/plans', '/copy', false],
    ['unarchive', 'POST', '/plans', '/unarchive', true],
  ],
  addon: [
    ['create', 'POST', '/addons', null, false],
    ['update', 'POST', '/addons', null, true],
    ['list', 'GET', '/addons', null, false],
    ['retrieve', 'GET', '/addons', null, true],
    ['delete', 'POST', '/addons', '/delete', true],
    ['copy', 'POST', '/addons', '/copy', false],
    ['unarchive', 'POST', '/addons', '/unarchive', true],
  ],
  coupon: [
    ['create', 'POST', '/coupons', null, false],
    ['createForItems', 'POST', '/coupons', '/create_for_items', false],
    ['updateForItems', 'POST', '/coupons', '/update_for_items', true],
    ['list', 'GET', '/coupons', null, false],
    ['retrieve', 'GET', '/coupons', null, true],
    ['update', 'POST', '/coupons', null, true],
    ['delete', 'POST', '/coupons', '/delete', true],
    ['copy', 'POST', '/coupons', '/copy', false],
    ['unarchive', 'POST', '/coupons', '/unarchive', true],
  ],
  couponSet: [
    ['create', 'POST', '/coupon_sets', null, false],
    ['addCouponCodes', 'POST', '/coupon_sets', '/add_coupon_codes', true],
    ['list', 'GET', '/coupon_sets', null, false],
    ['retrieve', 'GET', '/coupon_sets', null, true],
    ['update', 'POST', '/coupon_sets', '/update', true],
    ['delete', 'POST', '/coupon_sets', '/delete', true],
    [
      'deleteUnusedCouponCodes',
      'POST',
      '/coupon_sets',
      '/delete_unused_coupon_codes',
      true,
    ],
  ],
  couponCode: [
    ['create', 'POST', '/coupon_codes', null, false],
    ['retrieve', 'GET', '/coupon_codes', null, true],
    ['list', 'GET', '/coupon_codes', null, false],
    ['archive', 'POST', '/coupon_codes', '/archive', true],
  ],
  address: [
    ['retrieve', 'GET', '/addresses', null, false],
    ['update', 'POST', '/addresses', null, false],
  ],
  usage: [
    ['create', 'POST', '/subscriptions', '/usages', true],
    ['retrieve', 'GET', '/subscriptions', '/usages', true],
    ['delete', 'POST', '/subscriptions', '/delete_usage', true],
    ['list', 'GET', '/usages', null, false],
    ['pdf', 'POST', '/usages', '/pdf', false],
  ],
  event: [
    ['list', 'GET', '/events', null, false],
    ['retrieve', 'GET', '/events', null, true],
  ],
  comment: [
    ['create', 'POST', '/comments', null, false],
    ['retrieve', 'GET', '/comments', null, true],
    ['list', 'GET', '/comments', null, false],
    ['delete', 'POST', '/comments', '/delete', true],
  ],
  download: [],
  portalSession: [
    ['create', 'POST', '/portal_sessions', null, false],
    ['retrieve', 'GET', '/portal_sessions', null, true],
    ['logout', 'POST', '/portal_sessions', '/logout', true],
    ['activate', 'POST', '/portal_sessions', '/activate', true],
  ],
  siteMigrationDetail: [
    ['list', 'GET', '/site_migration_details', null, false],
  ],
  resourceMigration: [
    [
      'retrieveLatest',
      'GET',
      '/resource_migrations',
      '/retrieve_latest',
      false,
    ],
  ],
  timeMachine: [
    ['retrieve', 'GET', '/time_machines', null, true],
    ['startAfresh', 'POST', '/time_machines', '/start_afresh', true],
    ['travelForward', 'POST', '/time_machines', '/travel_forward', true],
  ],
  export: [
    ['retrieve', 'GET', '/exports', null, true],
    ['revenueRecognition', 'POST', '/exports', '/revenue_recognition', false],
    ['deferredRevenue', 'POST', '/exports', '/deferred_revenue', false],
    ['plans', 'POST', '/exports', '/plans', false],
    ['addons', 'POST', '/exports', '/addons', false],
    ['coupons', 'POST', '/exports', '/coupons', false],
    ['customers', 'POST', '/exports', '/customers', false],
    ['subscriptions', 'POST', '/exports', '/subscriptions', false],
    ['invoices', 'POST', '/exports', '/invoices', false],
    ['creditNotes', 'POST', '/exports', '/credit_notes', false],
    ['transactions', 'POST', '/exports', '/transactions', false],
    ['orders', 'POST', '/exports', '/orders', false],
    ['itemFamilies', 'POST', '/exports', '/item_families', false],
    ['items', 'POST', '/exports', '/items', false],
    ['itemPrices', 'POST', '/exports', '/item_prices', false],
    ['attachedItems', 'POST', '/exports', '/attached_items', false],
    ['differentialPrices', 'POST', '/exports', '/differential_prices', false],
    ['priceVariants', 'POST', '/exports', '/price_variants', false],
  ],
  paymentIntent: [
    ['create', 'POST', '/payment_intents', null, false],
    ['update', 'POST', '/payment_intents', null, true],
    ['retrieve', 'GET', '/payment_intents', null, true],
  ],
  gatewayErrorDetail: [],
  itemFamily: [
    ['create', 'POST', '/item_families', null, false],
    ['retrieve', 'GET', '/item_families', null, true],
    ['list', 'GET', '/item_families', null, false],
    ['update', 'POST', '/item_families', null, true],
    ['delete', 'POST', '/item_families', '/delete', true],
  ],
  item: [
    ['create', 'POST', '/items', null, false],
    ['retrieve', 'GET', '/items', null, true],
    ['update', 'POST', '/items', null, true],
    ['list', 'GET', '/items', null, false],
    ['delete', 'POST', '/items', '/delete', true],
  ],
  priceVariant: [
    ['create', 'POST', '/price_variants', null, false],
    ['retrieve', 'GET', '/price_variants', null, true],
    ['update', 'POST', '/price_variants', null, true],
    ['delete', 'POST', '/price_variants', '/delete', true],
    ['list', 'GET', '/price_variants', null, false],
  ],
  attribute: [],
  itemPrice: [
    ['create', 'POST', '/item_prices', null, false],
    ['retrieve', 'GET', '/item_prices', null, true],
    ['update', 'POST', '/item_prices', null, true],
    ['list', 'GET', '/item_prices', null, false],
    ['delete', 'POST', '/item_prices', '/delete', true],
    ['findApplicableItems', 'GET', '/item_prices', '/applicable_items', true],
    [
      'findApplicableItemPrices',
      'GET',
      '/item_prices',
      '/applicable_item_prices',
      true,
    ],
  ],
  attachedItem: [
    ['create', 'POST', '/items', '/attached_items', true],
    ['update', 'POST', '/attached_items', null, true],
    ['retrieve', 'GET', '/attached_items', null, true],
    ['delete', 'POST', '/attached_items', '/delete', true],
    ['list', 'GET', '/items', '/attached_items', true],
  ],
  differentialPrice: [
    ['create', 'POST', '/item_prices', '/differential_prices', true],
    ['retrieve', 'GET', '/differential_prices', null, true],
    ['update', 'POST', '/differential_prices', null, true],
    ['delete', 'POST', '/differential_prices', '/delete', true],
    ['list', 'GET', '/differential_prices', null, false],
  ],
  configuration: [['list', 'GET', '/configurations', null, false]],
  feature: [
    ['list', 'GET', '/features', null, false],
    ['create', 'POST', '/features', null, false],
    ['update', 'POST', '/features', null, true],
    ['retrieve', 'GET', '/features', null, true],
    ['delete', 'POST', '/features', '/delete', true],
    ['activate', 'POST', '/features', '/activate_command', true],
    ['archive', 'POST', '/features', '/archive_command', true],
    ['reactivate', 'POST', '/features', '/reactivate_command', true],
  ],
  impactedSubscription: [],
  impactedItem: [],
  impactedItemPrice: [],
  metadata: [],
  subscriptionEntitlement: [
    [
      'subscriptionEntitlementsForSubscription',
      'GET',
      '/subscriptions',
      '/subscription_entitlements',
      true,
    ],
    [
      'setSubscriptionEntitlementAvailability',
      'POST',
      '/subscriptions',
      '/subscription_entitlements/set_availability',
      true,
    ],
  ],
  customerEntitlement: [
    [
      'entitlementsForCustomer',
      'GET',
      '/customers',
      '/customer_entitlements',
      true,
    ],
  ],
  itemEntitlement: [
    ['itemEntitlementsForItem', 'GET', '/items', '/item_entitlements', true],
    [
      'itemEntitlementsForFeature',
      'GET',
      '/features',
      '/item_entitlements',
      true,
    ],
    ['addItemEntitlements', 'POST', '/features', '/item_entitlements', true],
    [
      'upsertOrRemoveItemEntitlementsForItem',
      'POST',
      '/items',
      '/item_entitlements',
      true,
    ],
  ],
  entitlement: [
    ['list', 'GET', '/entitlements', null, false],
    ['create', 'POST', '/entitlements', null, false],
  ],
  inAppSubscription: [
    [
      'processReceipt',
      'POST',
      '/in_app_subscriptions',
      '/process_purchase_command',
      true,
    ],
    ['importReceipt', 'POST', '/in_app_subscriptions', '/import_receipt', true],
    [
      'importSubscription',
      'POST',
      '/in_app_subscriptions',
      '/import_subscription',
      true,
    ],
    ['retrieveStoreSubs', 'POST', '/in_app_subscriptions', '/retrieve', true],
  ],
  nonSubscription: [
    [
      'processReceipt',
      'POST',
      '/non_subscriptions',
      '/one_time_purchase',
      true,
    ],
  ],
  entitlementOverride: [
    [
      'addEntitlementOverrideForSubscription',
      'POST',
      '/subscriptions',
      '/entitlement_overrides',
      true,
    ],
    [
      'listEntitlementOverrideForSubscription',
      'GET',
      '/subscriptions',
      '/entitlement_overrides',
      true,
    ],
  ],
  businessEntity: [
    ['createTransfers', 'POST', '/business_entities', '/transfers', false],
    ['getTransfers', 'GET', '/business_entities', '/transfers', false],
  ],
  purchase: [
    ['create', 'POST', '/purchases', null, false],
    ['estimate', 'POST', '/purchases', '/estimate', false],
  ],
  paymentVoucher: [
    ['create', 'POST', '/payment_vouchers', null, false],
    ['retrieve', 'GET', '/payment_vouchers', null, true],
    [
      'payment_vouchersForInvoice',
      'GET',
      '/invoices',
      '/payment_vouchers',
      true,
    ],
    [
      'payment_vouchersForCustomer',
      'GET',
      '/customers',
      '/payment_vouchers',
      true,
    ],
  ],
  currency: [
    ['list', 'GET', '/currencies', '/list', false],
    ['retrieve', 'GET', '/currencies', null, true],
    ['create', 'POST', '/currencies', null, false],
    ['update', 'POST', '/currencies', null, true],
    ['addSchedule', 'POST', '/currencies', '/add_schedule', true],
    ['removeSchedule', 'POST', '/currencies', '/remove_schedule', true],
  ],
  ramp: [
    ['createForSubscription', 'POST', '/subscriptions', '/create_ramp', true],
    ['update', 'POST', '/ramps', '/update', true],
    ['retrieve', 'GET', '/ramps', null, true],
    ['delete', 'POST', '/ramps', '/delete', true],
    ['list', 'GET', '/ramps', null, false],
  ],
  paymentScheduleScheme: [
    ['create', 'POST', '/payment_schedule_schemes', null, false],
    ['retrieve', 'GET', '/payment_schedule_schemes', null, true],
    ['delete', 'POST', '/payment_schedule_schemes', '/delete', true],
  ],
  pricingPageSession: [
    [
      'createForNewSubscription',
      'POST',
      '/pricing_page_sessions',
      '/create_for_new_subscription',
      false,
    ],
    [
      'createForExistingSubscription',
      'POST',
      '/pricing_page_sessions',
      '/create_for_existing_subscription',
      false,
    ],
  ],
  omnichannelSubscription: [
    ['retrieve', 'GET', '/omnichannel_subscriptions', null, true],
    ['list', 'GET', '/omnichannel_subscriptions', null, false],
    [
      'omnichannel_transactionsForOmnichannelSubscription',
      'GET',
      '/omnichannel_subscriptions',
      '/omnichannel_transactions',
      true,
    ],
  ],
  omnichannelTransaction: [],
  omnichannelSubscriptionItem: [],
  recordedPurchase: [
    ['create', 'POST', '/recorded_purchases', null, false],
    ['retrieve', 'GET', '/recorded_purchases', null, true],
  ],
};
