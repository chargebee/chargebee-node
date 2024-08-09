///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'Chargebee' {
  export interface PaymentReferenceNumber {
    id: string;

    type: 'kid' | 'ocr' | 'frn' | 'fik' | 'swiss_reference';

    number: string;

    invoice_id?: string;
  }
}
