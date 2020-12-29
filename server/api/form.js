const router = require('express').Router()
const { Form, Question, QuestionForm } = require('../db/models')


// get all forms
// necessary for development but perhaps not for production?
router.get('', async (req, res, next) => {
  try {
    const allForms = await Form.findAll()
    if (allForms) res.status(200).json(allForms) 
    else res.status(404).send('There are no forms in this database.')
  } catch (error) {
    next(error)
  }
})

// make a new form, requires state code and title
router.post('/', async (req, res, next) => {
  try {
    const newForm = await Form.create(req.body)
    if (newForm) res.status(201).json(newForm)
    else res.status(400).send('An error has ocurred with your request.')
  } catch (error) {
    next(error)
  } 
})

// get a specific form
router.get('/:formUUID', async (req, res, next) => {
  try {
    const { formUUID } = req.params
    const requestedForm = await Form.findOne({
      where: { formUUID },
      include: {
        model: Question,
        as: 'questions'
      }
    })
    if (requestedForm) res.status(200).json(requestedForm) 
    else res.status(404).send('Form not found.')
  } catch (error) {
    next(error)
  }
})

// alter the order of questions on a specific form
router.put('/:formUUID', async (req, res, next) => {
  const { formUUID } = req.params
  const { questions } = req.body
  try {
    // cleaning up the req to compare to database
    const questionUUIDs = questions.map((x)=> {
      return {questionUUID: x.questionUUID}
    }).sort((a,b)=> Number(a.questionUUID[0])-Number(b.questionUUID[0]))
    const formToUpdate = await Form.findOne({
      where: { formUUID },
      include: {
        model: Question,
        as: 'questions'
      }
    })
    // database q's
    const databaseQuestions = formToUpdate.questions.map((x)=> {
      return {questionUUID: x.questionUUID}
    }).sort((a,b)=> Number(a.questionUUID[0])-Number(b.questionUUID[0]))

    
    // if requested q's and database q's don't match, send error
    if(JSON.stringify(questionUUIDs) !== JSON.stringify(databaseQuestions)) {
      res.status(406).send('An error has ocurred with your request.')
    } else {
      const update = await QuestionForm.updateOrder(questions, formUUID)
      if (update) res.status(200).send('Success.')
      else res.status(400).send('An error has ocurred with your request.')
    }
  } catch (error) {
    next(error)
  }
})

// add a question or questions to a form
router.put('/a/:formUUID', async (req, res, next) => {
  const { questions } = req.body
  const { formUUID } = req.params
  try {
    const formToUpdate = await Form.findByPk(formUUID)
    const update = await formToUpdate.addQuestions( questions )
    if ( update ) { 
      res.status(202).send(`The following questions were successfully added to form ${formUUID}: ${questions}`)
    } else res.status(400).send('An error has ocurred with your request.')
  } catch (error) {
    next(error)
  }
})


// remove a question or questions from a form
router.put('/r/:formUUID', async (req, res, next) => {
  const { questions } = req.body
  const { formUUID } = req.params
  try {
    const formToUpdate = await Form.findByPk( formUUID )
    const deletion = await formToUpdate.removeQuestions( questions )
    if ( deletion ) { 
      res.status(202).send(`The following questions were successfully removed from form ${formUUID}: ${questions}`)
    } else res.status(400).send('An error has ocurred with your request.')
  } catch (error) {
    next(error)
  }
})

// delete a form
router.delete( '/:formUUID',async ( req,res,next ) => {
  const { formUUID } = req.params
  try {
    const formToDelete = await Form.findByPk(formUUID)
    if (formToDelete) {
      await Form.destroy({ where: { formUUID } })
      res.status(202).send(`Form ${formUUID} was successfully removed from the database.`)
    } else res.status(404).send('Form not found.')
  } catch (error) {
    next(error)
  }
})

module.exports = router