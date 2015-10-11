/* global angular */
(function() {
    'use strict';
    angular.module('tsPostcode.directive', [])
    .directive('postcode', function() {
        return {
            require: 'ngModel',
            scope: {
                postcode: '='
            },
            link: function(scope, elm, attrs, ctrl) {
                var REG_EXP = new RegExp(/^([g][i][r][0][a][a])$|^((([a-pr-uwyz]{1}([0]|[1-9]\d?))|([a-pr-uwyz]{1}[a-hk-y]{1}([0]|[1-9]\d?))|([a-pr-uwyz]{1}[1-9][a-hjkps-uw]{1})|([a-pr-uwyz]{1}[a-hk-y]{1}[1-9][a-z]{1}))(\d[abd-hjlnp-uw-z]{2})?)$/i);

                ctrl.$validators.postcode = function (value) {
                    if (typeof value === 'string') {
                        value = value.replace(' ', '');
                        return REG_EXP.test(value);
                    }
                };
            }
        };
    });
})();
