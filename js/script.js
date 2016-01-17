


$(document).on('ready', function() {


// ACTIVATES MENU
  function menuTrigger() {

    var menuTrigger = $('.menu--trigger'); 
    var menuBox = $('.menu-overlay--container')
    var span1 = $('.menu-line1');
    var span2 = $('.menu-line2');
    var span3 = $('.menu-line3');
    var logo = $('h1');
 
    $(menuTrigger).on('click',function (){
        if($(menuBox).hasClass('hide')) {
      $(menuBox).removeClass('hide').addClass('show');
      $(span1).addClass('rotate');
      $(span3).addClass('rotate');
      $(span2).addClass('transparent');
      $(logo).addClass('invert');

        }else{
        $(menuBox).removeClass('show').addClass('hide');
        $(span1).removeClass('rotate');
        $(span3).removeClass('rotate');
        $(span2).removeClass('transparent');
        $(logo).removeClass('invert');
      }
    });
  }


// call functions
  menuTrigger();
});
