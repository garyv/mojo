// I'm using a self executing anomyous function here, to create a private variable scope
// This could easily be substituted with a jQuery.ready function, delaying its execution until the dom ready event
// As long as JS is included at the end of the page, waiting for dom ready is not required. JS can run right away.

(function(){
  
  var menuButton = $('#menu-button');
  var nav = $('#nav');
  var domain = getDomain();
  var sections = $('[data-path]');
  var FIXED_HEADER_HEIGHT = 55;
  window.FIXED_HEADER_HEIGHT = FIXED_HEADER_HEIGHT;

  // hamburger menu 
  menuButton.click( function(event) {
      event.preventDefault();
      menuButton.toggleClass('is-active');
      nav.toggle();
  });

  // external link open in new window
  $('a').filter(function() {
      return this.hostname && this.hostname !== location.hostname;
  }).attr("rel", "external").attr('target', '_blank');

  // internal links scroll html element with matching data-path  
  var getSectionForPath = function(path) {
    return sections.filter("[data-path='" + path + "']");
  }
  // when clickin on an internal site link, scroll to section 
  $('a').filter(function() {
    return !(this.hostname && this.hostname !== location.hostname);
  }).click(function(event) {
    event.preventDefault();
    var path = this.href.replace(domain, '');
    var targetElement = sections.filter("[data-path='" + path + "']");

    if (targetElement.length) {
      animateScrollTo(targetElement, FIXED_HEADER_HEIGHT);
      updateUrl(path);
    }
  });

  // on page load, scroll to the starting url
  if (location.href != domain + '/') {
    $(document).ready(function() {
      var path = location.href.replace(domain, '');
      var targetElement = getSectionForPath(path);
      if (targetElement.length && window.scrollTo) {
        scrollTo(0, targetElement.offset().top - FIXED_HEADER_HEIGHT, 0);
      }
    });
  };

  // handle back and forward button clicks from browser by scrolling to sections
  $(window).on('popstate', function(event) {
    event.preventDefault();
    var targetSection = getSectionForPath(location.pathname);
    animateScrollTo(targetSection, FIXED_HEADER_HEIGHT);
  });
  
})();
