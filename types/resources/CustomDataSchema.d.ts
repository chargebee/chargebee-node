///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'chargebee' {
  export interface CustomDataSchema {
    id: string;
    display_name: string;
    entity_type: EntityTypeEnum;
    schema_definition: string;
    status: 'active' | 'archived';
    created_at: number;
    modified_at: number;
    updated_at?: number;
  }
}
