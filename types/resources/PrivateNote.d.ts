///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'chargebee' {
  export interface PrivateNote {
    id: string;
    email_conversation_id: string;
    author_type?: 'site_user' | 'agent' | 'other';
    author_id?: string;
    author_name?: string;
    content_html: string;
    content_text?: string;
    meta_data?: string;
    created_at: number;
    resource_version?: number;
    updated_at: number;
  }
}
