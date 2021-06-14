const { UserModel } = require('./user');
const { MatchModel } = require('./match');

const createTables = () => {
  return UserModel.createTable().then(() => {
    return MatchModel.createTable();
  });
  // return Promise.resolve();
};

module.exports = {
  createTables,
  UserModel,
  MatchModel,
};
