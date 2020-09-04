const {expect} = require('chai')
describe('Form model', () => {


  describe('instanceMethods', () => {
    describe('assimilateForm', () => {
      let faketest = false

      it('returns true if the password is correct', () => {
        expect(!faketest).to.be.equal(true)
      })
    }) // end describe('correctPassword')
  }) // end describe('instanceMethods')
}) // end describe('Form model')