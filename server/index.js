const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const PORT = process.env.PORT || 1337
const CURRENT_ENV = process.env.CURRENT_ENV || 'LOCAL'
const db = require('./config/db')
const server = express()
const passport = require('passport')

module.exports = server

server.use(express.urlencoded({extended: true}))
server.use(express.json())
server.use(cors())
server.use(morgan('dev'))

require('./config/passportConfig')(passport)
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
  // no-console is disabled, since it's valuable to view the log below
  // eslint-disable-next-line no-console
  server.listen(PORT, () => console.log(` API is listening on port:${PORT} `))
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
