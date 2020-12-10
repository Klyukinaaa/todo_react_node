const Sequelize = require('sequelize');

module.exports = function (sequelize) {
  return sequelize.define('user', { // define определение модели
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      require: true, // обязательно поле
      unique: true, // уникальный email
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      require: true,
    },
  });
};
