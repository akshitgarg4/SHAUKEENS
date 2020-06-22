const express=require('express');
const router=express.Router();
const homecontroller=require('../controller/home');


router.get('/',homecontroller.home);
router.post('/sign-up',homecontroller.create);
router.get('/main',homecontroller.main);





module.exports=router;