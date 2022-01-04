const dotenv = require('dotenv')

dotenv.config()
const envVars = {
    HOST: process.env.HOSTNAME,
    USER: process.env.USER,
    PASSWORD: process.env.PASSWORD,
    PORT: process.env.PORT
}

module.exports = envVars