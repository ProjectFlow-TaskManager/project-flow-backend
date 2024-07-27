const router = require('express').Router();

const projectRouter = require('./projects');
const userAuthRouter = require('./auth');
const userRouter = require('./users');
const issueRouter = require('./issues');
const { auth } = require('../middlewares/auth');

router.use(userAuthRouter);
router.use(auth, userRouter);
router.use(auth, projectRouter);
router.use(auth, issueRouter);

module.exports = router;
