///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface AttachedItem {
    
    id:string;
    parent_item_id:string;
    item_id:string;
    type:'optional' | 'mandatory' | 'recommended';
    status?:'archived' | 'deleted' | 'active';
    quantity?:number;
    quantity_in_decimal?:string;
    billing_cycles?:number;
    charge_on_event:ChargeOnEvent;
    charge_once:boolean;
    created_at:number;
    resource_version?:number;
    updated_at?:number;
    channel?:Channel;
  }
  export namespace AttachedItem {
    export class AttachedItemResource {
      retrieve(attached_item_id:string, input:RetrieveInputParam):ChargebeeRequest<RetrieveResponse>;
      update(attached_item_id:string, input:UpdateInputParam):ChargebeeRequest<UpdateResponse>;
      list(item_id:string, input?:ListInputParam):ChargebeeRequest<ListResponse>;
      create(item_id:string, input:CreateInputParam):ChargebeeRequest<CreateResponse>;
      delete(attached_item_id:string, input:DeleteInputParam):ChargebeeRequest<DeleteResponse>;
    }
    export interface RetrieveResponse {
      attached_item:AttachedItem;
    }
    export interface RetrieveInputParam {
      
      parent_item_id:string;
    }
    export interface UpdateResponse {
      attached_item:AttachedItem;
    }
    export interface UpdateInputParam {
      
      parent_item_id:string;
      type?:'optional' | 'mandatory' | 'recommended';
      billing_cycles?:number;
      quantity?:number;
      quantity_in_decimal?:string;
      charge_on_event?:ChargeOnEvent;
      charge_once?:boolean;
    }
    export interface ListResponse {
      list:{attached_item:AttachedItem}[];
      next_offset?:string;
    }
    export interface ListInputParam {
      [key: string]: string | number | object | boolean;
      limit?:number;
      offset?:string;
      id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
      item_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
      type?:{in?:string,is?:'optional' | 'mandatory' | 'recommended',is_not?:'optional' | 'mandatory' | 'recommended',not_in?:string};
      item_type?:{in?:string,is?:'charge' | 'addon' | 'plan',is_not?:'charge' | 'addon' | 'plan',not_in?:string};
      charge_on_event?:{in?:string,is?:'subscription_creation' | 'subscription_activation' | 'subscription_trial_start' | 'contract_termination' | 'plan_activation' | 'on_demand',is_not?:'subscription_creation' | 'subscription_activation' | 'subscription_trial_start' | 'contract_termination' | 'plan_activation' | 'on_demand',not_in?:string};
      updated_at?:{after?:string,before?:string,between?:string,on?:string};
    }
    export interface CreateResponse {
      attached_item:AttachedItem;
    }
    export interface CreateInputParam {
      
      item_id:string;
      type?:'optional' | 'mandatory' | 'recommended';
      billing_cycles?:number;
      quantity?:number;
      quantity_in_decimal?:string;
      charge_on_event?:ChargeOnEvent;
      charge_once?:boolean;
    }
    export interface DeleteResponse {
      attached_item:AttachedItem;
    }
    export interface DeleteInputParam {
      
      parent_item_id:string;
    }
    
  }
}