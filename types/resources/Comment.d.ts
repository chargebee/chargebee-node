///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface Comment {
    
    id:string;
    entity_type:EntityType;
    added_by?:string;
    notes:string;
    created_at:number;
    type:'system' | 'user';
    entity_id:string;
  }
  export namespace Comment {
    export class CommentResource {
      delete(comment_id:string):ChargebeeRequest<DeleteResponse>;
      retrieve(comment_id:string):ChargebeeRequest<RetrieveResponse>;
      list(input?:ListInputParam):ChargebeeRequest<ListResponse>;
      create(input:CreateInputParam):ChargebeeRequest<CreateResponse>;
    }
    export interface DeleteResponse {
      comment:Comment;
    }
    
    export interface RetrieveResponse {
      comment:Comment;
    }
    
    export interface ListResponse {
      list:{comment:Comment}[];
      next_offset?:string;
    }
    export interface ListInputParam {
      [key: string]: string | number | object | boolean;
      limit?:number;
      offset?:string;
      entity_type?:'item' | 'product' | 'coupon' | 'addon' | 'item_price' | 'business_entity' | 'subscription' | 'item_family' | 'credit_note' | 'quote' | 'variant' | 'invoice' | 'plan' | 'transaction' | 'customer' | 'order';
      entity_id?:string;
      created_at?:{after?:string,before?:string,between?:string,on?:string};
      sort_by?:{asc?:'created_at',desc?:'created_at'};
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
    
  }
}