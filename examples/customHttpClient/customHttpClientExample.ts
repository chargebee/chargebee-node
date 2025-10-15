import Chargebee from 'chargebee';
import { AxiosHttpClient } from './axiosHttpClient';
import { GotHttpClient } from './gotHttpClient';

const chargebee = new Chargebee({
  site: '{{site}}',
  apiKey: '{{apiKey}}',
  httpClient: new AxiosHttpClient(), // httpClient: new AxiosHttpClient(),
});

const listCustomers = async () => {
  try {
    const result = await chargebee.customer.list({ limit: 2 });
    console.log(result);
  } catch (error) {
    console.error('Error listing customers:', error);
  }
};

const hostedPageCheckout = async () => {
  try {
    const result = await chargebee.hostedPage.checkoutNewForItems({
      subscription_items: [
        {
          item_price_id: 'swift-premium-yearly-inr',
        },
        {
          item_price_id: 'Swift-Item-Addon-INR-Monthly',
          quantity: 2,
        },
        {
          item_price_id: 'one-time-charge-inr',
        },
      ],
    });
    console.log(result);
  } catch (error) {
    console.error('Error creating hosted page:', error);
  }
};

listCustomers();
