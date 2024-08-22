///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
///<reference path='./filter.d.ts'/>
declare module 'Chargebee' {
  export interface Item {
    [key: string]: any;

    id: string;

    name: string;

    external_name?: string;

    description?: string;

    status?: 'active' | 'archived' | 'deleted';

    resource_version?: number;

    updated_at?: number;

    item_family_id?: string;

    type: 'plan' | 'addon' | 'charge';

    is_shippable?: boolean;

    is_giftable: boolean;

    redirect_url?: string;

    enabled_for_checkout: boolean;

    enabled_in_portal: boolean;

    included_in_mrr?: boolean;

    item_applicability: 'all' | 'restricted';

    gift_claim_redirect_url?: string;

    unit?: string;

    metered: boolean;

    usage_calculation?: 'sum_of_usages' | 'last_usage' | 'max_usage';

    archived_at?: number;

    channel?: Channel;

    applicable_items?: Item.ApplicableItem[];

    metadata?: any;
  }
  export namespace Item {
    export class ItemResource {
      create(
        input: CreateInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<CreateResponse>>;

      retrieve(
        item_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<RetrieveResponse>>;

      update(
        item_id: string,
        input?: UpdateInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<UpdateResponse>>;

      list(
        input?: ListInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ListResponse>>;

      delete(
        item_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<DeleteResponse>>;
    }
    export interface CreateResponse {
      item: Item;
    }

    export interface RetrieveResponse {
      item: Item;
    }

    export interface UpdateResponse {
      item: Item;
    }

    export interface ListResponse {
      list: { item: Item }[];

      next_offset?: string;
    }

    export interface DeleteResponse {
      item: Item;
    }

    export interface ApplicableItem {
      id?: string;
    }
    // REQUEST PARAMS
    //---------------

    export interface CreateInputParam {
      id: string;
      name: string;
      type: 'plan' | 'addon' | 'charge';
      description?: string;
      item_family_id: string;
      is_giftable?: boolean;
      is_shippable?: boolean;
      external_name?: string;
      enabled_in_portal?: boolean;
      redirect_url?: string;
      enabled_for_checkout?: boolean;
      item_applicability?: 'all' | 'restricted';
      applicable_items?: string[];
      unit?: string;
      gift_claim_redirect_url?: string;
      included_in_mrr?: boolean;
      metered?: boolean;
      usage_calculation?: 'sum_of_usages' | 'last_usage' | 'max_usage';
      metadata?: any;
    }
    export interface UpdateInputParam {
      name?: string;
      description?: string;
      is_shippable?: boolean;
      external_name?: string;
      item_family_id?: string;
      enabled_in_portal?: boolean;
      redirect_url?: string;
      enabled_for_checkout?: boolean;
      item_applicability?: 'all' | 'restricted';
      /**
       * @deprecated Please refer API docs to use other attributes
       */

      clear_applicable_items?: boolean;
      applicable_items?: string[];
      unit?: string;
      gift_claim_redirect_url?: string;
      metadata?: any;
      included_in_mrr?: boolean;
      status?: 'active' | 'archived';
    }
    export interface ListInputParam {
      limit?: number;
      offset?: string;
      id?: filter.String;
      item_family_id?: filter.String;
      type?: filter.Enum;
      name?: filter.String;
      item_applicability?: filter.Enum;
      status?: filter.Enum;
      is_giftable?: filter.Boolean;
      updated_at?: filter.Timestamp;
      enabled_for_checkout?: filter.Boolean;
      enabled_in_portal?: filter.Boolean;
      metered?: filter.Boolean;
      usage_calculation?: filter.Enum;
      channel?: filter.Enum;
      'sort_by[asc]'?: string;
      'sort_by[desc]'?: string;
    }
  }
}
