///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'chargebee' {
  export interface VaultedPaymentMethod {
    id: string;
    customer_id: string;
    credit_card_id: string;
    created_at: number;
    modified_at: number;
  }

  export namespace VaultedPaymentMethod {
    export class VaultedPaymentMethodResource {
      retrieve(
        vaulted_payment_method_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<RetrieveResponse>>;
    }

    export interface RetrieveResponse {
      vaulted_payment_method: VaultedPaymentMethod;
    }

    // REQUEST PARAMS
    //---------------
  }
}
