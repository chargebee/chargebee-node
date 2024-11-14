///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
///<reference path='./filter.d.ts'/>
declare module 'chargebee' {
  export interface Comment {
    id: string;
    entity_type: EntityTypeEnum;
    added_by?: string;
    notes: string;
    created_at: number;
    type: 'user' | 'system';
    entity_id: string;
  }

  export namespace Comment {
    export class CommentResource {
      create(
        input: CreateInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<CreateResponse>>;

      retrieve(
        comment_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<RetrieveResponse>>;

      list(
        input?: ListInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ListResponse>>;

      delete(
        comment_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<DeleteResponse>>;
    }

    export interface CreateResponse {
      comment: Comment;
    }

    export interface RetrieveResponse {
      comment: Comment;
    }

    export interface ListResponse {
      list: { comment: Comment }[];
      next_offset?: string;
    }

    export interface DeleteResponse {
      comment: Comment;
    }

    // REQUEST PARAMS
    //---------------

    export interface CreateInputParam {
      entity_type: EntityTypeEnum;
      entity_id: string;
      notes: string;
      added_by?: string;
    }
    export interface ListInputParam {
      limit?: number;
      offset?: string;
      entity_type?:
        | 'customer'
        | 'subscription'
        | 'invoice'
        | 'quote'
        | 'credit_note'
        | 'transaction'
        | 'plan'
        | 'addon'
        | 'coupon'
        | 'order'
        | 'business_entity'
        | 'omnichannel_subscription'
        | 'omnichannel_subscription_item'
        | 'omnichannel_transaction'
        | 'item_family'
        | 'item'
        | 'item_price'
        | 'price_variant';
      entity_id?: string;
      created_at?: filter.Timestamp;
      'sort_by[asc]'?: string;
      'sort_by[desc]'?: string;
    }
  }
}
