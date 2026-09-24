///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
///<reference path='./filter.d.ts'/>
declare module 'chargebee' {
  export interface EmailLog {
    id: string;
    template_name?: string;
    from_address: string;
    to_address: string;
    subject: string;
    status: StatusEnum;
    sent_on?: number;
    customer_id?: string;
    site_id?: string;
    business_entity_id?: string;
    brand_id?: string;
    error_message?: string;
  }

  export namespace EmailLog {
    export class EmailLogResource {
      emailLogsForCustomer(
        customer_id: string,
        input?: EmailLogsForCustomerInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<EmailLogsForCustomerResponse>>;
    }

    export interface EmailLogsForCustomerResponse {
      list: { email_log: EmailLog }[];
      next_offset?: string;
    }

    // REQUEST PARAMS
    //---------------

    export interface EmailLogsForCustomerInputParam {
      limit?: number;
      offset?: string;
      sent_on?: filter.Timestamp;
      business_entity_id?: filter.String;
      brand_id?: filter.String;
    }
  }
}
