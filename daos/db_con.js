const mongodb = require('mongodb');

mongoclient = mongodb.MongoClient;

const url = "mongodb://localhost:27017";
var assert = require('assert');


function connect(url,callback){
    mongoclient.connect(url,callback);
}
var dbcache = {};
connect(url,function(err,db){
    if(!err){
        console.log("Connection Sucessfull");
        var dta = db.db("Testdb")

        dta.collection("employee").
    }
    else{
        dbcache = {};
    }
});

console.log(dbcache);

module.exports.connect = connect;


module.exports.getDb = function(){
    return dbcache.db;
}

