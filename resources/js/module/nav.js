/* 
	nav 
*/
var $gnb = $('#gnb');
var $gnbDep1 = $('#gnb>li');
var $gnbDep1Link = $gnbDep1.find('a');

function init() {
	var $gnbDep2 = $gnb.find('ul').addClass('depth2');
	$gnbDep1.each(function(i){
		$(this).find('span').append(' ' + Number(i + 1));
	});
	$gnbDep2.find('li').each(function(i){
		console.log($(this).length);
		$(this).find('a').append(' ' + Number(i + 1));
	});
};

function activeGnb(elem) {
	$(elem).addClass('is-active');	
}

function disableGnb(elem) {
	$(elem).removeClass('is-active');	
}

function siblings(elem) {
	$(elem).parent().addClass('is-active').siblings().removeClass('is-active');
}

$gnb.on('mouseenter focusin', function(){
	activeGnb(this);
});

$gnb.on('mouseleave', function(){
	disableGnb(this);
});

$gnbDep1Link.on('mouseenter focusin', function(){
	siblings(this);
});

$gnbDep1Link.on('focusout', function(){
	disableGnb(this);
});

$gnbDep1.on('mouseleave', function(){
	disableGnb(this);
});

$(function(){
	init();
});