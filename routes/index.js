var express = require('express');
var router = express.Router();



router.get('/',(req,res)=>{
    console.log('i am from console');
    res.sendFile('pages/home.html',{root:'public'});
    
})

module.exports = router;
