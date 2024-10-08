///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
declare module 'chargebee' {
  export interface Item {
    [key : string] : any;

    id:string;

    name:string;

    external_name?:string;

    description?:string;

    status?:'active' | 'archived' | 'deleted';

    resource_version?:number;

    updated_at?:number;

    item_family_id?:string;

    type:'plan' | 'addon' | 'charge';

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

    usage_calculation?:'sum_of_usages' | 'last_usage' | 'max_usage';

    archived_at?:number;

    channel?:Channel;

    applicable_items?:Item.ApplicableItem[];

    bundle_items?:Item.BundleItem[];

    bundle_configuration?:Item.BundleConfiguration;

    metadata?:object;

  }
  export namespace Item {
    export class ItemResource {  
      create(input:CreateInputParam):ChargebeeRequest<CreateResponse>;
       
      retrieve(item_id:string):ChargebeeRequest<RetrieveResponse>;
       
      update(item_id:string, input?:UpdateInputParam):ChargebeeRequest<UpdateResponse>;
       
      list(input?:ListInputParam):ChargebeeRequest<ListResponse>;
       
      delete(item_id:string):ChargebeeRequest<DeleteResponse>;
    }
    export interface CreateResponse {  
       item:Item;
    }
    export interface CreateInputParam {
      [key : string] : any;  
      bundle_configuration?:{type?:'fixed'};
       
      bundle_items_to_add?:{item_id?:string,item_type?:ItemType,price_allocation?:number,quantity?:number}[];
       
      id:string;
       
      name:string;
       
      type:'plan' | 'addon' | 'charge';
       
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
       
      usage_calculation?:'sum_of_usages' | 'last_usage' | 'max_usage';
       
      metadata?:object;
    }
    export interface RetrieveResponse {  
       item:Item;
    }
    
    export interface UpdateResponse {  
       item:Item;
    }
    export interface UpdateInputParam {
      [key : string] : any;  
      bundle_configuration?:{type?:'fixed'};
       
      bundle_items_to_add?:{item_id?:string,item_type?:ItemType,price_allocation?:number,quantity?:number}[];
       
      bundle_items_to_update?:{item_id?:string,item_type?:ItemType,price_allocation?:number,quantity?:number}[];
       
      bundle_items_to_remove?:{item_id?:string,item_type?:ItemType}[];
       
      name?:string;
       
      description?:string;
       
      is_shippable?:boolean;
       
      external_name?:string;
       
      item_family_id?:string;
       
      enabled_in_portal?:boolean;
       
      redirect_url?:string;
       
      enabled_for_checkout?:boolean;
       
      item_applicability?:'all' | 'restricted';
       
      clear_applicable_items?:boolean;
       
      applicable_items?:string[];
       
      unit?:string;
       
      gift_claim_redirect_url?:string;
       
      metadata?:object;
       
      included_in_mrr?:boolean;
       
      status?:'active' | 'archived';
    }
    export interface ListResponse {  
       list:{item:Item}[];
       
       next_offset?:string;
    }
    export interface ListInputParam {
      [key : string]: any;  
      /**
        * @description The number of resources to be returned.

        */
        
      limit?:number;
       
      /**
        * @description Determines your position in the list for pagination. To ensure that the next page is retrieved correctly, always set \&#x60;offset\&#x60; to the value of \&#x60;next_offset\&#x60; obtained in the previous iteration of the API call.

        */
        
      offset?:string;
       
      /**
        * @description Parameters for bundle_configuration

        */
        
      bundle_configuration?:{type?:{in?:string,is?:'fixed',is_not?:'fixed',not_in?:string}};
       
      /**
        * @description Filter items based on item id.

        */
        
      id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description Filter items based on &#x60;item_family_id&#x60;.

        */
        
      item_family_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description Filter items based on item &#x60;type&#x60;.

        */
        
      type?:{in?:string,is?:'plan' | 'addon' | 'charge',is_not?:'plan' | 'addon' | 'charge',not_in?:string};
       
      /**
        * @description Filter items based on item &#x60;name&#x60;.

        */
        
      name?:{is?:string,is_not?:string,starts_with?:string};
       
      /**
        * @description Filter items based on &#x60;item_applicability&#x60;.

        */
        
      item_applicability?:{in?:string,is?:'all' | 'restricted',is_not?:'all' | 'restricted',not_in?:string};
       
      /**
        * @description Filter items based on item &#x60;status&#x60;.

        */
        
      status?:{in?:string,is?:'active' | 'archived' | 'deleted',is_not?:'active' | 'archived' | 'deleted',not_in?:string};
       
      /**
        * @description Specifies if gift subscriptions can be created for this item.

        */
        
      is_giftable?:{is?:'true' | 'false'};
       
      /**
        * @description Filter items based on when the items were last updated.

        */
        
      updated_at?:{after?:string,before?:string,between?:string,on?:string};
       
      /**
        * @description Allow the plan to subscribed to via Checkout. Applies only for plan-items.   
**Note:** Only the in-app version of Checkout is supported for Product Catalog v2.

        */
        
      enabled_for_checkout?:{is?:'true' | 'false'};
       
      /**
        * @description Allow customers to change their subscription to this plan via the [Self-Serve Portal](https://www.chargebee.com/docs/2.0/inapp-self-serve-portal.html). Applies only for plan-items. This requires the Portal configuration to [allow changing subscriptions](https://www.chargebee.com/docs/2.0/inapp-self-serve-portal.html#allow-change-subscription).

        */
        
      enabled_in_portal?:{is?:'true' | 'false'};
       
      /**
        * @description Specifies whether the item undergoes metered billing. When &#x60;true&#x60;, the quantity is calculated from [usage records](/docs/api/usages?prod_cat_ver&#x3D;2). When &#x60;false&#x60;, the &#x60;quantity&#x60; is as determined while adding an item price to the subscription. Applicable only for items of &#x60;type&#x60; &#x60;plan&#x60; or &#x60;addon&#x60; and when [Metered Billing](https://www.chargebee.com/docs/2.0/metered_billing.html) is enabled. The value of this attribute cannot be changed.

        */
        
      metered?:{is?:'true' | 'false'};
       
      /**
        * @description How the quantity is calculated from usage data for the item prices belonging to this item. Only applicable when the item is &#x60;metered&#x60;. This value overrides the one [set at the site level](https://www.chargebee.com/docs/2.0/metered_billing.html#configuring-metered-billing).

        */
        
      usage_calculation?:{in?:string,is?:'sum_of_usages' | 'last_usage' | 'max_usage',is_not?:'sum_of_usages' | 'last_usage' | 'max_usage',not_in?:string};
       
      /**
        * @description Indicates Whether a plan is grouped(bundle) or not. If it is grouped, it gives us the type of group.

        */
        
      item_grouping_category?:{in?:string,is?:'non_bundle' | 'fixed',is_not?:'non_bundle' | 'fixed',not_in?:string};
       
      /**
        * @description The subscription channel this object originated from and is maintained in.

        */
        
      channel?:{in?:string,is?:'web' | 'app_store' | 'play_store',is_not?:'web' | 'app_store' | 'play_store',not_in?:string};
       
      sort_by?:{asc?:'name' | 'id' | 'updated_at',desc?:'name' | 'id' | 'updated_at'};
    }
    export interface DeleteResponse {  
       item:Item;
    }
    
    export interface ApplicableItem {  
      id?:string;
    }
    export interface BundleItem {  
      item_id:string;
       
      item_type?:'plan' | 'addon' | 'charge';
       
      quantity?:number;
       
      price_allocation?:number;
    }
    export interface BundleConfiguration {  
      type?:'fixed';
    }
  }
}