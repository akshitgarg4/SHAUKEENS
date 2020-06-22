const mongoose = require('mongoose');
const hindiSchema=new mongoose.Schema(
    {
        section : {type:String,required:true},
        origin : {type:String,required:true},
        name : {type:String,required:true},
        song : {type:String,required:true},
        src : {type:String,required:true}

    }
);
const hindi=mongoose.model('hindi',hindiSchema);
module.exports=hindi;