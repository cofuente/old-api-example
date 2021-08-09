const {testData} = require( '.' )
const {questions} = testData
const nextEnrollmentQuestions = questions.filter(x => x.tag === 'nextEnrollment')

const generateRandomString = ( length ) => {
  const charactersAllowed = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let randomString = ''
  while ( randomString.length < length ) {
    randomString += charactersAllowed[ Math.floor( Math.random() * charactersAllowed.length ) ]
  }
  return randomString
}

// eslint-disable-next-line complexity
const assignValue = ( question ) => {
  switch ( question.questionType ) {
    case 'date':
      return '2017-01-01'
    case 'checkbox':
    case 'dropdown':
    case 'multiplechoice':
    case 'radio':
      return question.possibleAnswers[ Math.floor( Math.random() * question.possibleAnswers.length ) ]
    case 'input':
    case 'paragraph':
    case 'textarea':
      return generateRandomString(Math.ceil( Math.random() * 255 ))
    case 'number':
      return '1'
    default:
      return '' //this will catch the heading case where no answer should be submitted
  }
}

const generateSubmission = ( submissionUUID, formUUID ) => {

  const generateAnswer = ( question ) => {
    return {
      questionUUID: question.questionUUID,
      value: assignValue( question ),
      encryptedAnswer: false
    }
  }

  return {
    submissionUUID,
    formUUID,
    answers: nextEnrollmentQuestions.map( (x) => generateAnswer( x ) ),
  }
}

module.export = generateSubmission
