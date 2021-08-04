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
          rejectUnauthorized: false // TODO: investigate switching to true
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


const db = new Sequelize(process.env.DATABASE_URL || `postgres://localhost:5432/${databaseName}`, config )

module.exports = db
