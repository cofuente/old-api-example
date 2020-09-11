const Sequelize = require('sequelize')

const interval = 2 * 60 * 1000 // The interval at which to cleanup expired sessions in the store (in milliseconds).


const appendCustomOptions = (db) => {
  const sessions = db.define("sessions", {
    sid: {
      type: Sequelize.STRING,
      primaryKey: true,
      unique: true
    },
    expires: Sequelize.DATE,
    data: Sequelize.STRING(50000),
  })
  function extendDefaultFields(defaults, session) {
    return {
      data: defaults.data,
      expires: defaults.expires,
    }
  }


  return {
    db,
    checkExpirationInterval: interval,
    table: "sessions",
    extendDefaultFields
  }
}



module.exports = appendCustomOptions