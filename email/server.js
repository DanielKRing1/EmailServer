// smtp.js
const { SMTPServer } = require('smtp-server');
const { simpleParser } = require('mailparser');
const TLRU = require('./util/fast-tlru');

const MILLI_TO_NANO = 1000000;
const HOUR_TTL = 1000 * 60 * 60 * MILLI_TO_NANO;
const tlru = new TLRU(HOUR_TTL, {
  useGlobalTtl: true,
  triggerLength: 100,
});

const server = new SMTPServer({
  // disable STARTTLS to allow authentication in clear text mode
  disabledCommands: ['AUTH', 'STARTTLS'],
  logger: true,
  onAuth: (auth, session, callback) => {
    console.log('onAuth');
    callback();
  },
  onConnect: (session, callback) => {
    console.log('Connected!');
    callback();
  },
  onClose: (session) => {
    console.log('onClose');
  },
  onMailFrom: (address, session, callback) => {
    console.log('onMailFrom');
    callback();
  },
  onRcptTo: (address, session, callback) => {
    console.log('onRcptTo');
    callback();
  },
  onData: async (stream, session, callback) => {
    const parsedMail = await simpleParser(stream);
    console.log(parsedMail);

    // stream.pipe(process.stdout); // print message to console
    stream.on('end', () => console.log('End---------------------------------------------------'));
    callback();
  },
});

server.on('error', (err) => {
  console.log('Error occurred');
  console.log(err);
});

const PORT = process.env.EMAIL_PORT || 3006;
server.listen(PORT, () => console.log(`Running email server on port ${PORT}!`));
