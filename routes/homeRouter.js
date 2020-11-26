const express = require("express");
const homeController = require("../controllers/homeController.js");

const homeRouter = express.Router(); // определяем роутеры

// определяем маршруты и их обработчики внутри роутера itemsRouter
homeRouter.post("/login", homeController.login);

homeRouter.post("/register", homeController.register);

module.exports = homeRouter;
