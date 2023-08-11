///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface SiteMigrationDetail {
    
    /**
      * @description Id of the entity in this site.

      */
    
    entity_id:string;
    
    /**
      * @description Site name to which the record is moved in/out.

      */
    
    other_site_name:string;
    
    /**
      * @description Entity Id of the record in the other site.

      */
    
    entity_id_at_other_site:string;
    
    /**
      * @description Date in which the record is copied

      */
    
    migrated_at:number;
    
    /**
      * @description Entity Type of the record \* order - Entity that represents an order \* customer - Entity that represents a customer \* invoice - Invoice description \* subscription - Entity that represents a subscription of a customer \* transaction - Entity that represents a transaction. \* credit_note - Credit note description

      */
    
    entity_type:'credit_note' | 'subscription' | 'invoice' | 'transaction' | 'customer' | 'order';
    
    /**
      * @description Status of the migration \* moving_out - Moving out from one cb site to another \* moved_in - Moved in from another cb site \* moved_out - Moved out from one cb site to another

      */
    
    status:'moving_out' | 'moved_in' | 'moved_out';
  }
  export namespace SiteMigrationDetail {
    export class SiteMigrationDetailResource {  
      /**
        * @description This endpoint lists the site migration details.

        */
      
      list(input?:ListInputParam):ChargebeeRequest<ListResponse>;
    }
    export interface ListResponse {  
      /**
        * @description This endpoint lists the site migration details.

        */
       
       list:{site_migration_detail:SiteMigrationDetail}[];
       
      /**
        * @description This endpoint lists the site migration details.

        */
       
       next_offset?:string;
    }
    export interface ListInputParam {
      [key : string]: any;  
      /**
        * @description The number of resources to be returned.

        */
        
      limit?:number;
       
      /**
        * @description Determines your position in the list for pagination. To ensure that the next page is retrieved correctly, always set \&#x60;offset\&#x60; to the value of \&#x60;next_offset\&#x60; obtained in the previous iteration of the API call.

        */
        
      offset?:string;
       
      /**
        * @description Entity Id of the record in the other site.

        */
        
      entity_id_at_other_site?:{is?:string,is_not?:string,starts_with?:string};
       
      /**
        * @description Site name to which the record is moved in/out.

        */
        
      other_site_name?:{is?:string,is_not?:string,starts_with?:string};
       
      /**
        * @description Id of the entity in this site.

        */
        
      entity_id?:{is?:string,is_not?:string,starts_with?:string};
       
      /**
        * @description Entity Type of the record

        */
        
      entity_type?:{in?:string,is?:'credit_note' | 'subscription' | 'invoice' | 'transaction' | 'customer' | 'order',is_not?:'credit_note' | 'subscription' | 'invoice' | 'transaction' | 'customer' | 'order',not_in?:string};
       
      /**
        * @description Status of the migration

        */
        
      status?:{in?:string,is?:'moving_out' | 'moved_in' | 'moved_out',is_not?:'moving_out' | 'moved_in' | 'moved_out',not_in?:string};
    }
    
  }
}