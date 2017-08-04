
//cambio color navbar al hacer scroll

$(document).ready(function(){      
   var scroll_start = 0;
   var startchange = $('#navbar');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".navbar").css('background-color', '#f2e9d0b');
       }  else {
          $('.navbar').css('background-color', 'transparent');
       }
   });
    }
});
