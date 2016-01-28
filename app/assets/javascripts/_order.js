(function(){

  var orderButton = $('#order-button'),
      form = $('#new_order'),
      checkout = $('.checkout'),
      success = $('#success');

  orderButton.click( function(){

    checkout.slideDown(1500, 'easeOutQuad');


    success.hide();

    setTimeout(function(){
      animateScrollTo( form );
    }, 80); 
  });

  form.submit(function(event){
    event.preventDefault();
    success.slideDown(900, 'easeOutQuad');
    setTimeout(function(){
      animateScrollTo( success );
      checkout.slideUp(900, 'easeOutQuad');
    }, 80); 

  });

})();