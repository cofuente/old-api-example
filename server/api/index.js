const router = require('express').Router()

router.use( '/users', require( './users' ) )
router.use( '/forms', require( './forms' ) )
router.use( '/submissions', require( './submissions' ) )

module.exports = router
