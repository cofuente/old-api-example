const Sequelize = require('sequelize')
const pkg = require('../../package.json')

const databaseName = pkg.name + (process.env.NODE_ENV === 'test' ? '-test' : '')

// BONGA NEED TO DYNAMICALLY TOGGLE THE SSL CONFIGURATION DEPENDING ON THE ENVIRONMENT THE SERVER IS RUNNING IN

const config = {
  logging: true,
    // ssl: true,
    // dialectOptions: {
    //   ssl: {
    //     require: true,
    //     rejectUnauthorized: false
    //   }
  // }
}

const db = new Sequelize(process.env.DATABASE_URL || `postgres://localhost:5432/${databaseName}`,
  config )

module.exports = db
