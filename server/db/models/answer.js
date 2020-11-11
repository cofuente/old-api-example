const Sequelize = require('sequelize')

const db = require('../_db')

const Answer = db.define(
  'answer',
  {
    answerUUID: {
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      unique: true
    },
    value: {
      type: Sequelize.STRING,
      defaultValue: ''
    },
    questionUUID: {
      type: Sequelize.UUID,
      references: {
        model: db.model.Question,
        key: 'questionUUID'
      },
      allowNull: false
    }
  },
  {
    timestamps: false
  }
)

module.exports = Answer