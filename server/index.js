const express = require('express')
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 1337
const server = express()

// session middleware



// body parsing middleware
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

// api routes

//Set ENV
const CURRENT_ENV = process.env.CURRENT_ENV || "LOCAL"

server.get('/', function (req, res) {
  res.render('index', { title: 'Secure Form API', message: CURRENT_ENV })
})


// error handling endware
const errorHandler = (err, req, res, next) => {
  console.error(err.stack)
  return res.status(500).send(`An error has ocurred with your request: ${err.message}.`)
}
server.use(errorHandler)

const bootServer = async () => {
  try {
    //await db.sync()
    //await sessionStore.sync()
    server.listen(PORT) // linter says this await is unecessary should investigate
    console.log(` API is listening on port:${PORT} `)
  } catch (err) {
    console.error(err)
  }
}
module.exports = {
  bootServer
}