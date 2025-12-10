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
      | 'registered';
    message?: string;
  }
}
