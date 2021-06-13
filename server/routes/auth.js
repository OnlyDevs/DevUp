const { Router } = require('express');
const { authController } = require('../controllers');

const router = Router();

router.post(
  '/github',
  authController.getGithubToken,
  authController.getGithubUser,
  (req, res) => {
    console.log(res.locals.githubUser);
    res.status(200).json({
      githubToken: res.locals.githubToken,
    });
  }
);

module.exports = router;
