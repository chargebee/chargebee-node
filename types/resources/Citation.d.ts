///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'chargebee' {
  export interface Citation {
    id: string;
    param_name?: string;
    author_name: string;
    confidence_level?: 'low' | 'medium' | 'high' | 'not_provided';
    created_at: number;
    content: any;
  }
}
