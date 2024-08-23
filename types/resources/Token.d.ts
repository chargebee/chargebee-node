///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'chargebee' {
  export interface Token {
    id: string;

    gateway: Gateway;

    gateway_account_id: string;

    payment_method_type: PaymentMethodType;

    status: 'new' | 'expired' | 'consumed';

    id_at_vault: string;

    vault: 'spreedly' | 'gateway';

    ip_address?: string;

    resource_version?: number;

    updated_at?: number;

    created_at: number;

    expired_at?: number;
  }
}
