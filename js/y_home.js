
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
//$('.y_blackView').click(function(){
//	$('.backMain').animate({
//		"bottom": "-.9rem"
//	}, 100);
//	$('.y_gotoUser').animate({
//		"bottom": ".5rem"
//	}, 100);
//	$('.y_blackView').css("position", "static");
//	$('.y_blackView_top').css("top","-10%");
//	$('.y_blackView_bottom').css("top","5.3rem");
//})


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

$('.y_userCount').click(function(){
	location.href="../yq_xinxi/myCenter.html";
})
$('.y_message').click(function(){
	location.href="../yq_xinxi/myInfo.html"
})
$('.y_news').click(function(){
	$('.y_blackView_bottom').css('left','-100%');
	$('.y_blackView_bottom_right').css('left','.6rem');
	$('.backback').animate({
		"bottom": ".5rem"
	}, 100);
	$('.backMain').animate({
		"bottom": "-.9rem"
	}, 100);
})
$('.backback').click(function(){
	$('.y_blackView_bottom').css('left','0');
	$('.y_blackView_bottom_right').css('left','10rem');
	$('.backback').animate({
		"bottom": "-.9rem"
	}, 100);
	$('.backMain').animate({
		"bottom": ".5rem"
	}, 100);
})

$('.y_r_1').click(function(){
	location.href="../tt_view/index1wenzhang.html";
})
$('.y_r_2').click(function(){
	location.href="../tt_view/index2sheji.html";
})
$('.y_r_3').click(function(){
	location.href="../tt_view/index3Top.html";
})
$('.y_r_4').click(function(){
	location.href="../tt_view/index4fashion.html";
})
$('.y_r_5').click(function(){
	location.href="../tt_view/index5 10tu.html";
})
$('.y_r_6').click(function(){
	location.href="../tt_view/index6amusemen.html";
})
$('.y_r_7').click(function(){
	location.href="../tt_view/index7toutiao.html";
})
$('.y_r_8').click(function(){
	location.href="../tt_view/index8city.html";
})
$('.y_r_9').click(function(){
	location.href="../tt_view/index9business.html";
})
$('.y_r_10').click(function(){
	location.href="../tt_view/index10game.html";
})
$('.y_r_11').click(function(){
	location.href="../tt_view/index11zhineng.html";
})
$('.y_lanmu').click(function(){
	location.href="../tt_view/index12myAttention.html";
	
})