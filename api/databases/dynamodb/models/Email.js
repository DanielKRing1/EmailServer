const uuid = require('uuid/v4');
const dynamoose = require('dynamoose');

/*
Info on Keys and Secondary Indexes:

    Keys:

        Primary:
            Unique hash or unique composite key combination 

        Range: 
        
    Indexes:

        Local:
            - Acts as an alternative 'range key', using table's defined partition key
            - so no need to define a new range key,
            just writing 'index: true' is enough; will use that partition key as the hash

        Global:
            - Acts as an alternate 'primary key'
            - Must define a new hash key AND range key
*/

const emailSchema = new dynamoose.Schema({
    emailId: {
        type: String,
        default: () => uuid(),
        forceDefault: true,
        hashKey: true
    },
    userId: {
        type: String,
        required: true,
        // hashKey: true,
        // Global Secondary Key for use displaying new emails to user
        // Will be 'read-only' on UI (only displaying how many new emails on each account, perhaps the subject line of the newest email),
        // so does not require all attributes be stored
        index: {
            global: true,
            rangeKey: 'isNew',
            project: [
                'emailId',
                'userId',
                'sender',
                'recipient',
                'subject',
                'body',
                'isNew',
                'sentAt'
            ],
            throughput: 5
        }
    },
    sender: String,
    recipient: {
        type: String,
        index: {
            global: true,
            rangeKey: 'sentAt',
            project: [
                'emailId',
                'sender',
                'recipient',
                'subject',
                'body',
                'isNew',
                'sentAt'
            ],
            throughput: 5
        }
    },
    subject: String,
    body: String,
    isNew: {
        type: String,
        default: 'x'
    },
    sentAt: {
        type: Number,
        default: () => Date.now()
    }
},

{
    throughput: 5,
    timestamps: false
});

module.exports = dynamoose.model('Email', emailSchema);