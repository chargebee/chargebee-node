///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'chargebee' {
  export interface CpqQuoteSignature {
    id: string;
    status:
      | 'draft'
      | 'active'
      | 'signed'
      | 'expired'
      | 'cancelled'
      | 'declined';
    name?: string;
    document_name?: string;
    customer_acceptance_method: 'esign_and_pay' | 'esign' | 'pay';
    quote_type: 'consolidated' | 'detailed';
    expires_at?: number;
    timezone?: string;
    provider_request_id?: string;
    provider_document_id?: string;
    created_at: number;
    modified_at: number;
  }
}
