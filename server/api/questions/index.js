const router = require('express').Router()
const {Question} = require('../../models')
const {isAuth} = require('../../config')

// make a new q
router.post( '/',
  isAuth,
  async ( req, res, next ) => {
    try {
      const {questionPrompt, questionType, possibleAnswers} = req.body
      const questionCreated = await Question.findOrCreate( {
        where: {questionPrompt, questionType, possibleAnswers},
      } )
      if ( questionCreated[ 1 ] ) res.status( 201 ).json( questionCreated )
      else res.status( 303 ).json( questionCreated )
    } catch (err) {
      next(err)
    }
  } )

  // get a q
router.get( '/:questionUUID',
  isAuth,
  async ( req, res, next ) => {
  try {
    const {questionUUID} = req.params
    const questionSearched = await Question.findOne( {where: {questionUUID}} )
    res.json(questionSearched)
  } catch (err) {
    next(err)
  }
} )


// update a q
router.put( '/:questionUUID',
  isAuth,
  async ( req, res, next ) => {
  try {
    const {questionUUID} = req.params
    const {required, possibleAnswers, questionType, questionPrompt, encryptAnswer} = req.body
    const newQuestion = {required, possibleAnswers, questionType, questionPrompt, encryptAnswer}
    const questionToUpdate = await Question.findOne( {
      where: {questionUUID},
      include: [ {
        all: true
      }]
    } )
    const updatedQuestion = await questionToUpdate.update( newQuestion )
    res.json(updatedQuestion)
  } catch (err) {
    next(err)
  }
} )

// delete a q
router.delete( '/:questionUUID',
  isAuth,
  async ( req, res, next ) => {
  try {
    const {questionUUID} = req.params
    const questionToDelete = await Question.destroy( {
      where: {questionUUID}
    } )
    if ( questionToDelete ) res.send( `Question ${ questionUUID } has been deleted.` )
    else res.status(500).send( `There was an error deleting question ${ questionUUID }.` )
  } catch (err) {
    next(err)
  }
} )

module.exports = router
