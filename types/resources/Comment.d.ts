///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
///<reference path='./filter.d.ts'/>
declare module 'chargebee' {
  export interface Comment {
    id: string;

    entity_type: EntityType;

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
      ): ChargebeeRequest<ChargebeeResponse<CreateResponse>>;

      retrieve(
        comment_id: string,
      ): ChargebeeRequest<ChargebeeResponse<RetrieveResponse>>;

      list(
        input?: ListInputParam,
      ): ChargebeeRequest<ChargebeeResponse<ListResponse>>;

      delete(
        comment_id: string,
      ): ChargebeeRequest<ChargebeeResponse<DeleteResponse>>;
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
      entity_type: EntityType;
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
