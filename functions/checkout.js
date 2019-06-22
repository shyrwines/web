const functions = require('firebase-functions');
const SquareConnect = require('square-connect');
const uuid = require('uuid/v4');
const defaultClient = SquareConnect.ApiClient.instance;

const oauth2 = defaultClient.authentications['oauth2'];
// oauth2.accessToken = functions.config().square.token;
oauth2.accessToken = functions.config().square.sandbox_token;

const api = new SquareConnect.CheckoutApi();
// const locationId = functions.config().square.location;
const locationId = functions.config().square.sandbox_location;

exports.createCheckout = functions.https.onRequest((req, res) => {
  const body = new SquareConnect.CreateCheckoutRequest();
  const orderRequest = new SquareConnect.CreateOrderRequest();
  const order = new SquareConnect.Order();

  order.line_items = req.body.cartWines.map(wine => {
    const lineItem = new SquareConnect.OrderLineItem();
    lineItem.quantity = wine.quantity.toString();
    // lineItem.catalog_object_id = wine.variation_id;
    const money = new SquareConnect.Money();
    money.amount = 1000
    money.currency = 'USD'
    lineItem.name = 'Test line item'
    lineItem.base_price_money = money

    return lineItem;
  });
  order.location_id = locationId;

  orderRequest.order = order;
  body.order = orderRequest;
  body.idempotency_key = uuid();
  body.redirect_url = req.body.redirect_url

  console.log('UUID: ' + body.idempotency_key);
  console.log('Request Body: ' + JSON.stringify(req.body));

  api.createCheckout(locationId, body).then(data => {
    console.log('Success. Data: ' + JSON.stringify(data))
    res.send(data.checkout.checkout_page_url)
  }, err => {
    console.log(err);
    res.sendStatus(500);
  });
});
