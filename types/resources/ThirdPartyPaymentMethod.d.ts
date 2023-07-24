///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface ThirdPartyPaymentMethod {
    type:Type;
    gateway:Gateway;
    gateway_account_id?:string;
    reference_id:string;
  }
}