/* eslint-disable no-console */
const passport = require( 'passport' )
const LocalStrategy = require( 'passport-local' ).Strategy
const {User} = require( '../models' )

// serialize user object to session
passport.serializeUser( ( user, done ) => {
	console.log('=== serialize ... called ===')
	console.log(user)
	console.log('---------')
	done(null, {_id: user._id})
})

passport.deserializeUser(async (id, done) => {
	console.log( 'DEserialize ... called' )
	console.log( id )
	try {
		const requestedUser = await User.findOne( {where: {userUUID: id}} )
		console.log('======= DESERILAIZE USER CALLED ======')
		console.log(requestedUser)
		console.log('--------------')
		done(null, requestedUser)
	} catch (error) {
		done(error)
	}
} )

// const customFields = {
// 		usernameField: 'username',
// 		passwordField: 'password'
// }
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

// const strategy = new LocalStrategy(customFields, localVerification)
const strategy = new LocalStrategy(localVerification)

// register strategy
passport.use(strategy)

module.exports = passport
