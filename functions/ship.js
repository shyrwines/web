const functions = require('firebase-functions');

const body = {
  'rate_options': {'carrier_ids': ['se-664337']},
  'shipment': {
    'validate_address': 'no_validation',
    'ship_to': {
      'name': 'Mickey and Minnie Mouse',
      'phone': '714-781-4565',
      'company_name': 'The Walt Disney Company',
      'address_line1': '500 South Buena Vista Street',
      'city_locality': 'Burbank',
      'state_province': 'CA',
      'postal_code': '91521',
      'country_code': 'US',
    },
    'ship_from': {
      'name': 'Dade Murphy',
      'phone': '408-993-1449',
      'company_name': 'California Wine Transport, Inc.',
      'address_line1': '930 McLaughlin Ave',
      'city_locality': 'San Jose',
      'state_province': 'CA',
      'postal_code': '95122',
      'country_code': 'US',
    },
    'packages': [
      {
        'weight': {
          'value': 4.0,
          'unit': 'pound',
        }
      }
    ]
  }
}

const body = {
  'carrier_ids': ['se-664337'],
  'from_country_code': 'US',
  'from_postal_code': '95122',
  'to_country_code': 'US',
  'to_postal_code': '91521',
  'to_city_locality': 'Burbank',
  'to_state_province': 'CA',
  'weight': {
    'value': 4.0,  // 4 lbs per wine. UPS limit is 150 lbs
    'unit': 'pound',
  },
  'address_residential_indicator': 'yes',
};

exports.getShippingRate = functions.https.onRequest((req, res) => {
  fetch('https://api.shipengine.com/v1/rates', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'api-key': functions.config().shipengine.key,
    },
    body: JSON.stringify(body),
  })
});
