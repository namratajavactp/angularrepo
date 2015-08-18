angular.module('dynamicFormApp', [])

.controller('mainController', function($scope) {

  var people = [
      { 
        name: 'Chris',
        email: ''
      },
      {
        name: 'Holly',
        email: ''
      }
  ];  
    
  $scope.formDataOne = {};
  $scope.formDataOne.people = people;
  
});