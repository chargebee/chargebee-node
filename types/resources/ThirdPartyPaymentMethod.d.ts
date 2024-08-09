///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'Chargebee' {
  export interface ThirdPartyPaymentMethod {
    type: Type;

    gateway: Gateway;

    gateway_account_id?: string;

    reference_id: string;
  }
}
