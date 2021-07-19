const router = require('express').Router()

router.use('/forms', require('./forms/form'))

router.use('/user', require('./user/user'))
module.exports = router
