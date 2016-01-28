(function(){
  
  var orderButton = $('#order-button'),
      form = $('#new_order'),
      checkout = $('#checkout'),
      success = $('#success');

  // reveal order form after clicking order button
  orderButton.click( function(){

    checkout.slideDown(1500, 'easeOutQuad');

    success.hide();

    setTimeout( function(){
      animateScrollTo( form );
    }, 80); 
  });

  // form validation - disable native validation and use parsley.js
  form.find('input,textarea').attr('data-parsley-trigger', 'change');
  form.attr('novalidate', 'novalidate').parsley();
  
  // show result after placing order
  form.submit( function(event){
    event.preventDefault();
    success.slideDown(900, 'easeOutQuad');
    setTimeout( function(){
      animateScrollTo( success );
      checkout.slideUp(900, 'easeOutQuad');
      $('input#order_card_number').val('');
    }, 80); 
  });

  // select quantity, update price
  var priceDisplay = $('#price'),
      quantityInput = $('#quantity_form input'),
      unitPrice = parseFloat( priceDisplay.text().replace(/\D/,''), 10),
      totalPrice;

  if (unitPrice > 0) {
    quantityInput.on('change keyup', function(){
      totalPrice = +quantityInput.val() * unitPrice;

      if (totalPrice < 1) {
        totalPrice = unitPrice;
        quantityInput.val(1);
      }
      priceDisplay.text( moneyFormat(totalPrice) );
      priceDisplay.addClass('highlight');
      setTimeout(function(){
        priceDisplay.removeClass('highlight')
      }, 500);
    });
  }
  $('#quantity_form').submit(function(){
    return false;
  })

  quantityInput.trigger('change');


  // don't hide checkout if going straight to /shop page
  if (location.pathname.match(/shop/)) {
    checkout.show();
  }

  // clear credit card number on page load, to be less creepy.
  $('input#order_card_number').val('');

})();