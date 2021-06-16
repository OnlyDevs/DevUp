const { Router } = require("express");
const { matchController } = require("../controllers");

const router = Router();

// route to get people who liked user
router.get("/likedBy", matchController.getLikedBy, (req, res) => {
  res.status(200).json({
    likedBy: res.locals.likedBy,
  });
});

// route for people who both like each other
router.get("/", matchController.getMatches, (req, res) => {
  res.status(200).json({
    matches: res.locals.matches,
  });
});

// route for people that the user liked
router.post("/like", matchController.like, (req, res) => {
  res.status(200).json({
    match: res.locals.match,
  });
});

module.exports = router;
