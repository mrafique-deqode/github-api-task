const envVars = require('../config/constants')

module.exports = {
  HOST: envVars.HOST,
  USER: 'postgres',
  PASSWORD: envVars.PASSWORD,
  DB: "assignment",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
