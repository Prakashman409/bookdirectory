var mysql=require('mysql');
var db=mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'readstore'
    });

//to connect database
db.connect((err,result)=>{
    if(err){
        throw err
    }
    console.log('database is suceesfully connected');
});

module.exports=db;
