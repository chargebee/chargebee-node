///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'chargebee' {
  export interface CollectionsReminderSequence {
    id: string;
    invoice_id: string;
    customer_id: string;
    status: 'active' | 'completed' | 'paused' | 'failed';
    paused_until?: number;
    pause_note?: string;
    started_at?: number;
    completed_at?: number;
    created_at: number;
    updated_at: number;
    resource_version?: number;
    action_logs?: CollectionsReminderSequence.ActionLog[];
  }

  export namespace CollectionsReminderSequence {
    export interface ActionLog {
      action_type: 'send_email';
      status: 'completed' | 'scheduled' | 'skipped';
      reason_code?:
        | 'date_already_passed'
        | 'before_invoice_date'
        | 'trigger_event_not_received'
        | 'sequence_paused';
      executed_at?: number;
      scheduled_at?: number;
    }
    // REQUEST PARAMS
    //---------------
  }
}
