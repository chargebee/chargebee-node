///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'chargebee' {
  export interface EmailMessage {
    id: string;
    email_conversation_id?: string;
    message_type?: string;
    author_type?: 'contact' | 'site_user' | 'agent' | 'other';
    send_status?: 'pending' | 'sent' | 'failed';
    content_html?: string;
    content_text?: string;
    created_at: number;
    updated_at: number;
    resource_version?: number;
    mailbox_id?: string;
    author_id?: string;
    author_name?: string;
    from_email?: string;
    to_emails?: string[];
    cc_emails?: string[];
    attachments?: EmailMessage.Attachment[];
  }

  export namespace EmailMessage {
    export interface Attachment {
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
    // REQUEST PARAMS
    //---------------
  }
}
