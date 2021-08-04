const router = require('express').Router()
const User = require('../../models/user')

// login desktop app user
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

// logout desktop app user
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
