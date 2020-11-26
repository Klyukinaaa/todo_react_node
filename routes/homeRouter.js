const express = require("express");
const homeController = require("../controllers/homeController.js");
const {check} = require("express-validator");

const homeRouter = express.Router(); // определяем роутеры

// определяем маршруты и их обработчики внутри роутера itemsRouter
homeRouter.post("/login",    [
  check("email", "Please enter a valid email") //Введите корректный email
      .normalizeEmail().isEmail(),
  check("password", "Enter password") //Введите пароль
      .exists(),
], homeController.login);

homeRouter.post("/register", [
  check("email", "Incorrect email").isEmail(), //Некорректный email
  check("password", "Minimum password length 6 characters") //Минимальная длина пароля 6 символов
      .isLength({ min: 6 }),
], homeController.register);

module.exports = homeRouter;
