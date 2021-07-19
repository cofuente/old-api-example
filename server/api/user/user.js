const router = require('express').Router()
const db = require('../../config/db')

router.post('/login', async (req, res) => {
    try {
        const params = req.params
        const submission = Submission.findAll({
            where: {
              Id: params
            }
          })
        res.send( submission )
    } catch ( err ) {
        console.log('Error Occured:  ', err)
    }
}