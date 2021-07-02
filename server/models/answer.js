const Sequelize = require('sequelize')
const db = require('../config/db')

const Answer = db.define('answer', {
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
    },
    // additional patterns include: making a separate association, or setting encryptedAnswer as a virtual field
    encryptedAnswer: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
  },
  {
    timestamps: true
  }
)

module.exports = Answer