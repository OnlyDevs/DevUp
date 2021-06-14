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

  setupUserWithGithub(req, res, next) {
    return UserModel.updateWithGithub(res.locals.githubUser.id, {
      ...req.body,
    })
      .then(() => {
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
        return UserModel.createUserWithGithub(res.locals.githubUser.id);
      })
      .then(() => {
        next();
      })
      .catch((err) => {
        next(err);
      });
  }

  updateUser(req, res, next) {
    return UserModel.update(req.params.id, req.body)
      .then((data) => {
        // console.log(data);
        next();
      })
      .catch((err) => {
        next(err);
      });
  }

  explore(req, res, next) {
    return UserModel.explore(req.query.userId)
      .then((result) => {
        res.locals.users = result.rows;
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
