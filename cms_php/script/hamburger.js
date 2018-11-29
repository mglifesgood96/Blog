$(document).ready(function() {
  $('[data-toggle="offcanvas"]').click(function(){
    $('#side-menu').toggleClass('d-none d-sm-block');
    if($('#content-full').hasClass('col-12')){
      $('#content-full').removeClass('col-12');
      $('#content-full').addClass('col-10');
    }else{
      $('#content-full').removeClass('col-10');
      $('#content-full').addClass('col-12');
    }
  });
});
