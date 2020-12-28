const router = require('express').Router()

const { Question } = require('../db/models')

// get all questions
router.get('', async (req, res, next) => {
  try {
    const allQuestions = await Question.findAll()
    if (allQuestions.length) res.status(200).json(allQuestions) 
    else res.status(404).send('Oh, wow. There are no questions in this database.')
  } catch (error) {
    next(error)
  }
})

// make a new question, requires questionType & questionPrompt
router.post('/', async (req, res, next) => {
  try {
    const newQuestion = await Question.create(req.body)
    if (newQuestion) res.status(201).json(newQuestion)
    else res.status(500).send('An error has ocurred with your request.')
  } catch (error) {
    next(error)
  } 
})

// get a specific question
router.get('/:questionUUID', async (req, res, next) => {
  try {
    const requestedQuestion = await Question.findByPk(req.params.questionUUID)
    if (requestedQuestion) res.status(200).json(requestedQuestion) 
    else res.status(404).send('Question not found.')
  } catch (error) {
    next(error)
  }
})

// delete a question
router.delete('/:questionUUID', async (req, res, next) => {
  const { questionUUID } = req.params
  try {
    const questionToDelete = await Question.findByPk(questionUUID)
    if (questionToDelete) {
      await Question.destroy({ where: { questionUUID } })
      res.status(202).send(`Question ${questionUUID} was successfully removed from the database.`)
    } else res.status(404).send('Question not found.')
  } catch (error) {
    next(error)
  }
})

module.exports = router