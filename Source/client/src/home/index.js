'use strict';
/* global angular:false */
/*jslint node: true */

//====================================================================

/* global angular:false */
require('angular');

//====================================================================

module.exports = angular.module('home', [])

.config(function ($stateProvider) {
    $stateProvider.state('home', {
      url: '/',
      template: require('./view'),
      controller: 'HomeCtl',
    });
})

.controller('HomeCtl', function ($scope) {
   $scope.title = 'Home';
});
