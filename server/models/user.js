const Sequelize = require('sequelize');
const db = require('../../server/config/db');

const User = db.sequelize.define('user', {
    id: {type: Sequelize.SMALLINT, primaryKey: true, autoIncrement: true, allowNull: false},
    name: {type: Sequelize.STRING},
    email: {type: Sequelize.STRING, allowNull: false},
    age: {type: Sequelize.SMALLINT},
    password: {type: Sequelize.STRING, allowNull: false},
});

module.exports = User;