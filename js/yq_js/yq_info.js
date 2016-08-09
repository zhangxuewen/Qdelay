$('#myInfo .btn').each(function(index, elem) {
	$("#myInfo .btn:eq(0)").css("border-color","#F6C900")
	$(this).bind('touchstart', function() {
		$('#myInfo .btn').each(function(index1,elem1) {
			$(elem1).css("border-color","#fff")
		})
		$(this).css("border-color","#F6C900")
		$('#myInfo .box1').css("left",-7.2*index+"rem")
	})
})