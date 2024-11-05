///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'chargebee' {
  export interface ResourceMigration {
    from_site: string;
    entity_type: 'customer';
    entity_id: string;
    status: 'scheduled' | 'failed' | 'succeeded';
    errors?: string;
    created_at: number;
    updated_at: number;
  }

  export namespace ResourceMigration {
    export class ResourceMigrationResource {
      retrieveLatest(
        input: RetrieveLatestInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<RetrieveLatestResponse>>;
    }

    export interface RetrieveLatestResponse {
      resource_migration: ResourceMigration;
    }

    // REQUEST PARAMS
    //---------------

    export interface RetrieveLatestInputParam {
      from_site: string;
      entity_type: 'customer';
      entity_id: string;
    }
  }
}
