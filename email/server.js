const { SMTPServer } = require('smtp-server');
// const SMTPConnection = require('nodemailer/lib/smtp-connection');

const server = new SMTPServer({
  // disable STARTTLS to allow authentication in clear text mode
  disabledCommands: ['STARTTLS', 'AUTH'],
  logger: true,
  onConnect(session, callback) {
    console.log('woah');
    console.log('session.remoteAddress:', session.remoteAddress);
    // if (session.remoteAddress === '127.0.0.1') {
    //   return callback(new Error('No connections from localhost allowed'));
    // }
    return callback(); // Accept the connection
  },
  onData(stream, session, callback) {
    stream.pipe(process.stdout); // print message to console
    stream.on('end', callback);
  },
});

server.on('error', (err) => {
  console.log('Error occurred');
  console.log(err);
});

const PORT = process.env.EMAIL_PORT || 3006;
server.listen(PORT, () => console.log(`Running email server on port ${PORT}!`));

// const connection = new SMTPConnection({
//   port: 3006,
//   logger: true,
// });

// connection.connect(() => console.log('connected!'));

// const envelope = { from: 'daniel@gmail.com', to: 'dring@gmail.com' };
// const message = 'test';

// sudo node ./email/server.js &sendmail test@localhost < email.txt

// connection.send(envelope, message, (err) => console.log(err));

// const SMTPServer = require("smtp-server").SMTPServer;

// const options = {
//     onData(stream, session, callback) {
//         stream.pipe(process.stdout); // print message to console
//         stream.on("end", callback);    }
// };
// const server = new SMTPServer(options);

// const PORT = 3000 || process.env.PORT;
// server.listen(PORT, () => console.log(`Running email server on port ${PORT}!`));

// server.on('error', err => {
//     console.log(`Error: ${err.message}`);
// });
// function callback(data) {
//     console.log(`On data: ${data}`);
// }
