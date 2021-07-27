var sample = angular.module('sample',[]);
sample.controller('user',["$scope","$http",function($scope,$http){
    $scope.userArray = []; 
    $scope.getUser = () => {
        console.log("getUsers");
        $http({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/users'
          }).then(function successCallback(response) {
              $scope.userArray = response.data;
            }, function errorCallback(response) {
             
            });
    }



}])

