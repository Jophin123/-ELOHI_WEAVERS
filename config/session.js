const mongoDbStore=require('connect-mongodb-session');
const expressSession=require('express-session')
function CreateSessionStore(){
    const mongoDBStore=mongoDbStore(expressSession);
  const store=  new mongoDBStore({
        uri:'mongodb://localhost:27017',
        databaseName:'online-store',
        collection:'session'
    });
    return store;
}
function createSessionConfig(){
    return {
        secret:'super-secret',
        resave:false,
        saveUninitialized:false,
        store:CreateSessionStore(),
        cookie:{
            maxAge:2*24*60*1000
        }
    };
}
module.exports=createSessionConfig;