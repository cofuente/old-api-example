/* eslint-disable no-console */
const passport = require( 'passport' )
const LocalStrategy = require( 'passport-local' ).Strategy
const {User} = require( '../models' )

// serialize user object to session
passport.serializeUser( ( user, done ) => {
	console.log('=== serialize ... called ===')
	console.log(user)
	console.log('---------')
	done(null, user)
})

passport.deserializeUser(async (user, done) => {
	console.log( 'DEserialize ... called' )
	console.log( user )
	const {userUUID} = user
	try {
		const requestedUser = await User.findOne( {where: {userUUID}, attributes: {exclude: ['salt', 'password']}} )
		console.log('======= DESERIALIZE USER CALLED ======')
		console.log(requestedUser)
		console.log('--------------')
		done(null, requestedUser)
	} catch (error) {
		done(error)
	}
} )

const localVerification = async ( username, password, done ) => {
	try {
		const requestedUser = await User.findOne( {where: {username}} )
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
