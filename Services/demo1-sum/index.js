var sumApp = angular.module('sumApp', []);
sumApp.controller('sumController', ['$scope', 'sumFactory', function ($scope, sumFactory) {
    $scope.a = 0;
    $scope.b = 0;
    $scope.sum = 0;
    $scope.addition = () => {
        // $scope.sum = sumFactory.addTwoNumbers($scope.a, $scope.b);
        sumFactory.callBackSum($scope.a, $scope.b,(r) => {
            $scope.sum = r;
        })
    }
}])

sumApp.factory('sumFactory', function () {
    var calService = {};
    calService.addTwoNumbers = (a, b) => {
        return parseInt(a) + parseInt(b);
    }

    calService.callBackSum = (a, b, cb) => {
        let s = parseInt(a) + parseInt(b);
       return  cb(s) ;
    }

    return calService;

})



