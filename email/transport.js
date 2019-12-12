const nodemailer = require('nodemailer');

const smtpTransport = nodemailer.createTransport({
  port: 3006,
  // host: '52.52.199.187',
});

smtpTransport.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take our messages');
  }
});

// Message
// const message = {
//   from: 'me@localhost.com',
//   replyTo: 'me@localhost.com',
//   to: 'me@localhost',
//   subject: 'hello',
// };
const message = {
  from: 'sender@server.com',
  to: 'receiver@sender.com',
  subject: 'Message title',
  text: 'Plaintext version of the message',
  html: '<p>HTML version of the message</p>',
};

console.log('Sending Mail');
// Send mail
smtpTransport.sendMail(message, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Message sent successfully!');
    console.log('Server responded with "%s"', info.response);
  }
  console.log('Closing Transport');
  smtpTransport.close();
});

module.exports = smtpTransport;
