const Sequelize = require('sequelize')
const db = require('../config/db')

const Client = db.define('client', {
  clientUUID: {
    primaryKey: true,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    unique: true
  },
    programUUID: {
    type: Sequelize.UUID,
    references: {
      model: db.model.Program,
      key: 'programUUID'
    },
    allowNull: false
  },
  handle: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
})

module.exports = Client
