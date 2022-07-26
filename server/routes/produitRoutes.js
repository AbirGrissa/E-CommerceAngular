const express = require('express');
const router = express.Router();
const Product = require('../models/product.model');



router.post('/create',(req,res,next)=>{
    const savedProduct = new Promotion({
        productCode:req.body.productCode,
        productname: req.body.productname,
        prix: req.body.prix,
        description : req.body.description,
    });
    savedProduct.save((err,product)=>{
        if (err){
            res.json({errmsg:err});}
        res.json(product); 
        console.log('product added succefully ',product);
    });
    
   
    
});

router.put('/update',(req,res,next)=>{
    code=req.body.productCode;
    Product.findOne({email},(err,product)=>{
        if (err)
           { res.status(500).json({errmsg:err});}
        console.log('user founded',product);
        product.productname= req.body.productname,
        product.prix= req.body.prix,
        product.description = req.body.description,
       
        product.save((err,product)=>{
            if (err){
            res.status(500).json({errmsg:err});}
            res.json(product);
            console.log('product updated succefully ',product);

        })
    });
});

router.get('/search',(req,res,next)=>{
    product= Product.find({},(err,product)=>{
       if (err)
          { res.status(500).json({errmsg:err});}
       res.send(product);
   });
   
});

router.delete('/delete/:id',(req,res,next)=>{
    code= req.params.productCode;
    Product.findOne({code},(err,removedProduct)=>{
        console.log('product founded',removedProduct);
        if (err){res.status(500).json({errmsg:err});}
        removedProduct.delete((err,removedProduct)=>{
            if (err){res.status(500).json({errmsg:err});}
            console.log('product deleted',removedProduct);
            res.json(removedProduct);
        });
        
    })
});

module.exports=router;