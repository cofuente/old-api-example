const router = require('express').Router()
const User = require('../../models')

router.post( '/login', async ( req, res, next ) => {
  // try {
  //   const user = await User.findOne( {where: {username: req.body.username}} )
  //   if ( !user ) {
  //     // res.status(401).send( {success: false, message: 'Username or password is incorrect'} )
  //   } else if (/* insert here condition to check password */ false ) {
  //     // res.status( 403 )
  //   } else {
  //     /* everything worked, login user */
  //     res.status( 200 ).send( user )
  //   }
  // } catch ( err ) {
  //   next( err )
  // }

    res.send( 200 )
  })

module.exports = router
