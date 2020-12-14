/* eslint-disable no-console */
/* eslint-disable global-require */
// eslint-disable-next-line import/no-extraneous-dependencies
if (process.env.NODE_ENV !== 'production') require('dotenv').config() // may have to update this to a different heroku specific env
const chalk = require('chalk')
const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const SequelizeStore = require('connect-session-sequelize')(session.Store)
const { db } = require('./db/models')
const { customOptions, logger } = require('./utils')

const storeOptions = customOptions(db)
const sessionStore = new SequelizeStore(storeOptions)
const PORT = process.env.PORT || 1337
const server = express()

// session middleware
server.use(
  session({
    secret: process.env.SESSIONS_SECRET || 'abc123',
    name: process.env.SECRET_SESSION_NAME || 'nextharm',
    cookie: {
      secure: true,
      maxAge: 30 * 60 * 1000 // The maximum age (in milliseconds) of a valid session.
    },
    store: sessionStore,
    resave: true,
    saveUninitialized: true
  })
)

// logging middleware
server.use(logger)

// body parsing middleware
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

// api routes
server.use('/api', require('./api'))

// error handling endware
// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  console.error(err.stack)
  return res.status(500).send('Something broke!')
}
server.use(errorHandler)

const bootServer = async () => {
  try {
    await db.sync()
    await sessionStore.sync()
    console.log(chalk.green('Postgres server is up and running!'))
    await server.listen(PORT) // linter says this await is unecessary should investigate
    console.log(chalk.blueBright(` API is listening on port:${PORT} `))
  } catch (err) {
    console.error(err)
  }
}
module.exports = {
  bootServer
}