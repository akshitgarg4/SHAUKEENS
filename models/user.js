const mongoose = require('mongoose');
const userSchema=new mongoose.Schema(
    {
        name : {type:String,required:true},
        email : {type:String,required:true,unique:true},
        password : {type:String,required:true},
        songs: [{
            section : {type:String},
        origin : {type:String},
        name : {type:String},
        song : {type:String},
        src : {type:String},
        dest : {type:String}

        }]

    },{timestamps:true}
);
const user=mongoose.model('user',userSchema);
module.exports=user;