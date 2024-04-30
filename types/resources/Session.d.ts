///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface Session {
    
    id:string;
    
    content?:string;
    
    created_at:number;
    
    expires_at:number;
  }
  export namespace Session {
    export class SessionResource {  
      create(input?:CreateInputParam):ChargebeeRequest<CreateResponse>;
       
      retrieve(session_id:string, input?:RetrieveInputParam):ChargebeeRequest<RetrieveResponse>;
    }
    export interface CreateResponse {  
       session:Session;
    }
    export interface CreateInputParam {
       
      customer?:{id?:string};
       
      subscription?:{id?:string};
    }
    export interface RetrieveResponse {  
       session:Session;
       
       customer?:Customer;
       
       subscription?:Subscription;
    }
    export interface RetrieveInputParam {
       
      id?:string;
    }
    
  }
}