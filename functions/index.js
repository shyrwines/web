const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const juice = require('juice');

const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: functions.config().gmail.email,
    pass: functions.config().gmail.password,
  },
});

exports.sendEmail = functions.https.onRequest((req, res) => {
  const { name, email, phone, address, city, state, zipcode, comment, total, cartWines } = req.query
  const wines = JSON.parse(cartWines)

  const html = `
    <style>td{padding-right:10px;}</style>
    <div>
      Name: ${name}<br/>
      Email: ${email}<br/>
      Phone: ${phone}<br/>
      Address: ${address}, ${city}, ${state} ${zipcode}<br/>
      Comment: ${comment}<br/><br/>
      <table>
        ${wines.map(wine => `
          <tr>
            <td>${wine.name}</td>
            <td>${wine.quantity}</td>
            <td>x</td>
            <td>${formatPrice(wine.price)}</td>
            <td>=</td>
            <td>${formatPrice(wine.total)}</td>
          </tr>
        `).join('\n')}
        <tr>
          <td colspan=4 align=right>Subtotal</td>
          <td>=</td>
          <td>${formatPrice(total)}</td>
        <tr/>
      </table>
    </div>
  `

  const text = [
    'Name: ' + name,
    'Email: ' + email,
    'Phone: ' + phone,
    `Address: ${address}, ${city}, ${state} ${zipcode}`,
    'Comment: ' + comment,
    wines.map(wine => `${wine.name}: ${wine.quantity} x ${formatPrice(wine.price)} = ${formatPrice(wine.total)}`).join('\n'),
    'Subtotal = ' + formatPrice(total),
  ].join('\n')

  const mailOptions = {
    from: 'Order Notifier <noreply@shyrwines.com>',
    to: 'sanjay@shyrwines.com',
    subject: 'Wine order from ' + name,
    text,
    html: juice(html),
  };

  console.log('Sending mail with text ' + text);
  mailTransport.sendMail(mailOptions)
    .then(() => res.sendStatus(200))
    .catch(err => {
      console.log('Encountered error:');
      console.log(err);
    });
});

const formatPrice = price => {
  s = price.toString()
  return '$' + s.slice(0, -2) + '.' + s.slice(-2)
}
