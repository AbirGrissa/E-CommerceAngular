const express = require('express');
const userController = require('../controllers/user.controller');
const asyncHandler = require('express-async-handler');
const router = express.Router();
authController= require('../controllers/auth.controller');
const passport= require ('../middleware/passport');
const bcrypt= require('bcrypt');

//localhost:4050/api/auth/register
router.post('/register', asyncHandler(insert),login);
//route for login : localhost:4050/api/auth/login
router.post('/login',asyncHandler(getUserByEmailIdAndPassword),login);//passport.authenticate("local",{session:false})
router.get('/findme',passport.authenticate("jwt",{session:false}),login);

async function insert(req,res,next)
{
    const user =req.body;
    console.log('registering user');
    req.user=await userController.insert(user);
    //res.json(savedUser);
    next();
}

async function getUserByEmailIdAndPassword(req,res,next){
    const user = req.body;
    console.log(`searching user for`,user);
    const savedUser=await userController.getUserByEmailIdAndPassword(user.emailFormControl,user.password);
    req.user=savedUser;
    next();
}
function login (req,res){
    const user=req.user;
    const token= authController.generateToken(user);
    res.json(
        {
            user,
            token
        }
    );
}

router.put('/update',(req,res,next)=>{
    email=req.body.emailFormControl;
    User.findOne({email},(err,user)=>{
        if (err)
           { res.status(500).json({errmsg:err});}
        console.log('user founded',user);
        user.firstname= req.body.firstname,
        user.beginDate= req.body.lastname,
        user.hashedPwd =bcrypt.hashSync(req.body.password,10);
        user.save((err,user)=>{
            if (err){
            res.status(500).json({errmsg:err});}
            res.json(user);
            console.log('user updated succefully ',user);

        })
    });
});

router.get('/search',(req,res,next)=>{
    users= User.find({},(err,users)=>{
       if (err)
          { res.status(500).json({errmsg:err});}
       res.send(users);
   });
   
});

router.delete('/delete/:id',(req,res,next)=>{
    email= req.params.emailFormControl;
    Promotion.findOne({email},(err,removedUser)=>{
        console.log('user founded',removedUser);
        if (err){res.status(500).json({errmsg:err});}
        removedUser.delete((err,removedUser)=>{
            if (err){res.status(500).json({errmsg:err});}
            console.log('user deleted',removedUser);
            res.json(removedUser);
        });
        
    })
});

module.exports=router;