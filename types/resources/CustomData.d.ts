///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'chargebee' {
  export interface CustomData {
    entity_type: EntityTypeEnum;
    id: string;
    schema_id: string;
    schema_values: string;
    created_at: number;
    modified_at: number;
    updated_at?: number;
  }
}
