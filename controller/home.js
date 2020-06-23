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
    {section : "relaxed",origin : "relaxed-section",name:"SONG 1",song:"Dheeme dheeme",src:"./songs/relaxed/Dheeme dheeme.mp3",dest:"none"},
    {section : "relaxed",origin : "relaxed-section",name:"SONG 2",song:"Nikle currant",src:"./songs/relaxed/Nikle currant.mp3",dest:"none"},
    {section : "relaxed",origin : "relaxed-section",name:"SONG 3",song:"Tu hi yaar mera",src:"./songs/relaxed/Tu hi yaar mera.mp3",dest:"none"},
    {section : "relaxed",origin : "relaxed-section",name:"SONG 4",song:"The hook up song",src:"./songs/relaxed/The hook up song.mp3",dest:"none"},
    {section : "meditation",origin : "meditation-section",name:"SONG 1",song:"Dheeme dheeme",src:"./songs/meditation/Dheeme dheeme.mp3",dest:"none"},
    {section : "meditation",origin : "meditation-section",name:"SONG 2",song:"Nikle currant",src:"./songs/meditation/Nikle currant.mp3",dest:"none"},
    {section : "meditation",origin : "meditation-section",name:"SONG 3",song:"Tu hi yaar mera",src:"./songs/meditation/Tu hi yaar mera.mp3",dest:"none"},
    {section : "meditation",origin : "meditation-section",name:"SONG 4",song:"The hook up song",src:"./songs/meditation/The hook up song.mp3",dest:"none"},
    {section : "sad",origin : "sad-section",name:"SONG 1",song:"Dheeme dheeme",src:"./songs/sad/Dheeme dheeme.mp3",dest:"none"},
    {section : "sad",origin : "sad-section",name:"SONG 2",song:"Nikle currant",src:"./songs/sad/Nikle currant.mp3",dest:"none"},
    {section : "sad",origin : "sad-section",name:"SONG 3",song:"Tu hi yaar mera",src:"./songs/sad/Tu hi yaar mera.mp3",dest:"none"},
    {section : "sad",origin : "sad-section",name:"SONG 4",song:"The hook up song",src:"./songs/sad/The hook up song.mp3",dest:"none"},
    {section : "party",origin : "party-section",name:"SONG 1",song:"Abhi to party shuru hui hai",src:"./songs/party/Abhi to party shuru hui hai.mp3",dest:"none"},
    {section : "party",origin : "party-section",name:"SONG 2",song:"Char botal",src:"./songs/party/Char botal.mp3",dest:"none"},
    {section : "party",origin : "party-section",name:"SONG 3",song:"Saturday saturday",src:"./songs/party/Saturday saturday.mp3",dest:"none"},
    {section : "party",origin : "party-section",name:"SONG 4",song:"Dheeme dheeme",src:"./songs/party/Dheeme dheeme.mp3",dest:"none"},
    {section : "devotion",origin : "devotion-section",name:"SONG 1",song:"Ek onkaar",src:"./songs/devotion/Ek onkaar.mp3",dest:"none"},
    {section : "devotion",origin : "devotion-section",name:"SONG 2",song:"Teri mitti",src:"./songs/devotion/Teri mitti.mp3",dest:"none"},
    {section : "romantic",origin : "romantic-section",name:"SONG 1",song:"Ambarsariya",src:"./songs/romantic/Ambarsariya.mp3",dest:"none"},
    {section : "romantic",origin : "romantic-section",name:"SONG 2",song:"Dilliwaali girlfriend",src:"./songs/romantic/Dilliwaali girlfriend.mp3",dest:"none"},
    {section : "romantic",origin : "romantic-section",name:"SONG 3",song:"Jeene laga hoon",src:"./songs/romantic/Jeene laga hoon.mp3",dest:"none"},
    {section : "romantic",origin : "romantic-section",name:"SONG 4",song:"Lat lag gayi",src:"./songs/romantic/Lat lag gayi.mp3",dest:"none"},
    {section : "happy",origin : "happy-section",name:"SONG 1",song:"Hui malang",src:"./songs/happy/Hui malang.mp3",dest:"none"},
    {section : "happy",origin : "happy-section",name:"SONG 2",song:"Muqabla",src:"./songs/happy/Muqabla.mp3",dest:"none"},
    {section : "dj",origin : "dj-section",name:"SONG 1",song:"Its time to disco",src:"./songs/dj/Its time to disco.mp3",dest:"none"},
    {section : "dj",origin : "dj-section",name:"SONG 2",song:"Make some noise",src:"./songs/dj/Make some noise.mp3",dest:"none"},
    {section : "dj",origin : "dj-section",name:"SONG 3",song:"Pappu cant dance",src:"./songs/dj/Pappu cant dance.mp3",dest:"none"},
    {section : "workout",origin : "workout-section",name:"SONG 1",song:"Dheeme dheeme",src:"./songs/workout/Dheeme dheeme.mp3",dest:"none"},
    {section : "workout",origin : "workout-section",name:"SONG 2",song:"Nikle currant",src:"./songs/workout/Nikle currant.mp3",dest:"none"},
    {section : "workout",origin : "workout-section",name:"SONG 3",song:"Tu hi yaar mera",src:"./songs/workout/Tu hi yaar mera.mp3",dest:"none"},
    {section : "workout",origin : "workout-section",name:"SONG 4",song:"The hook up song",src:"./songs/workout/The hook up song.mp3",dest:"none"},
    {section : "diljit",origin : "diljit-section",name:"SONG 1",song:"Dil todeya",src:"./songs/diljit/Dil todeya.mp3",dest:"none"},
    {section : "diljit",origin : "diljit-section",name:"SONG 2",song:"Glorious gallan",src:"./songs/diljit/Glorious gallan.mp3",dest:"none"},
    {section : "diljit",origin : "diljit-section",name:"SONG 3",song:"Hawa vich",src:"./songs/diljit/Hawa vich.mp3",dest:"none"},
    {section : "diljit",origin : "diljit-section",name:"SONG 4",song:"Ikk kudi reprised version",src:"./songs/diljit/Ikk kudi reprised version.mp3",dest:"none"},
    {section : "diljit",origin : "diljit-section",name:"SONG 5",song:"Main deewana tera",src:"./songs/diljit/Main deewana tera.mp3",dest:"none"},
    {section : "neha",origin : "neha-section",name:"SONG 1",song:"Dheeme dheeme",src:"./songs/neha/Dheeme dheeme.mp3",dest:"none"},
    {section : "neha",origin : "neha-section",name:"SONG 2",song:"Nikle currant",src:"./songs/neha/Nikle currant.mp3",dest:"none"},
    {section : "neha",origin : "neha-section",name:"SONG 3",song:"The hook up song",src:"./songs/neha/The hook up song.mp3",dest:"none"},
    {section : "neha",origin : "neha-section",name:"SONG 4",song:"Tu hi yaar mera",src:"./songs/neha/Tu hi yaar mera.mp3",dest:"none"},
    {section : "guru",origin : "guru-section",name:"SONG 1",song:"Lagdi lahore di",src:"./songs/guru/Lagdi lahore di.mp3",dest:"none"},
    {section : "guru",origin : "guru-section",name:"SONG 2",song:"Made in india",src:"./songs/guru/Made in india.mp3",dest:"none"},
    {section : "guru",origin : "guru-section",name:"SONG 3",song:"Nikle currant",src:"./songs/guru/Nikle currant.mp3",dest:"none"},
    {section : "guru",origin : "guru-section",name:"SONG 4",song:"Tere te",src:"./songs/guru/Tere te.mp3",dest:"none"},
    {section : "guru",origin : "guru-section",name:"SONG 5",song:"Yaara teri yaari",src:"./songs/guru/Yaara teri yaari.mp3",dest:"none"},
    {section : "hardy",origin : "hardy-section",name:"SONG 1",song:"Chandigarh mein",src:"./songs/hardy/Chandigarh mein.mp3",dest:"none"},
    {section : "hardy",origin : "hardy-section",name:"SONG 2",song:"Naah gooriye",src:"./songs/hardy/Naah gooriye.mp3",dest:"none"},
    {section : "hardy",origin : "hardy-section",name:"SONG 3",song:"Speaker phat jaaye",src:"./songs/hardy/Speaker phat jaaye.mp3",dest:"none"},
    {section : "mika",origin : "mika-section",name:"SONG 1",song:"440 Volt",src:"./songs/mika/440 Volt.mp3",dest:"none"},
    {section : "mika",origin : "mika-section",name:"SONG 2",song:"Aaj ki party",src:"./songs/mika/Aaj ki party.mp3",dest:"none"},
    {section : "mika",origin : "mika-section",name:"SONG 3",song:"Aankh marey",src:"./songs/mika/Aankh marey.mp3",dest:"none"},
    {section : "mika",origin : "mika-section",name:"SONG 4",song:"Hawa hawa",src:"./songs/mika/Hawa hawa.mp3",dest:"none"},
    {section : "arijit",origin : "arijit-section",name:"SONG 1",song:"Hamdard",src:"./songs/arijit/Hamdard.mp3",dest:"none"},
    {section : "arijit",origin : "arijit-section",name:"SONG 2",song:"Pachtaoge",src:"./songs/arijit/Pachtaoge.mp3",dest:"none"},
    {section : "arijit",origin : "arijit-section",name:"SONG 3",song:"Tu hi yaar mera",src:"./songs/arijit/Tu hi yaar mera.mp3",dest:"none"},
    {section : "arijit",origin : "arijit-section",name:"SONG 4",song:"Tujhe kitna chahne lage",src:"./songs/arijit/Tujhe kitna chahne lage.mp3",dest:"none"},
    {section : "arijit",origin : "arijit-section",name:"SONG 5",song:"Tum hi ho",src:"./songs/arijit/Tum hi ho.mp3",dest:"none"},
    {section : "arijit",origin : "arijit-section",name:"SONG 6",song:"Ve maahi",src:"./songs/arijit/Ve maahi.mp3",dest:"none"}

]


module.exports.home=function(req,res)
{
    if(req.isAuthenticated())
    {
        return res.redirect('/sign-out');
    }
    return res.render('music');
}

module.exports.create=function(req,res)
{
    user.findOne({email:req.body.email},function(err,person)
    {
        if(err)
        {
            console.log("Error in signup email already exists");
            req.flash('error'," Error Please Try Again");
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
                     req.flash('success','Successfully Signed Up ');
                     req.flash('success','Sign In to continue');


                    return res.redirect('back');
                }
               

            })
        }
        else{
            req.flash('error','Email id already exists');
            return res.redirect('back');
        }
        
    })
      
}
module.exports.login= function(req,res)
{
     return res.redirect('/sign-in');
}
module.exports.signin= async function(req,res)
{
    if(req.isAuthenticated())
    {
     let logger=await user.find({'email':req.user.email});
     return res.render('main',
     {
        email:req.user.email,songs:logger[0].songs
    });
    
    }
    return res.redirect('/');
    
    
}


module.exports.signout=function(req,res)
{
    req.logout();
    req.flash('success','Logged Out');

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
   req.flash('success','Song added to favourites');
   
    if(req.xhr)
    {
        return res.status(200).json({
            message:'success'
        })
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
   req.flash('success','Song removed from favourites');
   if(req.xhr)
    {
        return res.status(200).json({
            message:'success'
        })
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
   req.flash('success','Song added to Play list');
   if(req.xhr)
   {
       return res.status(200).json({
           message:'success'
       })
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
   req.flash('success','Song removed from Play list');

   if(req.xhr)
    {
        return res.status(200).json({
            message:'success'
        })
    }
    return res.redirect('back');
}