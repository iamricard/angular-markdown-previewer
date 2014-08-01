angular.module('MarkdownPreviewer', ['ngRoute'])
       .config(function($routeProvider) {
        'use strict';

        $routeProvider.when('/', {
          controller: 'MainCtrl',
          templateUrl: 'main.html'
        }).otherwise({
          redirectTo: '/'
        });
       });
