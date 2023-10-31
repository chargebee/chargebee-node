///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface PortalSession {
    
    /**
      * @description Unique identifier for the portal session.

      */
    
    id:string;
    
    /**
      * @description Unique pre-authenticated portal session token to access customer portal directly.

      */
    
    token:string;
    
    /**
      * @description Unique URL for accessing the customer portal. Once accessed, this cannot be reused.

      */
    
    access_url:string;
    
    /**
      * @description URL to redirect when the user logs out from the portal.

      */
    
    redirect_url?:string;
    
    /**
      * @description Indicates the current status of the portal session. \* created - Indicates that the portal session is just created and not yet accessed by the user. \* logged_out - Indicates that the portal session is logged out either by user or via API. \* not_yet_activated - Indicates that the portal session is created and not yet activated for the customer to allow access to your website. This is applicable when you use Chargebee&#x27;s authentication for your website \* activated - Indicates that the portal session is activated for the customer to allow access to your website. This is applicable when you use Chargebee&#x27;s authentication for your website. \* logged_in - Indicates that the portal session URL has been accessed by the user and the session is active.

      */
    
    status:'not_yet_activated' | 'created' | 'logged_in' | 'logged_out' | 'activated';
    
    /**
      * @description Timestamp indicating when this portal session was generated.

      */
    
    created_at:number;
    
    /**
      * @description Timestamp indicating when the access URL will expire. Once expired, the URL cannot be used to login into the portal.

      */
    
    expires_at?:number;
    
    /**
      * @description Identifier of the customer.

      */
    
    customer_id:string;
    
    /**
      * @description Timestamp indicating when this portal session URL was accessed by the user.

      */
    
    login_at?:number;
    
    /**
      * @description Timestamp indicating when this portal session was logged out either by user or via API.

      */
    
    logout_at?:number;
    
    /**
      * @description IP Address from which the portal session URL was accessed.

      */
    
    login_ipaddress?:string;
    
    /**
      * @description IP Address from which the portal session was logged out either by user or via API.

      */
    
    logout_ipaddress?:string;
    
    /**
      * @description The list of customers for this session

      */
    
    linked_customers?:PortalSession.LinkedCustomer[];
  }
  export namespace PortalSession {
    export class PortalSessionResource {  
      /**
        * @description Creates a portal session for a customer. The session resource in the response contains the access URL. Forward the customer to that access URL. If you would like to logout the customer later via API call, you need to store the id of the portal session resource returned by this API. While creating a session, you also need to pass the redirect URL to which your customers will be sent to upon logout from the portal UI.

        */
      
      create(input?:CreateInputParam):ChargebeeRequest<CreateResponse>;
       
      /**
        * @description This API retrieves a portal session using &#x60;portal_session_id&#x60; as a path parameter.

        */
      
      retrieve(portal_session_id:string):ChargebeeRequest<RetrieveResponse>;
       
      /**
        * @description Logs out the portal session. Typically this should be called when customers logout of your application.

If this API is called for a Portal Session that currently is in :

* &quot;created&quot; status, the session status will be marked as &quot;logged_out&quot; and the access URL will become invalid.
* &quot;logged_in&quot; status, the session status will be marked as &quot;logged_out&quot; and customer will not be able to use that session.
* &quot;logged_out&quot; status, this will return normally without changing any attribute of this resource.

        */
      
      logout(portal_session_id:string):ChargebeeRequest<LogoutResponse>;
       
      /**
        * @description When an user is sent back to your return URL with session details, you should validate that information by calling this API. The details passed to the **return_url** should be sent as below:

* **auth_session_id** - this should be sent as part of the endpoint.
* **auth_session_token** - this should be sent as value for the input parameter **token**.



**Note:** This API is not applicable for [in-app](https://www.chargebee.com/docs/v3-self-serve-portal.html) portal.

        */
      
      activate(portal_session_id:string, input:ActivateInputParam):ChargebeeRequest<ActivateResponse>;
    }
    export interface CreateResponse {  
       portal_session:PortalSession;
    }
    export interface CreateInputParam {
       
      /**
        * @description URL to redirect when the user logs out from the portal.

        */
       
      redirect_url?:string;
       
      /**
        * @description By default access_url redirects the customer to the portal home page. If you would like to redirect the customer to a different URL, you can use this parameter to do so.  

**Note:** This parameter is not applicable for [in-app](https://www.chargebee.com/docs/v3-self-serve-portal.html) portal.

        */
       
      forward_url?:string;
       
      /**
        * @description Parameters for customer

        */
       
      customer?:{id:string};
    }
    export interface RetrieveResponse {  
       portal_session:PortalSession;
    }
    
    export interface LogoutResponse {  
       portal_session:PortalSession;
    }
    
    export interface ActivateResponse {  
       portal_session:PortalSession;
    }
    export interface ActivateInputParam {
       
      /**
        * @description Unique pre-authenticated portal session token to access customer portal directly.

        */
       
      token:string;
    }
    export interface LinkedCustomer {  
         /**
          * @description Identifier of the customer.

          */
       
      customer_id:string;
       
         /**
          * @description Email of the customer. Configured email notifications will be sent to this email.

          */
       
      email?:string;
       
         /**
          * @description The customer has billing address.

          */
       
      has_billing_address?:boolean;
       
         /**
          * @description The customer has payment method.

          */
       
      has_payment_method?:boolean;
       
         /**
          * @description The customer has atleast one active subscription.

          */
       
      has_active_subscription?:boolean;
    }
  }
}