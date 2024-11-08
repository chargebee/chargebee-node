///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
///<reference path='./filter.d.ts'/>
declare module 'chargebee' {
  export interface Usage {
    id?: string;
    usage_date: number;
    subscription_id: string;
    item_price_id: string;
    invoice_id?: string;
    line_item_id?: string;
    quantity: string;
    source?: SourceEnum;
    note?: string;
    resource_version?: number;
    updated_at?: number;
    created_at: number;
  }

  export namespace Usage {
    export class UsageResource {
      create(
        subscription_id: string,
        input: CreateInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<CreateResponse>>;

      retrieve(
        subscription_id: string,
        input: RetrieveInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<RetrieveResponse>>;

      delete(
        subscription_id: string,
        input: DeleteInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<DeleteResponse>>;

      list(
        input?: ListInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ListResponse>>;

      pdf(
        input: PdfInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<PdfResponse>>;
    }

    export interface CreateResponse {
      usage: Usage;
    }

    export interface RetrieveResponse {
      usage: Usage;
    }

    export interface DeleteResponse {
      usage: Usage;
    }

    export interface ListResponse {
      list: { usage: Usage }[];
      next_offset?: string;
    }

    export interface PdfResponse {
      download: Download;
    }

    // REQUEST PARAMS
    //---------------

    export interface CreateInputParam {
      id?: string;
      item_price_id: string;
      quantity: string;
      usage_date: number /**
       * @deprecated Please refer API docs to use other attributes
       */;

      dedupe_option?: DedupeOptionEnum;
      note?: string;
    }
    export interface RetrieveInputParam {
      id: string;
    }
    export interface DeleteInputParam {
      id: string;
    }
    export interface ListInputParam {
      limit?: number;
      offset?: string;
      id?: filter.String;
      subscription_id?: filter.String;
      usage_date?: filter.Timestamp;
      updated_at?: filter.Timestamp;
      item_price_id?: filter.String;
      invoice_id?: filter.String;
      source?: filter.Enum;
      'sort_by[asc]'?: string;
      'sort_by[desc]'?: string;
    }
    export interface PdfInputParam {
      disposition_type?: DispositionTypeEnum;
      invoice?: InvoicePdfInputParam;
    }
    export interface InvoicePdfInputParam {
      id: string;
    }
  }
}
