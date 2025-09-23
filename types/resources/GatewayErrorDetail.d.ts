///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
declare module 'chargebee' {
  export interface GatewayErrorDetail {
    

    request_id?:string;

    error_category?:string;

    error_code?:string;

    error_message?:string;

    decline_code?:string;

    decline_message?:string;

    network_error_code?:string;

    network_error_message?:string;

    error_field?:string;

    recommendation_code?:string;

    recommendation_message?:string;

    processor_error_code?:string;

    processor_error_message?:string;

    error_cause_id?:string;

    processor_advice_code?:string;

  }
}