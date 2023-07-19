declare module 'chargebee' {
  export interface PromotionalCredit {
    
    id:string;
    customer_id:string;
    type:'decrement' | 'increment';
    amount_in_decimal?:string;
    amount:number;
    currency_code:string;
    description:string;
    credit_type:CreditType;
    reference?:string;
    closing_balance:number;
    done_by?:string;
    created_at:number;
  }
  export namespace PromotionalCredit {
    export class PromotionalCreditResource {
      retrieve(account_credit_id:string):ChargebeeRequest<RetrieveResponse>;
      list(input?:ListInputParam):ChargebeeRequest<ListResponse>;
      deduct(input:DeductInputParam):ChargebeeRequest<DeductResponse>;
      set(input:SetInputParam):ChargebeeRequest<SetResponse>;
      add(input:AddInputParam):ChargebeeRequest<AddResponse>;
    }
    export interface RetrieveResponse {
      promotional_credit:PromotionalCredit;
    }
    
    export interface ListResponse {
      list:{promotional_credit:PromotionalCredit}[];
      next_offset?:string;
    }
    export interface ListInputParam {
      [key: string]: string | number | object | boolean;
      limit?:number;
      offset?:string;
      id?:{is?:string,is_not?:string,starts_with?:string};
      created_at?:{after?:string,before?:string,between?:string,on?:string};
      type?:{in?:string,is?:'decrement' | 'increment',is_not?:'decrement' | 'increment',not_in?:string};
      customer_id?:{is?:string,is_not?:string,starts_with?:string};
    }
    export interface DeductResponse {
      customer:Customer;
      promotional_credit:PromotionalCredit;
    }
    export interface DeductInputParam {
      
      customer_id:string;
      amount?:number;
      amount_in_decimal?:string;
      currency_code?:string;
      description:string;
      credit_type?:CreditType;
      reference?:string;
    }
    export interface SetResponse {
      customer:Customer;
      promotional_credit:PromotionalCredit;
    }
    export interface SetInputParam {
      
      customer_id:string;
      amount?:number;
      amount_in_decimal?:string;
      currency_code?:string;
      description:string;
      credit_type?:CreditType;
      reference?:string;
    }
    export interface AddResponse {
      customer:Customer;
      promotional_credit:PromotionalCredit;
    }
    export interface AddInputParam {
      
      customer_id:string;
      amount?:number;
      amount_in_decimal?:string;
      currency_code?:string;
      description:string;
      credit_type?:CreditType;
      reference?:string;
    }
    
  }
}