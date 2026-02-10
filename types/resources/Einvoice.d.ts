///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'chargebee' {
  export interface Einvoice {
    id: string;
    reference_number?: string;
    status:
      | 'scheduled'
      | 'skipped'
      | 'in_progress'
      | 'success'
      | 'failed'
      | 'registered'
      | 'accepted'
      | 'rejected'
      | 'message_acknowledgement'
      | 'in_process'
      | 'under_query'
      | 'conditionally_accepted'
      | 'paid';
    message?: string;
  }
}
