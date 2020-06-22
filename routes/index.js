const express=require('express');
const router=express.Router();
const passport=require('passport');
const homecontroller=require('../controller/home');


router.get('/',homecontroller.home);
router.post('/sign-up',homecontroller.create);
router.post('/login',passport.authenticate('local',{failureRedirect:'/'}),homecontroller.login);
router.get('/sign-out',homecontroller.signout);
router.get('/addfav',homecontroller.addfav);
router.get('/remfav',homecontroller.remfav);
router.get('/addplist',homecontroller.addplist);
router.get('/remplist',homecontroller.remplist);


module.exports=router;