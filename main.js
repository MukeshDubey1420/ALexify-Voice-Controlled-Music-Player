document.getElementById("demo").innerHTML = new Date().toLocaleDateString("en-EN", {weekday: "long", year: "numeric", month: "short",  
    day: "numeric", hour: "2-digit", minute: "2-digit"  });
/*
$('.welcome-screen button').on('click', function() {
        var name = $('#name-input').val();
        if (name.length > 3) {
            var message = "Welcome, " + name;
			console.log(message);
            $('.main .user-name').text(message);
            $('.welcome-screen').addClass('hidden');
            $('.main').removeClass('hidden');
			$('.play-icon').on('click', function() {
  toggleSong();
});
 $('body').on('keypress',function(event) {
	  if (event.keyCode == 32 || event.keyCode == 80 || event.keyCode == 112)
	  {
		toggleSong();
	  }
	}); 
         else {
            $('#name-input').addClass('error');
			 alert ("Please Enter Your Name To Further Access (3 Character atleast required) !!!");
        }
    });

*/
function toggleSong() {
  var song = document.querySelector('audio');

  if(song.paused == true) {
    console.log('Music is Playing');
    $('.play-icon').removeClass('fa-play').addClass('fa-pause');
    song.play();
   }
   else {
    console.log('Music is Paused');
    $('.play-icon').removeClass('fa-pause').addClass('fa-play');
    song.pause();
   }
}

function doSomething() {
        var name = $('#name-input').val();
        if (name.length > 3) {
            var message = "Welcome, " + name;
			console.log(message);
            $('.main .user-name').text(message);
            $('.welcome-screen').addClass('hidden');
            $('.main').removeClass('hidden');
			$('.play-icon').on('click', function() {
				toggleSong();
		});
		
		$('body').on('keypress',function(event) {
	  if (event.keyCode == 32 || event.keyCode == 80 || event.keyCode == 112)
	  {
		toggleSong();
	  }
		});
		}
		else {
            $('#name-input').addClass('error');
			 alert ("Please Enter Your Name To Further Access (3 Character atleast required) !!!");
        }
		
	}
        

	$("#name-input").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#btnSearch").click();
    }
});




// Code For Implementing Submit Action By pressing Enter.....
/*
$(document).ready(function() {

  $('#name-input').keypress(function(event) {
    // enter has keyCode = 13, change it if you want to use another button
     if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
        var name = $('#name-input').val();
        if (name.length > 3) {
            var message = "Welcome, " + name;
			console.log(message);
            $('.main .user-name').text(message);
            $('.welcome-screen').addClass('hidden');
            $('.main').removeClass('hidden');
			$('.play-icon').on('click', function() {
  toggleSong();
});
	 }}
    
  });

}); 





	 $('body').on('keypress',function(event) {
	  if (event.keyCode == 32 || event.keyCode == 80 || event.keyCode == 112)
	  {
		toggleSong();
	  }
	}); 
        } else {
            $('#name-input').addClass('error');
			 alert ("Please Enter Your Name To Further Access (3 Character atleast required) !!!");
        }
    });
	*/



function fancyTimeFormat(time)
{   
    // Hours, minutes and seconds
    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = time % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";

    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}
function updateCurrentTime() {
    //Modify the updateCurrentTime() function like this

    var song = document.querySelector('audio');
    var currentTime = Math.floor(song.currentTime);
    currentTime = fancyTimeFormat(currentTime);

    var duration = Math.floor(song.duration);
    duration = fancyTimeFormat(duration)
    $('.time-elapsed').text(currentTime);
    $('.song-duration').text(duration);
}


function addSongNameClickEvent(songObj,position) {
	var songName = songObj.fileName; // New Variable
    var id = '#song' + position;
    $(id).click(function() {
      var audio = document.querySelector('audio');
      var currentSong = audio.src;
      if(currentSong.search(songName) != -1)
      {
      toggleSong();
    }
    else {
      audio.src = songName;
        toggleSong();
        changeCurrentSongDetails(songObj); // Function Call
    }
});
}

/*
for (var i = 0; i < fileNames.length ; i++) {
    addSongNameClickEvent(fileNames[i],i+1)
}

*/
 
 
	
 /* $('body').on('keypress',function(event){
    var target = event.target;
                            if (event.keyCode == 32 && target.tagName !='INPUT'){
      toggleSong();
   } 
});
 */
 function changeCurrentSongDetails(songObj) {
  $('.current-song-image').attr('src','img/' + songObj.image) ;
  $('.current-song-name').text(songObj.name) ;
  $('.current-song-album').text(songObj.album) ;
}
 /*
 var songList = ['3 Peg - Sharry Mann (DjPunjab.Com)','Affair - MC JD (DjPunjab.Com)','Daang Mankirt Aulakh','Set Jatt - Joban Sandhu (DjPunjab.Com)','Chalti Hai Kya 9 Se 12-(Mr-Jatt.com)','Ban Ja Rani Guru Randhawa ' ]; 

var fileNames = ['song1.mp3','song2.mp3','song3.mp3','song4.mp3','song5.mp3','song6.mp3'];
	  
var artistList = ['Artist #1', 'Artist #2','Artist #3','Artist #4','Artist #5','Artist #6']; 
	
var durationList = ['2:56','3:15','2:34','2:29','2:34','2:29'];	

var albumList = ['Badrinath ki Dulhania','Ok Jaanu','Befikre', 'Ae Dil Hai Mushkil' ,'Befikre', 'Ae Dil Hai Mushkil'];
*/

var songs = [
  {
    'name': '3 Peg - Sharry Mann (DjPunjab.Com)',
    'artist': 'Sharry Mann',
    'album': '3 PeG',
    'duration': '3:24',
   'fileName': 'song1.mp3',
   'image': 'song1.jpg'
  },
  {
    'name': 'Affair - MC JD (DjPunjab.Com)',
    'artist': 'Elly Mangat Ft. MC JD',
    'album': 'PB 26',
    'duration': '3:54',
    'fileName': 'song2.mp3',
   'image': 'song2.jpg'
  }
  ,
  {
    'name': 'Daang Mankirt Aulakh',
    'artist': 'Mankirat Aulakh',
    'album': 'Daang ',
    'duration': '3:41',
    'fileName': 'song3.mp3',
   'image': 'song3.jpg'
  }
  ,
  {
    'name': 'Set Jatt - Joban Sandhu (DjPunjab.Com)',
    'artist': 'Joban Sandhu',
    'album': 'Set Jatt',
    'duration': '1:09',
    'fileName': 'song4.mp3',
   'image': 'song4.jpg'
  }
  ,
  {
    'name': 'Chalti Hai Kya 9 Se 12-(Mr-Jatt.com)',
    'artist': 'Devi Negi Ft. Neha Kakkar',
    'album': 'Judwaa 2',
    'duration': '4:35',
    'fileName': 'song5.mp3',
   'image': 'song5.jpg'
  }
  ,
  {
    'name': 'Ban Ja Rani Guru Randhawa ',
    'artist': 'Guru Randhawa',
    'album': 'Tumhari Sulu',
    'duration': '1:33',
    'fileName': 'song6.mp3',
   'image': 'song6.jpg'
  }
]



window.onload = function() {
	changeCurrentSongDetails(songs[0]);
	/*
	$('#song1 .song-name').text(songList[0]);
	$('#song2 .song-name').text(songList[1]);
	$('#song3 .song-name').text(songList[2]);
	$('#song4 .song-name').text(songList[3]);
	$('#song5 .song-name').text(songList[4]);
	$('#song6 .song-name').text(songList[5]);
	$('#song1 .song-artist').text(artistList[0]);
	$('#song2 .song-artist').text(artistList[1]);
	$('#song3 .song-artist').text(artistList[2]);
	$('#song4 .song-artist').text(artistList[3]);
	$('#song5 .song-artist').text(artistList[4]);
	$('#song6 .song-artist').text(artistList[5]);

for(var i =0; i < songList.length;i++) {
    var name = '#song' + (i+1);
    var song = $(name);
    song.find('.song-name').text(songList[i]);
    song.find('.song-artist').text(artistList[i]);
    song.find('.song-album').text(albumList[i]); // Added
    song.find('.song-length').text(durationList[i]); // Added
  }
 */
 for(var i =0; i < songs.length;i++) {
    var obj = songs[i];
    var name = '#song' + (i+1);
    var song = $(name);
    song.find('.song-name').text(obj.name);
    song.find('.song-artist').text(obj.artist);
    song.find('.song-album').text(obj.album);
    song.find('.song-length').text(obj.duration);
    addSongNameClickEvent(obj,i+1) ;
  }
 /* 
 $('#song1').click(function() {
  var audio = document.querySelector('audio');
  var currentSong = audio.src;
  if(currentSong.search(fileNames[0]) != -1)
  {
    toggleSong();
  }
  else {
    audio.src = fileNames[0];
    toggleSong();
  }
});
$('#song2').click(function() {
  var audio = document.querySelector('audio');
  var currentSong = audio.src;
  if(currentSong.search(fileNames[1]) != -1)
  {
    toggleSong();
  }
  else {
    audio.src = fileNames[1];
    toggleSong();
  }
});
$('#song3').click(function() {
  var audio = document.querySelector('audio');
  var currentSong = audio.src;
  if(currentSong.search(fileNames[2]) != -1)
  {
    toggleSong();
  }
  else {
    audio.src = fileNames[2];
    toggleSong();
  }
});
$('#song4').click(function() {
  var audio = document.querySelector('audio');
  var currentSong = audio.src;
  if(currentSong.search(fileNames[3]) != -1)
  {
    toggleSong();
  }
  else {
    audio.src = fileNames[3];
    toggleSong();
  }
});
$('#song5').click(function() {
  var audio = document.querySelector('audio');
  var currentSong = audio.src;
  if(currentSong.search(fileNames[4]) != -1)
  {
    toggleSong();
  }
  else {
    audio.src = fileNames[4];
    toggleSong();
  }
});
$('#song6').click(function() {
  var audio = document.querySelector('audio');
  var currentSong = audio.src;
  if(currentSong.search(fileNames[5]) != -1)
  {
    toggleSong();
  }
  else {
    audio.src = fileNames[5];
    toggleSong();
  }
  
});
*/
  updateCurrentTime();

  setInterval(function() {
    updateCurrentTime();
  },1000);
  
};

document.onkeydown = function(e) {
if(event.keyCode == 123) {
return false;
}
if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
return false;
}
if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
return false;
}
if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
return false;
}
}

