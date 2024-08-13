///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
///<reference path='./filter.d.ts'/>
declare module 'Chargebee' {
  export interface Gift {
    id: string;

    status: 'scheduled' | 'unclaimed' | 'claimed' | 'cancelled' | 'expired';

    scheduled_at?: number;

    auto_claim: boolean;

    no_expiry: boolean;

    claim_expiry_date?: number;

    resource_version?: number;

    updated_at?: number;

    gifter: Gift.Gifter;

    gift_receiver: Gift.GiftReceiver;

    gift_timelines?: Gift.GiftTimeline[];
  }
  export namespace Gift {
    export class GiftResource {
      create(
        input: CreateInputParam,
      ): Promise<ChargebeeResponse<CreateResponse>>;

      createForItems(
        input: CreateForItemsInputParam,
      ): Promise<ChargebeeResponse<CreateForItemsResponse>>;

      retrieve(gift_id: string): Promise<ChargebeeResponse<RetrieveResponse>>;

      list(input?: ListInputParam): Promise<ChargebeeResponse<ListResponse>>;

      claim(gift_id: string): Promise<ChargebeeResponse<ClaimResponse>>;

      cancel(gift_id: string): Promise<ChargebeeResponse<CancelResponse>>;

      updateGift(
        gift_id: string,
        input: UpdateGiftInputParam,
      ): Promise<ChargebeeResponse<UpdateGiftResponse>>;
    }
    export interface CreateResponse {
      gift: Gift;

      subscription: Subscription;

      invoice?: Invoice;
    }

    export interface CreateForItemsResponse {
      gift: Gift;

      subscription: Subscription;

      invoice?: Invoice;
    }

    export interface RetrieveResponse {
      gift: Gift;

      subscription: Subscription;
    }

    export interface ListResponse {
      list: { gift: Gift; subscription: Subscription }[];

      next_offset?: string;
    }

    export interface ClaimResponse {
      gift: Gift;

      subscription: Subscription;
    }

    export interface CancelResponse {
      gift: Gift;

      subscription: Subscription;
    }

    export interface UpdateGiftResponse {
      gift: Gift;

      subscription: Subscription;
    }

    export interface Gifter {
      customer_id: string;

      invoice_id?: string;

      signature?: string;

      note?: string;
    }
    export interface GiftReceiver {
      customer_id: string;

      subscription_id: string;

      first_name?: string;

      last_name?: string;

      email?: string;
    }
    export interface GiftTimeline {
      status: 'scheduled' | 'unclaimed' | 'claimed' | 'cancelled' | 'expired';

      occurred_at?: number;
    }
    // REQUEST PARAMS
    //---------------

    export interface CreateInputParam {
      scheduled_at?: number;
      auto_claim?: boolean;
      no_expiry?: boolean;
      claim_expiry_date?: number;
      coupon_ids?: string[];
      gifter?: GifterCreateInputParam;
      gift_receiver?: GiftReceiverCreateInputParam;
      payment_intent?: PaymentIntentCreateInputParam;
      shipping_address?: ShippingAddressCreateInputParam;
      subscription?: SubscriptionCreateInputParam;
      addons?: AddonsCreateInputParam[];
    }
    export interface CreateForItemsInputParam {
      scheduled_at?: number;
      auto_claim?: boolean;
      no_expiry?: boolean;
      claim_expiry_date?: number;
      coupon_ids?: string[];
      gifter?: GifterCreateForItemsInputParam;
      gift_receiver?: GiftReceiverCreateForItemsInputParam;
      payment_intent?: PaymentIntentCreateForItemsInputParam;
      shipping_address?: ShippingAddressCreateForItemsInputParam;
      subscription_items?: SubscriptionItemsCreateForItemsInputParam[];
    }
    export interface ListInputParam {
      limit?: number;
      offset?: string;
      gift_receiver?: GiftReceiverGiftListInputParam;
      gifter?: GifterGiftListInputParam;
      status?: filter.Enum;
    }
    export interface UpdateGiftInputParam {
      scheduled_at: number;
      comment?: string;
    }
    export interface GiftReceiverCreateInputParam {
      customer_id: string;

      first_name: string;

      last_name: string;

      email: string;
    }
    export interface GifterCreateInputParam {
      customer_id: string;

      signature: string;

      note?: string;

      payment_src_id?: string;
    }
    export interface ShippingAddressCreateInputParam {
      first_name?: string;

      last_name?: string;

      email?: string;

      company?: string;

      phone?: string;

      line1?: string;

      line2?: string;

      line3?: string;

      city?: string;

      state_code?: string;

      state?: string;

      zip?: string;

      country?: string;

      validation_status?: ValidationStatus;
    }
    export interface PaymentIntentCreateInputParam {
      id?: string;

      gateway_account_id?: string;

      gw_token?: string;

      payment_method_type?:
        | 'card'
        | 'ideal'
        | 'sofort'
        | 'bancontact'
        | 'google_pay'
        | 'dotpay'
        | 'giropay'
        | 'apple_pay'
        | 'upi'
        | 'netbanking_emandates'
        | 'paypal_express_checkout'
        | 'direct_debit'
        | 'boleto'
        | 'venmo'
        | 'amazon_payments'
        | 'pay_to'
        | 'faster_payments'
        | 'sepa_instant_transfer'
        | 'klarna_pay_now'
        | 'online_banking_poland';

      reference_id?: string;

      /**
       * @deprecated Please refer API docs to use other attributes
       */

      gw_payment_method_id?: string;

      additional_information?: any;
    }
    export interface SubscriptionCreateInputParam {
      plan_id: string;

      plan_quantity?: number;

      plan_quantity_in_decimal?: string;
    }

    export interface AddonsCreateInputParam {
      id?: string;

      quantity?: number;

      quantity_in_decimal?: string;
    }
    export interface GiftReceiverCreateForItemsInputParam {
      customer_id: string;

      first_name: string;

      last_name: string;

      email: string;
    }
    export interface GifterCreateForItemsInputParam {
      customer_id: string;

      signature: string;

      note?: string;

      payment_src_id?: string;
    }
    export interface ShippingAddressCreateForItemsInputParam {
      first_name?: string;

      last_name?: string;

      email?: string;

      company?: string;

      phone?: string;

      line1?: string;

      line2?: string;

      line3?: string;

      city?: string;

      state_code?: string;

      state?: string;

      zip?: string;

      country?: string;

      validation_status?: ValidationStatus;
    }
    export interface PaymentIntentCreateForItemsInputParam {
      id?: string;

      gateway_account_id?: string;

      gw_token?: string;

      payment_method_type?:
        | 'card'
        | 'ideal'
        | 'sofort'
        | 'bancontact'
        | 'google_pay'
        | 'dotpay'
        | 'giropay'
        | 'apple_pay'
        | 'upi'
        | 'netbanking_emandates'
        | 'paypal_express_checkout'
        | 'direct_debit'
        | 'boleto'
        | 'venmo'
        | 'amazon_payments'
        | 'pay_to'
        | 'faster_payments'
        | 'sepa_instant_transfer'
        | 'klarna_pay_now'
        | 'online_banking_poland';

      reference_id?: string;

      /**
       * @deprecated Please refer API docs to use other attributes
       */

      gw_payment_method_id?: string;

      additional_information?: any;
    }

    export interface SubscriptionItemsCreateForItemsInputParam {
      item_price_id?: string;

      quantity?: number;

      quantity_in_decimal?: string;
    }
    export interface GifterGiftListInputParam {
      customer_id?: filter.String;
    }
    export interface GiftReceiverGiftListInputParam {
      email?: filter.String;

      customer_id?: filter.String;
    }
  }
}
