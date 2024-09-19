///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
declare module 'chargebee' {
  export interface PaymentScheduleScheme {
    

    id:string;

    description?:string;

    number_of_schedules:number;

    period_unit:'day' | 'week' | 'month';

    period?:number;

    created_at:number;

    resource_version?:number;

    updated_at?:number;

    preferred_schedules?:PaymentScheduleScheme.PreferredSchedule[];

  }
  export namespace PaymentScheduleScheme {
    export class PaymentScheduleSchemeResource {  
      create(input:CreateInputParam):ChargebeeRequest<CreateResponse>;
       
      retrieve(payment_schedule_scheme_id:string):ChargebeeRequest<RetrieveResponse>;
       
      delete(payment_schedule_scheme_id:string):ChargebeeRequest<DeleteResponse>;
    }
    export interface CreateResponse {  
       payment_schedule_scheme:PaymentScheduleScheme;
    }
    export interface CreateInputParam {
       
      number_of_schedules:number;
       
      period_unit:'day' | 'week' | 'month';
       
      period?:number;
       
      description?:string;
    }
    export interface RetrieveResponse {  
       payment_schedule_scheme:PaymentScheduleScheme;
    }
    
    export interface DeleteResponse {  
       payment_schedule_scheme:PaymentScheduleScheme;
    }
    
    export interface PreferredSchedule {  
      period?:number;
       
      amount_percentage?:number;
    }
  }
}