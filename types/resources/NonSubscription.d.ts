///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'chargebee' {
  export interface NonSubscription {
    app_id: string;
    invoice_id: string;
    customer_id?: string;
    charge_id: string;
  }

  export namespace NonSubscription {
    export class NonSubscriptionResource {
      processReceipt(
        non_subscription_app_id: string,
        input: ProcessReceiptInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ProcessReceiptResponse>>;
    }

    export interface ProcessReceiptResponse {
      non_subscription: NonSubscription;
    }

    // REQUEST PARAMS
    //---------------

    export interface ProcessReceiptInputParam {
      receipt: string;
      product?: ProductProcessReceiptInputParam;
      customer?: CustomerProcessReceiptInputParam;
    }
    export interface CustomerProcessReceiptInputParam {
      id?: string;
      email?: string;
      first_name?: string;
      last_name?: string;
    }
    export interface ProductProcessReceiptInputParam {
      id: string;
      currency_code: string;
      price: number;
      type: 'consumable' | 'non_consumable' | 'non_renewing_subscription';
      name?: string;
      price_in_decimal?: string;
    }
  }
}
