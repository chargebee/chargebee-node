///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'Chargebee' {
  export interface InstallmentDetail {
    id?: string;

    invoice_id?: string;

    amount?: number;

    installments?: InstallmentDetail.Installment[];
  }
  export namespace InstallmentDetail {
    export interface Installment {
      id: string;

      invoice_id: string;

      date: number;

      amount: number;

      status: 'posted' | 'payment_due' | 'paid';

      created_at: number;

      resource_version?: number;

      updated_at?: number;
    }
    // REQUEST PARAMS
    //---------------
  }
}
