const { pool } = require('./db');
const faker = require('faker');

class User {
  createTable() {
    const query = `CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY, 
      username VARCHAR NOT NULL, 
      password VARCHAR NOT NULL, 
      bio VARCHAR, 
      languages VARCHAR,
      current_project VARCHAR)`;

    return pool.query(query);
  }

  async seed() {
    for (let i = 0; i < 10; i++) {
      await this.create({
        username: faker.name.findName(),
        password: faker.random.word(),
        bio: faker.company.companyName(),
        languages: faker.random.words(),
        current_project: faker.random.word(),
      });
    }
  }

  getById(id) {
    const query = 'SELECT * FROM users WHERE users.id = $1';

    return pool.query(query, [id]);
  }

  getByIds(ids) {
    let params = '';
    for (let i = 1; i <= ids.length; i++) {
      params += `$${i}`;
      if (i < ids.length) {
        params += ',';
      }
    }
    const query = `SELECT * FROM users WHERE id IN (${params})`;

    return pool.query(query, [...ids]);
  }

  explore(id) {
    const query = 'SELECT * FROM users WHERE users.id != $1';

    return pool.query(query, [id]);
  }

  create(params) {
    const query = `INSERT INTO users (
      username,
      password,
      bio,
      languages,
      current_project)
      VALUES ($1, $2, $3, $4, $5)`;
    return pool.query(query, [
      params.username,
      params.password,
      params.bio,
      params.languages,
      params.current_project,
    ]);
  }

  update(id, params) {
    const query = `UPDATE users
    SET bio = $2, 
    languages = $3, 
    current_project = $4
    WHERE id = $1;
    `;
    return pool.query(query, [
      id,
      params.bio,
      params.languages,
      params.current_project,
    ]);
  }
  // const queryStr =
  // "SELECT s.name, classification, average_height, average_lifespan,
  // language, p.name AS homeworld FROM species s INNER JOIN
  // planets p ON s.homeworld_id = p._id WHERE s._id = $1";
  // u.id as id,
  // u.username as username,
  // u.bio as bio,
  // u.languages as languages,
  // u.current_project as current_project,
  // u2.id as id2,
  // u2.username as username2,
  // u2.bio as bio2,
  // u2.languages as languages2,
  // u2.current_project as current_project2
  // FROM matches m
  // JOIN users u on u.id = m.person1
  // JOIN users u2 on u2.id = m.person2
  getMatches(id) {
    const query = `SELECT * FROM matches
    WHERE date_match IS NOT NULL
    AND (person1 = $1 OR person2 = $1)`;

    return pool.query(query, [id]);
  }

  getIsLiked(id) {
    const query = `SELECT * FROM matches 
    WHERE date_match IS NULL
    AND person2 = $1`;

    return pool.query(query, [id]);
  }

  getLiked(id) {
    const query = `SELECT * FROM matches 
    WHERE date_match IS NULL
    AND person1 = $1`;

    return pool.query(query, [id]);
  }
}

const UserModel = new User();

// development
// UserModel.getById(1).then(console.log)
// UserModel.explore(1).then(console.log)
// UserModel.update(1, {
//   bio: 'test',
//   languages: 'test',
//   current_project: 'test',
// }).then(console.log);
// UserModel.getMatches(1).then((res) => console.log(res.rows));
// UserModel.getIsLiked(1).then((res) => console.log(res.rows));
// UserModel.getByIds([1, 2, 3]).then((res) => console.log(res.rows));

module.exports = {
  UserModel,
};
