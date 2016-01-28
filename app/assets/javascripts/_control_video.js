(function(){
  
  // background video
  var video = document.getElementsByTagName('video')[0],
      play = $('#play'), 
      pause = $('#pause');
  
  // video controls
  play.click(function(){
    video.play();
  });
  pause.click(function(){
    video.pause();
  });

  var togglePlayPause = function() {
    if (video.paused) {
      play.removeClass('hide');
      pause.addClass('hide');
    } else /* !video.paused */ { 
      play.addClass('hide');
      pause.removeClass('hide');
    }
  };
  $(video).on('pause play load', togglePlayPause);
  togglePlayPause();

  $(window).on('load', togglePlayPause);
})();