///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
///<reference path='./filter.d.ts'/>
declare module 'chargebee' {
  export interface BusinessRuleset {
    id: string;
    name: string;
    description?: string;
    active: boolean;
    execute_mode:
      | 'stop_on_first_true'
      | 'stop_on_first_false'
      | 'execute_all'
      | 'execute_all_true';
    updated_at: number;
    updated_by?: string;
    created_by: string;
    created_at: number;
    rules?: any;
    resource_version?: number;
  }

  export namespace BusinessRuleset {
    export class BusinessRulesetResource {
      create(
        input: CreateInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<CreateResponse>>;

      update(
        business_ruleset_id: string,
        input: UpdateInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<UpdateResponse>>;

      delete(
        business_ruleset_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<DeleteResponse>>;

      activate(
        business_ruleset_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ActivateResponse>>;

      deactivate(
        business_ruleset_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<DeactivateResponse>>;

      addRules(
        business_ruleset_id: string,
        input?: AddRulesInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<AddRulesResponse>>;

      removeRules(
        business_ruleset_id: string,
        input?: RemoveRulesInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<RemoveRulesResponse>>;

      listRules(
        business_ruleset_id: string,
        input?: ListRulesInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ListRulesResponse>>;

      list(
        input?: ListInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ListResponse>>;

      retrieve(
        business_ruleset_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<RetrieveResponse>>;
    }

    export interface CreateResponse {
      business_ruleset: BusinessRuleset;
    }

    export interface UpdateResponse {
      business_ruleset: BusinessRuleset;
    }

    export interface DeleteResponse {
      business_ruleset: BusinessRuleset;
    }

    export interface ActivateResponse {
      business_ruleset: BusinessRuleset;
    }

    export interface DeactivateResponse {
      business_ruleset: BusinessRuleset;
    }

    export interface AddRulesResponse {
      business_ruleset: BusinessRuleset;
    }

    export interface RemoveRulesResponse {
      business_ruleset: BusinessRuleset;
    }

    export interface ListRulesResponse {
      business_ruleset_rule: BusinessRulesetRule;
    }

    export interface ListResponse {
      list: { business_ruleset: BusinessRuleset }[];
      next_offset?: string;
    }

    export interface RetrieveResponse {
      business_ruleset: BusinessRuleset;
    }

    // REQUEST PARAMS
    //---------------

    export interface CreateInputParam {
      id?: string;
      name: string;
      description?: string;
      execute_mode?:
        | 'stop_on_first_true'
        | 'stop_on_first_false'
        | 'execute_all'
        | 'execute_all_true';
      rules?: any;
    }
    export interface UpdateInputParam {
      name: string;
      description?: string;
      execute_mode?:
        | 'stop_on_first_true'
        | 'stop_on_first_false'
        | 'execute_all'
        | 'execute_all_true';
      rules?: any;
      [key: `cf_${string}`]: unknown;
    }
    export interface AddRulesInputParam {
      rules?: any;
      [key: `cf_${string}`]: unknown;
    }
    export interface RemoveRulesInputParam {
      rules?: any;
      [key: `cf_${string}`]: unknown;
    }
    export interface ListRulesInputParam {
      limit?: number;
      offset?: string;
      active?: filter.Boolean;
    }
    export interface ListInputParam {
      limit?: number;
      offset?: string;
      active?: filter.Boolean;
    }
  }
}
