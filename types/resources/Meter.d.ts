///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
///<reference path='./filter.d.ts'/>
declare module 'chargebee' {
  export interface Meter {
    id: string;
    name: string;
    description?: string;
    type: 'simple' | 'compound';
    status?: 'active' | 'archived' | 'deleted';
    query: string;
    created_at: number;
    updated_at?: number;
    column_definitions?: ColumnDefinition[];
    features?: Feature[];
  }

  export namespace Meter {
    export class MeterResource {
      list(
        input?: ListInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ListResponse>>;
    }

    export interface ListResponse {
      list: { meter: Meter }[];
      next_offset?: string;
    }

    // REQUEST PARAMS
    //---------------

    export interface ListInputParam {
      limit?: number;
      offset?: string;
      name?: filter.String;
      'sort_by[asc]'?: string;
      'sort_by[desc]'?: string;
    }
  }
}
