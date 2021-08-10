const router = require('express').Router()
const {Form, QuestionForm} = require( '../../models' )
const {verifyReorderRequest} = require( '../../utils' )

router.get('/', async (req, res, next) => {
  try {
    const forms = await Form.findAll()
    res.json(forms)
  } catch (err) {
    next(err)
  }
} )

router.post('/', async (req, res, next) => {
  try {
    const {form} = req.body
    const formCreated = await Form.create( form )
    res.json(formCreated)
  } catch (err) {
    next(err)
  }
} )

router.get( '/:formUUID', async ( req, res, next ) => {
  try {
    const {formUUID} = req.params
    const formFound = await Form.findOne( {
      where: {formUUID},
      include: [ {
        all: true
      } ]
    } )
    res.json(formFound)
  } catch (err) {
    next(err)
  }
} )

router.put( '/:formUUID', async ( req, res, next ) => {
  try {
    const {formUUID} = req.params
    const {title, programUUID, endpoint, start, end} = req.body
    const newForm = {title, programUUID, endpoint, start, end}
    const formToUpdate = await Form.findOne( {
      where: {formUUID},
      include: [ {
        all: true
      }]
    } )
    const updatedForm = await formToUpdate.update( newForm )
    res.json(updatedForm)
  } catch (err) {
    next(err)
  }
} )

router.put( '/:formUUID/add', async ( req, res, next ) => {
  try {
    const {formUUID} = req.params
    const {questions} = req.body
    const formToUpdate = await Form.findOne( {where: {formUUID}} )
    const updatedForm = await formToUpdate.addQuestions( questions )
    res.json(updatedForm)
  } catch (err) {
    next(err)
  }
} )

router.put( '/:formUUID/remove', async ( req, res, next ) => {
  try {
    const {formUUID} = req.params
    const {questions} = req.body
    const formToUpdate = await Form.findOne( {where: {formUUID}} )
    const updatedForm = await formToUpdate.removeQuestions( questions )
    res.send(`Succesfully removed ${updatedForm} questions from form ${formUUID}`)
  } catch (err) {
    next(err)
  }
} )

router.put( '/:formUUID/order', async ( req, res, next ) => {
  try {
    const {formUUID} = req.params
    const {questions} = req.body
    const isValid = await verifyReorderRequest( questions, formUUID )
    if ( isValid ) {
      const reorder = await QuestionForm.updateOrder( questions, formUUID )
      if ( reorder.every( x => x[ 0 ] === 1 ) ) res.send( `Succesfully reordered questions on form ${ formUUID } ` )
    } else {
      throw new Error( 'There is something wrong with your request. Please try again' )
    }
  } catch (err) {
    next(err)
  }
} )

router.delete( '/:formUUID', async ( req, res, next ) => {
  try {
    const {formUUID} = req.params
    const formToDelete = await Form.destroy( {
      where: {formUUID}
    } )
    if (formToDelete) res.send(`Form ${formUUID} and all related submissions have been deleted`)
  } catch (err) {
    next(err)
  }
} )

router.get('/live/:formUUID', async (req, res, next) => {
  try {
    const {formUUID} = req.params
    const formTimes = await Form.findOne( {
      where: {formUUID},
      attributes: [ 'start', 'end']
    } )
    res.json(formTimes)
  } catch (err) {
    next(err)
  }
} )

module.exports = router
