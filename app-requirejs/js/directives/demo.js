define(['angular'], function(angular) {
    'use strict';
    var demoDirective = angular.module('demo.directives', []);
    demoDirective.directive('tonken', ['$http',
        function($http) {
            console.log('directive');
            // Runs during compile
            return {
                require: 'ngModel', //ng-model引用内置指令ng-model的controller
                restrict: 'A',
                link: function($scope, iElm, iAttrs, controller) {
                    console.log(controller);
                    $scope.$watch(iAttrs.ngModel, function() {
                        controller.$setValidity('token', iElm[0].value === 'token' ? true : false);
                        //controller.$setValidity('token',$scope.token === 'token');
                    });
                }
            };
        }
    ]);
    return demoDirective;
});