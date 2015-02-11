'use strict';

/* Controllers */

var peopleApp = angular.module('angularApp', []);

//scope is the glue between the models and controllers
peopleApp.controller('PeopleListCtrl', function ($scope, $http) {
  $http.get('http://tinder-api.herokuapp.com/people').success(function(data) {
    // Now the data filling "people", comes from an API
    $scope.people = data;

  });
});