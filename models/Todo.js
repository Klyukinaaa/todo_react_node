const Sequelize = require("sequelize");

module.exports = function (sequelize) {
    return sequelize.define("todo", { // define определение модели
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        user: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        task: {
            type: Sequelize.STRING,
            allowNull: false
        },
        completed: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
        color: {
            type: Sequelize.STRING,
        }
    })
}
