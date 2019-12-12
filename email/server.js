// smtp.js
const { SMTPServer } = require('smtp-server');
const simpleParser = require('mailparser').simpleParser;
const TLRU = require('./util/fast-tlru');

const MILLI_TO_NANO = 1000000;
const HOUR_TTL = 1000 * 60 * 60 * MILLI_TO_NANO;
const tlru = new TLRU(HOUR_TTL, {
    useGlobalTtl: true,
    triggerLength: 100
});

const server = new SMTPServer({
    // disable STARTTLS to allow authentication in clear text mode
    disabledCommands: ['STARTTLS', 'AUTH'],
    logger: false,
    // onAuth,
    // onConnect,
    // onClose,
    // onMailFrom,
    // onRcptTo,
    onData
});

const PORT = process.env.EMAIL_PORT || 3006;
server.listen(PORT, () => console.log(`Running email server on port ${PORT}!`));


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