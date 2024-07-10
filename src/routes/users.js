const router = require('express').Router();

const { createUser, login, getUser, logout } = require('../controllers/users');

router.post('/register', createUser);
router.post('/login', login);
router.post('/user', getUser);
router.post('/logout', logout);

module.exports = router;
