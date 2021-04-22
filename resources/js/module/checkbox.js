/* 
	체크박스 체크시 전체선택 체크 여부 
	1. 전체동의를 선택하면 하위 항목 모두 체크
	2. 하위 항목중 하나라도 체크가 해제되면 전체동의도 체크해제
	3. 하위 항목 모두 체크된다면 전체동의 체크 
*/

function init() {
  $('[name="checkAll"]').attr('id', 'checkAll');
  $('[name="checkItem"]').each(function(i){
    $(this).attr('id', 'agree' + Number(i + 1) );
    $(this).next().attr('for', 'agree' + Number(i + 1) );
  });
};

function allCheckFunc(obj) {
  $('[name="checkItem"]').prop('checked', $(obj).prop('checked'));
};

function oneCheckFunc(obj) {
	var allObj = $('[name="checkAll"]');
  var objItem = $(obj).attr('name'); 
	var checkBoxLength = $('[name='+ objItem +']').length;
	var checkedLength = $('[name='+ objItem +']:checked').length;

	if(checkBoxLength == checkedLength) {
		allObj.prop('checked', true);
	}else {
		allObj.prop('checked', false);
	}	
};

$(function() {
	init();

	$('[name="checkAll"]').click(function(){
		allCheckFunc(this);
	});
	$('[name="checkItem"]').each(function(){
		$(this).click(function(){
			oneCheckFunc($(this));
		});
	});
});