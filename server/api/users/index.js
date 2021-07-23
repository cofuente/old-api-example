const router = require('express').Router()
const User = require('../../models').User

router.post( '/login', async ( req, res, next ) => {
  try {
    const user = await User.findOne( {where: {username: req.body.username}} )
    if ( !user ) {
       res.status(401).send( {success: false, message: 'Username or password is incorrect'} )
    } else {
      res.status(200).json(user)
    }
  } catch ( err ) {
    next( err )
  }
} )
router.post( '/logout', async ( req, res, next ) => {
  try {
    req.logout()
    req.session.destroy()
    res.redirect('/')
  } catch ( err ) {
    next( err )
  }
})


module.exports = router
