const User = require('../models/user.model');
const bcrypt= require('bcrypt');

async function insert(user){
    
    user.hashedPwd = bcrypt.hashSync(user.password,10);
    delete user.password;

    //save user in db
    console.log(`saving user to db`,user);
    const newu=new User(user)
    return await newu.save();
}
async function getUserByEmailIdAndPassword(emailFormControl,password)
{    let user = await User.findOne({emailFormControl});
    if (isUserValid(user,password, user.hashedPwd)){
        user = user.toObject();
        delete user.hashedPwd;
        return user
    }else
    {return null;}
}

function isUserValid(user,password,hashedPwd){
    return user && bcrypt.compareSync(password,hashedPwd);
}

module.exports = {
    insert,
    getUserByEmailIdAndPassword
    
};