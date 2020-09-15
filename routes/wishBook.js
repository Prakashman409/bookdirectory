const express=require('express');
const wishBook=express.Router();
var db=require('../connectionDatabase');


wishBook.route('/')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type' , 'text/plain');
    next();
})
.get((req,res)=>{
    res.end('all the book you read');
    let sql="SELECT * FROM wishbook";
    db.query(sql,(err,result)=>{
        if(err){
            throw err;
        }
        console.log('before parsing');
        console.log(result);
        var results=JSON.parse(JSON.stringify(result));
        console.log('after parsing');
        console.log(results);
    })
})
.post((req,res)=>{
    res.end('read book posted in database');
    let sql="INSERT INTO wishbook(nameOfBook,authorOfBook,dateOfReading) VALUES('steve jobs','walter issacson','september 31')";
    db.query(sql,(err,result)=>{
        if(err){
            throw err;
        }
        console.log('dataposted');
        
    })

   
   
    
});

module.exports=wishBook;
