const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  const token = req.cookies.jwt;

  if (!token) {
    console.log('Токен не найден');
    return res.status(401).send({ message: 'Необходима авторизация' });
  }

  let payload;

  try {
    payload = jwt.verify(token, 'dev-secret-key');
  } catch (err) {
    console.log('Ошибка при проверке токена:', err);
    return res.status(401).send({ message: 'Необходима авторизация' });
  }

  console.log('Проверенный payload:', payload);
  req.user = payload;
  return next();
};

module.exports = { auth };
