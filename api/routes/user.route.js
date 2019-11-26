const express = require('express');
const userCtrl = require('../controllers/userCtrl');
const { isLoggedIn } = require('../utils/customMiddleware');

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  .get(isLoggedIn, userCtrl.getAccount)
  .post(userCtrl.createAccount);

router.route('/test-jwt')
  .get(userCtrl.getGenericJwt);

module.exports = router;
