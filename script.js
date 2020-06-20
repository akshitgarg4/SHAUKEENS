var fav=document.querySelectorAll('.heart');
for(var i=0;i<fav.length;i++)
{
	fav[i].addEventListener('click',process);//accepting the clicks of like
	function process()
	{

		if(this.getAttribute('data-root')=="true")//checked if it is in favourite section or not
			//if it is in fav section than we have to remove it
		{
			this.classList.add("permanent");//to mark heart as red
			this.setAttribute('data-root','false');//to mark that data has been moved from its actual section
			let item=this.getAttribute('data-origin')+this.getAttribute('data-name');//the div with this name will be removed and added in fav sec
			let dummy=document.getElementsByClassName(item)[0];//dummy is basically the div which i am moving
			let dummy2=dummy.cloneNode(true);//cloned the moving div
			dummy.remove();//to remove song from its original section after it is marked favorite
			let des=document.getElementsByClassName('favourites-section')[0];//get the destination where div is to be moved
			des.appendChild(dummy2);
			dummy2.children[2].addEventListener('click',process);//added event listener to new created div
			alert("Song added to Favourites")
			return;
		}
		else
		{
			this.classList.remove("permanent");//removed red colour of heart
			this.setAttribute('data-root','true');//to mark that song is removed from fav and added to its original section
			let dest=this.getAttribute('data-origin');
			let item=this.getAttribute('data-origin')+this.getAttribute('data-name');
			let dummy=document.getElementsByClassName(item)[0];
			let dummy2=dummy.cloneNode(true);
			dummy.remove();//to remove song from favourite section
			var des=document.getElementsByClassName(dest)[0];
			des.appendChild(dummy2);
			dummy2.children[2].addEventListener('click',process);//added event listener to new created div
			alert("Song removed from Favourites")
			return;

		}
	}
}

//AUDIO PLAYER
var song=false,curr_song;

var playbtn=document.querySelectorAll("#playpausebtn");
for(var i=0;i<playbtn.length;i++)
{
	playbtn[i].addEventListener("click",function(){
	var music=document.getElementById("audio");
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
		console.log(curr_song);
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
		console.log(curr_song);
		var song_to_play=this.getAttribute('data-src');
	    music.setAttribute('src',song_to_play);
		music.play();
		}
		
	}
	
});

}