const express=require('express');
const wishBook=express.Router();
const bodyParser=require('body-parser');
var db=require('../connectionDatabase');

wishBook.use(bodyParser.json());


wishBook.route('/')
.get((req,res)=>{
   res.sendFile('pages/wishPage.html',{root:'public'});
    })

.post((req,res)=>{
    let data=req.body;
    res.send(`${data.nameofbook} was added`);
    var sql="INSERT INTO wishbook (nameOfBook,authorOfBook,dateOfReading) VALUES ('"+data.nameofbook+"','"+data.authorofbook+"','"+data.dateofreading+"')";
    db.query(sql,(err,result)=>{
        if (err){
            throw err;
        }
        console.log('wishbook data posted');
    })
    });

    wishBook.route('/wishbooklist')
    .get((req,res)=>{
        let sql='SELECT nameOfBook FROM wishbook';
        db.query(sql,(err,result)=>{
            if(err){
                throw err;
            }
            var results=JSON.parse(JSON.stringify(result));
            res.render('wishBooklist',{data:results});
        })
    })
  

module.exports=wishBook;
