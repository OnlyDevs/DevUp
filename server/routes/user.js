const { userController } = require('../controllers');
const { Router } = require('express');

const router = Router();

router.get('/:id', userController.getUser, (req, res) => {
  res.status(200).json({
    user: res.locals.user,
  });
});

router.patch(
  '/:id',
  userController.updateUser,
  userController.getUser,
  (req, res) => {
    res.status(200).json({
      user: res.locals.user,
    });
  }
);

module.exports = router;
