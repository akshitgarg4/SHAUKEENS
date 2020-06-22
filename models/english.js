const mongoose = require('mongoose');
const englishSchema=new mongoose.Schema(
    {
        section : {type:String,required:true},
        origin : {type:String,required:true},
        name : {type:String,required:true},
        song : {type:String,required:true},
        src : {type:String,required:true}

    }
);
const english=mongoose.model('english',englishSchema);
module.exports=english;