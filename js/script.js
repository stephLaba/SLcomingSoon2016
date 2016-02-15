


$(document).on('ready', function() {


  function moveInit() {

    var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
    
      if (isSafari) {
        console.log('safari!');
        $('#bglayerID').removeClass('transition_bg');
        $('#fglayerID').removeClass('transition_fg');
        $('#bglayerID2').removeClass('transition_bg');
        $('#fglayerID2').removeClass('transition_fg');
      }
    
  }

// ACTIVATES MENU
  function menuTrigger() {

    var menuTrigger = $('.menu--trigger'); 
    var menuBox = $('.menu-overlay--container')
    var span1 = $('.menu-line1');
    var span2 = $('.menu-line2');
    var span3 = $('.menu-line3');
    var logo = $('h1');
    var para = $('p.show');
 
    $(menuTrigger).on('click',function (){
        if($(menuBox).hasClass('hide')) {
      $(menuBox).removeClass('hide').addClass('show');
      $(span1).addClass('rotate');
      $(span3).addClass('rotate');
      $(span2).addClass('transparent');
      $(logo).addClass('invert');
      $(para).removeClass('show').addClass('hide');

        }else{
        $(menuBox).removeClass('show').addClass('hide');
        $(span1).removeClass('rotate');
        $(span3).removeClass('rotate');
        $(span2).removeClass('transparent');
        $(logo).removeClass('invert');
        $(para).removeClass('hide').removeClass('show');
      }
    });
  }


  function bkgAnimate() {
   var frontlayer = $('.frontlayer');
   var bglayer = $('.bglayer');
   var overlay = $('.overlay, .overlay h1');

   frontlayer.animate({
       textIndent: 0
   }, {
       step: function(now, fx) {
           overlay.mousemove(function(e) {
               var amountMovedX = (e.pageX * -1 / 6);
               var amountMovedY = (e.pageY * -1 / 25);
               frontlayer.css({
                   '-webkit-transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
                   '-moz-transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
                   '-ms-transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
                   '-o-transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
                   'transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)'
               });
           });
       },
       duration: 1000
   }, 'easeOutCubic');



   bglayer.animate({
       textIndent: 0
   }, {
       step: function(now, fx) {
           overlay.mousemove(function(e) {
               var amountMovedX = (e.pageX * -1 / 12);
               var amountMovedY = (e.pageY * -1 / 25);
               bglayer.css({
                   '-webkit-transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
                   '-moz-transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
                   '-ms-transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
                   '-o-transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
                   'transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)'
               });
           });
       },
       // duration: 5000
   }, 'easeOutCubic');
  }


// call functions
  moveInit();
  menuTrigger();
  bkgAnimate();
});
