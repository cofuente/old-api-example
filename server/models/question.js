const Sequelize = require('sequelize')
const db = require('../config/db')

const Question = db.define('question', {
  questionUUID: {
    primaryKey: true,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    unique: true
  },
  required: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  encryptAnswer: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  questionPrompt: {
    type: Sequelize.STRING,
    allowNull: false
  },
  questionType: {
    type: Sequelize.ENUM(
      'checkbox',
      'date',
      'dropdown',
      'heading',
      'input',
      'number',
      'paragraph',
      'radio',
      'textarea'
    ),
    allowNull: false
  },
  possibleAnswers: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    defaultValue: [
      'n/a'
    ]
  }
}, {
  timestamps: true
})

module.exports = Question
