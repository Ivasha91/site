$(function() {
  $('.nav-link[href]').each(function() {
    if (this.href == window.location.href) {
      $(this).addClass('active btn btn-warning text-dark');
    }
  });
});


function scrollToKatalog() {
  $('html, body').animate({
        scrollTop: $('#cards').offset().top
    }, 500);
}
