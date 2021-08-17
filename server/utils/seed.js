// no-console is disabled for the whole file,
// because of the value the logs bring to seed runs
/* eslint-disable no-console */

const db = require('../config/db')
const {
  Form,
  Question,
  Program,
  User,
  Submission,
  Answer
} = require('../models')
const {testData, generateSubmission} = require( '.' )

// max-statements is ignored, because the additional lines
// are not introducing needless complexity. Generally, they are logs
// eslint-disable-next-line max-statements
async function seed() {
  await db.sync({force: true})
  console.log('db synced!')
  const {questions, programs, forms, users, submissions} = testData
  const questionsData = questions.map( ( x ) => Question.create( x ) )
  const seededQuestions = await Promise.all(questionsData)
  if (seededQuestions) console.log(`seeded ${seededQuestions.length} questions`)

  const programsData = programs.map( ( x ) => Program.create( x ) )
  const seededPrograms = await Promise.all(programsData)
  if (seededPrograms) console.log( `${ seededPrograms.length } programs` )

  const formsData = forms.map( ( x ) => Form.create( x ) )
  const seededForms = await Promise.all(formsData)
  if (seededForms) console.log(`${seededForms.length} forms`)

  const userData = users.map( ( x ) => User.create( x ) )
  const seededUsers = await Promise.all(userData)
  if (seededUsers) console.log( `${ seededUsers.length } users` )


  // Adding default questions to default forms in the database
  const defaultQuestionsList = questions.filter( ( x ) => x.tag === 'default' ).map( ( x ) => x.questionUUID )
  const defaultFormsList = forms.filter( (x) => x.tag === 'default' ).map( ( x ) => x.formUUID )

  const addDefaultsToForm = async ( formUUID ) => {
    const form = await Form.findOne({where: {formUUID}})
    await form.addQuestion( defaultQuestionsList )
  }
  const defaultForms = defaultFormsList.map( x => addDefaultsToForm( x ) )
  const seededDefaultForms = await Promise.all(defaultForms)
  if (seededDefaultForms) console.log( `added ${ defaultQuestionsList.length } default questions to ${ seededDefaultForms.length } default forms` )

  // Next Enrollment Questions List
  const nextEnrollmentQuestions = questions.filter( x => x.tag === 'nextEnrollment' )
  const nextEnrollmentQuestionsList = nextEnrollmentQuestions.map( ( x ) => x.questionUUID )
  const nextEnrollment = forms.filter( (x) => x.tag === 'nextEnrollment' ).map( ( x ) => x.formUUID )
  const nextEnrollmentForm = await Form.findOne( {where: {formUUID: nextEnrollment[0]}} )
  const questionsAdded = await nextEnrollmentForm.addQuestion( nextEnrollmentQuestionsList )
  if ( questionsAdded ) console.log( `added all ${ nextEnrollmentQuestionsList.length } questions to Next Enrollment form` )

  // // Creating Randomized Submissions for the Next Enrollment Form
  const randomizedSubmissions = submissions.map( ( x ) => generateSubmission( x.submissionUUID, x.formUUID, nextEnrollmentQuestions ) )
  const seededRandomizedSubmissions = randomizedSubmissions.map( x => Submission.create( x, {include: Answer} ) )
  const seededSubmissions = await Promise.all( seededRandomizedSubmissions )
  if ( seededSubmissions ) console.log( `seeded ${ seededSubmissions.length } submissions with their respective answers to Next Enrollment form` )
  console.log( 'all tables seeded successfully!' )
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
