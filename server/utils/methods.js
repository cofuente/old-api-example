/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
// @ts-nocheck
// eslint-disable-next-line global-require
if (process.env.NODE !== '/app/.heroku/node/bin/node') require('dotenv').config()
const db = require('../db/_db')
const { 
  Form 
  // Question, 
  // Answer, 
  // Submission, 
} = require('../db/models')

async function runMethod() {
  await db.sync()
  console.log('DB Synced!')
  try {
    const formToUpdate = await Form.findByPk( 'd899fc93-5479-497f-81ed-d362075d7bb3' )
    const updatedForm = await formToUpdate.removeQuestions( '26464b66-7afb-443d-bc69-e6b3cb16ecfa' )
    console.log(updatedForm)
  } catch (error) {
    console.log('eeeeeeeeee:', error)
  }
}

async function runMethodTest() {
  console.log('attempting runMethod...')
  try {
    await runMethod()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

if (module === require.main) {
  runMethodTest()
}

module.exports = runMethod