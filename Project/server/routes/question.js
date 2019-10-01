var express= require('express');
var router = express.Router();
var mongodb= require('mongodb');

router.post('/que-data', function (req, res){
    // res.send("working it..");
    var que= req.body.que;
    var opt1 = req.body.opt1;
    var opt2 = req.body.opt2;
    var opt3 = req.body.opt3;
    var opt4 = req.body.opt4;

   var queObj={
        que:que,
        opt1:opt1,
        opt2:opt2,
        opt3:opt3,
        opt4:opt4
    }

 var mongoClient= mongodb.MongoClient;
 var url = "mongodb://localhost:27017";
 mongoClient.connect(url, function(err, cluster)
 {
     if(err){
         res.send("db connection is failed..");
     }
    var db=cluster.db('question');
    var collection = db.collection('quedata');
    collection.insertOne(queObj, function (err,success)
    {
        if(err){
            res.send(err);
        }
        else{
            res.send(success);
        }
    })
 })
});
module.exports=router;