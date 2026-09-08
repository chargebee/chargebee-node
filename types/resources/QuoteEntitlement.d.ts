///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
///<reference path='./filter.d.ts'/>
declare module 'chargebee' {
  export interface QuoteEntitlement {
    entity_id: string;
    entity_type: 'plan_price' | 'addon_price' | 'charge_price';
    action_type: 'upsert' | 'remove';
    feature_id: string;
    value?: string;
    is_enabled: boolean;
    start_date?: number;
    end_date?: number;
    created_at: number;
    modified_at: number;
    is_overridden?: boolean;
    feature_name?: string;
    feature_unit?: string;
    feature_type?: string;
    name?: string;
    metered?: boolean;
  }

  export namespace QuoteEntitlement {
    export class QuoteEntitlementResource {
      listQuoteEntitlements(
        quote_id: string,
        input?: ListQuoteEntitlementsInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ListQuoteEntitlementsResponse>>;
    }

    export interface ListQuoteEntitlementsResponse {
      list: { quote_entitlement: QuoteEntitlement }[];
      next_offset?: string;
    }

    // REQUEST PARAMS
    //---------------

    export interface ListQuoteEntitlementsInputParam {
      limit?: number;
      offset?: string;
      entity_id?: filter.String;
      start_date?: filter.Timestamp;
      end_date?: filter.Timestamp;
    }
  }
}
