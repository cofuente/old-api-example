const router = require('express').Router()
const db = require('../../config/db');

router.get('/test', async (req,res) =>{

   
    try{
        const result = await db.query('SELECT * FROM test_table');
        console.log('results => ',result)
        const results = { 'form results': (result) ? result.rows : null};
        console.log(results)
        res.send(results)
        
    }catch(err){
        
    }
    

    
})


module.exports = router 