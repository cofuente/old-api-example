const router = require('express').Router()
const Form = require( '../../models' ).Form

// get all forms
router.get( '/', async ( req, res, next ) => {
  console.log('cooooookies--->', req.cookies, req.signedCookies)
  try {
    const forms = await Form.findAll()
    res.json(forms)
  } catch (err) {
    next(err)
  }
} )

// get form by id
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

// get form times
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
