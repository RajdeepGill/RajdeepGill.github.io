$(window).ready(function ($) {
    'use strict';

  $(window).ready(function(){

    $('.masonry').masonry({
      columnWidth: '.grid-sizer',
      gutter: '.gutter-sizer',
      itemSelector: '.item'
    });

    
  });
    
}(jQuery));


$(document).ready(function() {
    $('.btn').click(function() {
      $("form")[0].reset();
      // $('button').text('Submitted');
      // $('button').text('Submit');
    });
});


$(document).ready(function() {
  $('.navbar').mouseenter(function() {
    $('.name').text('Software & Web Developer');
  });
});

$(document).ready(function() {
  $('.navbar').mouseleave(function() {
    $('.name').text('Rajdeep Gill');
  }); 
});
