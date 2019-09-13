const Sequelize = require('sequelize');

module.exports = {
    sequelize: new Sequelize('test_node', 'root', '', {
        host: 'localhost',
        dialect: 'mysql',
    })
};