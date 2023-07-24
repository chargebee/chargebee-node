///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface SiteMigrationDetail {
    entity_id:string;
    other_site_name:string;
    entity_id_at_other_site:string;
    migrated_at:number;
    entity_type:'credit_note' | 'subscription' | 'invoice' | 'transaction' | 'customer' | 'order';
    status:'moving_out' | 'moved_in' | 'moved_out';
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
      limit?:number;
      offset?:string;
      entity_id_at_other_site?:{is?:string,is_not?:string,starts_with?:string};
      other_site_name?:{is?:string,is_not?:string,starts_with?:string};
      entity_id?:{is?:string,is_not?:string,starts_with?:string};
      entity_type?:{in?:string,is?:'credit_note' | 'subscription' | 'invoice' | 'transaction' | 'customer' | 'order',is_not?:'credit_note' | 'subscription' | 'invoice' | 'transaction' | 'customer' | 'order',not_in?:string};
      status?:{in?:string,is?:'moving_out' | 'moved_in' | 'moved_out',is_not?:'moving_out' | 'moved_in' | 'moved_out',not_in?:string};
    }
    
  }
}