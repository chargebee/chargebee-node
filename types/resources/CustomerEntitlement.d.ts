///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
///<reference path='./filter.d.ts'/>
declare module 'chargebee' {
  export interface CustomerEntitlement {
    customer_id: string;
    subscription_id?: string;
    feature_id?: string;
    value?: string;
    name?: string;
    is_enabled: boolean;
  }

  export namespace CustomerEntitlement {
    export class CustomerEntitlementResource {
      entitlementsForCustomer(
        customer_id: string,
        input?: EntitlementsForCustomerInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<EntitlementsForCustomerResponse>>;
    }

    export interface EntitlementsForCustomerResponse {
      list: { customer_entitlement: CustomerEntitlement }[];
      next_offset?: string;
    }

    // REQUEST PARAMS
    //---------------

    export interface EntitlementsForCustomerInputParam {
      limit?: number;
      offset?: string;
    }
  }
}
