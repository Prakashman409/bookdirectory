const express=require('express');
const bodyParser=require('body-parser');

const readBook=express.Router();
readBook.use(bodyParser.json());
var db=require('../connectionDatabase');


readBook.route('/')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res)=>{
    let sql='SELECT * FROM booklist';
    db.query(sql,(err,results,fields)=>{
        if(err){
            throw err;
        }
        console.log('before parsing');
        console.log(results);
        var result=JSON.parse(JSON.stringify(results));
       console.log('after parsing data');
      console.log(result[1].nameOfbook);
      res.send(result[1].nameOfbook);
    });
})
 .post((req,res)=>{
     res.end('Books posted in your database you currently read');
     let sql="INSERT INTO booklist (nameOfBook,authorOfBook,dateOfStudy) VALUES('startup','chris','september 1')";
     db.query(sql,(err,results)=>{
         if(err){
             throw err;
         }
         console.log('1 record inserted');
     })
 })

 

module.exports=readBook;