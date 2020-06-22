const express=require('express');
const port = 8000;
const db=require('./config/mongoose');
const app=express();
const cookieParser=require('cookie-parser');
const path=require('path');
const session=require('express-session');
const passport=require('passport');
const passportLocal=require('./config/passport');
const MongoStore = require('connect-mongo')(session);


app.use(express.urlencoded());
app.use(cookieParser());
app.use(express.static('assets'));
app.set('view engine','ejs');
app.set('views','./views');
app.use(session({
    name:'SHAUKEENS',
    secret:'blahesomething',
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(1000*60*100)
    },
    store: new MongoStore ({
        mongooseConnection:db,
        autoremove:'disabled'
    },function(err)
    {
        if(err)
        {
        console.log("error")

        }
        else{
            console.log("ok");
        }
    })
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

app.use('/',require('./routes/index'));

app.listen(port,function(err)
{
    if(err)
    {
        console.log("Error in running server");
    }
})
