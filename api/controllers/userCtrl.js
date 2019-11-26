const { createToken } = require('../util/auth');

module.exports = {
    getAccount: (req, res) => {
        // User was authenticated by jwt middleware
        const userId = req.user.id;

        // GET ACCOUNT


        // Return account
        res.status(200).send({
            Account: 'Hello World!'
        });
    },

    // Responds with a test token
    getGenericJwt: async(req, res) => {
        const randUser = {
            user: {
                id: '123'
            }
        }

        const token = await createToken(randUser);
        res.status(200).send(token);
    },

    createAccount: (req, res) => {
        // MAKE ACCOUNT


        // Send response
        res.send({
            Good: 'Job!'
        });
    }
}