$(function() {
  /*
    HEADER (상단영역)
  */
  $('.gnb-wrap').append('<span class="bar"></span>');

  $('#gnb > li').on('mouseenter focusin', function() {
    $(this)
      .addClass('is-active')
      .siblings().removeClass('is-active');

    var tabActive = $('#gnb > li.is-active').position().left;
    var width = $('#gnb > li.is-active').width();

    $('.gnb-wrap > .bar')
      .css('opacity','1')
      .css('transform', 'translateX(' + Number(tabActive + 10) + 'px)')
      .css('width', width + 'px');

    $(this).parent()
      .addClass('is-active');
    $(this).parents('#header')
      .addClass('is-active');
  });

  $('.gnb-wrap').on('mouseleave', function() {
    $('#gnb > li')
      .removeClass('is-active');
    $('.gnb-wrap > .bar')
      .css('opacity', '0');
    $(this).children()
      .removeClass('is-active');
    $(this).parents('#header')
      .removeClass('is-active');
  });

  /* 
    FAQ
  */
  $('#faq, #faq2').accordion({
    collapsible: true,
    titleSelector: '.faq-title',
    contSelector: '.faq-content',
    onOpen: $.noop
  });

  if ($(window).width() < 767) {

    var $btnAllmenu = $('.btn-allmenu');

    $btnAllmenu.show();

    $btnAllmenu.on('click', function(e) {
      $(this).next().addClass('is-active');
    });



  }

});

// $(window).scroll(function() {
//   if ( $(this).scrollTop() > 100 ) {
//     $('#header').addClass('is-sticky');
//     $('#header').find('.wrap').addClass('container');
//     $('body').css('padding-top', '108px');
//     $('#visual .mouse').hide();
//   } else {
//     $('#header').removeClass('is-sticky');
//     $('#header').find('.wrap').removeClass('container');
//     $('body').css('padding-top', '0');
//     $('#visual .mouse').show();
//   }
// });
