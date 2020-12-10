const express = require('express');
const passport = require('passport');
const itemController = require('../controllers/itemController.js');

const itemsRouter = express.Router(); // определяем роутеры

// определяем маршруты и их обработчики внутри роутера itemsRouter

// получение всех задач
// модуль позволяет вам аутентифицировать конечные точки с помощью веб-токена JSON
itemsRouter.get('/', passport.authenticate('jwt', { session: false }), itemController.getItems);
// создание новых задач
itemsRouter.post('/', passport.authenticate('jwt', { session: false }), itemController.create);

// удалить задачу
itemsRouter.delete('/:id', passport.authenticate('jwt', { session: false }), itemController.remove);
// обновить задачу
itemsRouter.patch('/:id', passport.authenticate('jwt', { session: false }), itemController.update);

module.exports = itemsRouter;
