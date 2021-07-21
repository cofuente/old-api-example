const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../config/db')

const Client = db.define( 'client', {
  clientUUID: {
    primaryKey: true,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    unique: true
  },
  // TO CONSIDER: if a client belongs to a program we may not have a way to move the client from program to program
    programUUID: {
    type: Sequelize.UUID,
    references: {
      model: db.model.Program,
      key: 'programUUID'
    },
    allowNull: false
  },
  // TO CONSIDER: unclear as to which would be the better paradigm
  handle: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  // handle: {
  //   type: Sequelize.STRING,
  //   get() {
  //     return () => this.getDataValue('handle')
  //   }
  // },
  // salt: {
  //   type: Sequelize.STRING,
  //   get() {
  //     return () => this.getDataValue('salt')
  //   }
  // }
})

module.exports = Client
// Client.prototype.correctHandle = function(candidatePwd) {
//   return Client.encryptHandle(candidatePwd, this.salt()) === this.handle()
// }

// Client.generateSalt = function() {
//   return crypto.randomBytes(16).toString('base64')
// }

// Client.encryptHandle = function(plainText, salt) {
//   return crypto
//     .createHash('RSA-SHA256')
//     .update(plainText)
//     .update(salt)
//     .digest('hex')
// }

// const setSaltAndHandle = client => {
//   const localClient = client
//   if (localClient.changed('handle')) {
//     localClient.salt = Client.generateSalt()
//     localClient.handle = Client.encryptHandle(localClient.handle(), localClient.salt())
//   }
// }

// Client.beforeCreate(setSaltAndHandle)
// Client.beforeUpdate(setSaltAndHandle)
// Client.beforeBulkCreate(users => {
//   users.forEach(setSaltAndHandle)
// })
