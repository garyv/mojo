$(document).ready(function(){
  // Turn a link to an mp3 file into an audio player

  if ( window.Audio && (new Audio()).canPlayType("audio/mp3") ) {

    $('.music').show();
    
    mp3Links = $("a[href$='.mp3']");
    var audioTemplate = '<audio src="MP3" type="audo/mp3" controls="controls" loop />';

    mp3Links.each(function(i){
       var audioPlayer = $( audioTemplate.replace(/MP3/, this.href) );
       audioPlayer.insertAfter(this);

       mp3Links.eq(i).click( function(){
          audioPlayer.trigger('play');
          return false;
       })
    });
  }
})();