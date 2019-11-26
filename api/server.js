require('dotenv').config();
const express       = require('express');
const app           = express();
const helmet        = require('helmet');
const bodyParser    = require('body-parser');


// MIDDLEWARE
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const { login } = require('./util/customMiddleware');
app.use(login);


// ROUTER
const router = express.Router();
app.use(router);
require('./routes')(router);


const PORT = process.env.API_PORT || 3007;
app.listen(PORT, () => console.log(`Express api is running on port ${PORT}!`));