///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
declare module 'chargebee' {
  export interface AttachedItem {
    

    id:string;

    parent_item_id:string;

    item_id:string;

    type:'recommended' | 'mandatory' | 'optional';

    status?:'active' | 'archived' | 'deleted';

    quantity?:number;

    quantity_in_decimal?:string;

    billing_cycles?:number;

    charge_on_event:ChargeOnEvent;

    charge_once:boolean;

    created_at:number;

    resource_version?:number;

    updated_at?:number;

    channel?:Channel;

    business_entity_id?:string;

    deleted:boolean;

  }
  export namespace AttachedItem {
    export class AttachedItemResource {  
      create(item_id:string, input:CreateInputParam):ChargebeeRequest<CreateResponse>;
       
      update(attached_item_id:string, input:UpdateInputParam):ChargebeeRequest<UpdateResponse>;
       
      retrieve(attached_item_id:string, input:RetrieveInputParam):ChargebeeRequest<RetrieveResponse>;
       
      delete(attached_item_id:string, input:DeleteInputParam):ChargebeeRequest<DeleteResponse>;
       
      list(item_id:string, input?:ListInputParam):ChargebeeRequest<ListResponse>;
    }
    export interface CreateResponse {  
       attached_item:AttachedItem;
    }
    export interface CreateInputParam {
       
      item_id:string;
       
      type?:'recommended' | 'mandatory' | 'optional';
       
      billing_cycles?:number;
       
      quantity?:number;
       
      quantity_in_decimal?:string;
       
      charge_on_event?:ChargeOnEvent;
       
      charge_once?:boolean;
       
      business_entity_id?:string;
    }
    export interface UpdateResponse {  
       attached_item:AttachedItem;
    }
    export interface UpdateInputParam {
       
      parent_item_id:string;
       
      type?:'recommended' | 'mandatory' | 'optional';
       
      billing_cycles?:number;
       
      quantity?:number;
       
      quantity_in_decimal?:string;
       
      charge_on_event?:ChargeOnEvent;
       
      charge_once?:boolean;
    }
    export interface RetrieveResponse {  
       attached_item:AttachedItem;
    }
    export interface RetrieveInputParam {
       
      parent_item_id:string;
    }
    export interface DeleteResponse {  
       attached_item:AttachedItem;
    }
    export interface DeleteInputParam {
       
      parent_item_id:string;
    }
    export interface ListResponse {  
       list:{attached_item:AttachedItem}[];
       
       next_offset?:string;
    }
    export interface ListInputParam {
      [key : string]: any;  
      /**
        * @description The number of resources to be returned.

        */
        
      limit?:number;
       
      /**
        * @description Determines your position in the list for pagination. To ensure that the next page is retrieved correctly, always set &#x27;offset&#x27; to the value of &#x27;next_offset&#x27; obtained in the previous iteration of the API call.

        */
        
      offset?:string;
       
      /**
        * @description Filter attached items based on their id.

        */
        
      id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description Filter attached items based on the &#x60;item_id&#x60; of the item being attached.

        */
        
      item_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description Filter attached items based on the &#x60;type&#x60; of attached item. Possible values are : &#x60;recommended&#x60;, &#x60;mandatory&#x60;, &#x60;optional&#x60;.

        */
        
      type?:{in?:string,is?:'recommended' | 'mandatory' | 'optional',is_not?:'recommended' | 'mandatory' | 'optional',not_in?:string};
       
      /**
        * @description To filter based on the type of of the attached item. Possible values are : &#x60;addon&#x60;, &#x60;charge&#x60;.

        */
        
      item_type?:{in?:string,is?:'plan' | 'addon' | 'charge',is_not?:'plan' | 'addon' | 'charge',not_in?:string};
       
      /**
        * @description Indicates when the item is charged. This attribute only applies to charge-items.

        */
        
      charge_on_event?:{in?:string,is?:'subscription_creation' | 'subscription_trial_start' | 'plan_activation' | 'subscription_activation' | 'contract_termination' | 'on_demand',is_not?:'subscription_creation' | 'subscription_trial_start' | 'plan_activation' | 'subscription_activation' | 'contract_termination' | 'on_demand',not_in?:string};
       
      /**
        * @description Filter attached items based on when the attached items were last updated.

        */
        
      updated_at?:{after?:string,before?:string,between?:string,on?:string};
    }
    
  }
}