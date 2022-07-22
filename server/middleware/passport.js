const passport =  require('passport');
const LocalStrategy = require('passport-local');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJWT= require('passport-jwt').ExtractJWT;


const config=require('../config/config');
const userController = require ('../controllers/user.controller');

const localLogin = new LocalStrategy(
    {
        usernameField:'email',
    },
    async (email,passwprd,done)=> {
        const user=userController.getUserByEmailIdAndPassword(email,password);
        return user? done(null,user):done(null,false,{error:'your login details are not valid please try again'})

    }
);

const jwtLogin= new JwtStrategy(
    {
        jwtFromRequest:ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey:config.jwtSecret
    },
    async(payload,done)=>{
        const user = await user.userController.getUseById(payload._id);
        return user? done(null,user):done(null,false,{error:'your login details are not valid please try again'})

    }
)

module.exports= passport.use(localLogin).use(jwtLogin);
