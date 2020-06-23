
//to add songs from any section to favourite section
var fav=document.querySelectorAll('.heart');
for(var i=0;i<fav.length;i++)
{
	fav[i].addEventListener('click',process);//accepting the clicks of like
}

function process()
	{
      

		
		if(this.getAttribute('data-root')=="true")//checked if it is in favourite section or not
			//if it is not in fav section than we have to add it
		{
            let url='/addfav/?nam='+this.getAttribute('data-name')+'&ori='+this.getAttribute('data-origin');
            //alert(url);
                $.ajax({
                    type:'get',
					url:url,
					success:function(data)
					{
						console.log(data.message);
						//window.setTimeout(function(){location.reload()},3)

					}
                });
            
			this.classList.add("permanent");//to mark heart as red
			this.setAttribute('data-root','false');//to mark that data has been moved from its actual section
			let item=this.getAttribute('data-origin')+this.getAttribute('data-name');//the div with this name will be removed and added in fav sec
			let dummy=document.getElementsByClassName(item)[0];//dummy is basically the div which i am moving

			//if song is being added from playlist to fav than - changes to +
			let check=dummy.children[1];
			check.setAttribute('data-root','true');
			check.children[0].setAttribute('class','fas fa-plus-circle');


			let dummy2=dummy.cloneNode(true);//cloned the moving div
			dummy.remove();//to remove song from its original section after it is marked favorite
			let des=document.getElementsByClassName('favourites-section')[0];//get the destination where div is to be moved
			des.appendChild(dummy2);
			//console.log(dummy2);
			dummy2.children[1].addEventListener('click',process2);//added event listener to new created div
			dummy2.children[2].addEventListener('click',process);//added event listener to new created div
			dummy2.children[3].addEventListener('click',playsound2);
			alert("Song added to Favourites")
			return;
		}
		else
		{
            let url='/remfav/?nam='+this.getAttribute('data-name')+'&ori='+this.getAttribute('data-origin');
            //alert(url);
                $.ajax({
                    type:'get',
                    url:url,
					success:function(data)
					{
						console.log(data.message);
						//window.setTimeout(function(){location.reload()},3)

					}
                });
			this.classList.remove("permanent");//removed red colour of heart
			this.setAttribute('data-root','true');//to mark that song is removed from fav and added to its original section
			let dest=this.getAttribute('data-origin');
			let item=this.getAttribute('data-origin')+this.getAttribute('data-name');
			let dummy=document.getElementsByClassName(item)[0];
			let dummy2=dummy.cloneNode(true);
			dummy.remove();//to remove song from favourite section
			var des=document.getElementsByClassName(dest)[0];
			des.appendChild(dummy2);
			//console.log(dummy2);
			dummy2.children[1].addEventListener('click',process2);//added event listener to new created div
			dummy2.children[2].addEventListener('click',process);//added event listener to new created div
			dummy2.children[3].addEventListener('click',playsound2);
			alert("Song removed from Favourites")
			return;

		}
	}








//to add songs from any section to playlist section
var add=document.querySelectorAll('.add');
for(var i=0;i<add.length;i++)
{
	add[i].addEventListener('click',process2);//accepting the clicks of add
}
function process2()
	{

		if(this.getAttribute('data-root')=="true")//checked if it is in playlist section or not
			//if it is not in playlist section than we have to add it
		{
            let url='/addplist/?nam='+this.getAttribute('data-name')+'&ori='+this.getAttribute('data-origin');
            //alert(url);
                $.ajax({
                    type:'get',
                    url:url,
					success:function(data)
					{
						console.log(data.message);
						//window.setTimeout(function(){location.reload()},3)

					}
                });
			this.children[0].setAttribute('class','fas fa-minus-circle');
			this.setAttribute('data-root','false');//to mark that data has been moved from its actual section
			let item=this.getAttribute('data-origin')+this.getAttribute('data-name');//the div with this name will be removed and added in fav sec
			let dummy=document.getElementsByClassName(item)[0];//dummy is basically the div which i am moving

			//if song is being added from fav to playlist than heart colour should change
			let check=dummy.children[2];
			check.setAttribute('data-root','true');
			check.classList.remove("permanent");

			let dummy2=dummy.cloneNode(true);//cloned the moving div
			dummy.remove();//to remove song from its original section after it is marked favorite
			let des=document.getElementsByClassName('playlist-section')[0];//get the destination where div is to be moved
			des.appendChild(dummy2);
			//console.log(dummy2);
			dummy2.children[1].addEventListener('click',process2);//added event listener to new created div
			dummy2.children[2].addEventListener('click',process);//added event listener to new created div
			dummy2.children[3].addEventListener('click',playsound2);//added event listener to new created div
			alert("Song added to Playlist")
			return;
		}
		else
		{
            let url='/remplist/?nam='+this.getAttribute('data-name')+'&ori='+this.getAttribute('data-origin');
            //alert(url);
                $.ajax({
                    type:'get',
                    url:url,
					success:function(data)
					{
						console.log(data.message);
						//window.setTimeout(function(){location.reload()},3)

					}
                });
			this.children[0].setAttribute('class','fas fa-plus-circle');
			this.setAttribute('data-root','true');//to mark that song is removed from fav and added to its original section
			let dest=this.getAttribute('data-origin');
			let item=this.getAttribute('data-origin')+this.getAttribute('data-name');
			let dummy=document.getElementsByClassName(item)[0];
			let dummy2=dummy.cloneNode(true);
			dummy.remove();//to remove song from favourite section
			var des=document.getElementsByClassName(dest)[0];
			des.appendChild(dummy2);
			//console.log(dummy2);
			dummy2.children[1].addEventListener('click',process2);//added event listener to new created div
			dummy2.children[2].addEventListener('click',process);//added event listener to new created div
			dummy2.children[3].addEventListener('click',playsound2);//added event listener to new created div
			alert("Song removed from Playlist")
			return;

		}
	}





//to play songs from any section except the favourite section and playlist section
var song=false,curr_song;

var playbtn=document.querySelectorAll("#playpausebtn");
for(var i=0;i<playbtn.length;i++)
{
	playbtn[i].addEventListener("click",playsound);
}



function playsound(){
	var music=document.getElementById("audio");
	//console.log(this);
	if(music.getAttribute('src') == this.getAttribute('data-src'))
	{
		if(song)
	{
		this.setAttribute('class','far fa-play-circle');
		audio.pause();
		song=false;
	}
	else
	{
		//that song would be played which is given by the name of the attribute
		this.setAttribute('class','far fa-pause-circle');
		audio.play();
		song=true;
	}
	}
	else
	{
		if(song)
		{
		song=true;
		curr_song.setAttribute('class','far fa-play-circle');
		curr_song=this;
		//console.log(curr_song);
		var song_to_play=this.getAttribute('data-src');
	    music.setAttribute('src',song_to_play);
		this.setAttribute('class','far fa-pause-circle');
		music.play();
		}
		else
		{
		song=true;
		this.setAttribute('class','far fa-pause-circle');
		curr_song=this;
		//console.log(curr_song);
		var song_to_play=this.getAttribute('data-src');
	    music.setAttribute('src',song_to_play);
		music.play();
		}
		
	}
	
}


//to play songs from favourite section
function playsound2(){
	var music=document.getElementById("audio");
	console.log(this.children[0]);
	if(music.getAttribute('src') == this.children[0].getAttribute('data-src'))
	{
		if(song)
	{
		this.children[0].setAttribute('class','far fa-play-circle');
		audio.pause();
		song=false;
	}
	else
	{
		//that song would be played which is given by the name of the attribute
		this.children[0].setAttribute('class','far fa-pause-circle');
		audio.play();
		song=true;
	}
	}
	else
	{
		if(song)
		{
		song=true;
		curr_song.setAttribute('class','far fa-play-circle');
		curr_song=this.children[0];
		//console.log(curr_song);
		var song_to_play=this.children[0].getAttribute('data-src');
	    music.setAttribute('src',song_to_play);
		this.children[0].setAttribute('class','far fa-pause-circle');
		music.play();
		}
		else
		{
		song=true;
		this.children[0].setAttribute('class','far fa-pause-circle');
		curr_song=this.children[0];
		//console.log(curr_song);
		var song_to_play=this.children[0].getAttribute('data-src');
	    music.setAttribute('src',song_to_play);
		music.play();
		}
		
	}
	
}


