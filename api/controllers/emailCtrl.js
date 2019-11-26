const httpStatus = require('http-status');

module.exports = {
  getEmail: (req, res) => {
    // User was authenticated by jwt middleware
    const userId = req.user.id;
    console.log(userId);

    // GET EMAIL

    // Respond
    res.status(httpStatus.OK).send({
      Email: 'Hello World!',
    });
  },

  getAllEmails: (req, res) => {
    // User was authenticated by jwt middleware
    const userId = req.user.id;
    console.log(userId);

    // GET ALL EMAILS

    // Respond
    res.status(httpStatus.OK).send({
      Email: 'Hello World!',
    });
  },
};
