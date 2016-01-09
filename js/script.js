


$(document).on('ready', function() {


// ACTIVATES MENU
  function menuTrigger() {

    var menuTrigger = $('.menu--trigger p span'); 
    var menuBox = $('.menu-overlay--container')
 
    $(menuTrigger).on('click',function (){
        if($(menuBox).hasClass('hide')) {
      $(menuBox).removeClass('hide').addClass('show');
        }else{
      $(menuBox).removeClass('show').addClass('hide');
      }
    });
  }


// call functions
  menuTrigger();
});
