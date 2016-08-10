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
app.controller("myCtrl-tenPic",function($scope,$http){
	$http.get("../tt_data/shigetu/tu1.json").success(function(res){
		$scope.data = res.data;
	})
})
