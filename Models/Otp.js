const { Model, DataTypes} = require('sequelize');
const sequelize = require('../database');

class Otp extends Model {

}

Otp.init({
    id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    phone: {
        type: DataTypes.STRING
    },
    otp: {
        type: DataTypes.STRING
    },
}, {
    sequelize,
    modelName: 'otp'
});

module.exports = Otp;