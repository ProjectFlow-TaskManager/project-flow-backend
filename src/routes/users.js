const router = require('express').Router();

const { getUser } = require('../controllers/users');

router.get('/user/me', getUser);

module.exports = router;
