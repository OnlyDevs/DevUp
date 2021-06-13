const { UserModel } = require('./user');
const { MatchModel } = require('./match');

const createTables = () => {
  return Promise.all([UserModel.createTable(), MatchModel.createTable()]);
};

module.exports = {
  createTables,
  UserModel,
  MatchModel,
};
