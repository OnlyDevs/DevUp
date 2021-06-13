const { config } = require('dotenv');

config();

const NODE_ENV = process.env.NODE_ENV || 'development';
const PG_URI = process.env.PG_URI;
const GH_CLIENT_ID = 'a3f21d9065747137acec';
const GH_CLIENT_SECRET = 'ffad15d1c19733a0e205fcd25adc183ca8015808';

module.exports = {
  NODE_ENV,
  PG_URI,
  GH_CLIENT_ID,
  GH_CLIENT_SECRET,
};
