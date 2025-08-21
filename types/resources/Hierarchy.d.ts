///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
declare module 'chargebee' {
  export interface Hierarchy {
    

    customer_id:string;

    parent_id?:string;

    payment_owner_id:string;

    invoice_owner_id:string;

    has_children?:boolean;

    children_ids?:string[];

  }
}