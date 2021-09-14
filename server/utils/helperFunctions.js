const {Form} = require( '../models' )
const verifyReorderRequest = async ( questionsArray, formUUID ) => {
      if ( !questionsArray.length || !Array.isArray( questionsArray ) ) return 'Supplied questions are not in proper format: Array'
      const targetForm = await Form.getQuestions( formUUID )
      if ( questionsArray.length !== targetForm.length ) return 'Length of supplied questions does not match length of questions attached to target Form'
      const checkKeys = ( question ) => {
        const shape = Object.keys( question )
        if (!shape.includes('questionUUID')) return false
        if (!shape.includes('order')) return false
        return true
      }
      if ( !questionsArray.every( checkKeys ) ) return 'Not all supplied questions contain required attributes: questionUUID, order'
      else return true
}

const generateRandomString = ( length ) => {
  const charactersAllowed = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let randomString = ''
  while ( randomString.length < length ) {
    randomString += charactersAllowed[ Math.floor( Math.random() * charactersAllowed.length ) ]
  }
  return randomString
}

const assignValue = ( question ) => {
  switch ( question.questionType ) {
    case 'date':
      return '2017-01-01'
    case 'checkbox':
    case 'dropdown':
    case 'radio':
      return question.possibleAnswers[ Math.floor( Math.random() * question.possibleAnswers.length ) ]
    case 'input':
    case 'paragraph':
    case 'textarea':
      return generateRandomString(Math.ceil( Math.random() * 255 ))
    case 'number':
      return '1'
    default:
      return '' //this will catch the heading case where no answer should be submitted, like heading
  }
}

const generateSubmission = ( submissionUUID, formUUID, formQuestions ) => {

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
    answers: formQuestions.map( (x) => generateAnswer( x ) ),
  }
}

module.exports = {
  verifyReorderRequest,
  generateSubmission
}
