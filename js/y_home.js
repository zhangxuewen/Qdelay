
$(function(){
	setTimeout(function(){
		$('.y_blackView').css("display","block");
	},500)
})

//弹出
$('.y_gotoUser').click(function() {
	$('.y_gotoUser').animate({
		"bottom": "-.9rem"
	}, 100);
	$('.backMain').animate({
		"bottom": ".5rem"
	}, 100);
	$('.y_blackView').css("position", "fixed");
	$('.y_blackView_top').css("top","0");
	$('.y_blackView_bottom').css("top","3.3rem");
});
//隐藏
$('.backMain').click(function() {
	$('.backMain').animate({
		"bottom": "-.9rem"
	}, 100);
	$('.y_gotoUser').animate({
		"bottom": ".5rem"
	}, 100);
	$('.y_blackView').css("position", "static");
	$('.y_blackView_top').css("top","-10%");
	$('.y_blackView_bottom').css("top","5.3rem");
})
$('.y_blackView').click(function(){
	$('.backMain').animate({
		"bottom": "-.9rem"
	}, 100);
	$('.y_gotoUser').animate({
		"bottom": ".5rem"
	}, 100);
	$('.y_blackView').css("position", "static");
	$('.y_blackView_top').css("top","-10%");
	$('.y_blackView_bottom').css("top","5.3rem");
})


//首页q隐藏
function a() {
	$('.y_gotoUser').css("display", "none");
}
//首页q弹出
function b() {
	$('.y_gotoUser').css("display", "block");
}

//mui
mui.init({
	gestureConfig: {
		doubletap: true
	},
	subpages: [{
		url: 'y_htmlSub.html',
		id: 'y_htmlSub.html',
		styles: {

		}
	}]
});