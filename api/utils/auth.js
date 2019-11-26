const jwt = require('jsonwebtoken');

const signOptions = {
  expiresIn: '30d',
  algorithm: 'RS256',
};

const privateKey = process.env.JWT_PRIVATE_KEY.replace(/\\n/g, '\n');
const publicKey = process.env.JWT_PUBLIC_KEY.replace(/\\n/g, '\n');

module.exports = {
  createToken: async (payload) => {
    try {
      console.log('IN CREATETOKEN()');

      const token = await jwt.sign(payload, privateKey, signOptions);
      console.log(token);

      return token;
    } catch (err) {
      console.log(err);
    }
  },

  verifyToken: async (token) => {
    try {
      console.log('IN VERIFYTOKEN()');
      const payload = await jwt.verify(token, publicKey, signOptions);

      return payload;
    } catch (err) {
      console.log(err);
    }
  },
};
