const express = require('express')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const db = require( './config/db' )
const PORT = process.env.PORT || 1337
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
