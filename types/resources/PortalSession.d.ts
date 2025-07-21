///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
declare module 'chargebee' {
  export interface PortalSession {
    

    id:string;

    token:string;

    access_url:string;

    redirect_url?:string;

    status:'created' | 'logged_in' | 'logged_out' | 'not_yet_activated' | 'activated';

    created_at:number;

    expires_at?:number;

    customer_id:string;

    login_at?:number;

    logout_at?:number;

    login_ipaddress?:string;

    logout_ipaddress?:string;

    linked_customers?:PortalSession.LinkedCustomer[];

  }
  export namespace PortalSession {
    export class PortalSessionResource {  
      create(input:CreateInputParam):ChargebeeRequest<CreateResponse>;
       
      retrieve(portal_session_id:string):ChargebeeRequest<RetrieveResponse>;
       
      logout(portal_session_id:string):ChargebeeRequest<LogoutResponse>;
       
      activate(portal_session_id:string, input:ActivateInputParam):ChargebeeRequest<ActivateResponse>;
    }
    export interface CreateResponse {  
       portal_session:PortalSession;
    }
    export interface CreateInputParam {
       
      customer:{id:string};
       
      redirect_url?:string;
       
      forward_url?:string;
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
       
      token:string;
    }
    export interface LinkedCustomer {  
      customer_id:string;
       
      email?:string;
       
      has_billing_address:boolean;
       
      has_payment_method:boolean;
       
      has_active_subscription:boolean;
    }
  }
}