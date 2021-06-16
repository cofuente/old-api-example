const express = require('express')
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 1337
const server = express()
const {Pool} = require("pg")

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: false
})

console.log("Connecting to Postgres........")
const client = await pool.connect();


server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())




const CURRENT_ENV = process.env.CURRENT_ENV || 'LOCAL'

server.get('/form', function (req, res) {
  console.log("Connecting to Postgres........")
  const client = await pool.connect();
  const result = await client.query('SELECT * FROM test_table');
  const results = { 'form results': (result) ? result.rows : null};
  res.send(results.json())
})


server.get('/', function (req, res) {
  res.send({'enviroment': CURRENT_ENV})
})

server.use('/api', require('./api'))


const errorHandler = (err, res) => {
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