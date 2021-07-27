var sample = angular.module('sample',[]);
sample.controller('company',function($scope){
    $scope.name='CYB'
    $scope.city='Pune'
    $scope.increment = 0.25
})

sample.controller('employee',['$scope',function(c){
    c.name='sabu'
    c.info = {
        pos: 'developer',
        sal: 40
    }
    c.incrementSal = () => c.increment * c.info.sal;
}])

sample.controller('project',['$scope',function(p){
    p.name='vnc'
    p.info = {
        totalemp: 12,
        bug: 47
    }
}])



