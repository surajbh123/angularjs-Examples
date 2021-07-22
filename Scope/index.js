var sample = angular.module('sample',[]);
sample.controller('emp',function($scope){
    $scope.name='sabu'
})

sample.controller('emp2',['$scope',function(c){
    c.name='sabu2'
    c.info = {
        city: 'mumbai',
        nation: 'india'
    }
}])

