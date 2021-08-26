const router = require('express').Router()
const passport = require( 'passport' )
const {User} = require( '../../models' )

// login desktop app user
router.post( '/login',
  passport.authenticate( 'local' ),
  async (req, res, next) => {
    try {
      const {username, password} = req.body
      const user = await User.findOne({where: {username}})
      if ( !user ) {
        res.send( 'Wrong username' )
      } else if ( !user.correctPassword( password ) ) {
        res.send( 'Wrong username and/or password' )
      } else {
        res.status( 202 ).send( 'Succesfully logged in' )
      }
    } catch (err) {
      next(err)
    }
  })

// logout desktop app user
router.delete( '/logout', ( req, res, next ) => {
  try {
    req.session.destroy()
    req.logout()
    res.status( 202 ).send( 'Succesfully logged out' )
    next()
  } catch ( err ) {
    next(err)
  }
})


module.exports = router
