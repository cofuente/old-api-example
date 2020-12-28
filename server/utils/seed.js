/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line global-require
if (process.env.NODE !== '/app/.heroku/node/bin/node') require('dotenv').config()
const db = require('../db/_db')
const {
  Form,
  Question,
  Submission,
  Answer
} = require('../db/models')

const { testData } = require('.')

async function seed() {
  await db.sync({ force: true })
  console.log('db synced!')
  const {questions, forms, submissions} = testData
  const formsData = forms.map( ( x ) => Form.create( x ) )
  const seededForms = await Promise.all(formsData)
  console.log(`seeded ${seededForms.length} test forms`)
  
  const questionsData = questions.map( ( x ) => Question.create( x ) )
  const seededQuestions = await Promise.all(questionsData)
  console.log(`with ${seededQuestions.length} test questions`)
  
  const form1 = await Form.findByPk('184a6221-3871-4db0-8081-a42c0ecff497')
  await form1.addQuestions([
    'ede83751-33f3-4dcf-8c12-b7fc650c501c',
    'b2d224a6-0bf9-4c5b-880d-c62fec019a8d',
    '886d73ab-1a54-4616-b1fd-f4c4898ed059',
    '869743bd-fd80-4094-9d89-52fbee80dfcd',
    '6b57b827-9694-4bb4-aaac-d265f86a2f72',
    '3412308f-e653-4012-a1bd-abfd3d777ea5',
    '2ebb72be-a117-491c-bf52-64f57e358475',
    '24bafe46-5478-4917-882b-8e14348ec1d3',
    '21154dc7-5fac-41f9-a058-a4ee492cb304',
    '0e956a4e-63a8-45ff-9f80-01daa32e1615'
  ])
  const form2 = await Form.findByPk('1dfb1ed3-58c8-434b-839e-feaae4e7e2ed')
  await form2.addQuestions([
    '56fdc70e-e37f-4794-bc81-5e4544bc9915',
    '9bc94a01-a61f-4a01-a4df-cbd523d4fa7c',
    '4a37e32c-34d9-4519-b374-75e34bae10f2',
    '1e45d100-93a5-41b2-bc53-cba12a5616d5',
    '30ff124b-5133-40c6-987d-7b1f08f7e2cb'
  ])
  const submissionsData = submissions.map( ( submission ) => Submission.create( submission, {include: [Answer]} ) )
  const seededSubmissions = await Promise.all(submissionsData)
  console.log(`and ${seededSubmissions.length} example submissions`)
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