///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface ContractTerm {
    
    /**
      * @description Id that uniquely identifies the contract term in the site.

      */
    
    id:string;
    
    /**
      * @description Current status of contract \* active - An actively running contract term. \* cancelled - The contract term was ended because:

* a change in the subscription caused a [subscription term reset](subscriptions#update_a_subscription_force_term_reset).
* the subscription was cancelled due to non-payment.
\* terminated - The contract term was terminated ahead of completion. \* completed - The contract term has run its full duration.

      */
    
    status:'active' | 'cancelled' | 'completed' | 'terminated';
    
    /**
      * @description The start date of the contract term

      */
    
    contract_start:number;
    
    /**
      * @description The end date of the contract term

      */
    
    contract_end:number;
    
    /**
      * @description The number of billing cycles of the subscription that the contract term is for.

      */
    
    billing_cycle:number;
    
    /**
      * @description Action to be taken when the contract term completes. \* renew -
* Contract term completes and a new contract term is started for the number of billing cycles specified in [&#x60;contract_billing_cycle_on_renewal&#x60;](subscriptions#create_subscription_for_customer_contract_term_billing_cycle_on_renewal).
* The &#x60;action_at_term_end&#x60; for the new contract term is set to &#x60;renew&#x60;.
\* evergreen - Contract term completes and the subscription renews. \* renew_once - Used when you want to renew the contract term just once. Does the following:
* Contract term completes and a new contract term is started for the number of billing cycles specified in [&#x60;contract_billing_cycle_on_renewal&#x60;](subscriptions#create_subscription_for_customer_contract_term_billing_cycle_on_renewal).
* The &#x60;action_at_term_end&#x60; for the new contract term is set to &#x60;cancel&#x60;.
\* cancel - Contract term completes and subscription is canceled.


      */
    
    action_at_term_end:'cancel' | 'renew_once' | 'renew' | 'evergreen';
    
    /**
      * @description The sum of the [totals](invoices#invoice_total) of all the invoices raised as part of the contract term. For &#x60;active&#x60; contract terms, this is a predicted value. The value depends on the [type of currency](./#handling_currency_units). If the subscription was [imported](#import_a_subscription) with the contract term, then this value includes the value passed for &#x60;total_amount_raised&#x60;.

      */
    
    total_contract_value:number;
    
    /**
      * @description It refers to the total amount of revenue that is expected to be generated from a specific contract term, calculated as the sum of all invoices raised during the term, regardless of payment status. It is based on past performance and the specified currency in the contract. If the subscription was imported, the value for &#x60;total_amount_raised_before_tax&#x60; is included in the calculation of the total contract value before tax. It&#x27;s important to note that this value excludes any applicable taxes.

      */
    
    total_contract_value_before_tax:number;
    
    /**
      * @description The number of days before [&#x60;contract_end&#x60;](contract_terms#contract_term_contract_end), during which the customer is barred from canceling the contract term. The customer is allowed to cancel the contract term via the Self-Serve Portal only before this period. This allows you to have sufficient time for processing the contract term closure

      */
    
    cancellation_cutoff_period?:number;
    
    /**
      * @description The date when the contract term was created.

      */
    
    created_at:number;
    
    /**
      * @description The [Id](subscriptions#subscription_id) of the subscription that this contract term is for.

      */
    
    subscription_id:string;
    
    /**
      * @description The number of subscription billing cycles remaining after the current one for the contract term. This attribute is only returned for &#x60;active&#x60; contract terms.

      */
    
    remaining_billing_cycles?:number;
  }
}