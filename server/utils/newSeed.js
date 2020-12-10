/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line global-require
if (process.env.NODE !== '/app/.heroku/node/bin/node') require('dotenv').config()
const db = require('../db/_db')
const {
  Form,
  Question
  // Submission
} = require('../db/models')

const { testData } = require('.')

async function seed() {
  await db.sync({ force: true })
  console.log('db synced!')
  const questionsData = testData.questions.map( ( x ) => Question.create( x ) )
  const questions = await Promise.all(questionsData)
  
  const formsData = testData.forms.map( ( x ) => Form.create( x ) )
  const forms = await Promise.all(formsData)

  console.log(`seeded ${forms.length} test forms`)
  console.log(`with ${questions.length} test questions`)
  console.log('seeded successfully')
}

// Separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('🌱 running seed')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.

if (module === require.main) {
  runSeed()
}

// Exporting the seed function for testing purposes
module.exports = seed