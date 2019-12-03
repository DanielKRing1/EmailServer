const dynamoose = require('dynamoose');

const emailSchema = new dynamoose.Schema({
    userId: {
        type: String,
        hashKey: true
    },
    sender: String,
    recipient: {
        type: String,
        rangeKey: true
    },
    subject: String,
    body: String
},

{
    throughput: 5,
    timestamps: true
});

module.exports = dynamoose.model('Email', emailSchema);