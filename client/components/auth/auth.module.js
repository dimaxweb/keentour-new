'use strict';

angular.module('keentourNewApp.auth', [
  'keentourNewApp.constants',
  'keentourNewApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
