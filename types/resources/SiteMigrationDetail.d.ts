///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
declare module 'chargebee' {
  export interface SiteMigrationDetail {
    

    entity_id:string;

    other_site_name:string;

    entity_id_at_other_site:string;

    migrated_at:number;

    entity_type:'customer' | 'subscription' | 'invoice' | 'credit_note' | 'transaction' | 'order';

    status:'moved_in' | 'moved_out' | 'moving_out';

  }
  export namespace SiteMigrationDetail {
    export class SiteMigrationDetailResource {  
      list(input?:ListInputParam):ChargebeeRequest<ListResponse>;
    }
    export interface ListResponse {  
       list:{site_migration_detail:SiteMigrationDetail}[];
       
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
        
      entity_type?:{in?:string,is?:'customer' | 'subscription' | 'invoice' | 'credit_note' | 'transaction' | 'order',is_not?:'customer' | 'subscription' | 'invoice' | 'credit_note' | 'transaction' | 'order',not_in?:string};
       
      /**
        * @description Status of the migration

        */
        
      status?:{in?:string,is?:'moved_in' | 'moved_out' | 'moving_out',is_not?:'moved_in' | 'moved_out' | 'moving_out',not_in?:string};
    }
    
  }
}