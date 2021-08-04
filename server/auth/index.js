const router = require('express').Router()

router.use( '/sfc', require( './secure-form-client' ) )
router.use( '/sfa', require( './secure-desktop-app' ) )

module.exports = router
