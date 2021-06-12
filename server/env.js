const { config } = require("dotenv");

config();

const PG_URI = process.env.PG_URI;

module.exports = {
  PG_URI,
};
