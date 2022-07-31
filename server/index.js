
const app = require ('./config/express');
const config = require('./config/config');

//initialize mongo
require('./config/mongoose');


//listen to the port 
//app.listens
app.listen(config.port,()=>
{
    console.log(`started on port ${config.port} (${config.env})`);
});