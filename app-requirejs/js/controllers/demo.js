define(['angular', '../services/demo'], function(angular) {
    'use strict';
    var demoController = angular.module('demo.controllers', ['demo.services']);
    demoController.controller('LoginCtrl', ['$rootScope', '$scope', '$window', '$location', 'authService',
        function($rootScope, $scope, $window, $location, authService) {
            $scope.login = function() {
                $window.alert("user:" + $scope.user + "\r\npwd:" + $scope.pwd + "\r\ntoken:" + $scope.token);
                authService.isLogged = true;
                authService.user = $scope.user;
                $location.path("/index");
            };
        }
    ]).
    controller('ServerAddCtrl', ['$scope',
        function($scope) {
            $scope.name = 'ServerAddCtrl';
        }
    ]).controller('ServerListCtrl', ['$scope', 'authService',
        function($scope, authService) {
            console.log(authService.isLogin);
            $scope.name = 'ServerList';
        }
    ]).controller('MainCtrl', ['$scope',
        function($scope) {
            $scope.welcome = "Welcome To AngularJS Test";
        }
    ]);
    return demoController;
});