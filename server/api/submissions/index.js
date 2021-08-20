const router = require('express').Router()
const {Submission, Answer} = require( '../../models' )
const {isAuth} = require('../../config')

// get submission by formUUID
router.get( '/:formUUID', async ( req, res, next ) => {
  try {
    const {formUUID} = req.params
    const submissions = await Submission.findAll( {
      where: {formUUID},
        include: [ Answer ]
      })
    res.json(submissions)
  } catch (err) {
    next(err)
  }
} )

module.exports = router
