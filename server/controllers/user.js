const { UserModel } = require('../models');

class UserController {
  getUserById(req, res, next) {
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

  getUserByGithubId(req, res, next) {
    UserModel.getByGithubId(res.locals.githubUser.id)
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

  createUser(req, res, next) {
    return UserModel.create({
      ...req.body,
      githubId: res.locals.githubUser ? res.locals.githubUser.id : null,
    })
      .then((result) => {
        next();
      })
      .catch((err) => {
        next(err);
      });
  }

  createUserWithGithub(req, res, next) {
    return UserModel.getByGithubId(res.locals.githubUser.id)
      .then((result) => {
        if (result.rows.length === 1) {
          return;
        }
        return UserModel.create({
          ...req.body,
          githubId: res.locals.githubUser ? res.locals.githubUser.id : null,
        });
      })
      .then(() => {
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
