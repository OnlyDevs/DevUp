const { config } = require('dotenv');

config();

const NODE_ENV = process.env.NODE_ENV || 'development';
const PG_URI = process.env.PG_URI;
const GH_CLIENT_ID = process.env.GH_CLIENT_ID;
const GH_CLIENT_SECRET = process.env.GH_CLIENT_SECRET;

module.exports = {
  NODE_ENV,
  PG_URI,
  GH_CLIENT_ID,
  GH_CLIENT_SECRET,
};
