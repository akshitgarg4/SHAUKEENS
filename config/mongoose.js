const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shaukeens');
const db=mongoose.connection;
db.on('error',console.error.bind(console,'error in db'));
db.once('open',function(){
    console.log("Successful connection");
})

module.exports=db;