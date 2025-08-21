///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
declare module 'chargebee' {
  export interface Feature {
    [key : string] : any;

    id:string;

    name:string;

    description?:string;

    status?:'active' | 'archived' | 'draft';

    type?:'switch' | 'custom' | 'quantity' | 'range';

    unit?:string;

    resource_version?:number;

    updated_at?:number;

    created_at:number;

    levels?:Feature.Level[];

  }
  export namespace Feature {
    export class FeatureResource {  
      list(input?:ListInputParam):ChargebeeRequest<ListResponse>;
       
      create(input:CreateInputParam):ChargebeeRequest<CreateResponse>;
       
      update(feature_id:string, input?:UpdateInputParam):ChargebeeRequest<UpdateResponse>;
       
      retrieve(feature_id:string):ChargebeeRequest<RetrieveResponse>;
       
      delete(feature_id:string):ChargebeeRequest<DeleteResponse>;
       
      activate(feature_id:string):ChargebeeRequest<ActivateResponse>;
       
      archive(feature_id:string):ChargebeeRequest<ArchiveResponse>;
       
      reactivate(feature_id:string):ChargebeeRequest<ReactivateResponse>;
    }
    export interface ListResponse {  
       list:{feature:Feature}[];
       
       next_offset?:string;
    }
    export interface ListInputParam {
      [key : string]: any;  
      /**
        * @description The number of resources to be returned.

        */
        
      limit?:number;
       
      /**
        * @description Determines your position in the list for pagination. To ensure that the next page is retrieved correctly, always set &#x27;offset&#x27; to the value of &#x27;next_offset&#x27; obtained in the previous iteration of the API call.

        */
        
      offset?:string;
       
      /**
        * @description A case-sensitive unique name for the feature. For example: &#x60;user license&#x60;, &#x60;data storage&#x60;, &#x60;Salesforce Integration&#x60;, &#x60;devices&#x60;, &#x60;UHD Streaming&#x60;, and so on.   
**Note:** This name is not displayed on any customer-facing documents or pages such as [invoice PDFs](invoices#retrieve_invoice_as_pdf) or [hosted pages](hosted_pages). However, in the future, it is likely to be introduced on the [Self-Serve Portal](portal_sessions).

        */
        
      name?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description A unique and immutable identifier for the feature. You can set it yourself, in which case it is recommended that a human-readable format (or slug) be used. For example, &#x60;number-of-users-ccjht01&#x60;. When not provided, a random value is automatically set.

        */
        
      id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description The current status of the feature.

        */
        
      status?:{in?:string,is?:'active' | 'archived' | 'draft',is_not?:'active' | 'archived' | 'draft',not_in?:string};
       
      /**
        * @description The type of feature.

        */
        
      type?:{in?:string,is?:'switch' | 'custom' | 'quantity' | 'range',is_not?:'switch' | 'custom' | 'quantity' | 'range',not_in?:string};
    }
    export interface CreateResponse {  
       feature:Feature;
    }
    export interface CreateInputParam {
       
      levels?:{is_unlimited?:boolean,level?:number,name?:string,value?:string}[];
       
      id?:string;
       
      name:string;
       
      description?:string;
       
      type?:'switch' | 'custom' | 'quantity' | 'range';
       
      unit?:string;
    }
    export interface UpdateResponse {  
       feature:Feature;
    }
    export interface UpdateInputParam {
       
      levels?:{is_unlimited?:boolean,level?:number,name?:string,value?:string}[];
       
      name?:string;
       
      description?:string;
       
      unit?:string;
    }
    export interface RetrieveResponse {  
       feature:Feature;
    }
    
    export interface DeleteResponse {  
       feature:Feature;
    }
    
    export interface ActivateResponse {  
       feature:Feature;
    }
    
    export interface ArchiveResponse {  
       feature:Feature;
    }
    
    export interface ReactivateResponse {  
       feature:Feature;
    }
    
    export interface Level {  
      name?:string;
       
      value:string;
       
      level:number;
       
      is_unlimited:boolean;
    }
  }
}