const uuid = require('uuid/v4');
const dynamoose = require('dynamoose');

const userSchema = new dynamoose.Schema({
    userId: {
        type: String,
        default: () => uuid(),
        forceDefault: true,
        hashKey: true
    },
    emailAddresses: [ String ]
},

{
    throughput: 5,
    timestamps: true
});

module.exports = dynamoose.model('User', userSchema);