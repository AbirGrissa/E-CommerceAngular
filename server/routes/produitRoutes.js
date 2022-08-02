const express = require('express');
const router = express.Router();
const Product = require('../models/product.model');
const multer=require('multer');

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./uploads/');
    },
    filename:function(req,file,cb){
        const mimeType=file.mimetype.split('/');
        const fileType=mimeType[1];
        cb(null,file.originalname);
    }
});
const upload =multer({storage:storage,limits:{
    fileSize: 1024*1024*5
}});

router.post('/create',upload.single('productImage'),(req,res,next)=>{
    const path= 'http://localhost:4050/uploads/'+req.file;//path dynamique
    console.log(path);
    const savedProduct = new Product({
        productCode:req.body.productCode,
        productname: req.body.productname,
        prix: req.body.prix,
        description : req.body.description,
        img:path
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
    Product.findOne({code},(err,product)=>{
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