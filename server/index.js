/* eslint-disable no-console */
const express = require('express')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const cors = require( 'cors' )
const session = require( 'express-session' )
const SequelizeStore = require('connect-session-sequelize')(session.Store)

const {db, passport} = require( './config' )
const sessionStore = new SequelizeStore( {db} )
const PORT = process.env.PORT || 1337
const server = express()

// logging middleware
server.use( morgan( ':method :url :status :res[content-length] - :response-time ms' ) )

// 'cookies' and 'signedCookies' on request object
const cookieSecret = process.env.COOKIE_SECRET || 'xXxX!!23@Abc'
server.use( cookieParser(cookieSecret) )


// typical express setup
server.use( express.json() )
server.use( express.urlencoded( {extended: true} ) ) // parses x-www-form-urlencoded
server.use( cors() )

// passport setup
server.use(
  session({
    secret: process.env.SESSION_SECRET || 'xXxX!!23@Abc',
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // 1 day
    }
  })
)
server.use(passport.initialize())
server.use(passport.session())
server.use((req, res, next) => {
    console.log('middleware session', req.session)
  console.log( 'middleware user', req.user )
    next()
})


// routes
server.use('/api', require('./api') )
server.use('/auth', require('./auth'))


// const errorHandler = (err, res) => {
//   console.error(err.stack)
//   return res.status(500).send(`An error has ocurred with your request: ${err.message}.`)
// }
// server.use(errorHandler)

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
