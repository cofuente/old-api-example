const {Pool} = require('pg')

const pool = new Pool({
    
  connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  })
  
  pool.connect()
    .then(() => {
      
  }).catch(err =>{
    /* eslint-disable no-alert, no-console */
     console.log('could not connect to postgres:',err)
  })

  module.exports = {
    query: (text, params) => pool.query(text, params)
  }