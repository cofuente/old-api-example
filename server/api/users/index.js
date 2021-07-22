const router = require('express').Router()
const User = require('../../models').User
const passport = require('passport')

router.post( '/login', async ( req, res, next ) => {
  try {
    const {username} =  req.body
    const user = await User.findOne( {where: {username}} )
    if ( !user ) {
       res.status(401).send( {success: false, message: 'Username or password is incorrect'} )
    } else {
      res.status(200).json(user)
    }
  } catch ( err ) {
    next( err )
  }
  })

router.post('/logout', (req, res) => {
  req.logOut()
  res.send({success: true})
} )

module.exports = router
