const express = require('express');
const authRoutes= require('./auth.route');
const appRouts=require('./appRoutes');

const router = express.Router();

//localhost:4050/api/auth
router.use('/auth',authRoutes);


/*router.post('/ajout',(req,res,next)=>{
    res.status(200).json({msg:'post request is working'})
});
router.get('/find',(req,res,next)=>{
    res.status(200).json({msg:'get request is working'})
});
router.put('/update',(req,res,next)=>{
    res.status(200).json({msg:'put request is working'})
});
router.delete('/delete/:id',(req,res,next)=>{
    res.status(200).json({msg:'delete request is working'})
});*/
module.exports=router;