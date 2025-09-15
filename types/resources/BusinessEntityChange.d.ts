///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'chargebee' {
  export interface BusinessEntityChange {
    id: string;
    business_entity_id: string;
    reason?: 'correction';
    active_from: number;
    active_to?: number;
    resource_type: 'customer' | 'subscription';
    modified_at: number;
    resource_id: string;
    active_resource_id: string;
  }
}
