///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
///<reference path='./filter.d.ts'/>
declare module 'chargebee' {
  export interface GrantBlock {
    id: string;
    subscription_id?: string;
    account_type?: 'provisioned' | 'overdraft';
    unit_id?: string;
    unit_type?: 'credit_unit';
    granted_amount: string;
    effective_from: number;
    expires_at: number;
    balance: string;
    hold_amount: string;
    used_amount: string;
    expired_amount: string;
    rolled_over_amount: string;
    voided_amount: string;
    origin_grant_block_id?: string;
    status: StatusEnum;
    grant_source:
      | 'subscription_created'
      | 'subscription_changed'
      | 'top_up'
      | 'promotional_grants'
      | 'rollover'
      | 'grant_renewal'
      | 'subscription_renewed';
    created_at: number;
    modified_at: number;
    resource_version?: number;
    metadata?: any;
  }

  export namespace GrantBlock {
    export class GrantBlockResource {
      listGrantBlocks(
        input: ListGrantBlocksInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ListGrantBlocksResponse>>;
    }

    export interface ListGrantBlocksResponse {
      list: { grant_block: GrantBlock }[];
      next_offset?: string;
    }

    // REQUEST PARAMS
    //---------------

    export interface ListGrantBlocksInputParam {
      limit?: number;
      offset?: string;
      subscription_id: filter.String;
      unit_id?: filter.String;
      account_type?: filter.Enum;
      effective_from?: filter.Timestamp;
      expires_at?: filter.Timestamp;
      created_at?: filter.Timestamp;
      'sort_by[asc]'?: string;
      'sort_by[desc]'?: string;
    }
  }
}
