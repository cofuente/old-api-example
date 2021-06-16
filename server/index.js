const express = require('express')
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 1337
const server = express()
const {Pool} = require("pg")

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
})

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())




const CURRENT_ENV = process.env.CURRENT_ENV || 'LOCAL'


server.get('/', function (req, res) {
  res.send({'enviroment': CURRENT_ENV})
})

server.use('/api', require('./api'))


const errorHandler = (err, req, res, next) => {
  console.error(err.stack)
  return res.status(500).send(`An error has ocurred with your request: ${err.message}.`)
}
server.use(errorHandler)

const bootServer = async () => {
  try {

    server.listen(PORT) 
    console.log(` API is listening on port:${PORT} `)
  } catch (err) {
    console.error(err)
  }
}
module.exports = {
  bootServer
}