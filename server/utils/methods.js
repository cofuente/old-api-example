/* eslint-disable no-undef */
'use strict'

import { sync, close } from '../db/_db'
import {
  Form,
  // Question,
  // Answer,
  // Submission
} from '../db/models'

async function runMethod() {
  await sync()
  console.log('DB Synced!')
  try {
    const questionsBefore = await Form.getQuestions('e2ef8eca-d2cf-4e12-816e-8a970fc698e8')
    console.log('before: ', questionsBefore)

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
    await close()
    console.log('db connection closed')
  }
}

if (module === require.main) {
  runMethodTest()
}

export default runMethod