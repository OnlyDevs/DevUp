const { Pool } = require("pg");
const { PG_URI } = require("./env");

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  pool,
};

// const test = async () => {
//   console.log(await pool.query("SELECT NOW()"));
// };

// test();
