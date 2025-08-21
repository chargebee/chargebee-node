///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
declare module 'chargebee' {
  export interface Entitlement {
    

    id:string;

    entity_id?:string;

    entity_type?:'plan' | 'addon' | 'charge' | 'plan_price' | 'addon_price';

    feature_id?:string;

    feature_name?:string;

    value?:string;

    name?:string;

  }
  export namespace Entitlement {
    export class EntitlementResource {  
      list(input?:ListInputParam):ChargebeeRequest<ListResponse>;
       
      create(input:CreateInputParam):ChargebeeRequest<CreateResponse>;
    }
    export interface ListResponse {  
       list:{entitlement:Entitlement}[];
       
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
        * @description The &#x60;id&#x60; of the feature towards which this entitlement has been granted.

        */
        
      feature_id?:{in?:string,is?:string};
       
      /**
        * @description The &#x60;type&#x60; of the &#x60;entity&#x60; to which this entitlement belongs.

        */
        
      entity_type?:{in?:string,is?:'plan' | 'addon' | 'charge' | 'plan_price' | 'addon_price'};
       
      /**
        * @description The &#x60;id&#x60; of the &#x60;entity&#x60; to which this entitlement belongs.

        */
        
      entity_id?:{in?:string,is?:string};
       
      include_drafts?:boolean;
       
      embed?:string;
    }
    export interface CreateResponse {  
       entitlement:Entitlement;
    }
    export interface CreateInputParam {
       
      entitlements:{apply_grandfathering?:boolean,entity_id:string,entity_type?:'plan' | 'addon' | 'charge' | 'plan_price' | 'addon_price',feature_id:string,value?:string}[];
       
      action:Action;
       
      change_reason?:string;
    }
    
  }
}