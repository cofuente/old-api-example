/* eslint-disable no-console */
const fs = require('fs')
const path = require('path')

const valueParser = (x) => {
  if (x.questionType === 'paragraph') return 'this is a standard paragraph answer'
  if (x.questionType === 'input') return 'this is a standard input answer'
  if (x.questionType === 'checkbox' && x.possibleAnswers.length) return x.possibleAnswers[0][0]
  if (x.questionType === 'date') return '2020-08-11'
  if (x.questionType === 'dropdown' && x.possibleAnswers.length) return x.possibleAnswers[0][0]
  if (x.questionType === 'radio' && x.possibleAnswers.length) return x.possibleAnswers[0][0]
  if (x.questionType === 'heading') return ''
  if (x.questionType === 'number') return '90210'
} 

// create a json to use with postman
const dummySubmission = async (formUUID, questions) => {
  const parsedQuestions = questions.map((x) => {
    return {
      questionUUID: x.questionUUID,
      value: valueParser(x)
    }
  })
  const submissionData = {
    formUUID,
    answers: parsedQuestions
  }
  await fs.writeFile(path.join('dummy-submission.json'), JSON.stringify(submissionData), (err) => {
    if (err) throw err
    console.log('The file has been saved!')
  })
}
module. exports = dummySubmission