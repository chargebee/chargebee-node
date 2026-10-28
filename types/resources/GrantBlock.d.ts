///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
///<reference path='./filter.d.ts'/>
declare module 'chargebee' {
  export interface GrantBlock {
    id: string;
    subscription_id: string;
    unit_id: string;
    unit_type: 'credit_unit';
    account_type: 'provisioned' | 'overdraft';
    granted_amount: string;
    effective_from: number;
    expires_at: number;
    balance: string;
    hold_amount: string;
    used_amount: string;
    expired_amount?: string;
    rolled_over_amount?: string;
    voided_amount?: string;
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
    provisioned_block_balance?: GrantBlock.ProvisionedBlockBalance;
    overdraft_block_balance?: GrantBlock.OverdraftBlockBalance;
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

    export interface ProvisionedBlockBalance {
      granted_amount?: string;
      total_balance?: string;
      usable_balance?: string;
      hold_amount?: string;
      used_amount?: string;
      expired_amount?: string;
      rolled_over_amount?: string;
      voided_amount?: string;
    }
    export interface OverdraftBlockBalance {
      is_unlimited: boolean;
      limit?: string;
      total_balance?: string;
      usable_balance?: string;
      used_amount?: string;
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
