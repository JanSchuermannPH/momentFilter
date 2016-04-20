angular.module('testApp',['momentFilter'])
    .controller('testController',['$scope',function($scope){
        $scope.date = moment();
    }]);