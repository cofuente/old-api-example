const db = require('../config/db')
const {Form} = require( '../models' )

async function runMethod() {
  await db.sync()
  try {
    await Form.getQuestionsWithOrder('95dfc8ea-30a1-4c4b-be03-62fbf5b7cd2f')
  } catch (error) {
    console.error('Method run failed, because:', error)
  }
}

async function runMethodTest() {
  try {
    await runMethod()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    await db.close()
  }
}

if (module === require.main) {
  runMethodTest()
}

module.exports = runMethod
