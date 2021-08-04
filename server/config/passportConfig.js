// const localStrategy = require('passport-local').Strategy
// const User = require('../models').User

module.exports = function (passport) {
  passport.use(
    new localStrategy(async (username, password, done) => {
      try {
        //Find if the user exists
        const user = await User.findOne({where: {username}})
        if (!user) {
          return done(null, false, {message: 'User doesnt exist'})
        } else if (!user.correctPassword(password)) {
          // return if user password don't match
          return done(null, false, {
            message: 'Wrong username and/or password',
          })
        }
        return done(null, user)
      } catch (err) {
        console.log(err)
      }
    })
  )
  passport.serializeUser(function (user, done) {
    done(null, user.userUUID)
  })
  passport.deserializeUser(function (userUUID, done) {
    User.findById(userUUID, function (err, user) {
      done(err, user)
    })
  })
}
