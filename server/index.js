const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const SequelizeStore = require('connect-session-sequelize')(session.Store)
const { db } = require('./db/models')
const sessionStore = new SequelizeStore({db})
const chalk = require('chalk')
const logger = require('./utils/logger')
const PORT = process.env.PORT || 1337
const server = express()

// session middleware 
server.use(
  session({
    secret: process.env.SESSION_SECRET || 'stop the unnecessary harm',
    store: sessionStore,
    resave: false,
    saveUninitialized: false
  })
)
// logging middleware
server.use(logger)

// body parsing middleware
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended: true}))

// api routes
server.use('/api', require('./api'))

// error handling endware
server.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})

const bootServer = async () => {
  try {
    await db.sync()
    await server.listen(PORT)
    console.log(chalk.black.bgBlueBright('Server is up and running'))
  } catch (err) {
    console.error(err)
  }
}

bootServer()
