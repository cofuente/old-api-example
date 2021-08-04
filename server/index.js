const express = require('express')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const session = require('express-session')
const SequelizeStore = require('connect-session-sequelize')(session.Store)

const db = require( './config/db' )
const sessionStore = new SequelizeStore({db})
const PORT = process.env.PORT || 1337
const CURRENT_ENV = process.env.CURRENT_ENV || 'LOCAL'
const CURRENT_DOMAIN = process.env.CURRENT_DOMAIN || 'http://localhost:1337'
const server = express()

// logging middleware
server.use( morgan( ':method :url :status :res[content-length] - :response-time ms' ) )

// 'cookies' and 'signedCookies' on request object
const cookieSecret = process.env.COOKIE_SECRET || 'xXxX!!23@Abc'
server.use( cookieParser(cookieSecret) )

// parses x-www-form-urlencoded
server.use( express.urlencoded( {extended: true} ) ) // TODO: investigate use if false

// typical express setup
server.use(express.json())
server.use(cors())

// saved sessions
server.use(
  session({
    secret: process.env.SESSION_SECRET || 'xXxX!!23@Abc',
    resave: false, // TODO: investigate use
    store: sessionStore,
    saveUninitialized: false,
    name: '24hrsessionId',
    cookie: {
      secure: true,
      httpOnly: CURRENT_ENV !== 'LOCAL',
      domain: CURRENT_DOMAIN,
      // path: 'foo/bar', // TODO: investigate this use
      expires: new Date(Date.now() + 60 * 60 * 1000) // set to 1 hour but pls add moment.js specifics later
    }
  })
)

// routes
server.use('/api', require('./api') )
server.use('/auth', require('./auth'))


const errorHandler = (err, res) => {
  console.error(err.stack)
  return res.status(500).send(`An error has ocurred with your request: ${err.message}.`)
}
server.use(errorHandler)

const startListening = () => {server.listen(PORT, () => console.log(` API is listening on port:${PORT} `))}

const syncDb = () => db.sync()

 async function init() {
   try {
    await syncDb()
    await startListening()
  } catch (err) {
     console.error(err)
     console.error(err.stack)
  }
}

init()

module.exports = server
