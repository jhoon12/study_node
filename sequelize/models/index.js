const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'devlopment';
const config = require('../config/config')[env]
const db = {};

const sequelize = new Sequelize(config.database, config.username)

db.sequelize = sequelize;

module.exports(db)