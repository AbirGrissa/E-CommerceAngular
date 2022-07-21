const express = require('express');
const userController = require('../controllers/user.controller');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const router = express.Router();

//localhost:4050/api/auth/register
router.post('/register', asyncHandler(insert));
//route for login : localhost:4050/api/auth/login
router.post('/login', asyncHandler(getUserByEmailIdAndPassword));

async function insert(req,res,next)
{
    const user =req.body;
    console.log('registering user');
    const savedUser=await userController.insert(user);
    res.json(savedUser);
}

async function getUserByEmailIdAndPassword(req,res,next){
    const user = req.body;
    console.log(`searching user for`,user);
    const savedUser=await userController.getUserByEmailIdAndPassword(user.emailFormControl,user.password);
    res.json(savedUser);

}

module.exports=router;