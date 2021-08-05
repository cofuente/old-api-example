const router = require('express').Router()
const Submission = require( '../../models' ).Submission
const Answer = require( '../../models' ).Answer

// Get submission by FormID
router.get( '/:formUUID', async ( req, res, next ) => {
    try {
      const {formUUID} = req.params
      const submission = await Submission.findOne( {
        where: {formUUID},
        attributes: [ 'formUUID', 'submissionUUID']
      } )
      const SubmissionUUID = submission.submissionUUID
      const answers = await Answer.findAll({
          where: {
            submissionUUID: SubmissionUUID
          },
          attributes: [ 'questionUUID', 'value']
      }).then( (answersList => answersList.map(answer => answer)))
      const responseObj = {
          submission,
          answers
      }

      res.json(responseObj)
    } catch (err) {
      next(err)
    }
  } )

module.exports = router
