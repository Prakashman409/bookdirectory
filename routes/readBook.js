const express=require('express');
const bodyParser=require('body-parser');
var app=require('../app.js');

const readBook=express.Router();
readBook.use(bodyParser.json());
var db=require('../connectionDatabase');
const { json } = require('body-parser');




readBook.route('/')
.all((req,res,next)=>{
    res.statusCode=200;
    next();
})
.get((req,res)=>{
    res.sendFile('pages/readPage.html',{root:'public'}); 
   
})
 .post((req,res)=>{
   var data=req.body;
   let sql=`INSERT INTO booklist(nameOfbook,authorOfBook,dateOfStudy) VALUES ('${data.bookname}','${data.authorname}','${data.readingdate}')`;
   db.query(sql,(err,result)=>{
       if(err){
           throw err;
       }
       console.log('data posted of form');
   })
   res.send('dataposted');
 });

 readBook.route('/getreadbook')
 .get((req,res)=>{
     
     let sql='SELECT nameOfbook FROM booklist';
     db.query(sql,(err,result)=>{
         if(err){
             throw err;
         }
         var results=JSON.parse(JSON.stringify(result));
         //console.log(results);
         // console.log('hello there')
         // res.send('hey u are getting book list');
         res.render('readBooklist',{data:results});
          })
      
     })

     .delete((req,res)=>{
        

         var bookName=(req.body.book);
          console.log(bookName);
          let sql=`DELETE from booklist WHERE nameOfbook='${bookName}'`;
          db.query(sql,(err,result)=>{
              if(err){
                  throw err;
              }
              console.log('data deleted');
              var results=JSON.parse(JSON.stringify(result));
              res.render('readBooklist',{data:results});
          })
       
    

     });
 

module.exports=readBook;