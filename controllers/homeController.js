const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const db = require('../models/index');
const keys = require('../config/keys');

const User = db.user;
const errorHandler = require('../utils/errorHandler');

module.exports.login = async function (request, response) {
  const errors = validationResult(request);

  if (!errors.isEmpty()) { // если есть ошибка
    return response.status(400).json({
      errors: errors.array(),
      message: 'Invalid login data.',
    });
  }

  const { email } = request.body;
  const { password } = request.body;

  // получаем один объект по определенному критерию
  const candidate = await User.findOne({ where: { email } });

  if (candidate) {
    // проверка пароля
    // const passwordResult = password === candidate.password;
    // сравнение захеширован. паролей
    const isMatch = await bcrypt.compare(password, candidate.password);
    if (isMatch) {
      // генерация токена, пароли совпали
      const token = jwt.sign({ // метод авторизации
        email: candidate.email, // объект, который хотим зашифровать в токене
        id: candidate.id,
      }, keys.jwt, { expiresIn: 60 * 60 });

      response.status(200).json({
        token, // (`Bearer`)
      });
    } else {
      // пароли не совпали
      response.status(401).json({
        message: 'Invalid login data.',
      });
    }
  } else {
    // пользователя нет, ошибка
    response.status(404).json({
      message: 'User with this email was not found.',
    });
  }
};

module.exports.register = async function (request, response) {
  const errors = validationResult(request);

  if (!errors.isEmpty()) { // если есть ошибка
    return response.status(400).json({
      message: 'Incorrect registration data.',
    });
  }

  // email password
  const { email } = request.body;
  const { password } = request.body;

  // получаем один объект по определенному критерию
  const candidate = await User.findOne({ where: { email } });

  if (candidate) {
    response.status(400).json({
      message: 'The user with the specified email already exists!',
    });
  } else { // создание нового пользователя
    try {
      const hashedPassword = await bcrypt.hash(password, 12); // хэширование пароля
      const user = await User.create({
        email,
        password: hashedPassword,
      });
      response.status(201).json(user);
    } catch (err) {
      errorHandler(response, err); // обработать ошибку
    }
  }
};
