const db = require('../config/db')
const {
  Form, QuestionForm
} = require( '../models' )

async function runMethod() {
  await db.sync()
  console.log('DB Synced!')
  try {
    const formToUpdate = await Form.getQuestionsWithOrder('95dfc8ea-30a1-4c4b-be03-62fbf5b7cd2f')
    console.log( formToUpdate )
    // await QuestionForm.updateOrder( [
    //   {questionUUID: 'ede83751-33f3-4dcf-8c12-b7fc650c501c', order: 1},
    //   {questionUUID: 'b2d224a6-0bf9-4c5b-880d-c62fec019a8d', order: 2},
    //   {questionUUID: '886d73ab-1a54-4616-b1fd-f4c4898ed059', order: 3},
    //   {questionUUID: '839743bd-fd80-4094-9d89-52fbee80dfcd', order: 4},
    //   {questionUUID: '6b57b827-9694-4fb4-aaac-d265f86a2f72', order: 5},
    //   {questionUUID: '3412308f-e653-4712-a1bd-abfd3d777ea5', order: 6},
    //   {questionUUID: '2ebb82be-a117-491c-bf52-64f57e358475', order: 7},
    //   {questionUUID: '24bafe55-5478-4917-882b-8e14348ec1d3', order: 8},
    //   {questionUUID: '21154dc7-5fac-43f9-a058-a4ee492cb304', order: 9},
    //   {questionUUID: '0e956a4e-63a8-32ff-9f80-01daa32e1615', order: 10}
    // ], '9fff3eec-231a-48d7-a2a3-593ffe924d50' )
    // const updatedForm = await Form.getQuestionsWithOrder('9fff3eec-231a-48d7-a2a3-593ffe924d50')
    // console.log( updatedForm )
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
