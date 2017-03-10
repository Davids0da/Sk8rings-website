$(document).ready(() => {
  $('.navbar a,.footer a').click(function(e){
      let to = $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(to).offset().top
      }, 1500);
    });
});

