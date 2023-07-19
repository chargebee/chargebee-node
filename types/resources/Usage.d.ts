declare module 'chargebee' {
  export interface Usage {
    
    id?:string;
    usage_date:number;
    subscription_id:string;
    item_price_id:string;
    invoice_id?:string;
    line_item_id?:string;
    quantity:string;
    source?:Source;
    note?:string;
    resource_version?:number;
    updated_at?:number;
    created_at:number;
  }
  export namespace Usage {
    export class UsageResource {
      pdf(input?:PdfInputParam):ChargebeeRequest<PdfResponse>;
      retrieve(subscription_id:string, input:RetrieveInputParam):ChargebeeRequest<RetrieveResponse>;
      create(subscription_id:string, input:CreateInputParam):ChargebeeRequest<CreateResponse>;
      delete(subscription_id:string, input:DeleteInputParam):ChargebeeRequest<DeleteResponse>;
      list(input:ListInputParam):ChargebeeRequest<ListResponse>;
    }
    export interface PdfResponse {
      download:Download;
    }
    export interface PdfInputParam {
      
      disposition_type?:DispositionType;
      invoice?:{id:string};
    }
    export interface RetrieveResponse {
      usage:Usage;
    }
    export interface RetrieveInputParam {
      
      id:string;
    }
    export interface CreateResponse {
      usage:Usage;
    }
    export interface CreateInputParam {
      
      id?:string;
      item_price_id:string;
      quantity:string;
      usage_date:number;
      note?:string;
    }
    export interface DeleteResponse {
      usage:Usage;
    }
    export interface DeleteInputParam {
      
      id:string;
    }
    export interface ListResponse {
      list:{usage:Usage}[];
      next_offset?:string;
    }
    export interface ListInputParam {
      [key: string]: string | number | object | boolean;
      limit?:number;
      offset?:string;
      id?:{is?:string,is_not?:string,starts_with?:string};
      subscription_id:{is?:string,is_not?:string,starts_with?:string};
      usage_date?:{after?:string,before?:string,between?:string,on?:string};
      item_price_id?:{is?:string,is_not?:string,starts_with?:string};
      invoice_id?:{is?:string,is_not?:string,is_present?:'true' | 'false',starts_with?:string};
      source?:{in?:string,is?:'admin_console' | 'bulk_operation' | 'api',is_not?:'admin_console' | 'bulk_operation' | 'api',not_in?:string};
      sort_by?:{asc?:'usage_date',desc?:'usage_date'};
    }
    
  }
}