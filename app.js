angular.module('testApp',['momentFilter'])
    // .config(function(momentFilterConfigProvider){
    //     momentFilterConfigProvider.defaultFormat('dddd, MMMM Do YYYY, h:mm:ss a');
    // })
    .controller('testController',['$scope',function($scope){
        $scope.date = moment();
    }]);