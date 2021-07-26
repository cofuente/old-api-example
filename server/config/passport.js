const passport = require('passport')
const localStrategy = require('passport-local').Strategy
const User = require('../models').User

module.exports = function(passport){
    passport.use(
        new localStrategy( ( username, password, done ) => {
            //Find if the user exists
            console.log( 'We Found the username: ' + username )
            User.findOne( {where: {username}} )
            .then(user => {
                console.log( 'We Found user: ' + user )
                if (!user){
                    console.log( username + ' does not exist')
                    return done( null, false, {message: ' User doesnt exist'} )
                }
                return done(null, user)
            })
        })
    )
    passport.serializeUser(function( user, done ){
        done(null, user.userUUID)
    })
    passport.deserializeUser(function( userUUID, done ){
        User.findById(userUUID, function( err, user){
            done(err, user)
        })
    })

}
