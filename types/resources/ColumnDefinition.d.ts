///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'chargebee' {
  export interface ColumnDefinition {
    column_name: string;
    data_type: 'number' | 'string';
  }
}
