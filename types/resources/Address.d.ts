///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'chargebee' {
  export interface Address {
    label: string;
    first_name?: string;
    last_name?: string;
    email?: string;
    company?: string;
    phone?: string;
    addr?: string;
    extended_addr?: string;
    extended_addr2?: string;
    city?: string;
    state_code?: string;
    state?: string;
    country?: string;
    zip?: string;
    validation_status?: ValidationStatusEnum;
    subscription_id: string;
  }

  export namespace Address {
    export class AddressResource {
      retrieve(
        input: RetrieveInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<RetrieveResponse>>;

      update(
        input: UpdateInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<UpdateResponse>>;
    }

    export interface RetrieveResponse {
      address: Address;
    }

    export interface UpdateResponse {
      address: Address;
    }

    // REQUEST PARAMS
    //---------------

    export interface RetrieveInputParam {
      subscription_id: string;
      label: string;
    }
    export interface UpdateInputParam {
      subscription_id: string;
      label: string;
      first_name?: string;
      last_name?: string;
      email?: string;
      company?: string;
      phone?: string;
      addr?: string;
      extended_addr?: string;
      extended_addr2?: string;
      city?: string;
      state_code?: string;
      state?: string;
      zip?: string;
      country?: string;
      validation_status?: ValidationStatusEnum;
    }
  }
}
