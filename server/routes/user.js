const { userController, authController } = require("../controllers");
const { Router } = require("express");

const router = Router();

// github OAuth router
router.get(
  "/github",
  authController.extractGithubToken,
  authController.getGithubUser,
  userController.getUserByGithubId,
  (req, res) => {
    res.status(200).json({
      user: res.locals.user,
    });
  }
);

// patch modifies parts of a resource. Modifies the user in the database
router.patch(
  "/setup",
  authController.extractGithubToken,
  authController.getGithubUser,
  userController.setupUserWithGithub,
  userController.getUserByGithubId,
  (req, res) => {
    res.status(200).json({
      user: res.locals.user,
    });
  }
);

// gets user info from database
router.get("/explore", userController.explore, (req, res) => {
  res.status(200).json({
    users: res.locals.users.filter((user) => !!user.username),
  });
});

// gets specific user from database
router.get("/:id", userController.getUserById, (req, res) => {
  res.status(200).json({
    user: res.locals.user,
  });
});

// updates specific parts of user in database
router.patch(
  "/:id",
  userController.updateUser,
  userController.getUserById,
  (req, res) => {
    res.status(200).json({
      user: res.locals.user,
    });
  }
);

module.exports = router;
