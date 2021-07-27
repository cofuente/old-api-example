const Sequelize = require('sequelize')
const db = require( '../config/db')

const Form = db.define('form', {
  formUUID: {
    primaryKey: true,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    unique: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  programUUID: {
    type: Sequelize.UUID,
    references: {
      model: db.model.Program,
      key: 'programUUID'
    },
    allowNull: false
  },
  start: {
    type: Sequelize.DATE,
    // an arbitratry date in the past
    defaultValue: '2021-07-26 14:31:25.295-04'
  },
  end: {
    type: Sequelize.DATE,
    // an arbitrary date 4 years into the future
    defaultValue: '2025-07-26 14:31:25.295-04'
  }
})
Form.getQuestions = async ( formUUID ) => {
  const formWithQs = await Form.findOne( {where: {formUUID}, include: {model: db.model( 'question' )}} )
  const questions = formWithQs.dataValues.questions.map( ( question ) => question.questionUUID )
  return questions
}

Form.prototype.assimilateForm = async function (otherFormUUID) {
  const questionsToAdd = await Form.getQuestions(otherFormUUID)
  return this.addQuestions(questionsToAdd)
}

module.exports = Form
