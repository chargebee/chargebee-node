///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'chargebee' {
  export interface PromotionalGrant {
    subscription_id: string;
    unit_id: string;
    amount: string;
    expires_at: number;
    metadata?: string;
  }

  export namespace PromotionalGrant {
    export class PromotionalGrantResource {
      promotionalGrants(
        input: PromotionalGrantsInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<PromotionalGrantsResponse>>;
    }

    export interface PromotionalGrantsResponse {
      ledger_operations: LedgerOperation[];
      grant_blocks: GrantBlock[];
    }

    // REQUEST PARAMS
    //---------------

    export interface PromotionalGrantsInputParam {
      subscription_id: string;
      unit_id: string;
      amount: string;
      expires_at: number;
      metadata?: any;
    }
  }
}
