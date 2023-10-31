///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface ItemEntitlement {
    
    /**
      * @description A unique identifier for the &#x60;item_entitlement&#x60;. This is auto-generated.

      */
    
    id:string;
    
    /**
      * @description The &#x60;id&#x60; of the &#x60;item&#x60; to which this entitlement belongs.

      */
    
    item_id?:string;
    
    /**
      * @description The &#x60;type&#x60; of the &#x60;item&#x60; to which this entitlement belongs. \* charge - Charge \* item - Item \* subscription - Subscription \* addon - Addon \* plan - Plan

      */
    
    item_type?:'item' | 'charge' | 'addon' | 'subscription' | 'plan';
    
    /**
      * @description The &#x60;id&#x60; of the feature towards which this entitlement has been granted.

      */
    
    feature_id?:string;
    
    /**
      * @description The &#x60;name&#x60; of the &#x60;feature&#x60; towards which this entitlement has been granted.

      */
    
    feature_name?:string;
    
    /**
      * @description The level of entitlement that the item has towards the feature. The possible values depend on the value of &#x60;feature.type&#x60;:

* When &#x60;feature.type&#x60; is &#x60;quantity&#x60; and:
  * If &#x60;feature.levels[is_unlimited]&#x60; is not &#x60;true&#x60; for any one of &#x60;feature.levels[]&#x60;, then the value can be any one of &#x60;feature.levels[value][]&#x60;.
  * If &#x60;feature.levels[is_unlimited]&#x60; is &#x60;true&#x60; for one of the &#x60;feature.levels[]&#x60;, then the value can also be:
    * any one of &#x60;feature.levels[value][]&#x60;
    * or it can be &#x60;unlimited&#x60; (case-insensitive), indicating unlimited entitlement.
* When &#x60;type&#x60; is &#x60;range&#x60; and:
  * If &#x60;feature.levels[is_unlimited]&#x60; is not &#x60;true&#x60; for any one of &#x60;feature.levels[]&#x60;, then the value can be any whole number between &#x60;levels[value][0]&#x60; and &#x60;levels[value][1]&#x60; (inclusive).
  * If &#x60;feature.levels[is_unlimited]&#x60; is &#x60;true&#x60; for one of the &#x60;feature.levels[]&#x60;, then the value can be:
    * any whole number equal to or greater than &#x60;levels[value][0]&#x60;
    * or it can be &#x60;unlimited&#x60; (case-insensitive), indicating unlimited entitlement.
* When &#x60;type&#x60; is &#x60;custom&#x60;, then the value can be any one of &#x60;feature.levels[value][]&#x60;.
* When &#x60;type&#x60; is &#x60;switch&#x60;, then the value is set as &#x60;available&#x60; or &#x60;true&#x60;.

      */
    
    value?:string;
    
    /**
      * @description The display name for the entitlement level. The default values are auto-generated based on &#x60;feature.type&#x60; as follows:

* When &#x60;feature.type&#x60; is &#x60;quantity&#x60; or &#x60;range&#x60;, then &#x60;name&#x60; is the space-separated concatenation of &#x60;value&#x60; and the pluralized version of &#x60;feature.unit&#x60;. For example, if &#x60;value&#x60; is &#x60;20&#x60; and &#x60;feature.unit&#x60; is &#x60;user&#x60;, then &#x60;name&#x60; becomes &#x60;20 users&#x60;.
* When &#x60;feature.type&#x60; is &#x60;custom&#x60;, then &#x60;name&#x60; is the same as &#x60;value&#x60;.a

      */
    
    name?:string;
  }
  export namespace ItemEntitlement {
    export class ItemEntitlementResource {  
      /**
        * @description Retrieves a list of all the &#x60;item_entitlements&#x60; for the &#x60;item&#x60; specified.

        */
      
      item_entitlements_for_item(item_id:string, input?:ItemEntitlementsForItemInputParam):ChargebeeRequest<ItemEntitlementsForItemResponse>;
       
      /**
        * @description Retrieves a list of all the &#x60;item_entitlement&#x60;s for the &#x60;feature&#x60; specified.

        */
      
      item_entitlements_for_feature(feature_id:string, input?:ItemEntitlementsForFeatureInputParam):ChargebeeRequest<ItemEntitlementsForFeatureResponse>;
       
      /**
        * @description Upserts or removes a set of &#x60;item_entitlement&#x60;s for an &#x60;feature&#x60; depending on the &#x60;action&#x60; specified. The API returns the upserted or deleted &#x60;item_entitlements&#x60; after successfully completing the operation. The operation returns an error when the first &#x60;item_entitlement&#x60; fails to be processed. Either all the &#x60;item_entitlement&#x60;s provided in the request are processed or none.

        */
      
      add_item_entitlements(feature_id:string, input:AddItemEntitlementsInputParam):ChargebeeRequest<AddItemEntitlementsResponse>;
       
      /**
        * @description Upserts or removes a set of &#x60;item_entitlements&#x60; for an [item](items?prod_cat_ver&#x3D;2) depending on the &#x60;action&#x60; specified. The API returns the upserted or deleted &#x60;item_entitlements&#x60; after successfully completing the operation. The operation returns an error when the first &#x60;item_entitlement&#x60; fails to be processed. Either all the &#x60;item_entitlement&#x60;s provided in the request are processed or none.

        */
      
      upsert_or_remove_item_entitlements_for_item(item_id:string, input:UpsertOrRemoveItemEntitlementsForItemInputParam):ChargebeeRequest<UpsertOrRemoveItemEntitlementsForItemResponse>;
    }
    export interface ItemEntitlementsForItemResponse {  
      /**
        * @description Retrieves a list of all the &#x60;item_entitlements&#x60; for the &#x60;item&#x60; specified.

        */
       
       list:{item_entitlement:ItemEntitlement}[];
       
      /**
        * @description Retrieves a list of all the &#x60;item_entitlements&#x60; for the &#x60;item&#x60; specified.

        */
       
       next_offset?:string;
    }
    export interface ItemEntitlementsForItemInputParam {
      [key : string]: any;  
      /**
        * @description Retrieves a list of all the &#x60;item_entitlements&#x60; for the &#x60;item&#x60; specified.

        */
        
      limit?:number;
       
      /**
        * @description Retrieves a list of all the &#x60;item_entitlements&#x60; for the &#x60;item&#x60; specified.

        */
        
      offset?:string;
    }
    export interface ItemEntitlementsForFeatureResponse {  
      /**
        * @description Retrieves a list of all the &#x60;item_entitlement&#x60;s for the &#x60;feature&#x60; specified.

        */
       
       list:{item_entitlement:ItemEntitlement}[];
       
      /**
        * @description Retrieves a list of all the &#x60;item_entitlement&#x60;s for the &#x60;feature&#x60; specified.

        */
       
       next_offset?:string;
    }
    export interface ItemEntitlementsForFeatureInputParam {
      [key : string]: any;  
      /**
        * @description Retrieves a list of all the &#x60;item_entitlement&#x60;s for the &#x60;feature&#x60; specified.

        */
        
      limit?:number;
       
      /**
        * @description Retrieves a list of all the &#x60;item_entitlement&#x60;s for the &#x60;feature&#x60; specified.

        */
        
      offset?:string;
    }
    export interface AddItemEntitlementsResponse {  
       item_entitlement:ItemEntitlement;
    }
    export interface AddItemEntitlementsInputParam {
       
      /**
        * @description The specific action to be performed for each &#x60;item_entitlement&#x60; specified. \* remove - Deletes the &#x60;item_entitlement&#x60; for the &#x60;feature_id&#x60; and &#x60;item_id&#x60; combination, if it exists. \* upsert - If the &#x60;item_entitlement&#x60; already exists for the &#x60;feature_id&#x60; and &#x60;item_id&#x60; combination, the &#x60;value&#x60; of the &#x60;item_entitlement&#x60; is updated. If it doesn&#x27;t exist, a new &#x60;item_entitelment&#x60; is created.

        */
       
      action:Action;
       
      /**
        * @description Parameters for item_entitlements

        */
       
      item_entitlements?:{item_id:string,item_type?:'item' | 'charge' | 'addon' | 'subscription' | 'plan',value?:string}[];
    }
    export interface UpsertOrRemoveItemEntitlementsForItemResponse {  
       item_entitlement:ItemEntitlement;
    }
    export interface UpsertOrRemoveItemEntitlementsForItemInputParam {
       
      /**
        * @description The specific action to be performed for each &#x60;item_entitlement&#x60; specified. \* remove - Deletes the &#x60;item_entitlement&#x60; for the &#x60;feature_id&#x60; and &#x60;item_id&#x60; combination, if it exists. \* upsert - If the &#x60;item_entitlement&#x60; already exists for the &#x60;feature_id&#x60; and &#x60;item_id&#x60; combination, the &#x60;value&#x60; of the &#x60;item_entitlement&#x60; is updated. If it doesn&#x27;t exist, a new &#x60;item_entitelment&#x60; is created.

        */
       
      action:Action;
       
      /**
        * @description Parameters for item_entitlements

        */
       
      item_entitlements?:{feature_id:string,value?:string}[];
    }
    
  }
}