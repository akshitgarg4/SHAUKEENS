const english=require('../models/english');




module.exports.home=function(req,res)
{
    /*
    english.create({
        section : "english",
        origin : "english-section",
        name:"SONG 1",
        song:"Alan walker faded",
        src:"./songs/english/Alan walker faded.mp3"

    },function(err,entry)
    {
        if(err)
        {
            console.log("error",err);
        }
        else{
            console.log("written successsss");
        }
    })
    */
    return res.render('music');
}