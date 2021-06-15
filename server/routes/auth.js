const { Router } = require('express');
const { authController, userController } = require('../controllers');

const router = Router();

router.post(
  '/github',
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

module.exports = router;
