// smtp.js
const {SMTPServer} = require('smtp-server');

const server = new SMTPServer({
    // disable STARTTLS to allow authentication in clear text mode
    disabledCommands: ['STARTTLS', 'AUTH'],
    logger: true,
    onData(stream, session, callback){
        stream.pipe(process.stdout); // print message to console
        stream.on('end', callback);
    },
});

const PORT = process.env.EMAIL_PORT || 3006;
server.listen(PORT, () => console.log(`Running email server on port ${PORT}!`));


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