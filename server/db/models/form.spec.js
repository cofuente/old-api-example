const {expect} = require('chai')
const {db, Form} = require('./index')
// const Form = db.model('form')

console.log(db, Form)
describe('Form model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('instanceMethods', () => {
    describe('assimilateForm', () => {
      let newForm
      // const anticipatedForm = 
      beforeEach(async () => {
        newForm = await Form.create({
          formUUID: 'b52e2f5f-763b-4e63-9124-0e707ea73f61',
          title: 'example form title 1',
          stateCode: 'NY',
        })
      })
      console.log(newForm.assimilateForm('78d51d9e-0285-4022-81c5-7f14955315d0'))
      // it('returns true if the password is correct', () => {
      //   expect(newForm.assimilateForm('78d51d9e-0285-4022-81c5-7f14955315d0')).to.be.equal(true)
      // })

      // it('returns false if the password is incorrect', () => {
      //   expect(newForm.correctPassword('bonez')).to.be.equal(false)
      // })
    }) // end describe('correctPassword')
  }) // end describe('instanceMethods')
}) // end describe('Form model')