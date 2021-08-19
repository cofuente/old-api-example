const router = require('express').Router()
const {User} = require( '../../models' )
const passport = require( 'passport' )


// login desktop app user
router.post('/login', passport.authenticate('local', {failureRedirect: '/login-failure', successRedirect: 'login-success'}))
// router.post('/login', async (req, res, next) => {
//   try {
//     const {username, password} = req.body
//     const user = await User.findOne({where: {username}})
//     if (!user) {
//       res.status(401).send('Wrong username')
//     } else if (!user.correctPassword(password)) {
//       res.status(401).send('Wrong username and/or password')
//     } else {
//       res.status(202).send('Succesfully logged in')
//     }
//   } catch (err) {
//     next(err)
//   }
// })

// logout desktop app user
router.delete('/logout', async ( req, res, next ) => {
  try {
    console.log( 'logout' )
  } catch ( err ) {
    next(err)
  }
})


module.exports = router
