const user = require('./user');
const email = require('./email');

module.exports = (router) => {
    user(router);
    email(router);
}