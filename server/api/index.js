
const router = require('express').Router()

// Ultimately, I forsee the browser client only needing endpoints to GET forms or POST submissions
router.use('/forms', require('./form'))
router.use('/submissions', require('./submission'))
router.use('/questions', require('./question'))


module.exports = router