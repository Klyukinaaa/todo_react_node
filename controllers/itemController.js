const db = require('../models/index');

const Item = db.todo;
const errorHandler = require('../utils/errorHandler');

// список задач юзера
module.exports.getItems = async function (request, response) {
  try {
    // поиск по items
    const items = await Item.findAll({
      where: {
        user: request.user.id, // поиск по юзеру
      },
    });
    response.status(201).json(items);
  } catch (err) {
    errorHandler(response, err);
  }
};

// создание новых задач
module.exports.create = async function (request, response) {
  try {
    const item = await Item.create({
      user: request.user.id,
      task: request.body.task,
      completed: request.body.completed,
      color: request.body.color,
    });
    response.status(201).json(item);
  } catch (err) {
    errorHandler(response, err); // обработать ошибку
  }
};

// удалить задачу
module.exports.remove = async function (request, response) {
  try {
    await Item.destroy({
      where: {
        id: request.params.id,
      },
    });
    response.status(201).json({
      message: 'The task has been deleted.',
    });
  } catch (err) {
    errorHandler(response, err);
  }
};

// обновить задачу
module.exports.update = async function (request, response) {
  try {
    await Item.update({
      task: request.body.task,
      completed: request.body.completed,
    }, {
      where: {
        id: request.params.id,
      },
    });
    response.status(201).json({
      message: 'Task updated.',
    });
  } catch (err) {
    errorHandler(response, err);
  }
};
