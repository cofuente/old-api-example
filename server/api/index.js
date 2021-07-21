const router = require('express').Router()

router.use('/forms', require('./forms'))
router.use('/users', require('./users'))

module.exports = router
