const { UserModel } = require('../models');

class UserController {
  getUser(req, res, next) {
    UserModel.getById(req.params.id)
      .then((data) => {
        const user = data.rows[0];

        if (!user) {
          throw {
            statusCode: 400,
            message: 'user not found',
          };
        }

        res.locals.user = user;

        next();
      })
      .catch((err) => {
        next(err);
      });
  }

  updateUser(req, res, next) {
    UserModel.update(req.params.id, req.body)
      .then((data) => {
        // console.log(data);
        next();
      })
      .catch((err) => {
        next(err);
      });
  }
}

const userController = new UserController();

module.exports = {
  userController,
};
