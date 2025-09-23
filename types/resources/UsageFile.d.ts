///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
declare module 'chargebee' {
  export interface UsageFile {
    

    id:string;

    name:string;

    mime_type:string;

    error_code?:string;

    error_reason?:string;

    status?:'queued' | 'imported' | 'processing' | 'processed' | 'failed';

    total_records_count?:number;

    processed_records_count?:number;

    failed_records_count?:number;

    file_size_in_bytes?:number;

    processing_started_at?:number;

    processing_completed_at?:number;

    uploaded_by?:string;

    uploaded_at?:number;

    error_file_path?:string;

    error_file_url?:string;

    upload_details?:UsageFile.UploadDetail;

  }
  export namespace UsageFile {
    export class UsageFileResource {  
      upload_url(input:UploadUrlInputParam):ChargebeeRequest<UploadUrlResponse>;
       
      processing_status(usage_file_id:string):ChargebeeRequest<ProcessingStatusResponse>;
    }
    export interface UploadUrlResponse {  
       usage_file:UsageFile;
    }
    export interface UploadUrlInputParam {
       
      file_name:string;
       
      mime_type:string;
    }
    export interface ProcessingStatusResponse {  
       usage_file:UsageFile;
    }
    
    export interface UploadDetail {  
      url:string;
       
      expires_at:number;
    }
  }
}