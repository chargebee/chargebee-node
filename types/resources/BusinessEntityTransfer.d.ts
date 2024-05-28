///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface BusinessEntityTransfer {
    
    id:string;
    
    resource_type:'customer' | 'subscription';
    
    resource_id:string;
    
    active_resource_id:string;
    
    destination_business_entity_id:string;
    
    source_business_entity_id:string;
    
    reason_code:'correction';
    
    created_at:number;
  }
}