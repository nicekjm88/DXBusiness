function hoverEvent(selector) {
  selector.append('<span class="active-bar"></span>');

  function tabMoveBar() {
    $(this)
      .addClass('is-active')
      .siblings()
      .removeClass('is-active');

    var txt = $(this).find('a');
    var tabActive = txt.position().left;
    var txtWidth = txt.width();      
    
    $('.active-bar').css({
      'opacity' : '1',
      'transform' : 'translateX(' + Number(tabActive - 15) + 'px)',
      'width' : txtWidth + 'px'
    })
  }

  selector.find('li').on('mouseenter', tabMoveBar);
}

function render() {
  $('.letters').addClass('is-active');  
  $('#visual .bg').addClass('is-active');

  setTimeout(function() {
    $('.mouse').show();
  }, 5000);
}

$(function() {

  render();

  AOS.init({
    offset: 300,
    duration: 750,
  });
    
  var controller = new ScrollMagic.Controller();
  
  var scene_list = '.wrap-area-square'.split(', ');
  scene_list.forEach(function(triggerElSelector){
    var scene = new ScrollMagic.Scene({
      triggerElement: triggerElSelector,
      triggerHook: .6,
    })
    .on('start end enter leave', function(e) {
  
      // if ($('.scene1').hasClass('is-active')) {
        
      // }  
      // if ($('.scene2').hasClass('is-active')) {
        
      // }
      // if ($('.scene3').hasClass('is-active')) {
  
      // }
      // if ($('.scene4').hasClass('is-active')) {
  
      // }
  
      if (e.type === 'start') {
  
      } else if (e.type === 'leave') {
  
      }
    })
    .setClassToggle(triggerElSelector, 'is-active')
    .addTo(controller);
  });  
  
  var navigation = $('#nav');
  hoverEvent(navigation);

})
  
$(window).scroll(function(){
  if ( $(window).scrollTop() > 0 ) {
    $('#header').addClass('is-sticky');
    $('.mouse').hide();
    
  } else if ( $(window).scrollTop() === 0 ) {
    $('#header').removeClass('is-sticky');    
    $('.mouse').show();
  }
});

