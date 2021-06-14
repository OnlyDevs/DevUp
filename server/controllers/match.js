const { MatchModel, UserModel } = require('../models');

class MatchController {
  getMatches(req, res, next) {
    const userId = req.query.userId;
    return MatchModel.getMatches(userId)
      .then((data) => {
        const matches = data.rows;

        if (!matches) {
          throw {
            statusCode: 400,
            message: 'no matches :(',
          };
        }

        const matchIds = matches.map((match) => {
          if (match.person1 == userId) {
            return match.person2;
          }
          return match.person1;
        });
        return matchIds;
      })
      .then((matchIds) => {
        return UserModel.getByIds(matchIds);
      })
      .then((data) => {
        if (!data) {
          res.locals.matches = [];
        } else {
          res.locals.matches = data.rows;
        }
        next();
      })
      .catch((err) => {
        next(err);
      });
  }

  getLikedBy(req, res, next) {
    return MatchModel.getLikedBy(req.query.userId)
      .then((data) => {
        const matches = data.rows;

        if (!matches) {
          throw {
            statusCode: 400,
            message: 'no matches :(',
          };
        }

        const matchIds = matches.map((match) => {
          return match.person1;
        });
        return matchIds;
      })
      .then((matchIds) => {
        return UserModel.getByIds(matchIds);
      })
      .then((data) => {
        if (!data) {
          res.locals.likedBy = [];
        } else {
          res.locals.likedBy = data.rows;
        }
        next();
      })
      .catch((err) => {
        next(err);
      });
  }

  like(req, res, next) {
    const { selfId, otherId } = req.body;
    // check if other person has liked you
    return MatchModel.getPrevMatch(selfId, otherId)
      .then((result) => {
        if (result.rows.length > 0) {
          // match
          return MatchModel.match(selfId, otherId);
        }
        // check if you already liked them
        return MatchModel.getAlreadyLiked(selfId, otherId).then((result) => {
          if (result.rows.length > 0) {
            return;
          }
          // create a new match
          return MatchModel.create(selfId, otherId);
        });
      })
      .then(() => {
        // return the match
        return MatchModel.getPrevMatch(selfId, otherId);
      })
      .then((result) => {
        res.locals.match = result.rows[0];
        next();
      })
      .catch((err) => next(err));
  }
}

const matchController = new MatchController();

module.exports = {
  matchController,
};
