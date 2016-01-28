var log = function(message) { 
  window.console && console.log && console.log(message); 
};

var updateUrl = function(path) {
  if (window.history && history.pushState) {
    window.history.pushState('', '', path);
  }
};

var getDomain = function(){
  return location.href.replace( new RegExp(location.pathname + '$'), '');
};

// easing animation plugin
$.easing.easeOutQuad = function (x, t, b, c, d) {
  return -c *(t/=d)*(t-2) + b;
};

// animate scrolling to a target element
var animateScrollTo = function(targetElement, offset) {
  offset || (offset = window.FIXED_HEADER_HEIGHT) || (offset = 0);
  $('html,body').animate({scrollTop: targetElement.offset().top - offset}, 800, 'easeOutQuad');
};

// detect if browser understands Scalible Vector Graphics on img src.
$.SVGDetect = function( callback ) {
  var img = document.createElement( 'img' ),
    svgSRC = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IGhlaWdodD0iMSIgd2lkdGg9IjEiLz48L3N2Zz4=';
  typeof callback === 'function' && $( document ).bind( 'SVGDetected', callback );
  $( img ).attr( 'src', svgSRC ).load( function() {
    $( document ).trigger( 'SVGDetected' );
  });
};
