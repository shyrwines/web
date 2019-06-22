const functions = require('firebase-functions');
const SquareConnect = require('square-connect');
const uuid = require('uuid/v4');
const defaultClient = SquareConnect.ApiClient.instance;

const oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = functions.config().square.token;

const api = new SquareConnect.CheckoutApi();
const locationId = functions.config().square.location;

exports.createCheckout = functions.https.onRequest((req, res) => {
  const body = new SquareConnect.CreateCheckoutRequest();
  const orderRequest = new SquareConnect.CreateOrderRequest();
  const order = new SquareConnect.Order();

  order.line_items = req.body.cartWines.map(wine => {
    const lineItem = new SquareConnect.OrderLineItem();
    lineItem.quantity = wine.quantity.toString();
    lineItem.catalog_object_id = wine.variation_id;
    return lineItem;
  });
  order.location_id = locationId;

  orderRequest.order = order;
  body.order = orderRequest;
  body.idempotency_key = uuid();

  console.log('UUID: ' + body.idempotency_key);
  // console.log(JSON.stringify(order))
  // console.log('Body: ' + JSON.stringify(req.body.cartWines));

  api.createCheckout(locationId, body).then(data => {
    console.log('Success. Data: ' + JSON.stringify(data))
    res.send(data.checkout.checkout_page_url)
  }, err => {
    console.log(err);
    res.sendStatus(500);
  });
});
