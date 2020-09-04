const {expect} = require('chai')
const request = require('supertest')
const db = require('../db/_db')
const {fullstack} = require('../../index')
const Form = db.model('form')

describe('Form routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/forms/', () => {
    const whateverForm = {
        formUUID: 'b52e2f5f-763b-4e63-9124-0e707ea73f61',
        title: 'example form title 1',
        stateCode: 'NY',
      }

    beforeEach(() => {
      return Form.create(whateverForm)
    })

    it('GET /api/forms', async () => {
      const res = await request(fullstack)
        .get('/api/forms')
        .expect(200)

      expect(res.body).to.be.an('array')
      console.log(res.body)
      // expect(res.body[0].email).to.be.equal(whateverForm)
    })
  }) // end describe('/api/forms')
}) // end describe('Form routes')