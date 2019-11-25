module.exports = {
    getEmail: (req, res) => {
        // User was authenticated by jwt middleware
        const userId = req.user.id;
        console.log(userId);

        // Get email

        // Respond
        res.status(200).send({
            Email: 'Hello World!'
        });
    },

    createEmail: (req, res) => {
        // User was authenticated by jwt middleware
        const userId = req.user.id;
        console.log(userId);

        // Make email


        // Send response
        res.send({
            Good: 'Job!'
        });
    }
}