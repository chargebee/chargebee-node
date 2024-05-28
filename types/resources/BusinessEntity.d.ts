///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface BusinessEntity {
    
    id:string;
    
    name:string;
    
    status:'active' | 'inactive';
    
    deleted:boolean;
    
    created_at:number;
    
    resource_version?:number;
    
    updated_at?:number;
  }
  export namespace BusinessEntity {
    export class BusinessEntityResource {  
      create_transfers(input:CreateTransfersInputParam):ChargebeeRequest<CreateTransfersResponse>;
       
      get_transfers(input?:GetTransfersInputParam):ChargebeeRequest<GetTransfersResponse>;
    }
    export interface CreateTransfersResponse {  
       business_entity_transfer:BusinessEntityTransfer;
    }
    export interface CreateTransfersInputParam {
       
      active_resource_ids:string[];
       
      destination_business_entity_ids:string[];
       
      source_business_entity_ids?:string[];
       
      resource_types:string[];
       
      reason_codes:string[];
    }
    export interface GetTransfersResponse {  
       list:{business_entity_transfer:BusinessEntityTransfer}[];
       
       next_offset?:string;
    }
    export interface GetTransfersInputParam {
      [key : string]: any;  
      /**
        * @description The number of resources to be returned.

        */
        
      limit?:number;
       
      /**
        * @description Determines your position in the list for pagination. To ensure that the next page is retrieved correctly, always set \&#x60;offset\&#x60; to the value of \&#x60;next_offset\&#x60; obtained in the previous iteration of the API call.

        */
        
      offset?:string;
       
      resource_type?:{is?:string};
       
      /**
        * @description External handle of the resource from old business entity id

        */
        
      resource_id?:{is?:string};
       
      /**
        * @description External handle of the active resource

        */
        
      active_resource_id?:{is?:string};
       
      created_at?:{after?:string,before?:string,between?:string,on?:string};
       
      sort_by?:{asc?:'created_at',desc?:'created_at'};
    }
    
  }
}