const Sequelize = require('sequelize')

// The interval at which to cleanup expired sessions in the store (in milliseconds).
const interval = 2 * 60 * 1000

const customOptions = (db) => {

  const sessions = db.define("sessions", {
    sid: {
      type: Sequelize.STRING,
      primaryKey: true,
      unique: true
    },
    expires: Sequelize.DATE,
    data: Sequelize.STRING(50000),
  })

  const extendDefaultFields = (defaults, session) => {
    return {data: defaults.data, expires: defaults.expires}
  }

  return {
    db,
    checkExpirationInterval: interval,
    table: "sessions",
    extendDefaultFields,
    disableTouch: true
  }
}

module.exports = customOptions