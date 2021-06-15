const { userController, authController } = require('../controllers');
const { Router } = require('express');

const router = Router();

router.get(
  '/github',
  authController.extractGithubToken,
  authController.getGithubUser,
  userController.getUserByGithubId,
  (req, res) => {
    res.status(200).json({
      user: res.locals.user,
    });
  }
);

router.patch(
  '/setup',
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

router.get('/explore', userController.explore, (req, res) => {
  res.status(200).json({
    users: res.locals.users.filter((user) => !!user.username),
  });
});

router.get('/:id', userController.getUserById, (req, res) => {
  res.status(200).json({
    user: res.locals.user,
  });
});

router.patch(
  '/:id',
  userController.updateUser,
  userController.getUserById,
  (req, res) => {
    res.status(200).json({
      user: res.locals.user,
    });
  }
);

module.exports = router;
