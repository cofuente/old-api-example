const router = require('express').Router()
const passport = require( 'passport' )
const {User} = require( '../../models' )

// login desktop app user
router.post( '/login',
  passport.authenticate( 'local' ),
  async (req, res, next) => {
    console.log('======= LOGIN ROUTE HIT ======')
    console.log(req.user, req.session)
    console.log('======= LOGIN ROUTE HIT ======')
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
    console.log('======= LOGOUT ROUTE HIT - 1 ======')
    console.log(req.user, req.session)
    console.log('======= LOGOUT ROUTE HIT - 1 ======')
    req.session.destroy()
    req.logout()
    console.log('======= LOGOUT ROUTE HIT - 2 ======')
    console.log(req.user, req.session)
    console.log('======= LOGOUT ROUTE HIT - 2 ======')
    res.status( 202 ).send( 'Succesfully logged out' )
    next()
  } catch ( err ) {
    next(err)
  }
})


module.exports = router
