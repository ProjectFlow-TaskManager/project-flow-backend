const router = require('express').Router();

const projectRouter = require('./projects');

router.use(projectRouter);

module.exports = router;
