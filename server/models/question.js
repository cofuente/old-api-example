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
      'multiplechoice',
      'checkbox',
      'paragraph',
      'input',
      'date',
      'radio',
      'dropdown',
      'heading',
      'number',
      'textarea'
    ),
    allowNull: false
  },
  questionDescription: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: 'n/a'
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