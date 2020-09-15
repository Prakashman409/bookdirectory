const express=require('express');
const wishBook=express.Router();


wishBook.route('/')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type' , 'text/plain');
    next();
})
.get((req,res)=>{
    res.end('all the book you read');
})
.post((req,res)=>{
    res.end('read book posted in database');
});


module.exports=wishBook;


