///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface InAppSubscription {
    
    /**
      * @description The &#x60;id&#x60; of the [subscription](subscriptions#subscription_id) for which the receipt was sent.

      */
    
    subscription_id:string;
    
    /**
      * @description The &#x60;id&#x60; of the [customer](customers#customer_id) object to which the subscription belongs.

      */
    
    customer_id?:string;
    
    /**
      * @description The &#x60;id&#x60; of the plan-item price of the subscription.

      */
    
    plan_id?:string;
    
    /**
      * @description The status of the subscription for the store \* paused - When the subscription is paused. \* in_trial - When the subscription is in trial. \* active - When the subscription is active. \* cancelled - When the subscription is cancelled.

      */
    
    store_status?:'in_trial' | 'paused' | 'active' | 'cancelled';
    
    /**
      * @description The &#x60;id&#x60; of the invoice generated in Chargebee

      */
    
    invoice_id?:string;
  }
  export namespace InAppSubscription {
    export class InAppSubscriptionResource {  
      /**
        * @description Verifies an in-app purchase made by your customer and creates a subscription in Chargebee.  
**Tip**

The recommended approach is to call this endpoint from the client-side app directly. However, if you are using this API to replace an existing direct integration with Apple or Google, then you may choose to call this API from the server-side.  
**Note:**   

if App Store or Play Store products have not been imported to Chargebee and this API is invoked, Chargebee will automatically create plans that correspond to the store product IDs. However, if historical subscriptions are to be imported using the [import receipt](https://apidocs.chargebee.com/docs/api/in_app_subscriptions#import_receipt) API, importing products is mandatory. [Learn more](https://www.chargebee.com/docs/mobile_subscriptions.html).  

Apple App Store {#app_store}
----------------------------

This section provides details of the Process Purchase Command operation when performed for the Apple App Store. This API processes only the latest in-app transaction on the receipt. Sync historical subscriptions into Chargebee using [bulk import](https://www.chargebee.com/docs/2.0/mobile-app-store-product-iap.html#import-in-app-purchase-receipts) of In-App Purchase receipts.  
**Important**   

* [Integrate Chargebee](https://www.chargebee.com/docs/mobile-app-store-connect.html#connnect-with-your-chargebee-site) with your Apple App Store account using your shared secret from Apple.
* It is strongly recommended to use this endpoint to notify Chargebee of **new** purchases only.
* For updates to existing subscriptions, we recommend that you configure Apple App Store to send server notifications to Chargebee.

Chargebee validates the &#x60;receipt&#x60; with Apple App Store and does the following once validation succeeds:

1. Look for [item_family.id](/docs/api/item_families?prod_cat_ver&#x3D;2#item_family_id) that matches the value Apple-App-Store, and create such a product family if not found.
2. Look for [item.id](/docs/api/items?prod_cat_ver&#x3D;2#item_id) that matches &#x60;product[id]&#x60; and if not found, create such a plan-item under the item family described in the previous step.
3. Look for [item_price.id](/docs/api/item_prices?prod_cat_ver&#x3D;2#item_price_id) that matches the concatenation of &#x60;product[id]&#x60; and &#x60;product[currency_code]&#x60;, and if not found, create such an item price under the item described in the previous step.
4. Create/update a subscription:
   * If the receipt is for a new purchase, a new subscription is created for the plan-item price described in the previous step. The subscription has the following details:
     * &#x60;id&#x60; set to [original_transaction_id](https://developer.apple.com/documentation/appstorereceipts/original_transaction_id?language&#x3D;objc)
     * &#x60;start_date&#x60; set to [responseBody.Latest_receipt_info.purchase_date_ms](https://developer.apple.com/documentation/appstorereceipts/responsebody/latest_receipt_info?language&#x3D;objc)
     * &#x60;current_term_end&#x60; set to &#x60;responseBody.Latest_receipt_info.expires_date_ms&#x60;
   * Instead, if the receipt belongs to an existing subscription in Chargebee, it is updated to reflect the current state of the subscription at Apple.
5. The payment is recorded against the subscription invoice. The associated transaction is updated with the following details:
   * The [transaction.reference_number](/docs/api/transactions?prod_cat_ver&#x3D;2#transaction_reference_number) is set to the [transaction_id](https://developer.apple.com/documentation/appstorereceipts/transaction_id?language&#x3D;objc) of the payment.
* The [transaction.payment_method](/docs/api/transactions#transaction_payment_method) is set to &#x60;apple_pay&#x60;.  

Google Play Store {#app_store}
------------------------------

This section provides details of the Process Purchase Command operation when performed for the Google Play Store. This API processes only the latest in-app transaction using the purchase token.  
**Important**   

* [Integrate Chargebee](https://www.chargebee.com/docs/2.0/mobile-playstore-connect.html#chargebee-configuration) with your Google Play Store account using the service account credentials JSON.
* It is strongly recommended to use this endpoint to notify Chargebee of **new** purchases only.
* For updates to existing subscriptions, we recommend that you configure Chargebee to receive Google&#x27;s server notifications through pub/sub topic. [Learn more](https://developer.android.com/google/play/billing/getting-ready#setup-pubsub).

Chargebee validates the purchase **token** with Google Play Store and does the following once validation succeeds:

1. Look for [item_family.id](/docs/api/item_families?prod_cat_ver&#x3D;2#item_family_id) that matches the value &#x60;Google-Play-Store&#x60;, and create such a product family if not found.
2. Look for [item.id](/docs/api/items?prod_cat_ver&#x3D;2#item_id) that matches &#x60;product[id]&#x60; and if not found, create such a [plan-item](/docs/api/items?prod_cat_ver&#x3D;2#item_type) under the item family described in the previous step.
3. Look for [item_price.id](/docs/api/item_prices?prod_cat_ver&#x3D;2#item_price_id) that matches the concatenation of &#x60;product[id]&#x60; and [priceCurrencyCode](https://developers.google.com/android-publisher/api-ref/rest/v3/purchases.subscriptions?hl&#x3D;en#SubscriptionPurchase.FIELDS.price_currency_code), and if not found, create such an item price under the item described in the previous step.
4. Create/update a subscription:
   * If this token is for a new purchase, a new subscription is created for the plan-item price described in the previous step. The subscription has the following details:
     * &#x60;id&#x60; set to unique identifier generated by Chargebee and mapped to **token** of the [SubscriptionPurchase](https://developers.google.com/android-publisher/api-ref/rest/v3/purchases.subscriptions?hl&#x3D;en) object from Google response.
     * &#x60;start_date&#x60; set to &#x60;SubscriptionPurchase.startTimeMillis&#x60;.
     * &#x60;current_term_end&#x60; set to &#x60;SubscriptionPurchase.expiryTimeMillis&#x60;.
   * Instead, if the token belongs to an existing subscription in Chargebee, it is updated to reflect the current state of the subscription at Google.
5. The payment is recorded against the subscription invoice. The associated transaction is updated with the following details:
   * The [transaction.reference_number](/docs/api/transactions?prod_cat_ver&#x3D;2#transaction_reference_number) is set to the [orderId](https://developers.google.com/android-publisher/api-ref/rest/v3/purchases.subscriptions?hl&#x3D;en#SubscriptionPurchase.FIELDS.order_id) of the payment.
   * The [transaction.payment_method](/docs/api/transactions#transaction_payment_method) is set to &#x60;play_store&#x60;.

Path Parameter {#path_param_pcv2}
---------------------------------

&#x60;{in_app_subscription_app_id}&#x60;: The handle created by Chargebee for your Apple App Store or Google Play Store app. It can be obtained from the Chargebee web app.

The following are instructions to obtain the value of the path parameter for the Apple App Store and Google Play Store.

* **Apple App Store** : To obtain the value for &#x60;{in_app_subscription_app_id}&#x60;, click **View Keys** within the **Sync Overview** page of the web app and use the value of generated **App ID** for this parameter. See detailed steps [here](https://www.chargebee.com/docs/1.0/mobile-app-store-product-iap.html#resource-id).
* **Google Play Store** : To obtain the value for &#x60;{in_app_subscription_app_id}&#x60;, click **Set up notifications** within the **Sync Overview** page of the web app and use the value of generated **App ID** for this parameter. See detailed steps [here](https://www.chargebee.com/docs/1.0/mobile-playstore-notifications.html#app-id).




        */
      
      process_receipt(in_app_subscription_app_id:string, input:ProcessReceiptInputParam):ChargebeeRequest<ProcessReceiptResponse>;
       
      /**
        * @description Verifies an Apple App Store or Google Play Store in-app purchase [receipt](https://developer.apple.com/documentation/storekit/original_api_for_in-app_purchase/validating_receipts_with_the_app_store?language&#x3D;objc#overview) and imports [subscriptions](/docs/api/subscriptions) for all historical purchases made by the customer.  
**Tip**
An &#x60;in_app_subscription&#x60; is created for every unique &#x60;original_transaction_id&#x60;. Apple creates &#x60;original_transaction_id&#x60; for every create, upgrade, or downgrade of the subscription. A receipt hardly contains more than 100 &#x60;original_transaction_id&#x60;s. If a receipt contains more than 100 &#x60;original_transaction_id&#x60;s, Chargebee creates all subscription records but this endpoint returns the first 100 records in the response.

CSV upload has a file size [limitation](https://www.chargebee.com/docs/mobile-app-store-product-iap.html#upload-in-app-receipts) that increases the processing time and the number of receipts. This API removes such limitations and allows you to import historical in-app subscription receipts.  
**Note** : This API verifies receipt or token through Apple or Google and then processes them via Chargebee. For bulk imports, limit API calls to **6** per minute (**10** seconds apart) to ensure successful subscription imports.  

Apple App Store {#app_store}
----------------------------

This section provides details of the Import Receipt operation performed for the Apple App Store. This API processes only the historical in-app transaction receipts.  
**Important**   

* [Integrate Chargebee](https://www.chargebee.com/docs/mobile-app-store-connect.html#connnect-with-your-chargebee-site) with your Apple App Store account using your shared secret from Apple.
* It is strongly recommended to use this endpoint to import historical in-app subscriptions only.
* You must [import Apple App Store products](https://www.chargebee.com/docs/2.0/mobile-app-store-product-iap.html#import-products) using Chargebee&#x27;s user interface before importing receipts using this API.

Chargebee validates the &#x60;receipt&#x60; with Apple App Store and does the following once validation succeeds:

#### Subscriptions {#ir_apple_app_store_pcv2}

[Subscriptions](/docs/api/subscriptions) are imported as follows:

1. A subscription is imported for every unique value of the [original_transaction_id](https://developer.apple.com/documentation/appstorereceipts/original_transaction_id?language&#x3D;objc) in the Apple receipt.  
   **Note** : This is not done for &#x60;original_transaction_id&#x60;s for which a subscription already exists in Chargebee.
2. Each subscription imported has the following attributes set:
   * &#x60;id&#x60; set to &#x60;original_transaction_id&#x60;.
   * &#x60;start_date&#x60; set to the earliest [purchase_date_ms](https://developer.apple.com/documentation/appstorereceipts/responsebody/latest_receipt_info?language&#x3D;objc).
   * &#x60;current_term_start&#x60; set to latest [purchase_date_ms](https://developer.apple.com/documentation/appstorereceipts/responsebody/latest_receipt_info?language&#x3D;objc).
   * &#x60;current_term_end&#x60; set to [expires_date_ms](https://developer.apple.com/documentation/appstorereceipts/responsebody/latest_receipt_info?language&#x3D;objc) of the same &#x60;Latest_receipt_info&#x60; element with the latest &#x60;purchase_date_ms&#x60;.
   * &#x60;item_price_id&#x60; set to &#x60;product_id&#x60;.
   * &#x60;status&#x60; set to &#x60;in_trial&#x60; if there is only one element of [Latest_receipt_info](https://developer.apple.com/documentation/appstorereceipts/responsebody/latest_receipt_info?language&#x3D;objc) with the &#x60;original_transaction_id&#x60; and the field &#x60;is_trial_period&#x60; is &#x60;true&#x60;, then consider the subscription is currently in trial. No invoices are created for this subscription.

#### Invoices for the subscription

[Invoices](/docs/api/invoices) are imported as follows:

1. An invoice is imported to Chargebee for every element of the array [Latest_receipt_info](https://developer.apple.com/documentation/appstorereceipts/responsebody/latest_receipt_info?language&#x3D;objc) which has [is_trial_period](https://developer.apple.com/documentation/appstorereceipts/is_trial_period?language&#x3D;objc) as &#x60;false&#x60;.
2. Each imported invoice has the &#x60;subscription_id&#x60; set to &#x60;original_transaction_id&#x60;.

#### Transactions for the invoices

A [transaction](/docs/api/transactions) is imported for each invoice with the following details:

1. &#x60;reference_number&#x60; set to the &#x60;transaction_id&#x60;.
2. &#x60;payment_method&#x60; set to &#x60;apple_store&#x60;.



Google Play Store {#app_store}
------------------------------

This section provides details of the Import Receipt operation performed for the Google Play Store. This API is used to process only the historical in-app purchase subscriptions.  
**Important**   

* [Integrate Chargebee](https://www.chargebee.com/docs/2.0/mobile-playstore-connect.html) with your Google Play Store account using your [service account credentials JSON](https://www.chargebee.com/docs/2.0/mobile-playstore-connect.html#generate-service-account-credentials-json).
* It is strongly recommended to use this endpoint to import historical in-app subscriptions only.
* It is recommended to pass only the latest purchase &#x60;token&#x60;. If any other purchase &#x60;token&#x60; is passed instead of the latest one, there is a possibility of returning incorrect transaction details. If an expired purchase &#x60;token&#x60; is passed, then it returns an error.
* The Google purchase token is [valid for 60 days](https://developer.android.com/google/play/billing/subscriptions#lifecycle) from the subscription purchase date. After the &#x60;token&#x60; expires, an API request to Google Developers API returns an error.

Chargebee validates the purchase &#x60;token&#x60; with Google Play Store and does the following once validation succeeds:

#### Subscriptions {#ir_google_play_store_pcv2}

* A [subscription](/docs/api/subscriptions) is imported for every unique purchase token if it is not linked to an existing purchase &#x60;token&#x60;( &#x60;linkedPurchaseToken&#x60; field in &#x60;SubscriptionsV2.get&#x60; API Response).

* Each subscription imported has the following attributes set:

  * &#x60;id&#x60; set to a unique identifier generated by Chargebee and mapped to the &#x60;token&#x60; and &#x60;latestOrderId&#x60; of the &#x60;SubscriptionPurchaseV2&#x60; object from Google response.

  * &#x60;start_date&#x60; set to the earliest &#x60;SubscriptionPurchaseV2.startTime&#x60;.

  * &#x60;current_term_start&#x60; set to latest &#x60;SubscriptionPurchaseV2.startTime&#x60;.

  * &#x60;current_term_end&#x60; set to &#x60;expiryTime&#x60; of the same &#x60;SubscriptionPurchaseV2&#x60; element with the latest purchase.

  * &#x60;item_price_id&#x60; set to the concatenation of &#x60;product[id]&#x60; and &#x60;priceCurrencyCode&#x60; from Google.

  * &#x60;status&#x60; set to &#x60;in_trial&#x60; if the free trial configuration is enabled in Google and the [monetization.subscriptions.basePlans.offers.State](https://developers.google.com/android-publisher/api-ref/rest/v3/monetization.subscriptions.basePlans.offers#State) is &#x60;Active&#x60; with a [SubscriptionOfferPhase.duration](https://developers.google.com/android-publisher/api-ref/rest/v3/monetization.subscriptions.basePlans.offers#subscriptionofferphase), then consider the subscription is currently in trial. No invoices are created for this subscription.

#### Invoices for the subscription

Invoices are imported as follows:

* An [invoice](/docs/api/invoices &quot;https://apidocs.chargebee.com/docs/api/invoices?prod_cat_ver&#x3D;2&quot;) is imported to Chargebee for every new subscription and renewal of an existing subscription using &#x60;latestOrderId&#x60;.

* Each imported invoice has the &#x60;subscription_id&#x60; set to a unique identifier generated by Chargebee and mapped to the &#x60;token&#x60; and &#x60;latestOrderId&#x60;.

#### Transactions for the invoices

A [transaction](/docs/api/transactions) is imported for each invoice with the following details:

* &#x60;transaction.reference_number&#x60; is set to the &#x60;latestOrderId&#x60;.

* &#x60;transaction.payment_method&#x60; is set to &#x60;play_store&#x60;.

Path Parameter {#path_param}
----------------------------

&#x60;{in_app_subscription_app_id}&#x60;: The handle created by Chargebee for your Apple App Store or Google Play Store app. It can be obtained from the Chargebee web app.

The following are instructions to obtain the value of the path parameter for the Apple App Store and Google Play Store.

* **Apple App Store** : To obtain the value for &#x60;{in_app_subscription_app_id}&#x60;, click **View Keys** within the **Sync Overview** page of the web app and use the value of generated **App ID** for this parameter. See detailed steps [here](https://www.chargebee.com/docs/1.0/mobile-app-store-product-iap.html#connection-keys_app-id).
* **Google Play Store** : To obtain the value for &#x60;{in_app_subscription_app_id}&#x60;, click **Set up notifications** within the **Sync Overview** page of the web app and use the value of generated **App ID** for this parameter. See detailed steps [here](https://www.chargebee.com/docs/1.0/mobile-playstore-notifications.html#app-id).




        */
      
      import_receipt(in_app_subscription_app_id:string, input:ImportReceiptInputParam):ChargebeeRequest<ImportReceiptResponse>;
       
      /**
        * @description The Import Subscriptions endpoint is a Chargebee API that allows you to import historic In-App Subscriptions without using a valid Apple App Store receipt. This endpoint is useful if you do not have access to the receipt data which is required for the [Import Receipt](https://apidocs.chargebee.com/docs/api/in_app_subscriptions#import_receipt) API.

With this API, you can import subscriptions and corresponding invoices for historic In-App purchases. The API returns the [in-app-subscriptions object](https://apidocs.chargebee.com/docs/api/in_app_subscriptions#in_app_subscription_attributes) once the historic subscription is successfully imported into Chargebee.  
**Note** :  

* Subscriptions cannot be imported from the Google Play Store without a receipt or token. Therefore; Chargebee does not allow you to use this API for the Google Play Store.
* Enable V1 notifications in the Apple App Store for subscriptions created without receipts. Chargebee depends on receipt data to update subscription statuses. Apple&#x27;s V2 notifications do not have receipt information; therefore, Chargebee cannot process V2 notifications for subscriptions imported without receipts. Learn more about [++app store notifications++](https://apidocs.chargebee.com/docs/api/in_app_purchase_events?prod_cat_ver&#x3D;2#app_store_notifications) and [++notification URL configuration++](https://www.chargebee.com/docs/mobile-app-store-product-iap.html#connection-keys_notification-url).

### Apple App Store

This section provides details of the Import Subscription operation when performed for the Apple App Store. This API creates a historic subscription if the incoming subscription is unknown. For a known subscription, it creates an invoice for the mentioned period.  
**Important**

* [Integrate Chargebee](https://www.chargebee.com/docs/mobile-app-store-connect.html#connnect-with-your-chargebee-site) with your Apple App Store account using your shared secret from Apple.

* It is strongly recommended to use this endpoint to create a historic In-App subscription only.

* You must import App Store products using Chargebee&#x27;s user interface before importing receipts using this API.

Chargebee validates the application ID with Apple App Store and does the following once validation succeeds:

#### Subscription

1. Import the subscription from the &#x60;latest_receipt_info&#x60; array from Apple and a new subscription is imported for the item-price.   
   **Note:** The subscription is not imported if it already exists in Chargebee but we will import the associated invoice using the subscription\[transaction_id\] in the payload.

2. Each subscription imported has the following attribute set:

   * &#x60;id&#x60; set to &#x60;subscription[id]&#x60; . This &#x60;subscription[id]&#x60; is &#x60;original_transaction_id&#x60; in the receipts.

   * &#x60;start_date&#x60; set to &#x60;subscription[start_date]&#x60;. You need to provide this information from the oldest &#x60;Latest_receipt_info.purchase_date_ms&#x60;.

   * &#x60;term_start&#x60; set to &#x60;subscription[term_start]&#x60;. You need to provide this information from the oldest &#x60;Latest_receipt_info.purchase_date_ms)&#x60;.

   * &#x60;term_end&#x60; set to &#x60;subscription[term_end]&#x60;. You need to provide this information from the oldest &#x60;Latest_receipt_info.expires_date_ms&#x60;.

   * &#x60;item_price_id&#x60; set to &#x60;subscription[product_id] + subscription[currency_code].&#x60; You need to provide this information from the &#x60;Latest_receipt_info.product_id&#x60;.

   * Chargebee records the subscription in a **Trial** state if the &#x60;is_trial_period&#x60; is &#x60;true&#x60;.

   * Chargebee records the subscription in a **Canceled** state if the &#x60;term_end&#x60; is less than the &#x60;System.currentTime()&#x60;.

#### Invoice for the subscription

1. The payment is recorded against the subscription invoice.

   * Imported invoice has the &#x60;subscription_id&#x60; set to &#x60;original_transaction_id&#x60;.

**Transactions for the invoice**

1. The associated transaction is updated with the following details:

   * The &#x60;transaction.reference_number&#x60; is set to the &#x60;transaction_id&#x60; of the payment.

   * The &#x60;transaction.payment_method&#x60; is set to &#x60;apple_store&#x60;.

#### Path Parameter

in_app_subscription_app_id  
required, string  

The handle created by Chargebee for your App Store app. It can be obtained from within the Chargebee web app.

To obtain the value of &#x60;in_app_subscription_app_id &#x60;for the Apple App Store, click **View Keys** within the **Sync Overview** page of the web app, and use the value of generated **App ID** for this parameter. See detailed steps [here](https://www.chargebee.com/docs/mobile-app-store-product-iap.html#connection-keys_app-id).

        */
      
      import_subscription(in_app_subscription_app_id:string, input?:ImportSubscriptionInputParam):ChargebeeRequest<ImportSubscriptionResponse>;
       
      /**
        * @description This API verifies the application id &#x60;{in_app_subscription_app_id}&#x60; and &#x60;receipt&#x60; then returns the subscription details associated with the purchase.

#### Path Parameter

in_app_subscription_app_id  
required, string  

The handle is created by Chargebee for your Apple App Store or Google Play Store app. It can be obtained from the Chargebee web app.

The following are instructions to obtain the value of the path parameter for the Apple App Store and Google Play Store.

* **Apple App Store** : To obtain the value for &#x60;{in_app_subscription_app_id}&#x60;, click **View Keys** within the **Sync Overview** page of the web app and use the value of generated **App ID** for this parameter. See detailed steps [here](https://www.chargebee.com/docs/1.0/mobile-app-store-product-iap.html#resource-id).
* **Google Play Store** : To obtain the value for &#x60;{in_app_subscription_app_id}&#x60;, click **Set up notifications** within the **Sync Overview** page of the web app and use the value of generated **App ID** for this parameter. See detailed steps [here](https://www.chargebee.com/docs/1.0/mobile-playstore-notifications.html#app-id).

        */
      
      retrieve_store_subs(in_app_subscription_app_id:string, input:RetrieveStoreSubsInputParam):ChargebeeRequest<RetrieveStoreSubsResponse>;
    }
    export interface ProcessReceiptResponse {  
       in_app_subscription:InAppSubscription;
    }
    export interface ProcessReceiptInputParam {
       
      /**
        * @description **Apple App Store** : The Base64 encoded [App Store in-app purchase receipt](https://developer.apple.com/documentation/storekit/original_api_for_in-app_purchase/validating_receipts_with_the_app_store?language&#x3D;objc#overview) taken from the Apple device after successful creation of the in-app purchase subscription.

**Google Play Store** : The purchase &#x60;token&#x60; taken from the Android device after the successful creation of an in-app purchase subscription.

        */
       
      receipt:string;
       
      /**
        * @description Parameters for product

        */
       
      product?:{currency_code:string,id:string,name?:string,period?:string,period_unit?:string,price:number,price_in_decimal?:string};
       
      /**
        * @description Parameters for customer

        */
       
      customer?:{email?:string,first_name?:string,id?:string,last_name?:string};
    }
    export interface ImportReceiptResponse {  
       in_app_subscriptions:InAppSubscription[];
    }
    export interface ImportReceiptInputParam {
       
      /**
        * @description **Apple App Store** : The Base64 encoded [App Store in-app purchase receipt](https://developer.apple.com/documentation/storekit/original_api_for_in-app_purchase/validating_receipts_with_the_app_store?language&#x3D;objc#overview) taken from the Apple device after successful creation of the in-app purchase subscription.

**Google Play Store** : The purchase &#x60;token&#x60; taken from the Android device after the successful creation of an in-app purchase subscription.

        */
       
      receipt:string;
       
      /**
        * @description Parameters for product

        */
       
      product?:{currency_code:string};
       
      /**
        * @description Parameters for customer

        */
       
      customer?:{email?:string,id?:string};
    }
    export interface ImportSubscriptionResponse {  
       in_app_subscription:InAppSubscription;
    }
    export interface ImportSubscriptionInputParam {
       
      /**
        * @description Parameters for subscription

        */
       
      subscription?:{currency_code:string,id:string,is_trial?:boolean,product_id:string,started_at:number,term_end:number,term_start:number,transaction_id:string};
       
      /**
        * @description Parameters for customer

        */
       
      customer?:{email?:string,id?:string};
    }
    export interface RetrieveStoreSubsResponse {  
       in_app_subscriptions:InAppSubscription[];
    }
    export interface RetrieveStoreSubsInputParam {
       
      /**
        * @description **Apple App Store** : The Base64 encoded [App Store in-app purchase receipt](https://developer.apple.com/documentation/storekit/original_api_for_in-app_purchase/validating_receipts_with_the_app_store?language&#x3D;objc#overview) taken from the Apple device after successful creation of the in-app purchase subscription.

**Google Play Store** : The purchase &#x60;token&#x60; taken from the Android device after the successful creation of an in-app purchase subscription.

        */
       
      receipt:string;
    }
    
  }
}