const {Sequelize, DataTypes, Model} = require('sequelize');
const db = require('./database')
class Users extends Model {}

Users.init({
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
        primaryKey: true
    },
    firstname:{
        type: DataTypes.STRING,
    },
    lastname:{
        type: DataTypes.STRING,
    },
    email:{
        type: DataTypes.STRING,

    },
    password:{
        type: DataTypes.STRING
    },
}, {
    sequelize: db.sequelize,
    modelName: 'users',
    timestamps: false
});

module.exports = Users;