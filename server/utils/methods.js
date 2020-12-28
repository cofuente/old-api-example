/* eslint-disable */
if (process.env.NODE !== '/app/.heroku/node/bin/node') require('dotenv').config()
const db = require('../db/_db')
const { 
  Form,
  Question, 
  Answer, 
  Submission, 
  QuestionForm
} = require('../db/models')

async function runMethod() {
  await db.sync()
  console.log('DB Synced!')
  const formUUID = '1dfb1ed3-58c8-434b-839e-feaae4e7e2ed'
  try {
    const formToUpdate = await Form.findOne({
      where: { formUUID },
      include: {
        model: Question,
        as: 'questions'
      }
    })

    questionsArr = [
      { order: 3, questionUUID: '4a37e32c-34d9-4519-b374-75e34bae10f2' },
      { order: 4, questionUUID: '30ff124b-5133-40c6-987d-7b1f08f7e2cb' },
      { order: 1, questionUUID: '9bc94a01-a61f-4a01-a4df-cbd523d4fa7c' },
      { order: 5, questionUUID: '1e45d100-93a5-41b2-bc53-cba12a5616d5' },
      { order: 2, questionUUID: '56fdc70e-e37f-4794-bc81-5e4544bc9915' }
    ]
    const update = await QuestionForm.updateOrder(questionsArr, formUUID)
    console.log(update)
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