const { createUser, login, logout } = require('../controllers/users');
const router = require('express').Router();

router.post('/register', createUser);
router.post('/login', login);
router.post('/logout', logout);

module.exports = router;
