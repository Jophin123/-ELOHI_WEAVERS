const mongodb=require('mongodb');
const mongoClient = mongodb.MongoClient;
let database
async function connectToDatabase(){
   const client=await mongoClient.connect('mongodb://localhost:27017');
   database=client.db('online-shop');
}

function getDb(){
    if(!database){
        throw new Error('connect first');
    }
    return database;
}


module.exports ={
    connectToDatabase:connectToDatabase,
    getDb:getDb
}