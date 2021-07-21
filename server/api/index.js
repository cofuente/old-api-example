const router = require('express').Router()

router.use('/forms', require('./forms/formController'))

module.exports = router
