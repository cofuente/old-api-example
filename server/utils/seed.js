'use strict' // TODO: figure out why we're using strict here

if (process.env.NODE !== '/app/.heroku/node/bin/node') require('dotenv').config()
const db = require('../db/_db')
// import chalk from 'chalk'
// import chalkAnimation from 'chalk-animation'
const { 
  Form, 
  Question, 
  // Answer, 
  // Submission, 
  // QuestionForm 
} = require('../db/models')
const { 
  distroEnrollmentData,
  reverseReportData
  // dummySubmission
} = require('./')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')
  // await dummySubmission('78d51d9e-0285-4022-81c5-7f14955315d0', distroEnrollmentData)
  const distroQuestionsArr = distroEnrollmentData.map((x)=>Question.create(x))
  const distroQuestions = await Promise.all(distroQuestionsArr)
  const distroQuestionUUIDs = distroQuestions.map(x => x.dataValues.questionUUID)

  const reverseReportQuestionsArr = reverseReportData.map((x)=>Question.create(x))
  const reverseReportQuestions = await Promise.all(reverseReportQuestionsArr)
  const reverseReportQuestionUUIDs = reverseReportQuestions.map(x => x.dataValues.questionUUID)

  const forms = await Promise.all([
    Form.create({
      formUUID: '78d51d9e-0285-4022-81c5-7f14955315d0',
      title: 'Secure Enrollment for NEXT Distro\'s Mail-based Harm Reduction Program',
      stateCode: 'NY',
    }, {
      include: [ Question ]
    }
    ).then(
      (form => form.addQuestions(distroQuestionUUIDs))
    ),

    Form.create({
      formUUID: '78d51d9e-0285-4022-81c5-7f14955315d1',
      title: 'Opioid Overdose Incident Form',
      stateCode: 'NY',
    }, {
      include: [ Question ]
    }
    ).then(
      (form => form.addQuestions(reverseReportQuestionUUIDs))
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

// TODO: check if below is still true
// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.

if (module === require.main) {
  runSeed()
}

// Exporting the seed function for testing purposes
module.exports = seed