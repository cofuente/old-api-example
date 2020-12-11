/* eslint-disable no-console */
const fs = require('fs')
const path = require('path')
const { Form, Question } = require( '../db/models' )

// returns a standardized answer for every question type that does not have a possibleAnswers array
// eslint-disable-next-line consistent-return
const standardAnswers = (x) => {
  if (x.questionType === 'paragraph') return 'this is a standard paragraph answer'
  if (x.questionType === 'input') return 'this is a standard input answer'
  if (x.questionType === 'date') return '2020-08-11'
  if (x.questionType === 'heading') return 'this is a standard heading answer'
  if (x.questionType === 'number') return '90210'
  if (x.questionType === 'textarea') return 'this is a standard textarea answer'
} 
// selects a random option from the question's possibleAnswers array or uses a standard answer as defined above
const generateAnswer = (requiredQ) => {
  const { possibleAnswers } = requiredQ
  if (possibleAnswers.length > 1 || possibleAnswers[0] !== 'n/a') {
    return possibleAnswers[Math.floor(Math.random() * (possibleAnswers.length))]
  } 
  return standardAnswers(requiredQ)
}

// takes a complete form and generates complete dummy submission data
const generateFromQuestions = ( completeForm ) => {
  const {formUUID} = completeForm
  const requiredQuestionsOnly = completeForm.questions.filter(x => x.required === true)
  const answers = requiredQuestionsOnly.map(x => ({
    questionUUID: x.questionUUID,
    value: generateAnswer(x)
  }))
  return {
    formUUID,
    answers
  }
}


// Generates the dummy-submission.js files
const generateSubmissions = async () => {
  const existingForms = await Form.findAll()
  const formUUIDs = existingForms.map( x => x.formUUID )
  const getCompleteForm = async (formUUID) =>  Form.findOne({
    where: { formUUID },
    include: {
      model: Question,
      as: 'questions'
    }
  })
  const completeForms = await Promise.all(formUUIDs.map(getCompleteForm))
  const submissionData = completeForms.filter(x =>x.questions.length).map(generateFromQuestions)
  
  const dummySubmissions = await Promise.all(submissionData.map( async (submission, i) => {
    await fs.writeFile(path.join(`dummy-submission-${i}.json`), JSON.stringify(submission), (err) => {
      if (err) throw err
      console.log('A new submission has been generated!')
    })
  }))
  return dummySubmissions
}
  
generateSubmissions()