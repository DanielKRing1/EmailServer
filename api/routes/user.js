const userCtrl = require('../controllers/userCtrl');
const { isLoggedIn } = require('../util/customMiddleware');

module.exports = (router) => {
    router
        .route('/user/test')
        .get(
            isLoggedIn,
            userCtrl.getAccount
        );

    router
        .route('/user/test-jwt')
        .get(
            userCtrl.getGenericJwt
        );

    router
        .route('/user/test')
        .post(
            userCtrl.createAccount
        );
}