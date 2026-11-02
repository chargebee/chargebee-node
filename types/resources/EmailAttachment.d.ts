///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'chargebee' {
  export interface EmailAttachment {
    id: string;
    email_message_id?: string;
    file_name?: string;
    content_type?: string;
    size_bytes?: number;
    content_disposition?: string;
    created_at: number;
    updated_at: number;
    resource_version?: number;
  }
}
