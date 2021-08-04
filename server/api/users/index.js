const router = require( 'express' ).Router()
const passport = require( 'passport' )
const User = require('../../models/user')

// login user
router.post('/login', passport.authenticate('local'), async (req, res, next) => {
  try {
    const {username} = req.body
    const user = await User.findOne({where: {username}})
    if (!user) {
      res.status(401).send('Wrong username')
    } else if (!user.correctPassword(req.body.password)) {
      res.status(401).send('Wrong username and/or password')
    } else {
      req.login(user, err => (err ? next(err) : res.json(user)))
    }
  } catch (err) {
    next(err)
  }
})

// logout user
router.delete( '/logout', async ( req, res, next ) => {
  try {

    req.logout()
    req.session.destroy()

    res.send({success: true})
  } catch ( err ) {
    res.send({success: false})
  }
})

module.exports = router
