var express = require('express');
var router=express.Router();
var mongodb= require('mongodb');

router.post('/std-reg', function(req,res){
    // res.send("its working");
   var name= req.body.name;
   var rno= req.body.rno;
   var email= req.body.email;
   var phno= req.body.phno;

   var stdObj={
       name:name,
       rno:rno,
       email:email,
       phno:phno
   }
   var mongoclient=mongodb.MongoClient;
   var url="mongodb://localhost:27017";
   mongoclient.connect(url, function (err, cluster){
       if(err){
           res.send("db is not connection");
       }
       var db= cluster.db('school');
       var collection= db.collection('student');
       collection.insertOne(stdObj, function(e, s){
           if(e){
               res.send(err);
           }else{
               res.send(s);
           }
       })
   })

});

module.exports=router;

