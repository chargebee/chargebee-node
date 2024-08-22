///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'Chargebee' {
  export interface PricingPageSession {
    id?: string;

    url?: string;

    created_at?: number;

    expires_at?: number;
  }
  export namespace PricingPageSession {
    export class PricingPageSessionResource {
      createForNewSubscription(
        input: CreateForNewSubscriptionInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<CreateForNewSubscriptionResponse>>;

      createForExistingSubscription(
        input: CreateForExistingSubscriptionInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<CreateForExistingSubscriptionResponse>>;
    }
    export interface CreateForNewSubscriptionResponse {
      pricing_page_session: PricingPageSession;
    }

    export interface CreateForExistingSubscriptionResponse {
      pricing_page_session: PricingPageSession;
    }

    // REQUEST PARAMS
    //---------------

    export interface CreateForNewSubscriptionInputParam {
      redirect_url?: string;
      business_entity_id?: string;
      pricing_page?: PricingPageCreateForNewSubscriptionInputParam;
      subscription?: SubscriptionCreateForNewSubscriptionInputParam;
      customer?: CustomerCreateForNewSubscriptionInputParam;
      billing_address?: BillingAddressCreateForNewSubscriptionInputParam;
      shipping_address?: ShippingAddressCreateForNewSubscriptionInputParam;
    }
    export interface CreateForExistingSubscriptionInputParam {
      redirect_url?: string;
      pricing_page?: PricingPageCreateForExistingSubscriptionInputParam;
      subscription?: SubscriptionCreateForExistingSubscriptionInputParam;
    }
    export interface BillingAddressCreateForNewSubscriptionInputParam {
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
    export interface PricingPageCreateForNewSubscriptionInputParam {
      id: string;
    }
    export interface CustomerCreateForNewSubscriptionInputParam {
      id?: string;

      email?: string;

      first_name?: string;

      last_name?: string;

      company?: string;

      phone?: string;

      locale?: string;
    }
    export interface ShippingAddressCreateForNewSubscriptionInputParam {
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
    export interface SubscriptionCreateForNewSubscriptionInputParam {
      id?: string;
    }

    export interface PricingPageCreateForExistingSubscriptionInputParam {
      id: string;
    }
    export interface SubscriptionCreateForExistingSubscriptionInputParam {
      id: string;
    }
  }
}
