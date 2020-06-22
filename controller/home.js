const english=require('../models/english');
const user=require('../models/user');




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

module.exports.create=function(req,res)
{
    user.findOne({email:req.body.email},function(err,person)
    {
        if(err)
        {
            console.log("Error in signup email already exists");
            return res.redirect('back');
        }
        if(!person)
        {
            user.create(req.body,function(err,ans)
            {
                
                if(err)
                {
                    console.log("error in creating db");
                    return res.redirect('back');
                }
                else{
                    console.log("creating db");
                    return res.redirect('/main');
                }
               

            })
        }
        else{
            return res.redirect('back');
        }
        
    })
      
}

module.exports.main=function(req,res)
{
    return res.render('music');
}