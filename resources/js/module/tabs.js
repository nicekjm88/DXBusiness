var tabs = $('.tabs');
var tabsList = tabs.find('li');
var tabContents = $('.tab-contents');
var tabContentsSection = tabContents.find('section');

// Default
tabs.attr('role', 'tablist');
tabsList.eq(0).attr('aria-selected', 'true').addClass('is-active');
tabContents.find('section').eq(0).addClass('is-active');

tabsList.each(function(i) {
  $(this)
    .attr('id', 'tab' + Number(i + 1) )
    .attr('role', 'tab')
    .attr('aria-controls', 'section' + Number(i + 1) )
    .attr('tabindex', '0')
    .attr('aria-selected', 'false');
});

tabContentsSection.each(function(i){
  $(this)
    .attr('id', 'section' + Number(i + 1) )
    .attr('role', 'tabpannel')
    .attr('aria-labelledby', 'tab' + Number(i + 1) );
});

//Event
tabsList.on('click focusin', function(){
  $(this).addClass('is-active').siblings().removeClass('is-active');
  tabContentsSection.removeClass('is-active');

  if( tabsList.hasClass('is-active') ) {
    tabsList.attr('aria-selected', 'false');
    $(this).attr('aria-selected', 'true');
  }

  // tabList의 클릭한 속성인 aria-controls의 값은 tabContentsSection id 값과 같다.
  var activeTab = $(this).attr('aria-controls');
  $('#' + activeTab).addClass('is-active').siblings().removeClass('is-active');
});

(function(doc, $){
  var tabContainer = doc.querySelector('.tab-container');
  if( !tabContainer ) return;

  $(tabContainer).on('click', '.tab-button', handleClickEvent);   
  $(tabContainer).on('keydown', '.tab-list', handleKeyEvent);

  function handleClickEvent(event) {
    event = event || window.event;
    event.stopPropagation();
    var currTab = event.currentTarget;

    activeTab(currTab);
    activeTabPanel(currTab);
  }

  function activeTab(tab) {
    if(!tab) return;

    $(tab)
      .addClass('tab-button--active')
      .attr({
        'tabindex': '0',
        'aria-selected': 'true'
      })
      .focus()
      .siblings()
        .removeClass('tab-button--active')
        .attr({
          'tabindex': '-1',
          'aria-selected': 'false'
        })
  }

  function activeTabPanel(tab) {
    if(!tab) return;
    $('#' + tab.getAttribute('aria-controls'))
      .attr({
        'tabindex': '0'
      })
      .prop({
        'hidden': false
      })
      .addClass('tab-panel--active')
      .siblings('.tab-panel')
        .attr({
          'tabindex': '-1'
        })
        .prop({
          'hidden': true
        })
        .removeClass('tab-panel--active')
  }

  function handleKeyEvent(event) {
    event = event || window.event;
    event.stopPropagation();
    var keycode = event.keyCode || event.which;

    switch(keycode) {
      case 37: //왼쪽 키보드
        if(event.target.previousElementSibling) {
          $(event.target)
            .attr({
              'tabindex': '-1'
            })
            .prev()
              .attr({
                'tabindex': '0'
              })
              .focus()
        } else {
          $(event.target)          
            .attr({
              'tabindex': '-1'
            })
            .siblings(':last')
              .attr({
                'tabindex': '0'
              })
              .focus()
        }
        break;

      case 39: //오른쪽 키보드
        if(event.target.nextElementSibling) {
          $(event.target)
            .attr({
              'tabindex': '-1'
            })
            .next()
              .attr({
                'tabindex': '0'
              })
              .focus()
        } else {
          $(event.target)
            .attr({
              'tabindex': '-1'
            })
            .siblings(':first')
              .attr({
                'tabindex': '0'
              })
              .focus()
        }
        break;      
      case 32: //스페이스 키
      case 13: //엔터 키
        event.preventDefault();
        activeTab(event.target);
        activeTabPanel(event.target);
        break;
    }
  }


  $('.tab-button:first-of-type', tabContainer).trigger('click');
})(document, jQuery);