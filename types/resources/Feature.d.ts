///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface Feature {
    
    /**
      * @description A unique and immutable identifier for the feature. You can set it yourself, in which case it is recommended that a human-readable format (or slug) be used. For example, &#x60;number-of-users-ccjht01&#x60;. When not provided, a random value is automatically set.

      */
    
    id:string;
    
    /**
      * @description A case-sensitive unique name for the feature. For example: &#x60;user license&#x60;, &#x60;data storage&#x60;, &#x60;Salesforce Integration&#x60;, &#x60;devices&#x60;, &#x60;UHD Streaming&#x60;, and so on.   
**Note:** This name is not displayed on any customer-facing documents or pages such as [invoice PDFs](invoices#retrieve_invoice_as_pdf) or [hosted pages](hosted_pages). However, in the future, it is likely to be introduced on the [Self-Serve Portal](portal_sessions).

      */
    
    name:string;
    
    /**
      * @description A brief description of the feature. For example: &#x60;Access to 10TB cloud storage&#x60;.

      */
    
    description?:string;
    
    /**
      * @description The current status of the feature. \* active - A &#x60;draft&#x60; or an &#x60;archived&#x60; feature can be changed to &#x60;active&#x60;. Any [item](item_entitlements) or [subscription entitlements](subscription_entitlements) defined for the feature take effect immediately. \* draft - The feature is in an unpublished state. [Item](item_entitlements) and [subscription entitlements](subscription_entitlements) can be created for a draft feature but they are not effective until the feature is active. A feature &#x60;status&#x60; cannot be changed back to &#x60;draft&#x60; once it is in &#x60;active&#x60; or &#x60;archived&#x60; &#x60;status&#x60;. \* archived - An &#x60;active&#x60; feature can be changed to &#x60;archived&#x60;. Once &#x60;archived&#x60;, no **new** [item](item_entitlements) or [subscription entitlements](subscription_entitlements) can be created for the feature. However, any pre-existing item or subscription entitlements from the time that the feature was &#x60;active&#x60;, remain effective.

      */
    
    status?:'archived' | 'draft' | 'active';
    
    /**
      * @description The type of feature. \* quantity - The feature is quantity-based and entitlement levels available for it are a set of predefined number of quantity units. For example, a feature with &#x60;name&#x60; such as &#x60;number of users&#x60; can have entitlement levels of say, &#x60;5&#x60;, &#x60;20&#x60;, &#x60;50&#x60;, and &#x60;100&#x60;. &#x60;levels[is_unlimited]&#x60; is used for specifying the &quot;unlimited&quot; entitlement level. \* range - The feature is quantity-based and the entitlement levels available for it are the set of whole numbers within a range. The range is defined by a minimum and a maximum value. For example, a feature such as &#x60;number of users&#x60; can have entitlement levels starting at &#x60;5&#x60; users and go up to &#x60;50000&#x60;. &#x60;levels[is_unlimited]&#x60; is used for specifying the &quot;unlimited&quot; entitlement level. \* switch - A switch or toggle is a feature that an item or subscription can be either fully entitled to or not entitled to at all. \* custom - The entitlement levels available for this feature are defined as a set of custom values. For example, a feature &#x60;Email Support&#x60; can have entitlement levels as &#x60;24×7&#x60; and &#x60;24×5&#x60;.

      */
    
    type?:'quantity' | 'custom' | 'range' | 'switch';
    
    /**
      * @description For features of &#x60;type&#x60; &#x60;quantity&#x60; or &#x60;range&#x60;, this specifies the unit of measure. The value is expected in the singular form and when used by the system, it is pluralized automatically as needed. For example, for a feature such as &#x60;user licenses&#x60;, the &#x60;unit&#x60; can be &#x60;license&#x60;.

      */
    
    unit?:string;
    
    /**
      * @description The version number of this resource. For every change made to the resource, &#x60;resource_version&#x60; is updated with a new timestamp in milliseconds.

      */
    
    resource_version?:number;
    
    /**
      * @description The version number of this resource. For every change made to the resource, &#x60;resource_version&#x60; is updated with a new timestamp in milliseconds.

      */
    
    updated_at?:number;
    
    /**
      * @description When the feature was created.

      */
    
    created_at:number;
    
    /**
      * @description An ordered list of entitlement levels available for the feature. This is only applicable when &#x60;type&#x60; is other than &#x60;switch&#x60;.  
**Note:** When the &#x60;type&#x60; of the feature is &#x60;switch&#x60;, this is not applicable. This is because any given item (or subscription) can be either fully entitled to a &#x60;switch&#x60; feature or not entitled at all; there are no intermediate entitlement levels.

      */
    
    levels?:Feature.Level[];
  }
  export namespace Feature {
    export class FeatureResource {  
      /**
        * @description &quot;This API fetches all the available features. &quot; If the limit parameter is not set, it will return upto 10 features. &quot;

        */
      
      list(input?:ListInputParam):ChargebeeRequest<ListResponse>;
       
      /**
        * @description Creates a new feature and optionally defines the &lt;item_entitlements&gt; for it.

        */
      
      create(input:CreateInputParam):ChargebeeRequest<CreateResponse>;
       
      /**
        * @description Updates a specific feature.  
**Note**

The list of objects &#x60;levels[]&#x60; provided as part of this operation fully replaces the existing list of objects [levels[]](features#feature_levels) of the feature.

### Considerations when modifying &#x60;levels&#x60; {#considerations}

This section describes validations that are performed by Chargebee when modifying the &#x60;levels&#x60; list of objects for the feature, using this operation.

#### Adding &#x60;levels&#x60; {#adding}

Adding a new object to the &#x60;levels[]&#x60; list is allowed if and only if the feature [type](features#feature_type) is &#x60;quantity&#x60; or &#x60;custom&#x60;

#### Removing &#x60;levels&#x60; {#removing}

Removing an existing object in the &#x60;levels[]&#x60; list is not allowed if the &#x60;value&#x60; for that object is currently mapped to one or more [item_entitlement](item_entitlements)s or [subscription_entitlement](subscription_entitlements)s.

#### Reordering &#x60;levels&#x60; {#reorder}

**Note**

The validation described in this section is only applicable for features of &#x60;type&#x60; &#x60;custom&#x60;

If any of &#x60;levels[].value&#x60; are currently mapped to &#x60;item_entitlement&#x60;s or &#x60;subscription_entitlement&#x60;s, then the relative order of the corresponding &#x60;levels[].level&#x60; must be preserved when invoking this operation.

For example, consider that the &#x60;levels[]&#x60; list is currently in the state shown below. (For brevity, only the &#x60;value&#x60; and &#x60;level&#x60; key are shown here and the JSONs have been compacted.)  
&#x60; {&quot;levels&quot;:[{&quot;value&quot;:&quot;email-basic&quot;,&quot;level&quot;:0},{&quot;value&quot;:&quot;email-rise&quot;,&quot;level&quot;:1},{&quot;value&quot;:&quot;email-advanced&quot;,&quot;level&quot;:2},{&quot;value&quot;:&quot;email-pro&quot;,&quot;level&quot;:3},{&quot;value&quot;:&quot;email-scale&quot;,&quot;level&quot;:4}]} &#x60;

Now consider that &#x60;email-rise&#x60;, &#x60;email-advanced&#x60;, and &#x60;email-pro&#x60; have already been mapped to &#x60;item_entitlement&#x60;s or &#x60;subscription_entitlement&#x60;s. As seen in the above object, the relative order of &#x60;levels[].level&#x60; is such that &#x60;email-rise&#x60; \&lt; &#x60;email-advanced&#x60; \&lt; &#x60;email-pro&#x60;.

Invoking this API to change &#x60;levels[]&#x60; to the state below is allowed since the relative order of &#x60;level&#x60; corresponding to &#x60;email-rise&#x60;, &#x60;email-advanced&#x60;, and &#x60;email-pro&#x60; has been preserved.  
&#x60; {&quot;levels&quot;:[{&quot;value&quot;:&quot;email-basic&quot;,&quot;level&quot;:0},{&quot;value&quot;:&quot;email-rise&quot;,&quot;level&quot;:1},{&quot;value&quot;:&quot;email-scale&quot;,&quot;level&quot;:2},{&quot;value&quot;:&quot;email-advanced&quot;,&quot;level&quot;:3},{&quot;value&quot;:&quot;email-pro&quot;,&quot;level&quot;:4}]} &#x60;

However, changing &#x60;levels[]&#x60; to the state shown below is not permissible because the &#x60;level&#x60; of &#x60;email-advanced&#x60; is provided as greater than the &#x60;level&#x60; of &#x60;email-pro&#x60;, thereby disrupting the original order.  
&#x60; {&quot;levels&quot;:[{&quot;value&quot;:&quot;email-basic&quot;,&quot;level&quot;:0},{&quot;value&quot;:&quot;email-rise&quot;,&quot;level&quot;:1},{&quot;value&quot;:&quot;email-pro&quot;,&quot;level&quot;:2},{&quot;value&quot;:&quot;email-advanced&quot;,&quot;level&quot;:3},{&quot;value&quot;:&quot;email-scale&quot;,&quot;level&quot;:4}]} &#x60;

        */
      
      update(feature_id:string, input?:UpdateInputParam):ChargebeeRequest<UpdateResponse>;
       
      /**
        * @description Retrieve a specific feature using its id.

        */
      
      retrieve(feature_id:string):ChargebeeRequest<RetrieveResponse>;
       
      /**
        * @description Deletes a feature. Any item entitlements and subscription entitlements defined for the feature are also removed. This action is not permissible when the &#x60;status&#x60; of the feature is &#x60;active&#x60;.

        */
      
      delete(feature_id:string):ChargebeeRequest<DeleteResponse>;
       
      /**
        * @description Activates a &#x60;draft&#x60; feature so that any [item](item_entitlements) or [subscription entitlements](subscription_entitlements) defined towards it take effect immediately. This operation changes the [status](features#feature_status) of the feature to &#x60;active&#x60;. The feature &#x60;status&#x60; must be &#x60;draft&#x60; when calling this endpoint.

        */
      
      activate(feature_id:string):ChargebeeRequest<ActivateResponse>;
       
      /**
        * @description Archives an &#x60;active&#x60; feature so that no **new** [item](item_entitlements) or [subscription entitlements](subscription_entitlements) can be created towards the feature. Any pre-existing item or subscription entitlements from the time that the feature was &#x60;active&#x60; remain effective. This operation changes the [status](features#feature_status) of the feature to &#x60;archived&#x60;. The feature &#x60;status&#x60; must be &#x60;active&#x60; when calling this endpoint.

        */
      
      archive(feature_id:string):ChargebeeRequest<ArchiveResponse>;
       
      /**
        * @description Reactivates an archived feature so that **new** [item](item_entitlements) or [subscription entitlements](subscription_entitlements) can be created towards the feature. This operation changes the [status](features#feature_status) of the feature to &#x60;active&#x60;. The feature &#x60;status&#x60; must be &#x60;archived&#x60; when calling this endpoint.

        */
      
      reactivate(feature_id:string):ChargebeeRequest<ReactivateResponse>;
    }
    export interface ListResponse {  
      /**
        * @description &quot;This API fetches all the available features. &quot; If the limit parameter is not set, it will return upto 10 features. &quot;

        */
       
       list:{feature:Feature}[];
       
      /**
        * @description &quot;This API fetches all the available features. &quot; If the limit parameter is not set, it will return upto 10 features. &quot;

        */
       
       next_offset?:string;
    }
    export interface ListInputParam {
      [key : string]: any;  
      /**
        * @description &quot;This API fetches all the available features. &quot; If the limit parameter is not set, it will return upto 10 features. &quot;

        */
        
      limit?:number;
       
      /**
        * @description &quot;This API fetches all the available features. &quot; If the limit parameter is not set, it will return upto 10 features. &quot;

        */
        
      offset?:string;
       
      /**
        * @description &quot;This API fetches all the available features. &quot; If the limit parameter is not set, it will return upto 10 features. &quot;

        */
        
      name?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description &quot;This API fetches all the available features. &quot; If the limit parameter is not set, it will return upto 10 features. &quot;

        */
        
      id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description &quot;This API fetches all the available features. &quot; If the limit parameter is not set, it will return upto 10 features. &quot;

        */
        
      status?:{in?:string,is?:'archived' | 'draft' | 'active',is_not?:'archived' | 'draft' | 'active',not_in?:string};
       
      /**
        * @description &quot;This API fetches all the available features. &quot; If the limit parameter is not set, it will return upto 10 features. &quot;

        */
        
      type?:{in?:string,is?:'quantity' | 'custom' | 'range' | 'switch',is_not?:'quantity' | 'custom' | 'range' | 'switch',not_in?:string};
    }
    export interface CreateResponse {  
       feature:Feature;
    }
    export interface CreateInputParam {
      [key : string] : any;  
      /**
        * @description A unique and immutable identifier for the feature. You can set it yourself, in which case it is recommended that a human-readable format (or slug) be used. For example, &#x60;number-of-users-ccjht01&#x60;. When not provided, a random value is automatically set.

        */
       
      id?:string;
       
      /**
        * @description A case-sensitive unique name for the feature. For example: &#x60;user license&#x60;, &#x60;data storage&#x60;, &#x60;Salesforce Integration&#x60;, &#x60;devices&#x60;, &#x60;UHD Streaming&#x60;, and so on.   
**Note:** This name is not displayed on any customer-facing documents or pages such as [invoice PDFs](invoices#retrieve_invoice_as_pdf) or [hosted pages](hosted_pages). However, in the future, it is likely to be introduced on the [Self-Serve Portal](portal_sessions).

        */
       
      name:string;
       
      /**
        * @description A brief description of the feature. For example: &#x60;Access to 10TB cloud storage&#x60;.

        */
       
      description?:string;
       
      /**
        * @description The type of feature. \* quantity - The feature is quantity-based and entitlement levels available for it are a set of predefined number of quantity units. For example, a feature with &#x60;name&#x60; such as &#x60;number of users&#x60; can have entitlement levels of say, &#x60;5&#x60;, &#x60;20&#x60;, &#x60;50&#x60;, and &#x60;100&#x60;. &#x60;levels[is_unlimited]&#x60; is used for specifying the &quot;unlimited&quot; entitlement level. \* range - The feature is quantity-based and the entitlement levels available for it are the set of whole numbers within a range. The range is defined by a minimum and a maximum value. For example, a feature such as &#x60;number of users&#x60; can have entitlement levels starting at &#x60;5&#x60; users and go up to &#x60;50000&#x60;. &#x60;levels[is_unlimited]&#x60; is used for specifying the &quot;unlimited&quot; entitlement level. \* switch - A switch or toggle is a feature that an item or subscription can be either fully entitled to or not entitled to at all. \* custom - The entitlement levels available for this feature are defined as a set of custom values. For example, a feature &#x60;Email Support&#x60; can have entitlement levels as &#x60;24×7&#x60; and &#x60;24×5&#x60;.

        */
       
      type?:'quantity' | 'custom' | 'range' | 'switch';
       
      /**
        * @description The current status of the feature. \* active - A &#x60;draft&#x60; or an &#x60;archived&#x60; feature can be changed to &#x60;active&#x60;. Any [item](item_entitlements) or [subscription entitlements](subscription_entitlements) defined for the feature take effect immediately. \* draft - The feature is in an unpublished state. [Item](item_entitlements) and [subscription entitlements](subscription_entitlements) can be created for a draft feature but they are not effective until the feature is active. A feature &#x60;status&#x60; cannot be changed back to &#x60;draft&#x60; once it is in &#x60;active&#x60; or &#x60;archived&#x60; &#x60;status&#x60;. \* archived - An &#x60;active&#x60; feature can be changed to &#x60;archived&#x60;. Once &#x60;archived&#x60;, no **new** [item](item_entitlements) or [subscription entitlements](subscription_entitlements) can be created for the feature. However, any pre-existing item or subscription entitlements from the time that the feature was &#x60;active&#x60;, remain effective.

        */
       
      status?:'draft' | 'active';
       
      /**
        * @description For features of &#x60;type&#x60; &#x60;quantity&#x60; or &#x60;range&#x60;, this specifies the unit of measure. The value is expected in the singular form and when used by the system, it is pluralized automatically as needed. For example, for a feature such as &#x60;user licenses&#x60;, the &#x60;unit&#x60; can be &#x60;license&#x60;.

        */
       
      unit?:string;
       
      /**
        * @description Parameters for levels

        */
       
      levels?:{is_unlimited?:boolean,level?:number,name?:string,value?:string}[];
    }
    export interface UpdateResponse {  
       feature:Feature;
    }
    export interface UpdateInputParam {
      [key : string] : any;  
      /**
        * @description A case-sensitive unique name for the feature. For example: &#x60;user license&#x60;, &#x60;data storage&#x60;, &#x60;Salesforce Integration&#x60;, &#x60;devices&#x60;, &#x60;UHD Streaming&#x60;, and so on.   
**Note:** This name is not displayed on any customer-facing documents or pages such as [invoice PDFs](invoices#retrieve_invoice_as_pdf) or [hosted pages](hosted_pages). However, in the future, it is likely to be introduced on the [Self-Serve Portal](portal_sessions).

        */
       
      name?:string;
       
      /**
        * @description A brief description of the feature. For example: &#x60;Access to 10TB cloud storage&#x60;.

        */
       
      description?:string;
       
      /**
        * @description The current status of the feature. \* active - A &#x60;draft&#x60; or an &#x60;archived&#x60; feature can be changed to &#x60;active&#x60;. Any [item](item_entitlements) or [subscription entitlements](subscription_entitlements) defined for the feature take effect immediately. \* draft - The feature is in an unpublished state. [Item](item_entitlements) and [subscription entitlements](subscription_entitlements) can be created for a draft feature but they are not effective until the feature is active. A feature &#x60;status&#x60; cannot be changed back to &#x60;draft&#x60; once it is in &#x60;active&#x60; or &#x60;archived&#x60; &#x60;status&#x60;. \* archived - An &#x60;active&#x60; feature can be changed to &#x60;archived&#x60;. Once &#x60;archived&#x60;, no **new** [item](item_entitlements) or [subscription entitlements](subscription_entitlements) can be created for the feature. However, any pre-existing item or subscription entitlements from the time that the feature was &#x60;active&#x60;, remain effective.

        */
       
      status?:'archived' | 'draft' | 'active';
       
      /**
        * @description For features of &#x60;type&#x60; &#x60;quantity&#x60; or &#x60;range&#x60;, this specifies the unit of measure. The value is expected in the singular form and when used by the system, it is pluralized automatically as needed. For example, for a feature such as &#x60;user licenses&#x60;, the &#x60;unit&#x60; can be &#x60;license&#x60;.

        */
       
      unit?:string;
       
      /**
        * @description Parameters for levels

        */
       
      levels?:{is_unlimited?:boolean,level?:number,name?:string,value?:string}[];
    }
    export interface RetrieveResponse {  
       feature:Feature;
    }
    
    export interface DeleteResponse {  
       feature:Feature;
    }
    
    export interface ActivateResponse {  
       feature:Feature;
    }
    
    export interface ArchiveResponse {  
       feature:Feature;
    }
    
    export interface ReactivateResponse {  
       feature:Feature;
    }
    
    export interface Level {  
         /**
          * @description A case-sensitive display name for the entitlement level. Provide a name that helps you clearly identify the entitlement level. For example: a feature such as &#x60;Email Support&#x60; can have entitlement levels named as &#x60;All weekdays&#x60;, &#x60;All days&#x60;, &#x60;40 hours per week&#x60; and so on. When not provided for &#x60;feature.type&#x60; &#x60;quantity&#x60; or &#x60;range&#x60;, this name is auto-generated as the space-separated concatenation of &#x60;levels[].value&#x60; and the pluralized version of &#x60;unit&#x60;. For example, if &#x60;levels[].value&#x60; is &#x60;20&#x60; and &#x60;unit&#x60; is &#x60;user&#x60;, then &#x60;levels[].name&#x60; becomes &#x60;20 users&#x60;.

          */
       
      name?:string;
       
         /**
          * @description The value denoting the entitlement level granted.

* **When &#x60;type&#x60; is &#x60;quantity&#x60;:** this attribute denotes the quantity of units of the feature for this entitlement level. For example, a feature such as &#x60;number of users&#x60; can have &#x60;levels[].value&#x60; as &#x60;5&#x60;, &#x60;20&#x60;, &#x60;50&#x60;, and &#x60;100&#x60;. &#x60;levels[].is_unlimited&#x60; is used to set the entitlement level to &quot;unlimited&quot;.
* **When &#x60;type&#x60; is &#x60;range&#x60;:** there can be be only two elements in the &#x60;levels[]&#x60; array; one corresponding to the minimum value (&#x60;levels[0]&#x60;) and the other to the maximum value (&#x60;levels[1]&#x60;) of the range of possible entitlement levels. For example, a feature such as &#x60;number of users&#x60; may have &#x60;levels[0].value&#x60; &#x3D; &#x60;5&#x60; and &#x60;levels[1].value&#x60; &#x3D; &#x60;50000&#x60;. When the upper limit is &quot;unlimited&quot;, then &#x60;levels[1].value&#x60; is not set and &#x60;levels[1].is_unlimited&#x60; is &#x60;true&#x60;.
* **When &#x60;type&#x60; is &#x60;custom&#x60;:** this attribute denotes the value of this custom entitlement level. For example, a feature &#x60;Email Support&#x60; can have &#x60;levels[].value&#x60; as one of say, &#x60;24×7&#x60; and &#x60;24×5&#x60;.

          */
       
      value:string;
       
         /**
          * @description This attribute represents the order of the entitlement levels from lowest to highest.  

* When &#x60;type&#x60; is &#x60;quantity&#x60; or &#x60;custom&#x60;: The lowest entitlement level has the value &#x60;0&#x60;, the next higher level has the value &#x60;1&#x60;, followed by &#x60;2&#x60;, and so on.
* When &#x60;type&#x60; is &#x60;range&#x60;: This attribute is &#x60;0&#x60; for the minimum value and &#x60;1&#x60; for the maximum value in the range.

When not defined, it is assumed as the index of the &#x60;levels[]&#x60; array.

          */
       
      level:number;
       
         /**
          * @description When &#x60;type&#x60; is &#x60;quantity&#x60; or &#x60;range&#x60;, this attribute indicates whether the entitlement level corresponds to unlimited units of the feature. Possible values:

* &#x60;true&#x60;: The entitlement level corresponds to unlimited units of the feature. &#x60;levels[].value&#x60; is ignored for this level. This can only be set for the level that has the highest value for &#x60;levels[].level.&#x60;
* &#x60;false&#x60;: The entitlement level does not correspond to unlimited units of the feature.

          */
       
      is_unlimited:boolean;
    }
  }
}