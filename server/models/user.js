const { pool } = require("./db");
const faker = require("faker");

// user class that contains the functions to CRUD users
class User {
  // sql query to create users table
  createTable() {
    const query = `
    CREATE TABLE 
    IF NOT EXISTS 
    users (
      id SERIAL PRIMARY KEY, 
      username VARCHAR UNIQUE, 
      bio VARCHAR, 
      languages VARCHAR,
      current_project VARCHAR,
      githubId INT UNIQUE,
      profileImgUrl VARCHAR
    )`;

    return pool.query(query);
  }

  // generates seed using fake information from faker library
  async seed() {
    for (let i = 0; i < 10; i++) {
      await this.create({
        username: faker.name.findName(),
        bio: faker.company.companyName(),
        languages: faker.random.words(),
        current_project: faker.random.word(),
      });
    }
  }

  //query to select specific user
  getById(id) {
    const query = "SELECT * FROM users WHERE users.id = $1";

    return pool.query(query, [id]);
  }

  // query to select specific user by their github id
  getByGithubId(id) {
    const query = "SELECT * FROM users WHERE users.githubId = $1";

    return pool.query(query, [id]);
  }

  // batch query for a table of users by their ID
  getByIds(ids) {
    if (ids.length === 0) {
      return Promise.resolve();
    }

    let params = "";
    for (let i = 1; i <= ids.length; i++) {
      params += `$${i}`;
      if (i < ids.length) {
        params += ",";
      }
    }
    const query = `SELECT * FROM users WHERE id IN (${params})`;

    return pool.query(query, [...ids]);
  }

  // queries the database for users other than the current user
  explore(id) {
    const query = "SELECT * FROM users WHERE users.id != $1";

    return pool.query(query, [id]);
  }

  // creates a new user based on information provided by the user themselves
  create(params) {
    const query = `INSERT INTO 
    users (
      username,
      bio,
      languages,
      current_project,
      profileImgUrl
      )
      VALUES ($1, $2, $3, $4, $5)`;
    return pool.query(query, [
      params.username,
      params.bio,
      params.languages,
      params.current_project,
      params.profileImgUrl,
    ]);
  }

  // creates a new user based on information retrieved from github
  createUserWithGithub(githubId) {
    const query = `INSERT INTO users (githubId) VALUES ($1)`;
    return pool.query(query, [githubId]);
  }

  // updates a specific user with new information provided by the user themselves
  update(id, params) {
    const query = `UPDATE users
    SET bio = $2, 
    languages = $3, 
    current_project = $4,
    profileImgUrl = $5
    WHERE id = $1;
    `;
    return pool.query(query, [
      id,
      params.bio,
      params.languages,
      params.current_project,
      params.profileImgUrl,
    ]);
  }

  // updates a spefici user found by github ID with information provided by github
  updateWithGithub(githubId, params) {
    const query = `UPDATE users
    SET username = $2,
    bio = $3, 
    languages = $4, 
    current_project = $5,
    profileImgUrl = $6
    WHERE githubId = $1;
    `;
    const arr = [
      githubId,
      params.username,
      params.bio,
      params.languages,
      params.current_project,
      params.profileImgUrl,
    ];
    // console.log(arr);
    return pool.query(query, arr);
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
