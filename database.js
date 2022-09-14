const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('atomic', 'user', 'pass', {
    dialect: 'sqlite',
    host: './atomics_otp.sqlite',
});

module.exports = sequelize;