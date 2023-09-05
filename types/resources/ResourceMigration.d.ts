///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface ResourceMigration {
    
    /**
      * @description Domain name to which the item is moved.

      */
    
    from_site:string;
    
    /**
      * @description Type of the entity this record is stored for \* customer - Entity that represents a customer

      */
    
    entity_type:'customer';
    
    /**
      * @description Handle of the customer in the current site.

      */
    
    entity_id:string;
    
    /**
      * @description Status of the copy customer process. \* failed - Failed \* succeeded - Succeeded \* scheduled - Scheduled

      */
    
    status:'scheduled' | 'failed' | 'succeeded';
    
    /**
      * @description Filled only if the copy operation gets failed

      */
    
    errors?:string;
    
    /**
      * @description Time the log is created

      */
    
    created_at:number;
    
    /**
      * @description Time the log is updated

      */
    
    updated_at:number;
  }
  export namespace ResourceMigration {
    export class ResourceMigrationResource {  
      /**
        * @description Gets the last migration details.

        */
      
      retrieve_latest(input:RetrieveLatestInputParam):ChargebeeRequest<RetrieveLatestResponse>;
    }
    export interface RetrieveLatestResponse {  
       resource_migration:ResourceMigration;
    }
    export interface RetrieveLatestInputParam {
       
      /**
        * @description Gets the last migration details.

        */
        
      from_site:string;
       
      /**
        * @description Gets the last migration details.

        */
        
      entity_type:'customer';
       
      /**
        * @description Gets the last migration details.

        */
        
      entity_id:string;
    }
    
  }
}