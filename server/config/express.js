const express = require('express'); 
const path =require ('path');
const config = require('./config');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require ('cors');
const helmet = require ('helmet');
const routes = require ('../routes');
const passport = require('../middleware/passport');
//const appRoutes= require('../routes/appRoutes')

//get the app
const app=express();

//logger
if (config.env === 'development'){
    app.use(logger('dev'));
}

//get dist folder
const distDir=path.join(__dirname ,'../../dist/first-angular-app');

//use dist folder as hosting folder by express
app.use(express.static(distDir));


//parsing from api
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));//use node js

//secure app http part
app.use(helmet());

//app.use('/uploads',express.static('uploads'));

//allow cors
app.use(cors());

//authenticate
app.use(passport.initialize());


//api router localhost:4050/api
app.use('/api/',routes);

//serve the index.html file
app.get('*',(req,res)=>res.sendFile(path.join(distDir,
    'index.html')));

//set view engine
//app.set("view engine","ejs");
module.exports = app;