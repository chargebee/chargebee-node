declare module 'chargebee' {
  export interface Feature {
    
    id:string;
    name:string;
    description?:string;
    status?:'archived' | 'draft' | 'active';
    type?:'quantity' | 'custom' | 'range' | 'switch';
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
      delete(feature_id:string):ChargebeeRequest<DeleteResponse>;
      retrieve(feature_id:string):ChargebeeRequest<RetrieveResponse>;
      update(feature_id:string, input?:UpdateInputParam):ChargebeeRequest<UpdateResponse>;
      archive(feature_id:string):ChargebeeRequest<ArchiveResponse>;
      activate(feature_id:string):ChargebeeRequest<ActivateResponse>;
      reactivate(feature_id:string):ChargebeeRequest<ReactivateResponse>;
    }
    export interface ListResponse {
      list:{feature:Feature}[];
      next_offset?:string;
    }
    export interface ListInputParam {
      [key: string]: string | number | object | boolean;
      limit?:number;
      offset?:string;
      name?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
      id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
      status?:{in?:string,is?:'archived' | 'draft' | 'active',is_not?:'archived' | 'draft' | 'active',not_in?:string};
      type?:{in?:string,is?:'quantity' | 'custom' | 'range' | 'switch',is_not?:'quantity' | 'custom' | 'range' | 'switch',not_in?:string};
    }
    export interface CreateResponse {
      feature:Feature;
    }
    export interface CreateInputParam {
      [key : string] : any;
      id?:string;
      name:string;
      description?:string;
      type?:'quantity' | 'custom' | 'range' | 'switch';
      status?:'draft' | 'active';
      unit?:string;
      levels?:{is_unlimited?:boolean,level?:number,name?:string,value?:string}[];
    }
    export interface DeleteResponse {
      feature:Feature;
    }
    
    export interface RetrieveResponse {
      feature:Feature;
    }
    
    export interface UpdateResponse {
      feature:Feature;
    }
    export interface UpdateInputParam {
      [key : string] : any;
      name?:string;
      description?:string;
      status?:'archived' | 'draft' | 'active';
      unit?:string;
      levels?:{is_unlimited?:boolean,level?:number,name?:string,value?:string}[];
    }
    export interface ArchiveResponse {
      feature:Feature;
    }
    
    export interface ActivateResponse {
      feature:Feature;
    }
    
    export interface ReactivateResponse {
      feature:Feature;
    }
    
    export interface Level {
      name?:string;
      value?:string;
      level?:number;
      is_unlimited?:boolean;
    }
  }
}