const router = require( 'express' ).Router()
const User = require( '../../models/user' )
const {isAuth} = require( '../../config')

// get all users
router.get( '/',
  isAuth,
  async ( req, res, next ) => {
  try {
    const users = await User.findAll()
    res.json(users)
  } catch (err) {
    next(err)
  }
} )

module.exports = router
