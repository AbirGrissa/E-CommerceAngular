const express = require('express');
const userController = require('../controllers/user.controller');
const asyncHandler = require('express-async-handler');
const router = express.Router();
authController= require('../controllers/auth.controller');

//localhost:4050/api/auth/register
router.post('/register', asyncHandler(insert),login);
//route for login : localhost:4050/api/auth/login
router.post('/login', asyncHandler(getUserByEmailIdAndPassword),login);

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

module.exports=router;