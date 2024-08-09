///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'Chargebee' {
  export interface TaxWithheld {
    id: string;

    user?: string;

    reference_number?: string;

    description?: string;

    type: 'payment' | 'refund';

    payment_method: 'cash' | 'check' | 'chargeback' | 'bank_transfer' | 'other';

    date?: number;

    currency_code: string;

    amount?: number;

    resource_version?: number;

    updated_at?: number;

    exchange_rate?: number;
  }
}
