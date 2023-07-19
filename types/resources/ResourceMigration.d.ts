declare module 'chargebee' {
  export interface ResourceMigration {
    
    from_site:string;
    entity_type:'customer';
    entity_id:string;
    status:'scheduled' | 'failed' | 'succeeded';
    errors?:string;
    created_at:number;
    updated_at:number;
  }
  export namespace ResourceMigration {
    export class ResourceMigrationResource {
      retrieve_latest(input:RetrieveLatestInputParam):ChargebeeRequest<RetrieveLatestResponse>;
    }
    export interface RetrieveLatestResponse {
      resource_migration:ResourceMigration;
    }
    export interface RetrieveLatestInputParam {
      
      from_site:string;
      entity_type:'customer';
      entity_id:string;
    }
    
  }
}