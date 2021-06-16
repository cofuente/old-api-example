const router = require('express').Router()

router.get('/test', async (req,res) =>{

    try{
        console.log("Connecting to Postgres........")
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM test_table');
        const results = { 'form results': (result) ? result.rows : null};
        res.send(results.json())
        
    }catch(err){
        console.log("Error Occured:  ",err)
    }
    

    
})


module.exports = router 