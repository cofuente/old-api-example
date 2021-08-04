const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const PORT = process.env.PORT || 1337
const CURRENT_ENV = process.env.CURRENT_ENV || 'LOCAL'
const CURRENT_DOMAIN = process.env.CURRENT_DOMAIN || 'http://localhost:1337'
const db = require( './config/db' )
const server = express()
const {User} = require('./models')
const session = require('express-session')
const SequelizeStore = require('connect-session-sequelize')(session.Store)
const passport = require( 'passport' )
const cookieParser = require('cookie-parser')
const {Strategy} = require('passport-local')
const sessionStore = new SequelizeStore({db})
module.exports = server

// logging middleware
server.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
server.use(express.urlencoded( {extended: true}))
// allows for 'cookies' and 'signedCookies' on request object
server.use( cookieParser() )
server.use(express.json()) // consider using app.use(bodyParser.json()) && app.use(bodyParser.urlencoded({ extended: true }))
server.use(cors())

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

// server.use(passport.initialize())
// server.use(passport.session())

// passport.serializeUser((user, done) => done(null, user))
// passport.deserializeUser((user, done) => done(null, user))

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
