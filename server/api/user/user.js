const router = require('express').Router()
const db = require('../../config/db')
const User = require('../../models/user')

router.post('/login', async (req, res) => {
    try {
        const user = User.findAll({
            where: {
              username: req.body.username
            }
          })
          if (user){
            res.status(200).json(user)
          }
    } catch ( err ) {
        console.log('Error Occured:  ', err)
    }
})


module.exports = router
