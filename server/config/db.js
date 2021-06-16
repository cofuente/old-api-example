const {Pool} = require("pg")

const pool = new Pool({
    
  connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  })
  
  pool.connect()
    .then(() => {
      // console.log('Connecting to Postgres..')
      // console.log('Postgres Connected....')
  }).catch(err =>{
    // console.log("could not connect to postgres:",err)
  })

  module.exports = {
    query: (text, params) => pool.query(text, params),
  };