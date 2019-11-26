module.exports = {
    getEmail: (req, res) => {
        // User was authenticated by jwt middleware
        const userId = req.user.id;
        console.log(userId);

        // GET EMAIL

        // Respond
        res.status(200).send({
            Email: 'Hello World!'
        });
    },

    getAllEmails: (req, res) => {
        // User was authenticated by jwt middleware
        const userId = req.user.id;
        console.log(userId);

        // GET ALL EMAILS

        // Respond
        res.status(200).send({
            Email: 'Hello World!'
        });
    }
}