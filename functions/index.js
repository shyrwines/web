const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: functions.config().gmail.email,
    pass: functions.config().gmail.password,
  },
});

exports.sendEmail = functions.https.onRequest((req, res) => {
  const mailOptions = {
    from: 'Order Notifier <noreply@shyrwines.com>',
    to: 'sanjay@shyrwines.com',
    subject: req.query.subject,
    text: req.query.text,
    html: req.query.html,
  };

  console.log('Sending mail');
  mailTransport.sendMail(mailOptions)
    .then(() => res.sendStatus(200))
    .catch(err => {
      console.log('Encountered error:');
      console.log(err);
    });
});
