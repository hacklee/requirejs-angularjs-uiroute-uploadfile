require.config({
    //定义引用的js名称与路径，key:url
    paths: {
        'angular': '../vendor/angular/angular',
        'ngResource': '../vendor/angular-resource/angular-resource',
        'ngRoute': '../vendor/angular-route/angular-route',
    },
    shim: {
        angular: {
            exports: 'angular'
        },
        ngResource: {
            //依赖
            deps: ['angular'],
        },
        ngRoute: {
            deps: ['angular'],
        }
    },
    baseUrl: '/js'
});
//初始化angularjs
require(['app'], function(app) {
    app.init();
});