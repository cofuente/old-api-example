const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const db = require('./config/db')

const PORT = process.env.PORT || 1337
const server = express()

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(cors())
server.use(morgan('dev'))


const CURRENT_ENV = process.env.CURRENT_ENV || 'LOCAL'


server.get('/', (req, res) => {
  res.send({enviroment: CURRENT_ENV})
})

server.use('/api', require('./api'))


const errorHandler = (err, res) => {
  console.error(err.stack)
  return res.status(500).send(`An error has ocurred with your request: ${err.message}.`)
}
server.use(errorHandler)

const init = async () => {
  try {
    await db.sync()
    server.listen(PORT)
    console.log(` API is listening on port:${PORT} `)
  } catch (err) {
    console.error(err)
  }
}

module.exports = {
  init
}
