const localStrategy = require('passport-local').Strategy
const User = require('../models').User

module.exports = function(passport){
    passport.use(
        new localStrategy( async ( username, password, done ) => {
            try {
                const user = await User.findOne( {where: {username}} )
                if ( !user ) { return done( null, false, {message: 'User not found.'} ) }
                if ( !user.correctPassword( password ) ) {
                    return done( null, false, {message: 'Wrong username and/or password'} )
                }
                return done( null, user )
            } catch ( err ){
                console.log(err)
            }
        })
    )
    passport.serializeUser(function( user, done ){
        done(null, user.userUUID)
    })
    passport.deserializeUser( async (userUUID, done ) => {
        const user = await User.findByPk(userUUID)
        done(null, user)
        })
    }
