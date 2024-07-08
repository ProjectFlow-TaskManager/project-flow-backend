const router = require('express').Router();

const projectRouter = require('./projects');
const userAuthRouter = require('./users');

router.use(projectRouter);
router.use(userAuthRouter);

module.exports = router;
