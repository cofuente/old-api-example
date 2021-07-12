const db = require('../config/db')
const {
  Form,
  Question,
  Program
} = require('../models')

const {testData} = require('.')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')
  const {questions, programs, forms} = testData
  const questionsData = questions.map( ( x ) => Question.create( x ) )
  const seededQuestions = await Promise.all(questionsData)
  console.log(`with ${seededQuestions.length} test questions`)

  const programsData = programs.map( ( x ) => Program.create( x ) )
  const seededPrograms = await Promise.all(programsData)
  console.log( `seeded ${ seededPrograms.length } test programs` )

  const formsData = forms.map( ( x ) => Form.create( x ) )
  const seededForms = await Promise.all(formsData)
  console.log(`seeded ${seededForms.length} test forms`)

  
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


if (module === require.main) {
  runSeed()
}


module.exports = seed
