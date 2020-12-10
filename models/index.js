const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('todo', 'postgres', 'user', {
  dialect: 'postgres',
  define: {
    timestamps: false,
  },
});

const User = require('./User')(sequelize);
const Todo = require('./Todo')(sequelize);

// внешний ключ
User.hasMany(Todo, { foreignKey: 'user' });

module.exports = {
  sequelize,
  user: User,
  todo: Todo,
};

// sync() синхронизирует структуру базы данных с определением моделей
// если для какой-то модели отстуствует соотв. таблица в БД, то эта таблица создается
// force удалить таблицы и создать их заново, но уже с нужной нам структурой
sequelize.sync();

// const config = require('config.json')('./config.json');
// const {Client} = require('pg');
// let db;
//
// async function initialize() {
//     // create db if it doesn't already exist
//     const {host, port, user, password, database} = config.database;
//     const client = await new Client({
//         user: user,
//         host: host,
//         database: database,
//         password: password,
//         port: port,
//     })
//     client.connect()
//
//     const newTable = function () {
//         db = new Sequelize('todo', user, password, {dialect: 'postgres', define: {timestamps: false}});
//         // connect to db
//
//         const User = require('./User')(db);
//         const Todo = require('./Todo')(db);
//
//         User.hasMany(Todo, {foreignKey: 'id_user'})
//
//         //sync() синхронизирует структуру базы данных с определением моделей
//         //если для какой-то модели отстуствует соответствующая таблица в БД, то эта таблица создается
//         db.sync({force: true})//force чтобы удалить таблицы и создать их заново, но уже с нужной нам структурой
//         module.exports = db
//     }
//
//     try {
//         await client.query(`CREATE DATABASE Todo`);
//         newTable();
//     } catch {
//         newTable();
//     }
//
// }
//
// module.exports = {
//     initialize,
//     db
// };
