const db = require('../config/db')
const {
  Form
} = require( '../models' )

async function runMethod() {
  await db.sync()
  console.log('DB Synced!')
  try {
    const formToUpdate = await Form.create( {
      formUUID: 'ffe7cc8d-66d9-489e-94f0-c458d08b5fc5',
      programUUID: '21154dc7-5fac-41f9-a058-a4ee492cb304',
      stateCode: 'NY',
      title: 'Example of a form title.'
    } )
    console.log(formToUpdate)
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