const router = require( 'express' ).Router()
const User = require('../../models/user')

router.post('/login', async (req, res, next) => {
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

router.post( '/logout', async ( req, res, next ) => {
  try {
    req.logout()
    res.redirect('/')
  } catch ( err ) {
    next( err )
  }
})

module.exports = router
