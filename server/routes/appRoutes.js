const express = require('express');
const router = express.Router();
const Promotion = require('../models/promo.model');


router.post('/create',(req,res,next)=>{
    const savedPromotion = new Promotion({
        pourcentage: req.body.pourcentage,
        beginDate: req.body.beginDate,
        endDate : req.body.endDate,
        codePromo:req.body.codePromo,
    });
    savedPromotion.save((err,promotion)=>{
        if (err){
            res.json({errmsg:err});}
        res.json(promotion); 
        console.log('promotion added succefully ',promotion);
    });
    
   
    
});

router.get('/search',(req,res,next)=>{
     promotions= Promotion.find({},(err,promos)=>{
        if (err)
           { res.status(500).json({errmsg:err});}
        res.send(promos);
    });
    
});

router.put('/update',(req,res,next)=>{
    code=req.body.codePromo;
    Promotion.findOne({code},(err,promotion)=>{
        if (err)
           { res.status(500).json({errmsg:err});}
        console.log('promotion founded',promotion);
        promotion.pourcentage= req.body.pourcentage,
        promotion.beginDate= req.body.beginDate,
        promotion.endDate = req.body.endDate,
        promotion.codePromo=req.body.codePromo,
        promotion.save((err,promotion)=>{
            if (err){
            res.status(500).json({errmsg:err});}
            res.json(promotion);
            console.log('promotion updated succefully ',promotion);

        })
    });
    //res.status(200).json({msg:'put request is working'});
});

router.delete('/delete/:id',(req,res,next)=>{
    code= req.params.codePromo;
    Promotion.findOne({code},(err,removedPromotion)=>{
        console.log('promotion founded',removedPromotion);
        if (err){res.status(500).json({errmsg:err});}
        removedPromotion.delete((err,removedPromotion)=>{
            if (err){res.status(500).json({errmsg:err});}
            console.log('promotion deleted',removedPromotion);
            res.json(removedPromotion);
        });
        
    })
});

module.exports=router;