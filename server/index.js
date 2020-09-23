if (process.env.NODE_ENV !== 'production') require('dotenv').config()  // may have to update this to a different heroku specific env
const chalk = require('chalk')
const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const SequelizeStore = require('connect-session-sequelize')(session.Store)
const { db } = require('./db/models')
const {customOptions, logger} = require('./utils')
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
sessionStore.sync()

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
    console.log(chalk.white.bgBlueBright(` API is listening on port:${PORT} `))
  } catch (err) {
    console.error(err)
  }
}

bootServer()
