'use strict';
/* global angular:false */
/*jslint node: true */

//====================================================================

/* global angular:false */
require('angular');

//--------------------------------------------------------------------

require('angular-ui-router');

//===================================================================

angular.module('appMod', [
    'ui.router',

    require('./home').name,
])

.config(function ($urlRouterProvider) {
    // Redirects unmatched URLs`.
    $urlRouterProvider.otherwise('/');
})

.controller('AppCtl', function () {
    this.name = 'Testance';
})  

// Empêche Angular.js de récupérer les erreurs et de les rendre
// inutilisables.
.factory('$exceptionHandler', function () {
  return function (exception) {
    throw exception;
  };
});
