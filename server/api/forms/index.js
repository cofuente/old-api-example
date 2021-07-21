const router = require('express').Router()
const db = require('../../config/db')

// currently not working
router.get('/test', async (req, res) => {
    try {
        const result = await db.query( 'SELECT * FROM test_table' )
        const results = {'form results': ( result ) ? result.rows : null}
        res.send( results )
    } catch ( err ) {
        console.log('Error Occured:  ', err)
    }
})


module.exports = router
