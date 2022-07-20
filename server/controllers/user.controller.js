const User = require('../models/user.model');
//const bcrypt= require('bcrypt');

async function insert(user){
    
    //user.hashedPassword = bcrypt.hashSync(user.password,10);
    //delete user.password;

    //save user in db
    console.log(`saving user to db`,user);
    const newu=new User(user)
    /*newu.firstname=user.firstname;
    newu.lastname=user.lastname;
    newu.email=user.email;*/
    return await newu.save();
}

module.exports = {
    insert
};