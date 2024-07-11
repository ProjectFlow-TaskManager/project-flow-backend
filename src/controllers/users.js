const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const createUser = async (req, res) => {
  const { email, password, name } = req.body;
  try {
    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ email, password: hash, name });
    res.status(201).send(user);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findUserByCredentials(email, password);
    const token = jwt.sign({ _id: user._id }, 'dev-secret-key', {
      expiresIn: '7d',
    });
    res.cookie('jwt', token, {
      maxAge: 3600000 * 24 * 7,
      httpOnly: true,
      sameSite: true,
    });
    res.send({ message: 'SUCCESSFUL' });
  } catch (err) {
    res.status(401).send({ message: 'Неправильные почта или пароль' });
  }
};

const getUser = async (req, res) => {
  try {
    if (!req.user || !req.user._id) {
      return res.status(401).send({ message: 'Необходима авторизация' });
    }

    const user = await User.findById(req.user._id);
    if (user) {
      res.send(user);
    } else {
      res.status(404).send({ message: 'Пользователь не найден' });
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const logout = (req, res) => {
  res.cookie('jwt', 'none', {
    maxAge: 5000,
    httpOnly: true,
    sameSite: true,
  });
};

module.exports = { createUser, login, logout, getUser };
