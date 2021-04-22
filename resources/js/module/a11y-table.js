/*
  접근성 준수 테이블
  1. 사용법 테이블 바로 위에[prev().text()] 테이블 제목을 입력
*/
function a11yTable(elem) {
  var elem = $('.table-wrap');

  elem.each(function(){
    var a11yTableCaption = $(this).prev().text();

    var theArrayStr = '';
    $(this).find('thead th').each(function(){
      theArrayStr += ', ' + $(this).text();
    });

    $(this).find('table').prepend('<caption>' + a11yTableCaption + ' - ' + theArrayStr.substring(2) + '에 관한 정보' + '</caption>');

  });

  elem.find('thead th').attr('scope', 'col');
  elem.find('tbody th').attr('scope', 'row');

};

$(function(){
  a11yTable();
});