///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
///<reference path='./filter.d.ts'/>
declare module 'chargebee' {
  export interface ItemEntitlement {
    id: string;

    item_id?: string;

    item_type?: 'plan' | 'addon' | 'charge' | 'subscription' | 'item';

    feature_id?: string;

    feature_name?: string;

    value?: string;

    name?: string;
  }
  export namespace ItemEntitlement {
    export class ItemEntitlementResource {
      item_entitlements_for_item(
        item_id: string,
        input?: ItemEntitlementsForItemInputParam,
      ): ChargebeeRequest<ChargebeeResponse<ItemEntitlementsForItemResponse>>;

      item_entitlements_for_feature(
        feature_id: string,
        input?: ItemEntitlementsForFeatureInputParam,
      ): ChargebeeRequest<
        ChargebeeResponse<ItemEntitlementsForFeatureResponse>
      >;

      add_item_entitlements(
        feature_id: string,
        input: AddItemEntitlementsInputParam,
      ): ChargebeeRequest<ChargebeeResponse<AddItemEntitlementsResponse>>;

      upsert_or_remove_item_entitlements_for_item(
        item_id: string,
        input: UpsertOrRemoveItemEntitlementsForItemInputParam,
      ): ChargebeeRequest<
        ChargebeeResponse<UpsertOrRemoveItemEntitlementsForItemResponse>
      >;
    }
    export interface ItemEntitlementsForItemResponse {
      list: { item_entitlement: ItemEntitlement }[];

      next_offset?: string;
    }

    export interface ItemEntitlementsForFeatureResponse {
      list: { item_entitlement: ItemEntitlement }[];

      next_offset?: string;
    }

    export interface AddItemEntitlementsResponse {
      item_entitlement: ItemEntitlement;
    }

    export interface UpsertOrRemoveItemEntitlementsForItemResponse {
      item_entitlement: ItemEntitlement;
    }

    // REQUEST PARAMS
    //---------------

    export interface ItemEntitlementsForItemInputParam {
      limit?: number;
      offset?: string;
      /**
       * @deprecated Please refer API docs to use other attributes
       */

      include_drafts?: boolean;
      /**
       * @deprecated Please refer API docs to use other attributes
       */

      embed?: string;
    }
    export interface ItemEntitlementsForFeatureInputParam {
      limit?: number;
      offset?: string;
      /**
       * @deprecated Please refer API docs to use other attributes
       */

      include_drafts?: boolean;
    }
    export interface AddItemEntitlementsInputParam {
      action: Action;
      item_entitlements?: ItemEntitlementsAddItemEntitlementsInputParam[];
    }
    export interface UpsertOrRemoveItemEntitlementsForItemInputParam {
      action: Action;
      item_entitlements?: ItemEntitlementsUpsertOrRemoveItemEntitlementsForItemInputParam[];
    }
    export interface ItemEntitlementsAddItemEntitlementsInputParam {
      item_id: string;

      item_type?: 'plan' | 'addon' | 'charge' | 'subscription' | 'item';

      value?: string;
    }
    export interface ItemEntitlementsUpsertOrRemoveItemEntitlementsForItemInputParam {
      feature_id: string;

      value?: string;
    }
  }
}
