const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');

const itemsRouter = require('./routes/itemRouter.js');
const homeRouter = require('./routes/homeRouter.js');
const cors = require('./middleware/cors');

const app = express();

app.use(cors); // для доступа к ответу на запрос из другого источника

app.use(bodyParser.urlencoded({ extended: true })); // добавляем плагин
app.use(bodyParser.json()); // для генерации json объектов

// сопоставляем роутер с конечной точкой
app.use('/items', itemsRouter);
app.use('/', homeRouter);

// обработка ошибки 404
app.use((req, res, next) => {
  res.status(404).send('Not Found');
});

app.use(passport.initialize); // указываем проекту, что он будет работать с passport
require('./middleware/passport')(passport);

app.listen(5000);
