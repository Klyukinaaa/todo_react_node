const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");

const itemsRouter = require("./routes/itemRouter.js");
const homeRouter = require("./routes/homeRouter.js");
const cors = require('./middleware/cors')

// const models = require("./models");
// const User = models.user;
// const Todo = models.todo;

const app = express();

app.use(cors);

app.use(bodyParser.urlencoded({extended: true})); //добавляем плагин
app.use(bodyParser.json()); //для генерации json объектов

// сопоставляем роутер с конечной точкой
app.use("/items", itemsRouter);
app.use("/", homeRouter);

// обработка ошибки 404
app.use(function (req, res, next) {
    res.status(404).send("Not Found")
});

app.use(passport.initialize); //указываем проекту, что он будет работать с passport
require("./middleware/passport")(passport);

app.listen(5000);






// const {initialize} = require("./models/index");
// initialize().then(() => {
//     app.listen(3000);
// }).catch(e => console.log(e));
