var sample = angular.module("sample",[]);
    sample.run(["$rootScope", function($rootScope) {
        $rootScope.taxPer=0.5;
    }]);

sample.controller("emp1",["$scope","$rootScope",function($scope,$rootScope){
    $scope.name1 = "steve"
    $rootScope.message = "hey man"

}])

sample.controller("emp2",["$scope","$rootScope",function($scope,$rootScope){
    $scope.name2 = "steve"
}])


sample.controller("worker2",["$scope","$rootScope",function($scope,$rootScope){
    $scope.workerName = "mark"
}])