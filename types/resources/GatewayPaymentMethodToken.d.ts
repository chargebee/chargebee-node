///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'chargebee' {
  export interface GatewayPaymentMethodToken {
    id: string;
    gateway_account_id: string;
    gateway: GatewayEnum;
    gateway_customer_id?: string;
    gateway_token: string;
    status: 'valid' | 'invalid' | 'pending_verification';
    created_at: number;
    updated_at?: number;
  }
}
