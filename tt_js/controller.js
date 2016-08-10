var app = angular.module("myApp",[]);

app.controller("myCtrl",function($scope,$http){
	$http.get("../tt_data/data1.json").success(function(res){
		$scope.data = res.data;
		
	})	
});
app.controller("myCtrl-devise",function($scope,$http){
	$http.get("../tt_data/data2.json").success(function(res){
		$scope.data = res.data;
	})
});
app.controller("myCtrl-Top",function($scope,$http){
	$http.get("../tt_data/data3.json").success(function(res){
		$scope.data = res.data;
	})
});
app.controller("myCtrl-fashion",function($scope,$http){
	$http.get("../tt_data/data4.json").success(function(res){
		$scope.data = res.data;
	})
});
app.controller("myCtrl-tenPic",function($scope,$http){
	$http.get("../tt_data/shigetu/tu1.json").success(function(res){
		$scope.data = res.data;
	})
});
app.controller("myCtrl-zhiNeng",function($scope,$http){
	$http.get("../tt_data/zhineng.json").success(function(res){
		$scope.data = res.data;
	})
});
app.controller("myCtrl-game",function($scope,$http){
	$http.get("../tt_data/game.json").success(function(res){
		$scope.data = res.data;
	})
});
app.controller("myCtrl-business",function($scope,$http){
	$http.get("../tt_data/business.json").success(function(res){
		$scope.data = res.data;
	})
});
app.controller("myCtrl-city",function($scope,$http){
	$http.get("../tt_data/city.json").success(function(res){
		$scope.data = res.data;
	})
});
app.controller("myCtrl-toutiao",function($scope,$http){
	$http.get("../tt_data/toutiao.json").success(function(res){
		$scope.data = res.data;
	})
});
app.controller("myCtrl-amusemen",function($scope,$http){
	$http.get("../tt_data/amusemen.json").success(function(res){
		$scope.data = res.data;
	})
})
