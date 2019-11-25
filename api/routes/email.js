const emailCtrl = require('../controllers/emailCtrl');

module.exports = (router) => {
    router
        .route('./email/test')
        .get(
            emailCtrl.getEmail
        );

    router
        .route('./email/test')
        .post(
            emailCtrl.createEmail
        );
}