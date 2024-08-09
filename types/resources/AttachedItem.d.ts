///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
///<reference path='./filter.d.ts'/>
declare module 'Chargebee' {
  export interface AttachedItem {
    id: string;

    parent_item_id: string;

    item_id: string;

    type: 'recommended' | 'mandatory' | 'optional';

    status?: 'active' | 'archived' | 'deleted';

    quantity?: number;

    quantity_in_decimal?: string;

    billing_cycles?: number;

    charge_on_event: ChargeOnEvent;

    charge_once: boolean;

    created_at: number;

    resource_version?: number;

    updated_at?: number;

    channel?: Channel;
  }
  export namespace AttachedItem {
    export class AttachedItemResource {
      create(
        item_id: string,
        input: CreateInputParam,
      ): ChargebeeRequest<ChargebeeResponse<CreateResponse>>;

      update(
        attached_item_id: string,
        input: UpdateInputParam,
      ): ChargebeeRequest<ChargebeeResponse<UpdateResponse>>;

      retrieve(
        attached_item_id: string,
        input: RetrieveInputParam,
      ): ChargebeeRequest<ChargebeeResponse<RetrieveResponse>>;

      delete(
        attached_item_id: string,
        input: DeleteInputParam,
      ): ChargebeeRequest<ChargebeeResponse<DeleteResponse>>;

      list(
        item_id: string,
        input?: ListInputParam,
      ): ChargebeeRequest<ChargebeeResponse<ListResponse>>;
    }
    export interface CreateResponse {
      attached_item: AttachedItem;
    }

    export interface UpdateResponse {
      attached_item: AttachedItem;
    }

    export interface RetrieveResponse {
      attached_item: AttachedItem;
    }

    export interface DeleteResponse {
      attached_item: AttachedItem;
    }

    export interface ListResponse {
      list: { attached_item: AttachedItem }[];

      next_offset?: string;
    }

    // REQUEST PARAMS
    //---------------

    export interface CreateInputParam {
      item_id: string;
      type?: 'recommended' | 'mandatory' | 'optional';
      billing_cycles?: number;
      quantity?: number;
      quantity_in_decimal?: string;
      charge_on_event?: ChargeOnEvent;
      charge_once?: boolean;
    }
    export interface UpdateInputParam {
      parent_item_id: string;
      type?: 'recommended' | 'mandatory' | 'optional';
      billing_cycles?: number;
      quantity?: number;
      quantity_in_decimal?: string;
      charge_on_event?: ChargeOnEvent;
      charge_once?: boolean;
    }
    export interface RetrieveInputParam {
      parent_item_id: string;
    }
    export interface DeleteInputParam {
      parent_item_id: string;
    }
    export interface ListInputParam {
      limit?: number;
      offset?: string;
      id?: filter.String;
      item_id?: filter.String;
      type?: filter.Enum;
      item_type?: filter.Enum;
      charge_on_event?: filter.Enum;
      updated_at?: filter.Timestamp;
    }
  }
}
