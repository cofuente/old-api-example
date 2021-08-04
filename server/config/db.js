const Sequelize = require('sequelize')
const pkg = require('../../package.json')

const databaseName = pkg.name + (process.env.NODE_ENV === 'test' ? '-test' : '')

// on staging or prod
const configForHosted = {
  logging: false,
  ssl: true,
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // TODO: investigate switching to true
    }
  },
}
// on localhost
const configForLocal = {
  ssl: false,
  dialectOptions: {
    ssl: {
      require: false,
      rejectUnauthorized: false
    }
  },
}

// replaces keys depending on db url presence
const config = process.env.DATABASE_URL ? configForHosted : Object.assign(configForHosted, configForLocal)


const db = new Sequelize(process.env.DATABASE_URL || `postgres://localhost:5432/${databaseName}`, config )

module.exports = db
