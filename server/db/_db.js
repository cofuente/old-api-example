/* eslint-disable no-console */
const Sequelize = require('sequelize')
const chalk = require('chalk')

const dbName = process.env.DB_NAME || 'pebe'
console.log(chalk.cyan(`using database < ${dbName} >`))

// Passing a connection URI
const db = new Sequelize( process.env.DATABASE_URL || `postgres://localhost:5432/${dbName}`, {
  define: {
    timestamps: true
  },
  ssl: {
    rejectUnauthorized: false
  },
  logging: false
})

module.exports = db