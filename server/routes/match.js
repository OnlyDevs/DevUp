const { Router } = require('express');
const { matchController } = require('../controllers');

const router = Router();

router.get('/likedBy', matchController.getLikedBy, (req, res) => {
  res.status(200).json({
    likedBy: res.locals.likedBy,
  });
});

router.get('/', matchController.getMatches, (req, res) => {
  res.status(200).json({
    matches: res.locals.matches,
  });
});

router.post('/like', matchController.like, (req, res) => {
  res.status(200).json({
    match: res.locals.match,
  });
});

module.exports = router;
