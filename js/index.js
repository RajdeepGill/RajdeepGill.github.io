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