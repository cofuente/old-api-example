const path = require('path')
const chalkAnimation = require('chalk-animation')
const volleyball = require('volleyball')
const bodyParser = require('body-parser')
const express = require('express')
const PORT = process.env.PORT || 1337
const { db } = require('./server/db/models')
const nextDistroEnrollmentForm = require('./client/utils/data.js')
const fullStack = express()
  
// logging middleware
fullStack.use(volleyball)

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


const bootServer = async () => {
  try {
    await db.sync().then(chalkAnimation.rainbow('The postgres server is up and running - maybe you should go catch it!'))
    await fullStack.listen(PORT, () => chalkAnimation.neon(`Your server kindly awaits your attention on port ${PORT}`))
  } catch (err) {
    console.error(err)
  }
}
const serveClient = async () => {
  try {
    await fullStack.get('/', (req, res) => {
      nextDistroEnrollmentForm.data.then( (data) => res.status(200).render('index', {data}))
    })
  } catch (err) {
    console.error(err)
  }
}

async function bootFullStack() {
  await bootServer()
  // await serveClient()
}

bootFullStack()

// TODO: possibly add require.main = module condition for testing purposes