///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'Chargebee' {
  export interface PortalSession {
    id: string;

    token: string;

    access_url: string;

    redirect_url?: string;

    status:
      | 'created'
      | 'logged_in'
      | 'logged_out'
      | 'not_yet_activated'
      | 'activated';

    created_at: number;

    expires_at?: number;

    customer_id: string;

    login_at?: number;

    logout_at?: number;

    login_ipaddress?: string;

    logout_ipaddress?: string;

    linked_customers?: PortalSession.LinkedCustomer[];
  }
  export namespace PortalSession {
    export class PortalSessionResource {
      create(
        input: CreateInputParam,
      ): ChargebeeRequest<ChargebeeResponse<CreateResponse>>;

      retrieve(
        portal_session_id: string,
      ): ChargebeeRequest<ChargebeeResponse<RetrieveResponse>>;

      logout(
        portal_session_id: string,
      ): ChargebeeRequest<ChargebeeResponse<LogoutResponse>>;

      activate(
        portal_session_id: string,
        input: ActivateInputParam,
      ): ChargebeeRequest<ChargebeeResponse<ActivateResponse>>;
    }
    export interface CreateResponse {
      portal_session: PortalSession;
    }

    export interface RetrieveResponse {
      portal_session: PortalSession;
    }

    export interface LogoutResponse {
      portal_session: PortalSession;
    }

    export interface ActivateResponse {
      portal_session: PortalSession;
    }

    export interface LinkedCustomer {
      customer_id: string;

      email?: string;

      has_billing_address: boolean;

      has_payment_method: boolean;

      has_active_subscription: boolean;
    }
    // REQUEST PARAMS
    //---------------

    export interface CreateInputParam {
      redirect_url?: string;
      forward_url?: string;
      customer?: CustomerCreateInputParam;
    }
    export interface ActivateInputParam {
      token: string;
    }
    export interface CustomerCreateInputParam {
      id: string;
    }
  }
}
