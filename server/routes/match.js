const { Router } = require('express');
const { matchController } = require('../controllers');

const router = Router();

// /matches?userId=1 -> req.query.userId
router.get('/', matchController.getMatches, (req, res) => {
  res.status(200).json({
    matches: res.locals.matches,
  });
});

// /matches/isLiked?userId=1
router.get('/isLiked', matchController.getIsLiked, (req, res) => {
  res.status(200).json({
    user: res.locals.user,
  });
});

module.exports = router;
