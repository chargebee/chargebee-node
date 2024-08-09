///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'Chargebee' {
  export interface Contact {
    id: string;

    first_name?: string;

    last_name?: string;

    email: string;

    phone?: string;

    label?: string;

    enabled: boolean;

    send_account_email: boolean;

    send_billing_email: boolean;
  }
}
