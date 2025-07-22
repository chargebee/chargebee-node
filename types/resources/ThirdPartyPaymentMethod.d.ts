///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'chargebee' {
  export interface ThirdPartyPaymentMethod {
    type: TypeEnum;
    gateway: GatewayEnum;
    gateway_account_id?: string;
    reference_id: string;
  }
}
