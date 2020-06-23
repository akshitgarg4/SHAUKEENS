const passport=require('passport');
const LocalStrategy=require('passport-local').Strategy;
const user=require('../models/user');

passport.use(new LocalStrategy ({
    usernameField:'email',
    passReqToCallback:true
},function(req,eml,pswd,done)
{
    user.findOne({email:eml},function(err,user){
        if(err)
        {
            console.log("Error in finding User");
            req.flash('error','Email or password is incorrect');
            return done(err);
        }
        if(!user || user.password!=pswd)
        {
            console.log("Invalid Username/Password");
            req.flash('error','Email or password is incorrect');

            return done(null,false);

        }
        if(user)
        {
            req.flash('success','Successfully Signed In');
            return done(null,user);
        }

    })
}));

//serializeUser
passport.serializeUser(function(user,done){
    done(null,user.id);
})
//deserializeUser
passport.deserializeUser(function(id,done)
{
    user.findById(id,function(err,user)
    {
        if(err)
        {
            console.log("Error in deserializing");
            return done(err);
        }
        else{
            return done(null,user);
        }
    });
});

//check if user is authenticated or not
passport.checkAuthentication=function(req,res,next)
{
    if(req.isAuthenticated())
    {
        return next();
    }
    
    return res.redirect('/');
    
}

//to send user data to the locals for views file to access it
passport.setAuthenticatedUser=function(req,res,next)
{
    if(req.isAuthenticated())
    {
        res.locals.user=req.user;
    }
    next();
}
module.exports=passport;