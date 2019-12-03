const AWS = require('aws-sdk');
const dynamoose = require('dynamoose');

const dynamoDB = new AWS.DynamoDB();
dynamoose.setDDB(dynamoDB);

dynamoose.AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID ,
    secretAcessKey: process.env.AWS_SECRET_ACCESS_KEY ,
    region: 'us-west-1'
});

const User = require('./models/User');

const newUser = new User({});
// newUser.save((err) => {
//     if(err) return console.log(`Error: ${err}`);

//     console.log('Successfully saved new user!');
// });