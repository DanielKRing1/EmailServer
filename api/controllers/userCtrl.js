module.exports = {
    getAccount: (req, res) => {
        // User was authenticated by jwt middleware
        const userId = req.user.id;
        console.log(userId);

        // Get account


        // Return account
        res.status(200).send({
            Account: 'Hello World!'
        });
    },

    createAccount: (req, res) => {
        // Make account


        // Send response
        res.send({
            Good: 'Job!'
        });
    }
}