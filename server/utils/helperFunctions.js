const {Form} = require('../models')
const verifyRequest = async ( questionsArray, formUUID ) => {
      if ( !questionsArray.length || !Array.isArray( questionsArray ) ) return false
      const targetForm = await Form.getQuestions( formUUID )
      if ( questionsArray.length !== targetForm.length ) return false
      const checkKeys = ( question ) => {
        const shape = Object.keys( question )
        if ( shape[ 0 ] !== 'questionUUID' ) return false
        if ( shape[ 1 ] !== 'order' ) return false
        return true
      }
      if ( !questionsArray.every( checkKeys ) ) return false
      else return true
}

const helperFunc2 = (blergh) => console.log(blergh)
module.exports = {
  verifyRequest,
  helperFunc2
}
