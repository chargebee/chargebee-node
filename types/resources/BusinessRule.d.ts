///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
///<reference path='./filter.d.ts'/>
declare module 'chargebee' {
  export interface BusinessRule {
    id: string;
    name: string;
    description?: string;
    latest_version?: number;
    active: boolean;
    released_at?: number;
    released_by?: string;
    updated_at: number;
    updated_by?: string;
    created_by: string;
    created_at: number;
    tags?: any;
    structured_expression?: any;
    actions_on_success?: any;
    resource_version?: number;
  }

  export namespace BusinessRule {
    export class BusinessRuleResource {
      create(
        input: CreateInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<CreateResponse>>;

      delete(
        business_rule_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<DeleteResponse>>;

      updateDraft(
        business_rule_id: string,
        input: UpdateDraftInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<UpdateDraftResponse>>;

      list(
        input?: ListInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ListResponse>>;

      retrieve(
        business_rule_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<RetrieveResponse>>;

      retrieveDraft(
        business_rule_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<RetrieveDraftResponse>>;

      deleteDraft(
        business_rule_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<DeleteDraftResponse>>;

      activateRule(
        business_rule_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ActivateRuleResponse>>;

      deactivateRule(
        business_rule_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<DeactivateRuleResponse>>;

      releaseRule(
        business_rule_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ReleaseRuleResponse>>;

      applyRules(
        input?: ApplyRulesInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ApplyRulesResponse>>;
    }

    export interface CreateResponse {
      business_rule: BusinessRule;
    }

    export interface DeleteResponse {
      business_rule: BusinessRule;
    }

    export interface UpdateDraftResponse {
      business_rule: BusinessRule;
    }

    export interface ListResponse {
      list: { business_rule: BusinessRule }[];
      next_offset?: string;
    }

    export interface RetrieveResponse {
      business_rule: BusinessRule;
    }

    export interface RetrieveDraftResponse {
      business_rule: BusinessRule;
    }

    export interface DeleteDraftResponse {
      business_rule: BusinessRule;
    }

    export interface ActivateRuleResponse {
      business_rule: BusinessRule;
    }

    export interface DeactivateRuleResponse {
      business_rule: BusinessRule;
    }

    export interface ReleaseRuleResponse {
      business_rule: BusinessRule;
    }

    export interface ApplyRulesResponse {
      apply_rule: ApplyRule;
    }

    // REQUEST PARAMS
    //---------------

    export interface CreateInputParam {
      id?: string;
      name: string;
      description?: string;
      tags?: any;
      structured_expression: any;
      actions_on_success?: any;
    }
    export interface UpdateDraftInputParam {
      name: string;
      description?: string;
      tags?: any;
      structured_expression: any;
      actions_on_success?: any;
      [key: `cf_${string}`]: unknown;
    }
    export interface ListInputParam {
      limit?: number;
      offset?: string;
      draft?: filter.Boolean;
      active?: filter.Boolean;
    }
    export interface ApplyRulesInputParam {
      evaluate?: boolean;
      rule_id?: string;
      ruleset_id?: string;
      skip_failed_rules?: boolean;
      structured_expression?: any;
      context?: any;
    }
  }
}
