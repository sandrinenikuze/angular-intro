(function() {
 "use strict";

 angular.module("app").controller("messageCtrl", function($scope) {

  $scope.taskOne = "take out the trash";
  $scope.taskTwo = "I don't understand what I am doing"

  window.$scope = $scope;
  });
 })();