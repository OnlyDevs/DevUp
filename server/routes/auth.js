const { Router } = require("express");
const { authController, userController } = require("../controllers");

const router = Router();

// something something endpath '/github/ is the redirect from OAuth
// endpoint received from github callback after login
router.post(
  "/github",
  authController.createGithubToken,
  authController.getGithubUser,
  userController.createUserWithGithub,
  userController.getUserByGithubId,
  (req, res) => {
    res.status(200).json({
      githubToken: res.locals.githubToken,
      user: res.locals.user,
    });
  }
);

// exported as 'router' to index.js where it is exported again as 'authRouter'
module.exports = router;
