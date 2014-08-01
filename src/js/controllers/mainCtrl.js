angular
  .module('MarkdownPreviewer')
  .controller('MainCtrl', function MainCtrl($scope, $sce) {
    'use strict';
    var converter = new Showdown.converter();
    $scope.outputText = '';

    $scope.$watch('inputText', function(newValue) {
      $scope.outputText = $sce.trustAsHtml(converter.makeHtml(newValue));
    });
 });
