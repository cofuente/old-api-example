const db = require('../config/db')
const {
  Form,
  Question,
  Program,
  User
} = require('../models')

const {testData} = require('.')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')
  const {questions, programs, forms, users} = testData
  const questionsData = questions.map( ( x ) => Question.create( x ) )
  const seededQuestions = await Promise.all(questionsData)
  console.log(`with ${seededQuestions.length} test questions`)

  const programsData = programs.map( ( x ) => Program.create( x ) )
  const seededPrograms = await Promise.all(programsData)
  console.log( `seeded ${ seededPrograms.length } test programs` )

  const formsData = forms.map( ( x ) => Form.create( x ) )
  const seededForms = await Promise.all(formsData)
  console.log(`seeded ${seededForms.length} test forms`)

  const userdata = users.map( ( x ) => User.create( x ) )
  const seededUsers = await Promise.all(userdata)
  console.log( `with ${ seededUsers.length } test users` )

  const nextEnrollmentForm = await Form.findOne( {where: {formUUID: '95dfc8ea-30a1-4c4b-be03-62fbf5b7cd2f'}})
  await nextEnrollmentForm.addQuestion( [
      '50e1ee43-03f6-4231-affc-195ee76c7e12',
      '842c7508-b000-4fc7-9c9f-4e934d0b8ed0',
      '26464b66-7afb-443d-bc69-e6b3cb16ecfa',
      'b1a3c65a-1ddd-4666-a1b0-4d2842577094',
      '9c8f020c-9ca9-4abc-90b2-817c6f49b1fa',
      '65809857-da07-4a65-8656-d158a5bb0b75',
      '31a4dec2-6587-4232-9925-2c106fb50494',
      'c0e71e1b-c7d0-47dd-8b7b-17ebc37a7b95',
      '98e8fa30-9792-4081-830f-96a236fac83d',
      'b9dc6102-502b-4ab6-b4f3-2b3ee161b5ce',
      '43aea536-e644-4d67-8881-11873f4c10f6',
      '440af351-63d2-454b-a3af-a18d40d9d8f5',
      '872af9f8-d99c-46e0-b222-a1cbdc6490d4',
      '01fffdfa-a893-47e2-8ee0-60809cd57726',
      'ed716db9-9a0d-4054-866e-37e0725fd8a3',
      'e7581915-b0a9-464f-a9b1-5f6fd293cec6',
      'ac6ce973-3a36-41e3-9369-8f2033ef5022',
      'cd6e3ccf-279b-4fa3-bbd3-e566a3d99773',
      '2994a592-f148-4e91-8d4b-85fb85b0eb30',
      'c2c0d01f-4187-4f51-9b3b-8ad246aa11cc',
      'aa28ef3c-d32b-40ea-9ca8-3b4e911a7d3a',
      '07136a3c-5439-4f70-bc4b-3788578e99dd',
      '1d546604-8e0c-442b-b9c6-b10082de8b27',
      '0dd4fd38-3969-4d2d-a1da-48093a762c66',
      'db8b8bfa-299f-42a0-9e6d-d99610a4322f',
      '2691ed4e-3256-4c3f-95eb-92050cd12ed6',
      '7f4a3588-3926-4132-a325-c7f33a1fbf25',
      '364f1742-6ba2-4f10-a396-3f1a7d1ee7c7',
      '2ae2c762-2373-4034-b2af-959304a39b19',
      'f766957a-e5b0-4e90-a239-8071102e96f8',
      '8575fc03-b4fe-4f5d-9353-0b502baac1ac',
      'a6ba3467-cd78-4e1c-9f3c-567edf5651d0',
      '34936d25-314a-4664-abc1-693dbd2068e0',
      '53eea840-5a58-4758-a19a-597af757fd8f',
      '394376d2-a161-4bbe-b0b4-b4dd400b99b6',
      '33ef7055-5edf-4edf-baf9-83d6ef9b076b',
      '21d865c3-1d3c-4e99-9968-8405b90f9c5f',
      '3e53d554-f50a-4866-85ec-aeab31af2c64',
      'e496c927-bb34-4c43-9115-83e43889ed05',
      '753eda43-a227-4651-a3b2-b6538ce6f54c',
      '932aa8f6-9e56-4944-9485-778d5650ccf1',
  ] )
  console.log('added next enrollment questions to form')

  const nextOrderForm = await Form.findOne( {where: {formUUID: '9fff3eec-231a-48d7-a2a3-593ffe924d50'}})
  await nextOrderForm.addQuestion( [
      'ede83751-33f3-4dcf-8c12-b7fc650c501c',
      'b2d224a6-0bf9-4c5b-880d-c62fec019a8d',
      '886d73ab-1a54-4616-b1fd-f4c4898ed059',
      '839743bd-fd80-4094-9d89-52fbee80dfcd',
      '6b57b827-9694-4fb4-aaac-d265f86a2f72',
      '3412308f-e653-4712-a1bd-abfd3d777ea5',
      '2ebb82be-a117-491c-bf52-64f57e358475',
      '24bafe55-5478-4917-882b-8e14348ec1d3',
      '21154dc7-5fac-43f9-a058-a4ee492cb304',
      '0e956a4e-63a8-32ff-9f80-01daa32e1615',
  ])
  console.log( 'added next order questions to form' )

  const nextOtherForm = await Form.findOne( {where: {formUUID: 'b0b649c2-03c2-490f-89b4-fcd16b953986'}})
  await nextOtherForm.addQuestion( [
      'ede83751-33f3-4dcf-8c12-b7fc650c501c',
      'b2d224a6-0bf9-4c5b-880d-c62fec019a8d',
      '886d73ab-1a54-4616-b1fd-f4c4898ed059',
      '839743bd-fd80-4094-9d89-52fbee80dfcd',
      '6b57b827-9694-4fb4-aaac-d265f86a2f72',
      '3412308f-e653-4712-a1bd-abfd3d777ea5',
      '2ebb82be-a117-491c-bf52-64f57e358475',
      '24bafe55-5478-4917-882b-8e14348ec1d3',
      '21154dc7-5fac-43f9-a058-a4ee492cb304',
      '0e956a4e-63a8-32ff-9f80-01daa32e1615',
  ])
  console.log( 'added next other questions to form' )

  const caOtherForm = await Form.findOne( {where: {formUUID: 'b48a73bb-d7ee-4cbc-9420-fbb8614bbab3'}})
  await caOtherForm.addQuestion( [
      'ede83751-33f3-4dcf-8c12-b7fc650c501c',
      'b2d224a6-0bf9-4c5b-880d-c62fec019a8d',
      '886d73ab-1a54-4616-b1fd-f4c4898ed059',
      '839743bd-fd80-4094-9d89-52fbee80dfcd',
      '6b57b827-9694-4fb4-aaac-d265f86a2f72',
      '3412308f-e653-4712-a1bd-abfd3d777ea5',
      '2ebb82be-a117-491c-bf52-64f57e358475',
      '24bafe55-5478-4917-882b-8e14348ec1d3',
      '21154dc7-5fac-43f9-a058-a4ee492cb304',
      '0e956a4e-63a8-32ff-9f80-01daa32e1615',
  ])
  console.log('added ca other questions to form')
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
