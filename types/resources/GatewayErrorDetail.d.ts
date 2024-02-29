///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface GatewayErrorDetail {
    
    /**
      * @description This is a unique identifier assigned by the payment gateway. It is used to track the request at the payment gateway

      */
    
    request_id?:string;
    
    /**
      * @description This parameter categorizes the type of error that occurred for the request. It helps in understanding whether the error is due to API error, validation, processing, network issues, and more

      */
    
    error_category?:string;
    
    /**
      * @description A gateway-specific code that corresponds to the particular error encountered for the request. This code can be used for identifying the error in a standardized manner across the gateway&#x27;s services

      */
    
    error_code?:string;
    
    /**
      * @description A message provided by the gateway that describes the nature of the error encountered

      */
    
    error_message?:string;
    
    /**
      * @description When a transaction is declined, this code is provided by the gateway to specify the reason for the decline

      */
    
    decline_code?:string;
    
    /**
      * @description This message gives a descriptive explanation of the reason for the transaction&#x27;s decline

      */
    
    decline_message?:string;
    
    /**
      * @description This code represents errors that originate from the payment network (such as Visa, MasterCard, and more). It is different from the gateway error code and is specific to the network&#x27;s error-handling system

      */
    
    network_error_code?:string;
    
    network_error_message?:string;
    
    /**
      * @description This parameter indicates which specific data field or attribute in the request caused the error

      */
    
    error_field?:string;
    
    /**
      * @description After an error has occurred, the gateway or payment network may provide a recommendation code. This code suggests a course of action or remedy that you can follow to resolve the issue

      */
    
    recommendation_code?:string;
    
    recommendation_message?:string;
    
    processor_error_code?:string;
    
    processor_error_message?:string;
  }
}