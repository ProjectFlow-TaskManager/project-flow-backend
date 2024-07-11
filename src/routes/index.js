const router = require('express').Router();

const projectRouter = require('./projects');
const userAuthRouter = require('./auth');
const userRouter = require('./users');
const { auth } = require('../middlewares/auth');

router.use(projectRouter);
router.use(userAuthRouter);
router.use(auth, userRouter);

module.exports = router;
