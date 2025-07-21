///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
declare module 'chargebee' {
  export interface ItemEntitlement {
    

    id:string;

    item_id?:string;

    item_type?:'plan' | 'addon' | 'charge' | 'subscription' | 'item';

    feature_id?:string;

    feature_name?:string;

    value?:string;

    name?:string;

  }
  export namespace ItemEntitlement {
    export class ItemEntitlementResource {  
      item_entitlements_for_item(item_id:string, input?:ItemEntitlementsForItemInputParam):ChargebeeRequest<ItemEntitlementsForItemResponse>;
       
      item_entitlements_for_feature(feature_id:string, input?:ItemEntitlementsForFeatureInputParam):ChargebeeRequest<ItemEntitlementsForFeatureResponse>;
       
      add_item_entitlements(feature_id:string, input:AddItemEntitlementsInputParam):ChargebeeRequest<AddItemEntitlementsResponse>;
       
      upsert_or_remove_item_entitlements_for_item(item_id:string, input:UpsertOrRemoveItemEntitlementsForItemInputParam):ChargebeeRequest<UpsertOrRemoveItemEntitlementsForItemResponse>;
    }
    export interface ItemEntitlementsForItemResponse {  
       list:{item_entitlement:ItemEntitlement}[];
       
       next_offset?:string;
    }
    export interface ItemEntitlementsForItemInputParam {
      [key : string]: any;  
      /**
        * @description The number of resources to be returned.

        */
        
      limit?:number;
       
      /**
        * @description Determines your position in the list for pagination. To ensure that the next page is retrieved correctly, always set \&#x60;offset\&#x60; to the value of \&#x60;next_offset\&#x60; obtained in the previous iteration of the API call.

        */
        
      offset?:string;
       
      include_drafts?:boolean;
       
      embed?:string;
    }
    export interface ItemEntitlementsForFeatureResponse {  
       list:{item_entitlement:ItemEntitlement}[];
       
       next_offset?:string;
    }
    export interface ItemEntitlementsForFeatureInputParam {
      [key : string]: any;  
      /**
        * @description The number of resources to be returned.

        */
        
      limit?:number;
       
      /**
        * @description Determines your position in the list for pagination. To ensure that the next page is retrieved correctly, always set \&#x60;offset\&#x60; to the value of \&#x60;next_offset\&#x60; obtained in the previous iteration of the API call.

        */
        
      offset?:string;
       
      include_drafts?:boolean;
    }
    export interface AddItemEntitlementsResponse {  
       item_entitlement:ItemEntitlement;
    }
    export interface AddItemEntitlementsInputParam {
       
      item_entitlements:{item_id:string,item_type?:'plan' | 'addon' | 'charge' | 'subscription' | 'item',value?:string}[];
       
      action:Action;
    }
    export interface UpsertOrRemoveItemEntitlementsForItemResponse {  
       item_entitlement:ItemEntitlement;
    }
    export interface UpsertOrRemoveItemEntitlementsForItemInputParam {
       
      item_entitlements:{feature_id:string,value?:string}[];
       
      action:Action;
    }
    
  }
}