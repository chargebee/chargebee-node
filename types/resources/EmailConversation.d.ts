///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'chargebee' {
  export interface EmailConversation {
    id: string;
    customer_id?: string;
    mailbox_id?: string;
    subject?: string;
    last_message_preview?: string;
    message_count: number;
    status?: string;
    last_message_at?: number;
    created_at: number;
    updated_at: number;
    resource_version?: number;
  }
}
