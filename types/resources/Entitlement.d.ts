///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface Entitlement {
    
    /**
      * @description A unique identifier for the entitlement. This is auto-generated.

      */
    
    id:string;
    
    /**
      * @description The unique identifier of the entity being granted entitlement to a specific &#x60;feature&#x60;.

      */
    
    entity_id?:string;
    
    /**
      * @description The type of the entity that holds this entitlement. \* plan -

Indicates that the entity is an &#x60;item&#x60; with [type](items?prod_cat_ver&#x3D;2#item_type) set to &#x60;plan&#x60;.
\* addon -

Indicates that the entity is an &#x60;item&#x60; with [type](items?prod_cat_ver&#x3D;2#item_type) set to &#x60;addon&#x60;.
\* addon_price -

Indicates that the entity is an &#x60;item_price&#x60; associated with an &#x60;item&#x60; with [type](items?prod_cat_ver&#x3D;2#item_type) set to &#x60;addon&#x60;.
\* charge -

Indicates that the entity is an &#x60;item&#x60; with [type](items?prod_cat_ver&#x3D;2#item_type) set to &#x60;charge&#x60;.
\* plan_price -

Indicates that the entity is an &#x60;item_price&#x60; associated with an &#x60;item&#x60; of [type](items?prod_cat_ver&#x3D;2#item_type) &#x60;plan&#x60;.

      */
    
    entity_type?:'charge' | 'addon' | 'addon_price' | 'plan_price' | 'plan';
    
    /**
      * @description The unique identifier of the &#x60;feature&#x60; to which the entity gains entitlement.

      */
    
    feature_id?:string;
    
    /**
      * @description The &#x60;name&#x60; of the feature associated with this entitlement.

      */
    
    feature_name?:string;
    
    /**
      * @description The level of entitlement that the entity has towards the feature. The possible values depend on the value of &#x60;feature.type&#x60;:

* When &#x60;feature.type&#x60; is &#x60;quantity&#x60; and:
  * If &#x60;feature.levels[is_unlimited]&#x60; is not &#x60;true&#x60; for any one of &#x60;feature.levels[]&#x60;, then the value can be any one of &#x60;feature.levels[value][]&#x60;.
  * If &#x60;feature.levels[is_unlimited]&#x60; is &#x60;true&#x60; for one of the &#x60;feature.levels[]&#x60;, then the value can be:
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
      * @description The display name for the entitlement level. The value is automatically generated based on &#x60;feature.type&#x60;:

* When &#x60;feature.type&#x60; is &#x60;quantity&#x60; or &#x60;range&#x60;, the &#x60;name&#x60; is the space-separated concatenation of &#x60;value&#x60; and the plural form of &#x60;feature.unit&#x60;. For instance, if &#x60;value&#x60; is &#x60;20&#x60; and &#x60;feature.unit&#x60; is &#x60;user&#x60;, the &#x60;name&#x60; will be &#x60;20 users&#x60;.
* When &#x60;feature.type&#x60; is &#x60;custom&#x60;, the &#x60;name&#x60; matches the &#x60;value&#x60;.

      */
    
    name?:string;
  }
  export namespace Entitlement {
    export class EntitlementResource {  
      /**
        * @description Retrieves a list of all the &#x60;entitlement&#x60;s associated with the specified &#x60;feature&#x60;.

        */
      
      list(input?:ListInputParam):ChargebeeRequest<ListResponse>;
       
      /**
        * @description Create, update, or remove a set of &#x60;entitlement&#x60;s for a feature.

The behavior depends on the specified &#x60;action&#x60;. It tries to create, update, or delete &#x60;entitlement&#x60; objects. If any of the entitlement objects fail to process, the entire operation stops with an error, and no entitlements are processed. In essence, the request processes either all the provided entitlements or none of them.

        */
      
      create(input:CreateInputParam):ChargebeeRequest<CreateResponse>;
    }
    export interface ListResponse {  
      /**
        * @description Retrieves a list of all the &#x60;entitlement&#x60;s associated with the specified &#x60;feature&#x60;.

        */
       
       list:{entitlement:Entitlement}[];
       
      /**
        * @description Retrieves a list of all the &#x60;entitlement&#x60;s associated with the specified &#x60;feature&#x60;.

        */
       
       next_offset?:string;
    }
    export interface ListInputParam {
      [key : string]: any;  
      /**
        * @description Retrieves a list of all the &#x60;entitlement&#x60;s associated with the specified &#x60;feature&#x60;.

        */
        
      limit?:number;
       
      /**
        * @description Retrieves a list of all the &#x60;entitlement&#x60;s associated with the specified &#x60;feature&#x60;.

        */
        
      offset?:string;
       
      /**
        * @description Retrieves a list of all the &#x60;entitlement&#x60;s associated with the specified &#x60;feature&#x60;.

        */
        
      feature_id?:{in?:string,is?:string};
       
      /**
        * @description Retrieves a list of all the &#x60;entitlement&#x60;s associated with the specified &#x60;feature&#x60;.

        */
        
      entity_type?:{in?:string,is?:'charge' | 'addon' | 'addon_price' | 'plan_price' | 'plan'};
       
      /**
        * @description Retrieves a list of all the &#x60;entitlement&#x60;s associated with the specified &#x60;feature&#x60;.

        */
        
      entity_id?:{in?:string,is?:string};
    }
    export interface CreateResponse {  
       entitlement:Entitlement;
    }
    export interface CreateInputParam {
       
      /**
        * @description The specific action to be performed for each &#x60;entitlement&#x60; specified. \* upsert - If the &#x60;entitlement&#x60; already exists for the &#x60;feature_id&#x60; and &#x60;entity_id&#x60; combination, the &#x60;value&#x60; of the &#x60;entitlement&#x60; is updated. If it doesn&#x27;t exist, a new &#x60;entitlement&#x60; is created. \* remove - Deletes the &#x60;entitlement&#x60; for the &#x60;feature_id&#x60; and &#x60;entity_id&#x60; combination, if it exists.

        */
       
      action:Action;
       
      /**
        * @description Parameters for entitlements

        */
       
      entitlements:{entity_id:string,entity_type?:'charge' | 'addon' | 'addon_price' | 'plan_price' | 'plan',feature_id:string,value?:string}[];
    }
    
  }
}