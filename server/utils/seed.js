/* eslint-disable no-undef */
'use strict' // TODO: figure out why we're using strict here

import { sync, close } from '../db/_db'
// import chalk from 'chalk'
// import chalkAnimation from 'chalk-animation'
import { 
  Form, 
  Question, 
  // Answer, 
  // Submission, 
  // QuestionForm 
} from '../db/models'
import { 
  seedData, 
  // dummySubmission
} from './'

async function seed() {
  await sync({force: true})
  console.log('db synced!')
  // await dummySubmission('78d51d9e-0285-4022-81c5-7f14955315d0', seedData)
  const questionsArr = seedData.map((x)=>Question.create(x))
  const questions = await Promise.all(questionsArr)
  const questionUUIDs = questions.map(x => x.dataValues.questionUUID)

  const forms = await Promise.all([
    Form.create({
      formUUID: '78d51d9e-0285-4022-81c5-7f14955315d0',
      title: 'Secure Enrollment for NEXT Distro\'s Mail-based Harm Reduction Program',
      stateCode: 'NY',
    }, {
      include: [ Question ]
    }
    ).then(
      (form => form.addQuestions(questionUUIDs))
    ),
  ])

  console.log(`seeded ${forms.length} forms`)
  console.log(`with ${questionUUIDs.length} questions`)
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
    await close()
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
export default seed