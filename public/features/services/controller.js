function Tweet($scope, $http){
		$scope.message= "Twitter Search";
  

  $scope.all = function(response){
    $http.get("/tweet").success(function(response){
      $scope.data = response;
      console.log(response);
  });
  };
  $scope.all();
}

