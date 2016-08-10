var myModule = angular.module('y_app', []);

myModule.controller('y_Ctrl', function($scope, $http) {

	$scope.print = function(a) {
		console.log(a);
	}

	$scope.indexMui = function() {
		mui.init({
			gestureConfig: {
				tap: true, //默认为true
				doubletap: true, //默认为false
				longtap: true, //默认为false
				swipe: true, //默认为true
				drag: true, //默认为true
				hold: false, //默认为false，不监听
				release: false //默认为false，不监听
			},

			pullRefresh: {
				container: '#pullrefresh',
				up: {
					contentrefresh: '正在加载...',
					callback: pullupRefresh
				}
			}
		});

		var count = 0;
		/**
		 * 上拉加载具体业务实现
		 */
		function pullupRefresh() {

			setTimeout(function() {
				if(count == 0) {
					count++;
				} else {
					count++;
					$http.get('../json/y_home_p' + count + '.json').success(function(response) {
						$scope.article = $scope.article.concat(response.data.feeds);
						setTimeout(onTap,200);
						
					}).error(function(a) {

					})
				}

				mui('#pullrefresh').pullRefresh().endPullupToRefresh((count > 4));

			}, 1500);
		}
		if(mui.os.plus) {
			mui.plusReady(function() {
				setTimeout(function() {
					mui('#pullrefresh').pullRefresh().pullupLoading();
				}, 1000);

			});
		} else {
			mui.ready(function() {
				mui('#pullrefresh').pullRefresh().pullupLoading();
			});
		}
	}
	$scope.indexMui();

	//轮播数据
	$scope.lunbo = [];
	//
	$scope.article = [];

	$http.get('../json/y_home_p1.json').success(function(response) {
		$scope.article = response.data.feeds;
		setTimeout(onTap,200);
	})

	$http.get("../json/y_homeSub_lunbo.json").success(function(response) {
		$scope.lunbo = response.data;
		setTimeout($scope.indexswiper, 300);
		
	});

	$scope.indexswiper = function() {
		var mySwiper = new Swiper('.swiper-container', {
			loop: true,
			//分页器
			pagination: '.swiper-pagination',
			autoplay: 2000, //可选选项，自动滑动
			autoplayDisableOnInteraction: false //触摸过后继续轮播
		})
		return mySwiper;
	}

	$scope.date = function(dateStr) {
		var dateTimeStamp = Date.parse(dateStr.replace(/-/gi, "/"));
		var minute = 1000 * 60;
		var hour = minute * 60;
		var day = hour * 24;
		var halfamonth = day * 15;
		var month = day * 30;
		var now = new Date().getTime();
		var diffValue = now - dateTimeStamp;
		if(diffValue < 0) {
			return;
		}
		var monthC = diffValue / month;
		var weekC = diffValue / (7 * day);
		var dayC = diffValue / day;
		var hourC = diffValue / hour;
		var minC = diffValue / minute;
		if(monthC >= 1) {
			result = "" + parseInt(monthC) + "月前";
		} else if(weekC >= 1) {
			result = "" + parseInt(weekC) + "周前";
		} else if(dayC >= 1) {
			result = "" + parseInt(dayC) + "天前";
			if(dayC = 1) {
				result = "昨天";
			}
		} else if(hourC >= 1) {
			result = "" + parseInt(hourC) + "小时前";
		} else if(minC >= 1) {
			result = "" + parseInt(minC) + "分钟前";
		} else
			result = "刚刚";
		return result;
	}

})


function onTap(){
	$('.mui-table-view-cell').each(function(){
		if (!$(this).attr("data-true")) {
			$(this).on("tap",function(){
				console.log($(this).attr("data-ids"));
				parent.pushView($(this).attr("data-ids"))
			});
			$(this).attr("data-true","on")
		}
	})
}

