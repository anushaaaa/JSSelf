/**
 * Created by avemuri on 3/30/2016.
 */


var app = angular.module('confusionApp',['ngRoute'])
        .config(function($routeProvider){
            $routeProvider
                .when('/contactus', {
                    templateUrl : 'contactus.html',
                    controller : 'ContactController'
                })
                .when('/menu', {
                    templateUrl : 'menu.html',
                    controller : 'menuController'
                })
                .when('/menu/:id', {
                    templateUrl : 'dishdetail.html',
                    controller : 'dishDetailController'
                })
                .otherwise('/contactus');
        })
    ;

app.controller('dishDetailController',['$scope', '$routeParams', 'menuFactory', function($scope, $routeParams,menuFactory){
    $scope.dish=menuFactory.getDish(parseInt($routeParams.id ,10));  // to get parameter id from route
    $scope.custComment={author:'', rating:5, comment:'', date:''};
}]);