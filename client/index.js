/* eslint-disable no-undef */
const chalkAnimation = require('chalk-animation')
const Express = require('express')
const path = require('path')
const cors = require('cors')

const PORT = process.env.PORT || 9000
const frontend = new Express()
const nextDistroEnrollmentForm = require('./utils/data.js')

frontend.use(cors())
frontend.use(Express.json())
frontend.use(Express.urlencoded({ extended: true }))

// Serve Jade files
frontend.use(Express.static(path.join(__dirname, './src/jade/next-distro-fe/')))
  .set('views', path.join(__dirname, './src/jade/next-distro-fe/'))
  .set('view engine', 'jade')
  .get('/', (req, res) => {
    nextDistroEnrollmentForm.data.then((data) => {
      res.status(200).render('index', { data })
    }).catch((e) => {
      // eslint-disable-next-line no-console
      console.log(e)
    })
  })
  .listen(PORT, () => {
    setTimeout(() => chalkAnimation.pulse(`Web client served on port ${PORT}`), 3580)
  })

// Serve static files
frontend.use('/', Express.static('client/src/'))
