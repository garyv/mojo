(function(){
  var $html = $('html');

  // detect svg support
  $.SVGDetect( function() {
    $html.addClass('has-svg');
  });

  // detect basic html5 support
  if (document.querySelector && window.addEventListener) {
    $html.addClass('has-html5');
  }

  // detect 2d css transform support
  if (getSupportedTransform()) {
    $html.addClass('has-transforms')
  }

})();