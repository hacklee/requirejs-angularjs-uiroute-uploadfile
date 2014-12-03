define(['angular'], function(angular) {
    'use strict';
    var demoFilter = angular.module('demo.filters', []);
    demoFilter.filter('e', function() {
        console.log('filter');
        return function(filter) {
            return 'filter'
        }
    });
    return demoFilter;
});