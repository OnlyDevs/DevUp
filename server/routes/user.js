const { userController } = require('../controllers');
const { Router } = require('express');

const router = Router();

// development
router.post('/', userController.createUser, (req, res) => {
  res.status(200).json({});
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
