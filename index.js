const express=require('express');
const port = 8000;
const db=require('./config/mongoose');
const app=express();
const path=require('path');


app.use(express.urlencoded());
app.use(express.static('assets'));
app.set('view engine','ejs');
app.set('views','./views');

app.use('/',require('./routes/index'));

app.listen(port,function(err)
{
    if(err)
    {
        console.log("Error in running server");
    }
})
