const router = require('express').Router()
const Form = require('../../models').Form
router.get('/', async (req, res, next) => {
  try {
    const forms = await Form.findAll()
    res.json(forms)
  } catch (err) {
    next(err)
  }
} )

router.get('/:formUUID', async (req, res, next) => {
  try {
    const {formUUID} = req.params
    const formFound = await Form.findOne( {where: {formUUID}} )
    res.json(formFound)
  } catch (err) {
    next(err)
  }
})
