///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface ItemFamily {
    [key : string] : any;
    id:string;
    name:string;
    description?:string;
    status?:'deleted' | 'active';
    resource_version?:number;
    updated_at?:number;
    channel?:Channel;
  }
  export namespace ItemFamily {
    export class ItemFamilyResource {
      delete(item_family_id:string):ChargebeeRequest<DeleteResponse>;
      list(input?:ListInputParam):ChargebeeRequest<ListResponse>;
      create(input:CreateInputParam):ChargebeeRequest<CreateResponse>;
      retrieve(item_family_id:string):ChargebeeRequest<RetrieveResponse>;
      update(item_family_id:string, input?:UpdateInputParam):ChargebeeRequest<UpdateResponse>;
    }
    export interface DeleteResponse {
      item_family:ItemFamily;
    }
    
    export interface ListResponse {
      list:{item_family:ItemFamily}[];
      next_offset?:string;
    }
    export interface ListInputParam {
      [key: string]: string | number | object | boolean;
      limit?:number;
      offset?:string;
      id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
      name?:{is?:string,is_not?:string,starts_with?:string};
      updated_at?:{after?:string,before?:string,between?:string,on?:string};
    }
    export interface CreateResponse {
      item_family:ItemFamily;
    }
    export interface CreateInputParam {
      [key : string] : any;
      id:string;
      name:string;
      description?:string;
    }
    export interface RetrieveResponse {
      item_family:ItemFamily;
    }
    
    export interface UpdateResponse {
      item_family:ItemFamily;
    }
    export interface UpdateInputParam {
      [key : string] : any;
      name?:string;
      description?:string;
    }
    
  }
}