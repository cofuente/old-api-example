const Sequelize = require('sequelize')
const db = require('../config/db')

const Program = db.define('program', {
  programUUID: {
    primaryKey: true,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    unique: true
  }
})

module.exports = Program
