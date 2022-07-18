/*const express= require('express');
const path =require('path');
const port= process.env.port || 4260 /*other port ;
const app=express();

const destinationDir=path.join(__dirname ,'../dist/first-angular-app');

//hosting from dist folder
app.use(express.static(destinationDir));
console.log(`express hosting from ${destinationDir}`);

//serving index.html
app.get('*',(req,res)=>{
    res.sendFile(path.join(destinationDir,'index.html'));
});
console.log(`serving index.html`);

//initialize app and listen to port 
app.listen(port,()=>console.log(`server is running from port ${port}`));*/
const app = require ('./config/express');
const config = require('./config/config');

//initialize mongo
require('./config/mongoose');

//listen to the port 
app.listen (config.port,()=>
{
    console.log(`started on port ${config.port} (${config.env})`);
});