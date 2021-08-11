const router = require('express').Router()
const User = require( '../../models/user' )


// login desktop app user
router.post('/login', async (req, res, next) => {
  try {
    const {username, password} = req.body
    const user = await User.findOne({where: {username}})
    if (!user) {
      res.status(401).send('Wrong username')
    } else if (!user.correctPassword(password)) {
      res.status(401).send('Wrong username and/or password')
    } else {
      res.status(202).send('Succesfully logged in')
    }
  } catch (err) {
    next(err)
  }
})

// logout desktop app user
router.delete('/logout', async ( req, res, next ) => {
  try {
    console.log( 'logout' )
  } catch ( err ) {
    next(err)
  }
})


module.exports = router
