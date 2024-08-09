///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
///<reference path='./filter.d.ts'/>
declare module 'Chargebee' {
  export interface SiteMigrationDetail {
    entity_id: string;

    other_site_name: string;

    entity_id_at_other_site: string;

    migrated_at: number;

    entity_type:
      | 'customer'
      | 'subscription'
      | 'invoice'
      | 'credit_note'
      | 'transaction'
      | 'order';

    status: 'moved_in' | 'moved_out' | 'moving_out';
  }
  export namespace SiteMigrationDetail {
    export class SiteMigrationDetailResource {
      list(
        input?: ListInputParam,
      ): ChargebeeRequest<ChargebeeResponse<ListResponse>>;
    }
    export interface ListResponse {
      list: { site_migration_detail: SiteMigrationDetail }[];

      next_offset?: string;
    }

    // REQUEST PARAMS
    //---------------

    export interface ListInputParam {
      limit?: number;
      offset?: string;
      entity_id_at_other_site?: filter.String;
      other_site_name?: filter.String;
      entity_id?: filter.String;
      entity_type?: filter.Enum;
      status?: filter.Enum;
    }
  }
}
