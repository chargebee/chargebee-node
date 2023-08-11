///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface PaymentReferenceNumber {
    
    /**
      * @description The &#x60;id&#x60; of the &#x60;payment_reference_number&#x60; resource is a unique identifier assigned to the PRN to track and reference in systems.

      */
    
    id:string;
    
    /**
      * @description This attribute helps &#x60;type&#x60; field in the API, specifies how to reconcile offline payments, and generate &#x60;payment_reference_number&#x60; on invoices based on country-specific rules. Setting the &#x60;type&#x60; field generates &#x60;payment_reference_number&#x60; for the respective country and includes them on the invoice for correct reconciliation. \* frn - The reference number printed on invoices in Finland is utilized by buyers for payment via bank transfer, facilitating the association of payments with invoices. \* fik - Denmark based number calculated using recursive MOD 10 algorithm. \* kid - The KID number (kundeidentifikasjon) in Norway is an abbreviation for &quot;Customer identification&quot;. It is used to associate payments with the customer and invoice. \* ocr - A OCR-based payment, contains an OCR reference, which is used to identify the vendor and the purchase document in connection with a payment. Swedish reference number can contain customer ID and/or invoice number to identify customer and invoice.

      */
    
    type:'frn' | 'kid' | 'fik' | 'ocr';
    
    /**
      * @description A number is generated based on the configuration type of the PRN during the invoice creation process.

      */
    
    number:string;
    
    /**
      * @description The &#x60;invoice_id&#x60; of the payment reference number (PRN) resource is the unique identifier assigned to the invoice that the PRN is associated with.

      */
    
    invoice_id?:string;
  }
}