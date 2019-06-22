const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(proxy('/createCheckout', { target: 'http://localhost:5001/shyrwines/us-central1/' }))
  app.use(proxy('/wines.json', { target: 'http://localhost:5000/' }))
  app.use(proxy(['/images/**', '/wine-images/**'], { target: 'http://localhost:5000/' }))
}
