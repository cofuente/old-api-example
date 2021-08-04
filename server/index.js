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
const localStrategy = require('passport-local').Strategy
const sessionStore = new SequelizeStore({db})
module.exports = server

server.use(express.urlencoded({extended: true}))
server.use(express.json())
server.use(cors())
server.use(morgan('dev'))

server.use(
  session({
    secret: process.env.SESSION_SECRET || 'xXxX!!23@Abc',
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    name: '24hrsessionId',
    // cookie: {
    //   secure: true,
    //   httpOnly: CURRENT_ENV !== 'LOCAL',
    //   domain: CURRENT_DOMAIN,
    //   // path: 'foo/bar', // TODO: investigate this use
    //   expires: new Date(Date.now() + 60 * 60 * 1000) // set to 1 hour but pls add moment.js specifics later
    // }
  })
)
/* passport implementation */
passport.use(new localStrategy( async ( username, password, done ) => {
  try {
    const user = await User.findOne( {where: {username}} )
    if ( !user ) { return done( null, false, {message: 'User not found.'} ) }
    if ( !user.correctPassword( password ) ) {
      return done( null, false, {message: 'Wrong username and/or password'} )
    }
    return done( null, user )
  } catch ( err ){
    console.log(err)
  }
} ) )
passport.serializeUser((user, done) => done(null, user.id))
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findByPk(id)
    done(null, user)
  } catch (err) {
    done(err)
  }
} )
server.use(passport.initialize())
server.use(passport.session())

server.get('/', (req, res) => {
  res.send({enviroment: CURRENT_ENV})
})

server.use('/api', require('./api'))


const errorHandler = (err, res) => {
  console.error(err.stack)
  return res.status(500).send(`An error has ocurred with your request: ${err.message}.`)
}
server.use(errorHandler)

const startListening = () => {
  const runningServer = server.listen(PORT, () => console.log(` API is listening on port:${PORT} `))
}

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
