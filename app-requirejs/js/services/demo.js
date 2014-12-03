define(['angular', 'ngResource'], function(angular) {
    'use strict';
    var demoService = angular.module('demo.services', ['ngResource']);
    demoService.factory('authService', ['$location',
        function($location) {
            console.log('authService');
            var userInfo = {
                isLogged: false,
                user: ''
            };
            return userInfo;
        }
    ]);
    return demoService;
});