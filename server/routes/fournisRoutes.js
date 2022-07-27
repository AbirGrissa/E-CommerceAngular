const express = require('express');
const router = express.Router();
const Fournis = require('../models/fournis.model');



router.post('/create',(req,res,next)=>{
    const savedFournis = new Fournis({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        emailFormControl : req.body.emailFormControl,
    });
    savedFournis.save((err,fournis)=>{
        if (err){
            res.json({errmsg:err});}
        res.json(fournis); 
        console.log('promotion added succefully ',fournis);
    });
    
   
    
});

router.put('/update',(req,res,next)=>{
    email=req.body.emailFormControl;
    console.log('verifier email',email);
    Fournis.findOne({email},(err,fournis)=>{
        if (err)
           { res.status(500).json({errmsg:err});}
        console.log('fournis founded',fournis);
        fournis.firstname= req.body.firstname,
        fournis.lastname= req.body.lastname,
       
        fournis.save((err,fournis)=>{
            if (err){
            res.status(500).json({errmsg:err});}
            res.json(fournis);
            console.log('fournis updated succefully ',fournis);

        })
    });
});

router.get('/search',(req,res,next)=>{
    fournis= Fournis.find({},(err,fournis)=>{
       if (err)
          { res.status(500).json({errmsg:err});}
       res.send(fournis);
   });
   
});

router.delete('/delete/:id',(req,res,next)=>{
    email= req.params.emailFormControl;
    Fournis.findOne({email},(err,removedFournis)=>{
        console.log('fournisseur founded',removedFournis);
        if (err){res.status(500).json({errmsg:err});}
        removedFournis.delete((err,removedFournis)=>{
            if (err){res.status(500).json({errmsg:err});}
            console.log('fournisseur deleted',removedFournis);
            res.json(removedFournis);
        });
        
    })
});

module.exports=router;