/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
// @ts-nocheck
// eslint-disable-next-line global-require
if (process.env.NODE !== '/app/.heroku/node/bin/node') require('dotenv').config()
const db = require('../db/_db')
const {
  Form,
  Question

} = require('../db/models')
const { 
  distroEnrollmentData
  // reverseReportData
  // dummySubmission
} = require('.')

async function seed() {
  await db.sync({ force: true })
  console.log('db synced!')
  // await dummySubmission('78d51d9e-0285-4022-81c5-7f14955315d0', distroEnrollmentData)
  const distroQuestionsArr = distroEnrollmentData.map((x)=>Question.create(x))
  const distroQuestions = await Promise.all(distroQuestionsArr)
  const distroQuestionUUIDs = distroQuestions.map(x => x.dataValues.questionUUID)

  const forms = await Promise.all([
    Form.create({
      formUUID: '78d51d9e-0285-4022-81c5-7f14955315d0',
      title: 'Secure Enrollment for NEXT Distro\'s Mail-based Harm Reduction Program',
      stateCode: 'NY'
    }, {
      include: [ Question ]
    }
    ).then(
      (form => form.addQuestions(distroQuestionUUIDs))
    ),
  ])

  console.log(`seeded ${forms.length} forms`)
  console.log(`with ${distroQuestionUUIDs.length} distroQuestions`)
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