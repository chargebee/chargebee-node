///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
///<reference path='./filter.d.ts'/>
declare module 'chargebee' {
  export interface OrganizationDetail {
    id: string;
    organization_name?: string;
    email?: string;
    address_line1?: string;
    address_line2?: string;
    address_line3?: string;
    city?: string;
    state_code?: string;
    state?: string;
    country_code?: string;
    zip?: string;
    phone?: string;
    fax?: string;
    website?: string;
    is_vat_number_present?: boolean;
    vat_number?: string;
    resource_version?: number;
    updated_at?: number;
    business_entity_id?: string;
  }

  export namespace OrganizationDetail {
    export class OrganizationDetailResource {
      create(
        input: CreateInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<CreateResponse>>;

      retrieve(
        organization_detail_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<RetrieveResponse>>;

      list(
        input?: ListInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ListResponse>>;
    }

    export interface CreateResponse {
      organization_detail: OrganizationDetail;
    }

    export interface RetrieveResponse {
      organization_detail: OrganizationDetail;
    }

    export interface ListResponse {
      list: { organization_detail: OrganizationDetail }[];
      next_offset?: string;
    }

    // REQUEST PARAMS
    //---------------

    export interface CreateInputParam {
      organization_name: string;
      email?: string;
      address_line1: string;
      address_line2?: string;
      address_line3?: string;
      city: string;
      state_code?: string;
      state: string;
      zip: string;
      country_code?: string;
      phone: string;
      fax?: string;
      website?: string;
      is_vat_number_present?: boolean;
      vat_number?: string;
    }
    export interface ListInputParam {
      limit?: number;
      offset?: string;
      business_entity_id?: filter.String;
    }
  }
}
