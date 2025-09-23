///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
declare module 'chargebee' {
  export interface Comment {
    

    id:string;

    entity_type:EntityType;

    added_by?:string;

    notes:string;

    created_at:number;

    type:'user' | 'system';

    entity_id:string;

    business_entity_id?:string;

  }
  export namespace Comment {
    export class CommentResource {  
      create(input:CreateInputParam):ChargebeeRequest<CreateResponse>;
       
      retrieve(comment_id:string):ChargebeeRequest<RetrieveResponse>;
       
      list(input?:ListInputParam):ChargebeeRequest<ListResponse>;
       
      delete(comment_id:string):ChargebeeRequest<DeleteResponse>;
    }
    export interface CreateResponse {  
       comment:Comment;
    }
    export interface CreateInputParam {
       
      entity_type:EntityType;
       
      entity_id:string;
       
      notes:string;
       
      added_by?:string;
    }
    export interface RetrieveResponse {  
       comment:Comment;
    }
    
    export interface ListResponse {  
       list:{comment:Comment}[];
       
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
       
      entity_type?:'customer' | 'subscription' | 'invoice' | 'quote' | 'credit_note' | 'transaction' | 'plan' | 'addon' | 'coupon' | 'order' | 'business_entity' | 'item_family' | 'item' | 'item_price' | 'price_variant';
       
      entity_id?:string;
       
      /**
        * @description The time at which this comment was created

        */
        
      created_at?:{after?:string,before?:string,between?:string,on?:string};
       
      sort_by?:{asc?:'created_at',desc?:'created_at'};
    }
    export interface DeleteResponse {  
       comment:Comment;
    }
    
    
  }
}