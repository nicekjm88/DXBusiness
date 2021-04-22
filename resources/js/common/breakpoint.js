/* breakPoint */
var mobileDevice = 767;
var tabletDevice = 1023;

function breakPoint() {
	var finalDeviceSize = $(window).width();

	if( finalDeviceSize < mobileDevice ) {
		console.log('[ Mobile ]');
		accordionActive = createAccordion();
		mobileTabs();

	} else if( finalDeviceSize < tabletDevice ) {
		console.log('[ Tablet ]');
	} else {
		console.log('[ Web ]');
		mobileGnb.destroy();
	}
};

$(function() {	
	if( $(window).width() < mobileDevice ) {
		console.log('[ Mobile ]');
		accordionActive = createAccordion();
		mobileTabs();		
		
	} else if( $(window).width() < tabletDevice ) {
		console.log('[ Tablet ]');
	} else {
		console.log('[ Web ]');
	}
});

var timer = null;
$(window).on('resize', function() {
	clearTimeout(timer);
	timer = setTimeout(breakPoint, 300);
});
