const userCtrl = require('../controllers/userCtrl');

module.exports = (router) => {
    router
        .route('./user/test')
        .get(
            userCtrl.getAccount
        );

    router
        .route('./user/test')
        .post(
            userCtrl.createAccount
        );
}