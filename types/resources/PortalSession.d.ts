///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface PortalSession {
    id:string;
    token:string;
    access_url:string;
    redirect_url?:string;
    status:'not_yet_activated' | 'created' | 'logged_in' | 'logged_out' | 'activated';
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
      create(input?:CreateInputParam):ChargebeeRequest<CreateResponse>;
      activate(portal_session_id:string, input:ActivateInputParam):ChargebeeRequest<ActivateResponse>;
      logout(portal_session_id:string):ChargebeeRequest<LogoutResponse>;
      retrieve(portal_session_id:string):ChargebeeRequest<RetrieveResponse>;
    }
    export interface CreateResponse {
      portal_session:PortalSession;
    }
    export interface CreateInputParam {
      redirect_url?:string;
      forward_url?:string;
      customer?:{id:string};
    }
    export interface ActivateResponse {
      portal_session:PortalSession;
    }
    export interface ActivateInputParam {
      token:string;
    }
    export interface LogoutResponse {
      portal_session:PortalSession;
    }
    
    export interface RetrieveResponse {
      portal_session:PortalSession;
    }
    
    export interface LinkedCustomer {
      customer_id?:string;
      email?:string;
      has_billing_address?:boolean;
      has_payment_method?:boolean;
      has_active_subscription?:boolean;
    }
  }
}