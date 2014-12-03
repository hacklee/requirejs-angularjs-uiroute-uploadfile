define(['require', 'angular', 'ngRoute', 'ngResource', './controllers/demo', './directives/demo', './filters/demo', './services/demo'], function(require, angular) {
    'use strict';
    //配置相关模块
    var app = angular.module('demoApp', ['ngRoute', 'ngResource', 'demo.controllers', 'demo.services', 'demo.directives', 'demo.filters']);
    //用ngRoute配置路由
    app.config(['$routeProvider',
        function($routeProvider) {
            console.log('$routeProvider');
            $routeProvider.
            when('/login', {
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl',
                access: {
                    isFree: true
                }
            }).
            when('/index', {
                template: '<h1>Angular Route Test</h1>',
                controller: 'MainCtrl'
            }).
            when('/servers', {
                templateUrl: 'views/server/list.html',
                controller: 'ServerListCtrl'
            }).
            when('/add', {
                templateUrl: 'views/server/add.html',
                controller: 'ServerAddCtrl'
            }).
            otherwise({
                redirectTo: '/index'
            });
        }
    ]).
    run(function($rootScope, $location, authService) {
        //路由改变事件绑定
        $rootScope.$on('$routeChangeStart', function(evt, next, current) {
            if ((next.$$route && next.$$route.access && !next.$$route.access.isFree) || !authService.isLogged) {
                $location.path('/login');
            }
        });
    });
    //初始化
    app.init = function() {
        angular.bootstrap(document, ['demoApp']);
    };
    return app;
});