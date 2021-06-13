const { pool } = require('./db');
const faker = require('faker');

class User {
  createTable() {
    const query = `
    CREATE TABLE 
    IF NOT EXISTS 
    users (
      id SERIAL PRIMARY KEY, 
      username VARCHAR NOT NULL UNIQUE, 
      password VARCHAR NOT NULL, 
      bio VARCHAR, 
      languages VARCHAR,
      current_project VARCHAR,
      githubId INT UNIQUE
    )`;

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

  getByGithubId(id) {
    const query = 'SELECT * FROM users WHERE users.githubId = $1';

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
    const query = `INSERT INTO 
    users (
      username,
      password,
      bio,
      languages,
      current_project,
      githubId)
      VALUES ($1, $2, $3, $4, $5, $6)`;
    return pool.query(query, [
      params.username,
      params.password,
      params.bio,
      params.languages,
      params.current_project,
      params.githubId,
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
}

const UserModel = new User();

module.exports = {
  UserModel,
};

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
