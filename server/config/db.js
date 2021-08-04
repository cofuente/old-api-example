const Sequelize = require('sequelize')
const pkg = require( '../../package.json' )
const CURRENT_ENV = process.env.CURRENT_ENV || 'LOCAL'
const databaseName = pkg.name + (process.env.NODE_ENV === 'test' ? '-test' : '')

// on localhost
const configForLocal = {
  ssl: false,
  logging: false,
  dialect: 'postgres',
}

// on staging or prod
const configForHosted = {
  ssl: true,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // TODO: investigate switching to true
    }
  }
}

// replaces keys depending on db url presence
const config = CURRENT_ENV === 'LOCAL' ? configForLocal : Object.assign(configForLocal, configForHosted)

const db = new Sequelize(process.env.DATABASE_URL || `postgres://localhost:5432/${databaseName}`, config )

module.exports = db
