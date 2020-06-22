const user=require('../models/user');


var songslist=[
    {section : "english",origin : "english-section",name:"SONG 1",song:"Alan walker faded",src:"./songs/english/Alan walker faded.mp3",dest:"none"},
    {section : "english",origin : "english-section",name:"SONG 2",song:"Blank space",src:"./songs/english/Blank space.mp3",dest:"none"},
    {section : "english",origin : "english-section",name:"SONG 3",song:"Joker",src:"./songs/english/Joker.mp3",dest:"none"},
    {section : "english",origin : "english-section",name:"SONG 4",song:"Imagine dragons believer",src:"./songs/english/Imagine dragons believer.mp3",dest:"none"},
    {section : "english",origin : "english-section",name:"SONG 5",song:"Alan walker on my way",src:"./songs/english/Alan walker on my way.mp3",dest:"none"},
    {section : "english",origin : "english-section",name:"SONG 6",song:"See you again",src:"./songs/english/See you again.mp3",dest:"none"},
    {section : "english",origin : "english-section",name:"SONG 7",song:"You belong with me",src:"./songs/english/You belong with me.mp3",dest:"none"},
    {section : "hindi",origin : "hindi-section",name:"SONG 1",song:"Bekhayali",src:"./songs/hindi/Bekhayali.mp3",dest:"none"},
    {section : "hindi",origin : "hindi-section",name:"SONG 2",song:"Chandigarh mein",src:"./songs/hindi/Chandigarh mein.mp3",dest:"none"},
    {section : "hindi",origin : "hindi-section",name:"SONG 3",song:"Dekhte dekhte",src:"./songs/hindi/Dekhte dekhte.mp3",dest:"none"},
    {section : "hindi",origin : "hindi-section",name:"SONG 4",song:"Dilbara",src:"./songs/hindi/Dilbara.mp3",dest:"none"},
    {section : "hindi",origin : "hindi-section",name:"SONG 5",song:"Gold tamba",src:"./songs/hindi/Gold tamba.mp3",dest:"none"},
    {section : "hindi",origin : "hindi-section",name:"SONG 6",song:"Ikk kudi",src:"./songs/hindi/Ikk kudi.mp3",dest:"none"},
    {section : "hindi",origin : "hindi-section",name:"SONG 7",song:"koka",src:"./songs/hindi/koka.mp3",dest:"none"},
    {section : "hindi",origin : "hindi-section",name:"SONG 8",song:"Nikle currant",src:"./songs/hindi/Nikle currant.mp3",dest:"none"},
    {section : "hindi",origin : "hindi-section",name:"SONG 9",song:"Sachiyan mohabbatan",src:"./songs/hindi/Sachiyan mohabbatan.mp3",dest:"none"},
    {section : "hindi",origin : "hindi-section",name:"SONG 10",song:"Sauda khara khara",src:"./songs/hindi/Sauda khara khara.mp3",dest:"none"},
    {section : "hindi",origin : "hindi-section",name:"SONG 11",song:"Speaker phat jaaye",src:"./songs/hindi/Speaker phat jaaye.mp3",dest:"none"},
    {section : "hindi",origin : "hindi-section",name:"SONG 12",song:"Sunn raha hai",src:"./songs/hindi/Sunn raha hai.mp3",dest:"none"},
    {section : "hindi",origin : "hindi-section",name:"SONG 13",song:"Tera ban jaunga",src:"./songs/hindi/Tera ban jaunga.mp3",dest:"none"},
    {section : "hindi",origin : "hindi-section",name:"SONG 14",song:"The jawaani song",src:"./songs/hindi/The jawaani song.mp3",dest:"none"},
    {section : "hindi",origin : "hindi-section",name:"SONG 15",song:"Tu hi yaar mera",src:"./songs/hindi/Tu hi yaar mera.mp3",dest:"none"},

]


module.exports.home=function(req,res)
{
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
            user.create({
                name:req.body.name,
                email:req.body.email,
                password:req.body.password,
                songs:songslist
            },function(err,ans)
            {
                
                if(err)
                {
                    console.log("error in creating db",err);
                    return res.redirect('back');
                }
                else{
                    console.log("creating db");
                    return res.redirect('back');
                }
               

            })
        }
        else{
            return res.redirect('back');
        }
        
    })
      
}
module.exports.login= async function(req,res)
{
   let logger=await user.find({'email':req.body.email});
   return res.render('main',{email:req.body.email,songs:logger[0].songs});
    
    
}


module.exports.signout=function(req,res)
{
    req.logout();
    return res.redirect('/');
}


//ajax calls to handle the db 
module.exports.addfav=async function(req,res)
{
   let logger=await user.find({'email':req.user.email});
    for(son of logger[0].songs)
   {
       if(son.origin==req.query.ori && son.name==req.query.nam)
       {
           son.dest = 'fav';
           logger[0].save();
       }
   }
    return res.redirect('back');
}

module.exports.remfav=async function(req,res)
{
   let logger=await user.find({'email':req.user.email});
    for(son of logger[0].songs)
   {
       if(son.origin==req.query.ori && son.name==req.query.nam)
       {
           son.dest = 'none';
           logger[0].save();
       }
   }
    return res.redirect('back');
}

module.exports.addplist=async function(req,res)
{
   let logger=await user.find({'email':req.user.email});
    for(son of logger[0].songs)
   {
       if(son.origin==req.query.ori && son.name==req.query.nam)
       {
           son.dest = 'plist';
           logger[0].save();
       }
   }
    return res.redirect('back');
}

module.exports.remplist=async function(req,res)
{
   let logger=await user.find({'email':req.user.email});
    for(son of logger[0].songs)
   {
       if(son.origin==req.query.ori && son.name==req.query.nam)
       {
           son.dest = 'none';
           logger[0].save();
       }
   }
    return res.redirect('back');
}