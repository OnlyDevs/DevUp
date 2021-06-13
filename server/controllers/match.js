const { MatchModel } = require('../models');

class MatchController {
  getMatches(req, res, next) {
    MatchModel.getMatches(req.params.id)
      .then((data) => {
        const matches = data.rows;

        if (!matches) {
          throw {
            statusCode: 400,
            message: 'no matches :(',
          };
        }

        res.locals.matches = matches;
      })
      .then((err) => {
        next(err);
      });
  }

  getIsLiked(req, res) {
    next();
  }
}

const matchController = new MatchController();

module.exports = {
  matchController,
};
