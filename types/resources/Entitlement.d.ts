///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
///<reference path='./filter.d.ts'/>
declare module 'Chargebee' {
  export interface Entitlement {
    id: string;

    entity_id?: string;

    entity_type?: 'plan' | 'addon' | 'charge' | 'plan_price' | 'addon_price';

    feature_id?: string;

    feature_name?: string;

    value?: string;

    name?: string;
  }
  export namespace Entitlement {
    export class EntitlementResource {
      list(
        input?: ListInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ListResponse>>;

      create(
        input: CreateInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<CreateResponse>>;
    }
    export interface ListResponse {
      list: { entitlement: Entitlement }[];

      next_offset?: string;
    }

    export interface CreateResponse {
      entitlement: Entitlement;
    }

    // REQUEST PARAMS
    //---------------

    export interface ListInputParam {
      limit?: number;
      offset?: string;
      feature_id?: filter.String;
      entity_type?: filter.Enum;
      entity_id?: filter.String;
      /**
       * @deprecated Please refer API docs to use other attributes
       */

      include_drafts?: boolean;
      /**
       * @deprecated Please refer API docs to use other attributes
       */

      embed?: string;
    }
    export interface CreateInputParam {
      action: Action;
      entitlements?: EntitlementsCreateInputParam[];
    }
    export interface EntitlementsCreateInputParam {
      entity_id: string;

      feature_id: string;

      entity_type?: 'plan' | 'addon' | 'charge' | 'plan_price' | 'addon_price';

      value?: string;
    }
  }
}
