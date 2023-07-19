///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface ItemEntitlement {
    
    id:string;
    item_id?:string;
    item_type?:'item' | 'charge' | 'addon' | 'subscription' | 'plan';
    feature_id?:string;
    feature_name?:string;
    value?:string;
    name?:string;
  }
  export namespace ItemEntitlement {
    export class ItemEntitlementResource {
      item_entitlements_for_feature(feature_id:string, input?:ItemEntitlementsForFeatureInputParam):ChargebeeRequest<ItemEntitlementsForFeatureResponse>;
      add_item_entitlements(feature_id:string, input:AddItemEntitlementsInputParam):ChargebeeRequest<AddItemEntitlementsResponse>;
      item_entitlements_for_item(item_id:string, input?:ItemEntitlementsForItemInputParam):ChargebeeRequest<ItemEntitlementsForItemResponse>;
      upsert_or_remove_item_entitlements_for_item(item_id:string, input:UpsertOrRemoveItemEntitlementsForItemInputParam):ChargebeeRequest<UpsertOrRemoveItemEntitlementsForItemResponse>;
    }
    export interface ItemEntitlementsForFeatureResponse {
      list:{item_entitlement:ItemEntitlement}[];
      next_offset?:string;
    }
    export interface ItemEntitlementsForFeatureInputParam {
      [key: string]: string | number | object | boolean;
      limit?:number;
      offset?:string;
    }
    export interface AddItemEntitlementsResponse {
      item_entitlement:ItemEntitlement;
    }
    export interface AddItemEntitlementsInputParam {
      
      action:Action;
      item_entitlements?:{item_id:string,item_type?:'item' | 'charge' | 'addon' | 'subscription' | 'plan',value?:string}[];
    }
    export interface ItemEntitlementsForItemResponse {
      list:{item_entitlement:ItemEntitlement}[];
      next_offset?:string;
    }
    export interface ItemEntitlementsForItemInputParam {
      [key: string]: string | number | object | boolean;
      limit?:number;
      offset?:string;
    }
    export interface UpsertOrRemoveItemEntitlementsForItemResponse {
      item_entitlement:ItemEntitlement;
    }
    export interface UpsertOrRemoveItemEntitlementsForItemInputParam {
      
      action:Action;
      item_entitlements?:{feature_id:string,value?:string}[];
    }
    
  }
}