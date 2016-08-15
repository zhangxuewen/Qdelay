/**
 * Created by Administrator on 2016/8/10.
 */
$(document).ready(function () {
    $(".enter-btn").on("click",function (e) {
        $(".loading").fadeOut(300);
		location.href="html/home.html";
    })
    var loadSwiper=new Swiper("#load-page",{
        pagination : '.swiper-pagination',
        onSlideChangeEnd: function(swiper){
            if(loadSwiper.translate==-loadSwiper.width*2) {
                $(".enter-btn").css("opacity", "1");
                $(".ribao1").css("transform","translate3D(1.9rem,0,0)");
                $(".ribao2").css("transform","translate3D(1.9rem,0,0)");
            }else {
                $(".enter-btn").css("opacity", "0");
                $(".ribao1").css("transform","translate3D(-4rem,0,0)");
                $(".ribao2").css("transform","translate3D(-4rem,0,0)");
            }
            if (loadSwiper.translate==-loadSwiper.width){
                $(".curiosity").css("transform","translate3D(3rem,0,0)");
                $(".design").css("transform","translate3D(4.5rem,0,0)");
                $(".film").css("transform","translate3D(.6rem,0,0)");
                $(".fashion").css("transform","translate3D(1.8rem,0,0)");
            }else{
                $(".curiosity").css("transform","translate3D(-4rem,0,0)");
                $(".design").css("transform","translate3D(-4rem,0,0)");
                $(".film").css("transform","translate3D(-4rem,0,0)");
                $(".fashion").css("transform","translate3D(-4rem,0,0)");
            }
            if (loadSwiper.translate==0){
                $(".title-text").css("opacity","1");
            }else {
                $(".title-text").css("opacity","0");
            }
        },
    })
})