const router = require('express').Router()

router.use('/forms', require('./form'))
router.use('/submissions', require('./submission'))
router.use('/questions', require('./question'))


module.exports = router