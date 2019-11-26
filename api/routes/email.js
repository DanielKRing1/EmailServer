const emailCtrl = require('../controllers/emailCtrl');
const { isLoggedIn } = require('../util/customMiddleware');

module.exports = (router) => {
    router
        .route('/email/single')
        .get(
            isLoggedIn,
            emailCtrl.getEmail
        );

    router
        .route('/email/all')
        .get(
            isLoggedIn,
            emailCtrl.getAllEmails
        );
}