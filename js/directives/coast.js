/* global angular */
(function() {
    'use strict';
    angular.module('coast.directive', [])
    .directive('coast', function() {
        return {
            require: 'ngModel',
            scope: {
                coast: '='
            },
            link: function(scope, elm, attrs, controller) {
                controller.$validators.coast = function () {
                    return !!(Math.round(Math.random() * 100) % 2);
                };
            }
        };
    });
})();
