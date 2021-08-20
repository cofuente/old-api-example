/* eslint-disable no-console */
const passport = require( 'passport' )
const LocalStrategy = require( 'passport-local' ).Strategy
const {User} = require( '../models' )

// serialize user object to session
passport.serializeUser( ( user, done ) => {
	const {userUUID}	= user.dataValues
	done(null, userUUID)
})

passport.deserializeUser(async (userUUID, done) => {
	try {
		const requestedUser = await User.findOne( {where: {userUUID}, attributes: {exclude: ['salt', 'password', 'createdAt', 'updatedAt']}} )
		done(null, requestedUser)
	} catch (error) {
		done(error)
	}
} )

const localVerification = async ( username, password, done ) => {
	try {
		const requestedUser = await User.findOne( {where: {username}, attributes: {exclude: ['createdAt', 'updatedAt' ]}} )
		if ( !requestedUser ) return done( null, false, {message: 'Incorrect username.'} )
		else if ( !requestedUser.correctPassword( password ) ) return done( null, false, {message: 'Incorrect password.'} )
		else return done( null, requestedUser )
	} catch ( error ) {
		return done( error )
	}
}

const strategy = new LocalStrategy(localVerification)

// register strategy
passport.use(strategy)

module.exports = passport
