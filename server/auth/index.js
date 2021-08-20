const router = require('express').Router()

router.use( '/sda', require( './secure-desktop-app' ) )
router.use( '/sfc', require( './secure-form-client' ) )

module.exports = router
