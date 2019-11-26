const express = require('express');
const emailCtrl = require('../controllers/emailCtrl');
const { isLoggedIn } = require('../utils/customMiddleware');

const router = express.Router(); // eslint-disable-line new-cap

router.route('/single')
  .get(isLoggedIn, emailCtrl.getEmail)
  .post(emailCtrl.getAllEmails);

router.route('/')
  .get(emailCtrl.getAllEmails);

module.exports = router;
