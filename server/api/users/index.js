const router = require('express').Router()
const User = require('../../models').User
const passport = require('passport')

router.post( '/login',  async ( req, res, next ) => {
  passport.authenticate('local', (err, user) => {
    if (!user) {res.status( 401 ).send( {success: false, message: 'Username or password is incorrect'} )}
    else {
      req.logIn(user, (err) => {
        if (err) throw err
        res.status( 200 ).json( user )
      })
    }
  })(req, res, next)
})

router.post( '/logout', async ( req, res, next ) => {
  try {
    req.logout()
    res.redirect('/')
  } catch ( err ) {
    next( err )
  }
})

module.exports = router
