const path = require('path')
const chalk = require('chalk')
const Sequelize = require('sequelize')
const bodyParser = require('body-parser')
const express = require('express')
const session = require('express-session')
const SequelizeStore = require('connect-session-sequelize')(session.Store)
const { db } = require('./server/db/models')
const sessions = db.define("sessions", {
  sid: {
    type: Sequelize.STRING,
    primaryKey: true,
    unique: true
  },
  expires: Sequelize.DATE,
  data: Sequelize.STRING(50000),
})
function extendDefaultFields(defaults, session) {
  return {
    data: defaults.data,
    expires: defaults.expires,
  }
}

const interval = 2 * 60 * 1000 // The interval at which to cleanup expired sessions in the store (in milliseconds).
const storeOptions = {db, checkExpirationInterval: interval, table: "sessions", extendDefaultFields} 
const sessionStore = new SequelizeStore(storeOptions)
const logger = require('./server/utils/logger')
const PORT = process.env.PORT || 1337
const current = process.env.NODE !== '/app/.heroku/node/bin/node' ? `http://localhost:${PORT}` : 'https://secure-form-api.herokuapp.com'
const fullStack = express()

if (process.env.NODE_ENV !== 'production') { // may have to update this to a different heroku specific env
  require('dotenv').config()
}

const buildStack = async () => {

  // session middleware 
  fullStack.use(
    session({
      secret: process.env.SESSIONS_SECRET || 'abc123',
      cookie: { 
        secure: true,
        maxAge: 3 * 60 * 1000 // The maximum age (in milliseconds) of a valid session.
      },
      store: sessionStore,
      resave: false, // touch is enabled in sequelize store
      saveUninitialized: false
    })
  )

  fullStack.use((req, res, next) => {
    if (req.session.views) req.session.views++
    else req.session.views = 1
    next()
  })

  // logging middleware
  fullStack.use(logger)

  // body parsing middleware
  fullStack.use(bodyParser.json())
  fullStack.use(bodyParser.urlencoded({extended: true}))

  // api routes
  fullStack.use('/api', require('./server/api'))
  
  // serve Jade files 
  fullStack.use(express.static(path.join(__dirname, './client/src/jade/next-distro-fe/')))
  fullStack.set('views', path.join(__dirname, './client/src/jade/next-distro-fe/'))
  fullStack.set('view engine', 'jade')
  
  // serve static files
  fullStack.use('/static', express.static('./client/public/'))

  // error handling endware
  fullStack.use((err, req, res, next) => {
    console.error(err)
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.')
  })
}
const postFormattedData = require('./client/utils/submission.js')

const bootServer = async () => {
  try {
    await db.sync()
    await sessionStore.sync()
    console.log(chalk.green(`Postgres server is up and running!`))
    await fullStack.listen(PORT)
    console.log(chalk.blue(`API listening on port:${PORT}`))
  } catch (err) {
    console.error(err)
  }
}

const serveClient = async () => {
  const nextDistroEnrollmentForm = require('./client/utils/data.js')
  try {
    await fullStack.get('/', (req, res) => {
      nextDistroEnrollmentForm.data.then( (data) => res.status(200).render('index', {data}))
    })
    .post('/', function(req,res){
      var data = req.body;
      postFormattedData(data)
    })    
    console.log(chalk.magenta(`Client awaits at ${current}`))
  } catch (err) {
    console.error(err)
  }
}

async function bootFullStack() {
  // TODO: possibly add require.main = module condition for testing purposes
  await buildStack()
  await bootServer()
  await serveClient()
}

bootFullStack()