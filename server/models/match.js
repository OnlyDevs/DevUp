const { pool } = require('./db');

class Match {
  createTable() {
    const query = `CREATE TABLE IF NOT EXISTS matches (
      id SERIAL PRIMARY KEY, 
      person1 INT NOT NULL REFERENCES users (id), 
      person2 INT NOT NULL REFERENCES users (id), 
      date_match TIMESTAMP)`;

    return pool.query(query);
  }

  async seed() {}

  getPrevMatch(selfId, otherId) {
    const query = `SELECT * FROM matches
    WHERE person2 = $1
    AND person1 = $2`;

    return pool.query(query, [selfId, otherId]);
  }

  match(selfId, otherId) {
    const query = `UPDATE matches
    SET date_match = NOW()
    WHERE person2 = $1
    AND person1 = $2`;

    return pool.query(query, [selfId, otherId]);
  }

  create(selfId, otherId) {
    const query = `INSERT INTO matches (
      person1,
      person2,
      date_match)
      VALUES ($1, $2)
    )`;
    return pool.query(query, [selfId, otherId]);
  }
}

const MatchModel = new Match();

module.exports = {
  MatchModel,
};
