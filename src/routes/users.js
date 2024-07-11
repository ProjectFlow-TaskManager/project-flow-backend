const router = require('express').Router();

const { getUser } = require('../controllers/users');

router.get('/user', getUser);

module.exports = router;
