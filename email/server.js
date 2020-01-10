
const { SMTPServer } = require('smtp-server');
const SMTPConnection = require('nodemailer/lib/smtp-connection');
const { simpleParser } = require('mailparser');

const server = new SMTPServer({
  // disable STARTTLS to allow authentication in clear text mode
  disabledCommands: ['STARTTLS', 'AUTH'],
  logger: false,
  onConnect(session, callback) {
    console.log('woah');
    console.log('session.remoteAddress:', session.remoteAddress);
    // if (session.remoteAddress === '127.0.0.1') {
    //   return callback(new Error('No connections from localhost allowed'));
    // }
    return callback(); // Accept the connection
  },
  async onData(stream, session, callback) {
    const parsed = await simpleParser(stream);
    console.log('parsed:');

    const { from, to, date, subject, html, text, textAsHtml, attachments } = parsed;
    console.log(parsed)
    console.log(`
    From: ${from.text}\n
    To: ${to.text}\n
    Date: ${date}\n
    Subject: ${subject}\n
    Html: ${html}\n
    `);
    // stream.pipe(process.stdout); // print message to console
    // stream.on('end', () => {
    //   console.log('================= end! ===============');
    //   callback(null, 'did this work?');
    // });
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

function onAuth(auth, session, callback){
    console.log('onAuth');
}
function onConnect(session, callback) {
    console.log('Connected!');
}
function onClose(session){
    console.log('onClose');
}
function onMailFrom(address, session, callback){
    console.log('onMailFrom');
}
function onRcptTo(address, session, callback){
    console.log('onRcptTo');
}
async function onData(stream, session, callback) {
    let parsedMail = await simpleParser(stream);
    console.log(parsedMail);

    console.log('\n\nNew Packeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeet--------------------------------------------------------------\n\n\n\n\n');
    
    // stream.pipe(process.stdout); // print message to console
    // stream.on("end", callback);
    stream.on('end', () => console.log('End---------------------------------------------------'));
}
// const PORT = 3000 || process.env.PORT;
// server.listen(PORT, () => console.log(`Running email server on port ${PORT}!`));

// server.on('error', err => {
//     console.log(`Error: ${err.message}`);
// });
// function callback(data) {
//     console.log(`On data: ${data}`);
// }
