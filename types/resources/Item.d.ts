declare module 'chargebee' {
  export interface Item {
    [key : string] : any;
    id:string;
    name:string;
    external_name?:string;
    description?:string;
    status?:'archived' | 'deleted' | 'active';
    resource_version?:number;
    updated_at?:number;
    item_family_id?:string;
    type:'charge' | 'addon' | 'plan';
    is_shippable?:boolean;
    is_giftable:boolean;
    redirect_url?:string;
    enabled_for_checkout:boolean;
    enabled_in_portal:boolean;
    included_in_mrr?:boolean;
    item_applicability:'all' | 'restricted';
    gift_claim_redirect_url?:string;
    unit?:string;
    metered:boolean;
    usage_calculation?:'max_usage' | 'sum_of_usages' | 'last_usage';
    archived_at?:number;
    channel?:Channel;
    metadata?:object;
    applicable_items?:Item.ApplicableItem[];
  }
  export namespace Item {
    export class ItemResource {
      list(input?:ListInputParam):ChargebeeRequest<ListResponse>;
      create(input:CreateInputParam):ChargebeeRequest<CreateResponse>;
      delete(item_id:string):ChargebeeRequest<DeleteResponse>;
      retrieve(item_id:string):ChargebeeRequest<RetrieveResponse>;
      update(item_id:string, input?:UpdateInputParam):ChargebeeRequest<UpdateResponse>;
    }
    export interface ListResponse {
      list:{item:Item}[];
      next_offset?:string;
    }
    export interface ListInputParam {
      [key: string]: string | number | object | boolean;
      limit?:number;
      offset?:string;
      id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
      item_family_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
      type?:{in?:string,is?:'charge' | 'addon' | 'plan',is_not?:'charge' | 'addon' | 'plan',not_in?:string};
      name?:{is?:string,is_not?:string,starts_with?:string};
      item_applicability?:{in?:string,is?:'all' | 'restricted',is_not?:'all' | 'restricted',not_in?:string};
      status?:{in?:string,is?:'archived' | 'deleted' | 'active',is_not?:'archived' | 'deleted' | 'active',not_in?:string};
      is_giftable?:{is?:'true' | 'false'};
      updated_at?:{after?:string,before?:string,between?:string,on?:string};
      enabled_for_checkout?:{is?:'true' | 'false'};
      enabled_in_portal?:{is?:'true' | 'false'};
      metered?:{is?:'true' | 'false'};
      usage_calculation?:{in?:string,is?:'max_usage' | 'sum_of_usages' | 'last_usage',is_not?:'max_usage' | 'sum_of_usages' | 'last_usage',not_in?:string};
      channel?:{in?:string,is?:'app_store' | 'web' | 'play_store',is_not?:'app_store' | 'web' | 'play_store',not_in?:string};
      sort_by?:{asc?:'updated_at' | 'name' | 'id',desc?:'updated_at' | 'name' | 'id'};
    }
    export interface CreateResponse {
      item:Item;
    }
    export interface CreateInputParam {
      [key : string] : any;
      id:string;
      name:string;
      type:'charge' | 'addon' | 'plan';
      description?:string;
      item_family_id:string;
      is_giftable?:boolean;
      is_shippable?:boolean;
      external_name?:string;
      enabled_in_portal?:boolean;
      redirect_url?:string;
      enabled_for_checkout?:boolean;
      item_applicability?:'all' | 'restricted';
      applicable_items?:string[];
      unit?:string;
      gift_claim_redirect_url?:string;
      included_in_mrr?:boolean;
      metered?:boolean;
      usage_calculation?:'max_usage' | 'sum_of_usages' | 'last_usage';
      metadata?:object;
    }
    export interface DeleteResponse {
      item:Item;
    }
    
    export interface RetrieveResponse {
      item:Item;
    }
    
    export interface UpdateResponse {
      item:Item;
    }
    export interface UpdateInputParam {
      [key : string] : any;
      name?:string;
      description?:string;
      is_shippable?:boolean;
      external_name?:string;
      item_family_id?:string;
      enabled_in_portal?:boolean;
      redirect_url?:string;
      enabled_for_checkout?:boolean;
      item_applicability?:'all' | 'restricted';
      applicable_items?:string[];
      unit?:string;
      gift_claim_redirect_url?:string;
      metadata?:object;
      included_in_mrr?:boolean;
      status?:'archived' | 'active';
    }
    export interface ApplicableItem {
      id?:string;
    }
  }
}