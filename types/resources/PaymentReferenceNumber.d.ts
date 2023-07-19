///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface PaymentReferenceNumber {
    
    id:string;
    type:'frn' | 'kid' | 'fik' | 'ocr';
    number:string;
    invoice_id?:string;
  }
  
}