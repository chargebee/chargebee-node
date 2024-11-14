///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
///<reference path='./filter.d.ts'/>
declare module 'chargebee' {
  export interface Item {
    [key: string]: unknown;
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
    channel?: ChannelEnum;
    applicable_items?: Item.ApplicableItem[];
    bundle_items?: Item.BundleItem[];
    bundle_configuration?: Item.BundleConfiguration;
    metadata?: any;
    business_entity_id?: string;
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
    export interface BundleItem {
      item_id: string;
      item_type?: 'plan' | 'addon' | 'charge';
      quantity?: number;
      price_allocation?: number;
    }
    export interface BundleConfiguration {
      type?: 'fixed';
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
      business_entity_id?: string;
      bundle_configuration?: BundleConfigurationCreateInputParam;
      bundle_items_to_add?: BundleItemsToAddCreateInputParam[];
      [key: `cf_${string}`]: unknown;
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
      item_applicability?: 'all' | 'restricted' /**
       * @deprecated Please refer API docs to use other attributes
       */;

      clear_applicable_items?: boolean;
      applicable_items?: string[];
      unit?: string;
      gift_claim_redirect_url?: string;
      metadata?: any;
      included_in_mrr?: boolean;
      status?: 'active' | 'archived';
      bundle_configuration?: BundleConfigurationUpdateInputParam;
      bundle_items_to_add?: BundleItemsToAddUpdateInputParam[];
      bundle_items_to_update?: BundleItemsToUpdateUpdateInputParam[];
      bundle_items_to_remove?: BundleItemsToRemoveUpdateInputParam[];
      [key: `cf_${string}`]: unknown;
    }
    export interface ListInputParam {
      limit?: number;
      offset?: string;
      bundle_configuration?: BundleConfigurationItemListInputParam;
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
      business_entity_id?: filter.String;
      include_site_level_resources?: filter.Boolean;
      'sort_by[asc]'?: string;
      'sort_by[desc]'?: string;
    }
    export interface BundleConfigurationCreateInputParam {
      type?: 'fixed';
    }

    export interface BundleItemsToAddCreateInputParam {
      item_id?: string;
      item_type?: ItemTypeEnum;
      quantity?: number;
      price_allocation?: number;
    }
    export interface BundleConfigurationUpdateInputParam {
      type?: 'fixed';
    }

    export interface BundleItemsToAddUpdateInputParam {
      item_id?: string;
      item_type?: ItemTypeEnum;
      quantity?: number;
      price_allocation?: number;
    }
    export interface BundleItemsToUpdateUpdateInputParam {
      item_id?: string;
      item_type?: ItemTypeEnum;
      quantity?: number;
      price_allocation?: number;
    }
    export interface BundleItemsToRemoveUpdateInputParam {
      item_id?: string;
      item_type?: ItemTypeEnum;
    }
    export interface BundleConfigurationItemListInputParam {
      type?: filter.Enum;
    }
  }
}
