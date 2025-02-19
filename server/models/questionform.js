const Sequelize = require('sequelize')
const db = require('../config/db')

const QuestionForm = db.define('questionsforms', {
  order: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0
  }
}, {
  timestamps: false
})

QuestionForm.updateOrder = async (questions, formUUID) => {
  const update = await questions.map((question) => {
    const {order, questionUUID} = question
    return QuestionForm.update({order},
      {where: {formUUID, questionUUID}} )
  })
  return Promise.all(update)
}

module.exports = QuestionForm
