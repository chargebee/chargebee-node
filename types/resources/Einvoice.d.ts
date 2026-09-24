///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
///<reference path='./filter.d.ts'/>
declare module 'chargebee' {
  export interface Einvoice {
    id: string;
    entity_type: 'invoice' | 'credit_note';
    entity_id: string;
    reference_id?: string;
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
    created_at: number;
    resource_version?: number;
    updated_at?: number;
    deleted: boolean;
    provider_references?: any;
    business_entity_id?: string;
    artifacts?: Einvoice.Artifact[];
  }

  export namespace Einvoice {
    export class EinvoiceResource {
      retrieve(
        einvoice_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<RetrieveResponse>>;

      listEinvoices(
        input?: ListEinvoicesInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ListEinvoicesResponse>>;
    }

    export interface RetrieveResponse {
      einvoice: Einvoice;
    }

    export interface ListEinvoicesResponse {
      list: { einvoice: Einvoice }[];
      next_offset?: string;
    }

    export interface Artifact {
      artifact_type: string;
      direction: 'outbound' | 'inbound';
      status:
        | 'scheduled'
        | 'skipped'
        | 'in_progress'
        | 'success'
        | 'failed'
        | 'registered';
      code?: string;
      external_artifact_id?: string;
      created_at: number;
      resource_version?: number;
      updated_at?: number;
      deleted: boolean;
    }
    // REQUEST PARAMS
    //---------------

    export interface ListEinvoicesInputParam {
      limit?: number;
      offset?: string;
      id?: filter.String;
      reference_id?: filter.String;
      updated_at?: filter.Timestamp;
      invoice_id?: string;
      credit_note_id?: string;
      'sort_by[asc]'?: string;
      'sort_by[desc]'?: string;
    }
  }
}
