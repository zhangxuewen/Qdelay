/**
 * Created by Administrator on 2016/8/10.
 */
$(document).ready(function () {
    $(".enter-btn").on("click",function (e) {
        $(".loading").fadeOut(600);
    })
    var loadSwiper=new Swiper("#load-page",{
        pagination : '.swiper-pagination',
        onSlideChangeEnd: function(swiper){
            if(loadSwiper.translate==-loadSwiper.width*2) {
                $(".enter-btn").css("opacity", "1");
                $(".ribao1").css("left","1.9rem");
                $(".ribao2").css("left","1.9rem");
            }else {
                $(".enter-btn").css("opacity", "0");
                $(".ribao1").css("left","-4rem");
                $(".ribao2").css("left","-4rem");
            }
            if (loadSwiper.translate==-loadSwiper.width){
                $(".curiosity").css("top","1.2rem");
                $(".design").css("top","3.8rem");
                $(".film").css("top","3.5rem");
                $(".fashion").css("top","5.8rem");
            }else{
                $(".curiosity").css("top","-1rem");
                $(".design").css("top","-1rem");
                $(".film").css("top","-1rem");
                $(".fashion").css("top","-1rem");
            }
            if (loadSwiper.translate==0){
                $(".title-text").css("opacity","1");
            }else {
                $(".title-text").css("opacity","0");
            }
        },
    })
})