const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const { trace } = require('./api');
const PORT = process.env.PORT || 1337
const server = express()



server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(cors())



const CURRENT_ENV = process.env.CURRENT_ENV || 'LOCAL'
server.get('/form', async (req,res) => {
  try{
    // console.log('Connecting to Postgres........')
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM test_table');
    const results = { 'form results': (result) ? result.rows : null};
    res.send(results)
  }catch(err){
    // console.log(err)
  }
})



server.get('/', function (req, res) {
  res.send({'enviroment': CURRENT_ENV})
})

server.use('/api', require('./api'))


const errorHandler = (err, res) => {
/* eslint-disable no-alert, no-console */
  console.error(err.stack)
  return res.status(500).send(`An error has ocurred with your request: ${err.message}.`)
}
server.use(errorHandler)

const bootServer = async () => {
  try {
    server.listen(PORT) 
    // console.log(` API is listening on port:${PORT} `)
  } catch (err) {

  /* eslint-disable no-alert, no-console */
    console.error(err)
  }
}
module.exports = {
  bootServer
}