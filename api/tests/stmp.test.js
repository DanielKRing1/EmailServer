const httpStatus = require('http-status');
const app = require('../app');
const smtpTransport = require('../../email/transport');

describe('## EMAIL APIs', () => {
  before(async () => {});


  describe('Send Mail', () => {
    it('should get user', async () => {
      const response = await request(app).get('/api/users/');

      expect(response.status).to.equal(httpStatus.OK);
    });
  });
});
