var sample = angular.module("sample",[]);
sample.controller("emp",["$scope","$rootScope",function($scope,$rootScope){
   $scope.a=10;
    $scope.b=20;

    $scope.doubleAndSum = () => {
        $scope.a = $scope.a * 2;
        $scope.b = $scope.b * 2;
        $scope.c = parseInt($scope.a) + parseInt($scope.b);
    };
}])

