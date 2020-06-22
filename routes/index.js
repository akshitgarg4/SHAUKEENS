const express=require('express');
const router=express.Router();
const passport=require('passport');
const homecontroller=require('../controller/home');


router.get('/',homecontroller.home);
router.post('/sign-up',homecontroller.create);
router.post('/login',passport.authenticate('local',{failureRedirect:'/'}),homecontroller.login);






module.exports=router;