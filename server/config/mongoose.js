const mongoose =require('mongoose');
const util = require('util');
const debug = require('debug')('express-mongoose-es6-rest-api:index');
const config = require ('../config/config');

const mongoUri = config.mongo.uri;

mongoose.connect(mongoUri);/*,{keepAlive:1, useNewUrlParse:true}*/

const db = mongoose.connection;

db.once('open', ()=>{
    console.log(`connected to the db :${mongoUri}`);
});
db.on('error',()=>{
    throw new Error(`unable to connect to the db ${mongoUri}`);
});
if(config.mongo.isDebug){
    mongoose.set('debug',(collectionName,method,query,doc)=>{
        debug(`${collectionName}.${method}`,util.inspect(query,false,20),doc);
    });
}
require('../models/user.model');

module.exports=db;