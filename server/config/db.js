const Sequelize = require('sequelize')
const pkg = require('../../package.json')

const databaseName = pkg.name + (process.env.NODE_ENV === 'test' ? '-test' : '')

let config = {}
if (process.env.DATABASE_URL){
  config = {
    dialect: 'postgres',
    logging: false,
      ssl: false,
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false
        }
    }
  }
} else {
  config = {
    dialect: 'postgres',
    logging: false,
    ssl: false
  }
}


const db = new Sequelize(process.env.DATABASE_URL || `postgres://postgres:password@localhost:5432/secure_form_api`, config )

module.exports = db
